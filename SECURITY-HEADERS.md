# Jossee Coffee — Security Headers & Hosting Notes

This project is a **static site** (`index.html`, `app.js`, `manifest.json`,
`sw.js`, `assets/`). It's currently deployed on **GitHub Pages**
(`mohamedelghtrefy2024-jpg.github.io/jossee-website/`).

## Reality check: what GitHub Pages can and cannot do

GitHub Pages serves files exactly as they are in the repo and **does not let
you set custom HTTP response headers** — no `_headers` file, no server
config, nothing. That means several important security headers **cannot be
applied at all** while the site stays on GitHub Pages, no matter what's in
the HTML:

| Header | Deliverable via `<meta>`? | Status on GitHub Pages |
|---|---|---|
| `Content-Security-Policy` | ✅ Yes (`<meta http-equiv>`) | ✅ Applied in `index.html` |
| `Referrer-Policy` | ✅ Yes (`<meta name="referrer">`) | ✅ Applied in `index.html` |
| `X-Content-Type-Options` | ❌ No | ⛔ Not possible on GH Pages |
| `X-Frame-Options` | ❌ No | ⛔ Not possible on GH Pages |
| `Strict-Transport-Security` (HSTS) | ❌ No | ⚠️ Not needed to *set* — GH Pages custom domains already force HTTPS + preload HSTS by default; nothing to configure |
| `Permissions-Policy` | ❌ No | ⛔ Not possible on GH Pages |
| `Cross-Origin-Opener-Policy` | ❌ No | ⛔ Not possible on GH Pages |
| `Cross-Origin-Resource-Policy` | ❌ No | ⛔ Not possible on GH Pages |
| `Cache-Control` (fine-grained) | ❌ No | ⚠️ GH Pages sets its own caching; not overridable |
| `frame-ancestors` (CSP directive) | ❌ Explicitly ignored in `<meta>` per spec | ⛔ Not possible on GH Pages |

**The practical consequence:** this site currently has **no clickjacking
protection** (`frame-ancestors` / `X-Frame-Options`) and **no MIME-sniffing,
Permissions-Policy, or COOP/CORP protection**, because none of those can be
expressed in HTML — they only exist as real HTTP response headers, and
GitHub Pages doesn't let you send any. This is not an oversight in the code;
it's a hard platform limitation. **The only fix is to put something in
front of GitHub Pages that can add headers — Cloudflare is the natural
choice here.**

## What's already applied in the HTML (works today, no extra setup)

- **CSP** (`<meta http-equiv="Content-Security-Policy">` in `<head>`,
  before any other resource tag):
  - `script-src 'self'` — no `'unsafe-inline'`, no `'unsafe-eval'`. All page
    JS now lives in `app.js`; every inline `onclick=""`/`onkeydown=""` was
    removed and rewired through one delegated listener (`data-action`
    attributes), specifically so this could be dropped to `'self'` instead
    of `'unsafe-inline'`.
  - `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com` — this
    **does** keep `'unsafe-inline'`, deliberately. See "Why `style-src`
    still allows `unsafe-inline`" below.
  - `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`,
    `frame-src 'none'` — all set to the most restrictive value the site
    actually needs (no plugins, no iframes, forms are JS-only with no
    `action`).
  - `img-src 'self' data:`, `font-src 'self' https://fonts.gstatic.com`,
    `connect-src 'self'`, `manifest-src 'self'`, `worker-src 'self'` — scoped
    to exactly what the page loads today.
  - `upgrade-insecure-requests` — belt-and-suspenders; there are no `http://`
    references left in the project anyway.
- **`Referrer-Policy: strict-origin-when-cross-origin`** via
  `<meta name="referrer">`.

### Why `style-src` still allows `unsafe-inline`

The page has ~580 inline `style="..."` attributes and 3 `<style>` blocks
built up over a long time. Style-based injection (CSS injection) is a real
but *much* lower-severity risk than script injection — at worst it can be
abused for UI redress or, in narrow cases, data exfiltration via CSS
attribute selectors; it cannot run arbitrary JS or read cookies/localStorage
directly. Rewriting every inline `style=""` to classes/external CSS in one
pass, on a 7,000-line file, with no way to visually re-test every page state
here, carries a real risk of quietly breaking layout — which the brief
explicitly said not to do ("Priority: SECURITY, then FUNCTIONALITY").
Removing `unsafe-eval`/inline **script** execution (the high-severity risk)
was done in full. Removing inline **styles** was deliberately left as a
follow-up, not silently dropped — happy to do that pass as a dedicated,
testable task if you want it.

## Cloudflare setup (recommended, closes the gaps above)

Point the domain through Cloudflare (free tier is enough) and add these via
**Transform Rules → Modify Response Header** (Rules → Transform Rules in the
dashboard), applied to all requests for the zone:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=(), accelerometer=()
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Resource-Policy: same-site
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

Also worth turning on while you're in the Cloudflare dashboard:
- **SSL/TLS → Overview**: mode = "Full (strict)".
- **SSL/TLS → Edge Certificates**: "Always Use HTTPS" = on, HSTS = on
  (matches the header above).
- **Security → WAF**: enable the free managed ruleset.
- **Security → Bots**: enable Bot Fight Mode (free tier).
- **Speed/Caching**: leave `sw.js` and `manifest.json` at a short/no-cache
  TTL if you add Page Rules, so PWA updates propagate — the service worker
  already handles its own versioning (`CACHE_VERSION` in `sw.js`), but an
  aggressive Cloudflare edge cache on top of it can still serve a stale
  `index.html`/`app.js` for longer than intended.

None of this is *required* for the site to function — it's an additive
hardening layer. The site works exactly the same on plain GitHub Pages; it
just carries the header gaps listed above until something sits in front of
it that can set headers.

## Repository / deployment integrity (not a frontend problem)

Per the brief: no client-side JavaScript can reliably detect or prevent
tampering, because an attacker with write access to the files could edit
the detection code itself. Real integrity here comes from controlling who
can change the deployed files, not from code inside them:

- Enable **branch protection** on the default/Pages-publishing branch
  (require PR review, block force-pushes, block direct pushes).
- Restrict who has **write access** to the repository.
- If multiple people can push, consider **signed commits**.
- Keep GitHub Pages building from a protected branch (not `gh-pages` pushed
  to directly from a local machine, if that's the current flow).

## Subresource Integrity (SRI)

The only external, executable resource the page loads is the Google Fonts
CSS (`fonts.googleapis.com/css2?...`). **SRI is intentionally not applied
to it** — Google Fonts serves different CSS per requesting User-Agent
(different `@font-face`/`format()` per browser), so there is no single
fixed file to hash; any hash you pin would break for some browsers and
still not protect against Google rotating the response. CSP's `style-src`
allowlist (scoped to exactly `fonts.googleapis.com`/`fonts.gstatic.com`)
is the appropriate control here instead. There are no other externally
loaded scripts/styles in the project, so this is the only case where SRI
was considered.

## Reminder: what "frontend hardening" can and can't do

Everything in this document (and in the code changes) reduces the site's
**attack surface** — it does not, and cannot, make the site "unhackable."
Specifically:
- Anyone can view the page source, the CSS, and the full contents of
  `app.js` — that's inherent to how browsers work, obfuscation or not.
- There are no secrets, API keys, or credentials anywhere in this project
  (checked `index.html`, `app.js`, `sw.js`, `manifest.json`) — nothing to
  rotate.
- The real security boundary for a static site like this is **who can push
  to the repo / what's deployed**, not anything running in the visitor's
  browser.

## Obfuscation layer (this build only)

The deployed `app.js` in this particular deliverable is minified/obfuscated
(control-flow flattening, string-array + base64 encoding, hexadecimal
identifier renaming). This is an **additional deterrent layer on top of**
everything above, not a substitute for it:

- It does **not** change the CSP — the obfuscated build was generated with
  `target: browser-no-eval`, specifically so it contains no `eval()`/`new
  Function()`, and keeps working under `script-src 'self'` with no
  `unsafe-eval`. Verified: zero `eval`/`Function` occurrences in the shipped
  file.
- It does **not** change any of the fixes above — same CSP, same escaped
  review/blend/brew-log rendering, same delegated events, same `noopener`
  links. Both builds were run through the same automated functional test
  (headless DOM load, language toggle, delegated card click, and an
  end-to-end XSS probe submitted through the real review form) with
  identical results.
- Global function names are renamed and no longer attached to `window`
  (e.g. there's no `window.toggleLanguage` anymore). Confirmed safe because
  nothing in this project ever called into `app.js` by global name from
  outside it (no inline `onclick=""`, no `window.fn = ...` exposure).
- As with any frontend obfuscation: it raises the effort needed to read or
  copy the code, it does not make it unreadable. Anyone motivated can still
  beautify/deobfuscate it. Keep the clean-source build as the one you
  actually edit and re-obfuscate from — never hand-edit the obfuscated file.
