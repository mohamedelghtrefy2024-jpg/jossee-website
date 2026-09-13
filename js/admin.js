// ============================================================
// ADMIN — banner management (client-side only, static site)
// ============================================================
const ADMIN_PASS_KEY = 'jossee_admin_pass';
const DEFAULT_ADMIN_PASS = 'jossee2026';

function getAdminPass() {
    return localStorage.getItem(ADMIN_PASS_KEY) || DEFAULT_ADMIN_PASS;
}

document.addEventListener('DOMContentLoaded', function () {
    const gate = document.getElementById('adminGate');
    const panel = document.getElementById('adminPanel');
    const passInput = document.getElementById('adminPassInput');
    const loginBtn = document.getElementById('adminLoginBtn');
    const gateMsg = document.getElementById('adminGateMsg');
    const list = document.getElementById('bannersList');
    const addBtn = document.getElementById('addBannerBtn');
    const copyBtn = document.getElementById('copyDataBtn');
    const resetBtn = document.getElementById('resetDataBtn');
    const copyMsg = document.getElementById('copyMsg');

    let banners = loadBanners();

    function unlock() {
        gate.style.display = 'none';
        panel.style.display = 'block';
        renderList();
        renderPromoBanner();
    }

    loginBtn.addEventListener('click', () => {
        if (passInput.value === getAdminPass()) {
            unlock();
        } else {
            gateMsg.style.display = 'block';
        }
    });
    passInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') loginBtn.click(); });

    function fieldRow(label, id, value, type = 'text') {
        return `
            <div style="flex: 1; min-width: 140px;">
                <label style="display:block; font-size:12px; font-weight:700; margin-bottom:4px;">${label}</label>
                <input type="${type}" data-field="${id}" value="${(value ?? '').toString().replace(/"/g, '&quot;')}"
                    style="width:100%; padding:8px; border:1px solid rgba(23,18,15,0.15); border-radius:6px; font-size:13px;">
            </div>`;
    }

    function renderList() {
        list.innerHTML = banners.map((b, i) => `
            <div class="banner-edit-card" data-idx="${i}" style="background: var(--beige); border-radius: var(--radius-md); padding: var(--space-md); border: 1px solid rgba(23,18,15,0.08);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-sm);">
                    <strong>عرض #${i + 1}</strong>
                    <label style="display:flex; align-items:center; gap:6px; font-size:13px;">
                        <input type="checkbox" data-field="active" ${b.active !== false ? 'checked' : ''}> فعّال
                    </label>
                </div>
                <div style="display:flex; flex-wrap:wrap; gap: var(--space-sm); margin-bottom: var(--space-sm);">
                    ${fieldRow('العنوان', 'title', b.title)}
                    ${fieldRow('العنوان الفرعي', 'subtitle', b.subtitle)}
                </div>
                <div style="display:flex; flex-wrap:wrap; gap: var(--space-sm); margin-bottom: var(--space-sm);">
                    ${fieldRow('السعر القديم', 'oldPrice', b.oldPrice)}
                    ${fieldRow('السعر الجديد', 'newPrice', b.newPrice)}
                    ${fieldRow('الوحدة', 'unit', b.unit)}
                </div>
                <div style="display:flex; flex-wrap:wrap; gap: var(--space-sm); margin-bottom: var(--space-sm);">
                    ${fieldRow('رابط الصورة (اسم ملف داخل assets/)', 'image', b.image)}
                    ${fieldRow('نص الزرار', 'ctaText', b.ctaText)}
                    ${fieldRow('رابط الزرار', 'ctaLink', b.ctaLink)}
                </div>
                <button class="btn btn-outline btn-sm delete-banner-btn" style="color:#c0392b; border-color:#c0392b;">🗑 حذف العرض ده</button>
            </div>
        `).join('');

        list.querySelectorAll('.banner-edit-card').forEach(card => {
            const idx = parseInt(card.dataset.idx, 10);
            card.querySelectorAll('[data-field]').forEach(input => {
                input.addEventListener('input', () => {
                    const field = input.dataset.field;
                    banners[idx][field] = input.type === 'checkbox' ? input.checked : input.value;
                    persistAndPreview();
                });
            });
            card.querySelector('.delete-banner-btn').addEventListener('click', () => {
                if (!confirm('متأكد إنك عايز تحذف العرض ده؟')) return;
                banners.splice(idx, 1);
                persistAndPreview();
                renderList();
            });
        });
    }

    function persistAndPreview() {
        saveBanners(banners);
        renderPromoBanner();
    }

    addBtn.addEventListener('click', () => {
        banners.push({
            id: 'b' + Date.now(),
            title: 'عرض جديد',
            subtitle: '',
            oldPrice: '',
            newPrice: '',
            unit: 'ج / كيلو',
            image: 'assets/jossee-bag-gold.jpg',
            ctaText: 'اطلب الآن',
            ctaLink: 'coffee.html',
            active: true
        });
        persistAndPreview();
        renderList();
    });

    copyBtn.addEventListener('click', () => {
        const code = 'const DEFAULT_BANNERS = ' + JSON.stringify(banners, null, 4) + ';';
        navigator.clipboard.writeText(code).then(() => {
            copyMsg.style.display = 'block';
            setTimeout(() => { copyMsg.style.display = 'none'; }, 5000);
        }).catch(() => {
            prompt('انسخ الكود ده يدويًا:', code);
        });
    });

    resetBtn.addEventListener('click', () => {
        if (!confirm('هيتم استرجاع العروض الافتراضية وهتفقد التعديلات الحالية، متأكد؟')) return;
        banners = DEFAULT_BANNERS.slice();
        persistAndPreview();
        renderList();
    });
});
