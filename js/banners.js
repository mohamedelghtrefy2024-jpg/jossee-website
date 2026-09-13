// ============================================================
// JOSSEE — PROMO BANNERS (offers slider)
// ============================================================
// Data lives in localStorage so the admin page (admin.html) can edit it
// from the browser. DEFAULT_BANNERS below is only the fallback used the
// very first time the site loads (or after "استعادة الافتراضي" in admin).
//
// IMPORTANT (static site, no backend): editing banners in admin.html only
// saves the change on the same browser/device used to edit them. To make
// an edit visible to every visitor, use the "نسخ كود البيانات" button in
// admin.html and paste the result over DEFAULT_BANNERS below, then
// re-upload this file to the hosting. See admin.html for the full steps.
// ============================================================

const BANNERS_STORAGE_KEY = 'jossee_banners_v1';

const DEFAULT_BANNERS = [
    {
        id: 'b1',
        title: 'بن كولومبيا الفاخر',
        subtitle: 'تحميص هذا الأسبوع',
        oldPrice: '320',
        newPrice: '250',
        unit: 'ج / كيلو',
        image: 'assets/jossee-bag-gold.jpg',
        ctaText: 'اطلب الآن',
        ctaLink: 'coffee.html',
        active: true
    },
    {
        id: 'b2',
        title: 'عرض تركيبة الإسبريسو',
        subtitle: 'لفترة محدودة',
        oldPrice: '280',
        newPrice: '230',
        unit: 'ج / كيلو',
        image: 'assets/jossee-bag-burgundy.jpg',
        ctaText: 'اكتشف',
        ctaLink: 'coffee.html',
        active: true
    }
];

function loadBanners() {
    try {
        const saved = JSON.parse(localStorage.getItem(BANNERS_STORAGE_KEY));
        if (Array.isArray(saved) && saved.length) return saved;
    } catch (e) {}
    return DEFAULT_BANNERS.slice();
}

function saveBanners(banners) {
    localStorage.setItem(BANNERS_STORAGE_KEY, JSON.stringify(banners));
}

let __promoIndex = 0;
let __promoTimer = null;

function renderPromoBanner() {
    const root = document.getElementById('promoBannerSlot');
    if (!root) return;

    const banners = loadBanners().filter(b => b.active !== false);
    if (!banners.length) { root.innerHTML = ''; return; }

    root.innerHTML = `
        <div class="promo-banner" id="promoBanner">
            <div class="promo-banner-track" id="promoBannerTrack">
                ${banners.map((b, i) => `
                    <div class="promo-slide${i === 0 ? ' active' : ''}" data-index="${i}">
                        <div class="promo-slide-media">
                            <img src="${b.image}" alt="${b.title}" loading="${i === 0 ? 'eager' : 'lazy'}">
                        </div>
                        <div class="promo-slide-info">
                            <span class="promo-slide-subtitle">${b.subtitle || ''}</span>
                            <h3 class="promo-slide-title">${b.title}</h3>
                            <div class="promo-slide-prices">
                                ${b.oldPrice ? `<span class="promo-price-old">${b.oldPrice} ${b.unit || ''}</span>` : ''}
                                <span class="promo-price-new">${b.newPrice} ${b.unit || ''}</span>
                            </div>
                            <a href="${b.ctaLink || 'coffee.html'}" class="btn btn-primary promo-slide-cta">${b.ctaText || 'اطلب الآن'}</a>
                        </div>
                    </div>
                `).join('')}
            </div>
            ${banners.length > 1 ? `
            <div class="promo-banner-dots" role="tablist" aria-label="عروض">
                ${banners.map((b, i) => `<button class="promo-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="عرض ${i + 1}"></button>`).join('')}
            </div>` : ''}
        </div>
    `;

    __promoIndex = 0;
    const slides = root.querySelectorAll('.promo-slide');
    const dots = root.querySelectorAll('.promo-dot');

    function goTo(i) {
        slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
        dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
        __promoIndex = i;
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            goTo(parseInt(dot.dataset.index, 10));
            resetPromoTimer();
        });
    });

    function next() { goTo((__promoIndex + 1) % slides.length); }

    function resetPromoTimer() {
        if (__promoTimer) clearInterval(__promoTimer);
        if (slides.length > 1) __promoTimer = setInterval(next, 5000);
    }
    resetPromoTimer();
}
