// ==================== GLOBAL STATE ====================
let currentCategory = null;
let currentFilter = 'all';
let searchQuery = '';

// ==================== NAVBAR SCROLL ====================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==================== MOBILE MENU ====================
function toggleMobileMenu() {
    document.getElementById('navMenu').classList.toggle('open');
}

// ==================== COUNTER ANIMATION ====================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                counter.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    });
}

// Intersection Observer for counter animation
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.hero-stats').forEach(el => heroObserver.observe(el));

// ==================== SHOW LANDING PAGE ====================
function showLanding() {
    document.getElementById('landingPage').style.display = 'block';
    document.getElementById('categoryPage').style.display = 'none';
    currentCategory = null;
    currentFilter = 'all';
    searchQuery = '';

    // Reset nav active
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();
}

// ==================== SHOW CATEGORY ====================
function showCategory(category) {
    currentCategory = category;
    currentFilter = 'all';
    searchQuery = '';

    const config = categoryConfig[category];
    if (!config) return;

    // Hide landing, show category
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('categoryPage').style.display = 'block';

    // Update header
    document.getElementById('categoryTitle').innerHTML = `<i class="fas ${config.icon}"></i> ${config.title}`;
    document.getElementById('categoryDesc').textContent = config.desc;

    // Style header background
    document.querySelector('.category-header').style.background = config.gradient;

    // Build filter buttons
    buildFilters(config.filters);

    // Build articles
    renderArticles();

    // Update nav active
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-category') === category) {
            link.classList.add('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();
}

// ==================== BUILD FILTER BUTTONS ====================
function buildFilters(filters) {
    const container = document.getElementById('filterButtons');
    container.innerHTML = '';

    filters.forEach(filter => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${filter.key === 'all' ? 'active' : ''}`;
        btn.textContent = filter.label;
        btn.setAttribute('data-filter', filter.key);
        btn.addEventListener('click', () => {
            currentFilter = filter.key;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderArticles();
        });
        container.appendChild(btn);
    });
}

// ==================== FILTER & RENDER ARTICLES ====================
function filterArticles() {
    searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
    renderArticles();
}

function renderArticles() {
    const grid = document.getElementById('articlesGrid');
    const noResults = document.getElementById('noResults');

    // Filter articles
    let filtered = articlesData.filter(article => article.category === currentCategory);

    // Apply filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(article => article.filters.includes(currentFilter));
    }

    // Apply search
    if (searchQuery) {
        filtered = filtered.filter(article =>
            article.title.toLowerCase().includes(searchQuery) ||
            article.excerpt.toLowerCase().includes(searchQuery)
        );
    }

    // Clear grid
    grid.innerHTML = '';

    if (filtered.length === 0) {
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    // Render each article
    filtered.forEach((article, index) => {
        const card = createArticleCard(article, index);
        grid.appendChild(card);
    });
}

function createArticleCard(article, index) {
    const card = document.createElement('div');
    card.className = 'article-card';
    card.style.animationDelay = `${index * 0.1}s`;

    const config = categoryConfig[article.category];
    const isExternal = article.type === 'external';
    const linkUrl = isExternal ? article.url : article.url;
    const linkTarget = isExternal ? '_blank' : '_self';
    const linkText = isExternal ? 'Xem nguồn ngoài <i class="fas fa-external-link-alt"></i>' : 'Đọc bài viết <i class="fas fa-arrow-right"></i>';

    const filterTagsHTML = article.filters.map(f => {
        const filterLabel = getFilterLabel(f);
        return `<span class="article-filter-tag">${filterLabel}</span>`;
    }).join('');

    card.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="article-image" loading="lazy">
        <div class="article-body">
            <div class="article-meta">
                <span><i class="far fa-calendar"></i> ${formatDate(article.date)}</span>
                <span><i class="far fa-clock"></i> ${article.readTime}</span>
            </div>
            <span class="article-category-badge badge-${article.category}">
                ${config.title}
            </span>
            ${isExternal ? '<span class="external-badge" style="margin-left:8px;"><i class="fas fa-external-link-alt"></i> Nguồn ngoài</span>' : ''}
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <div class="article-footer">
                <div class="article-filter-tags">
                    ${filterTagsHTML}
                </div>
                <a href="${linkUrl}" class="article-link" target="${linkTarget}" rel="${isExternal ? 'noopener noreferrer' : ''}">
                    ${linkText}
                </a>
            </div>
        </div>
    `;

    return card;
}

function getFilterLabel(key) {
    const labels = {
        'ngữ-pháp': 'Ngữ pháp',
        'tu-vung': 'Từ vựng',
        'test': 'Test',
        'reading': 'Reading',
        'writing': 'Writing',
        'listening': 'Listening',
        'speaking': 'Speaking',
        'lo-trinh-ta-pho-thong': 'TA Phổ thông',
        'lo-trinh-ielts': 'IELTS',
        'lo-trinh-toeic': 'TOEIC',
        'lo-trinh-giao-tiep': 'Giao tiếp'
    };
    return labels[key] || key;
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function closeMobileMenu() {
    document.getElementById('navMenu').classList.remove('open');
}

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor && anchor.getAttribute('href').length > 1) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    // Check URL params for direct category access
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    if (cat && categoryConfig[cat]) {
        showCategory(cat);
    }
});
