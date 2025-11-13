// 时间线可视化JavaScript交互功能
// Timeline Visualization Interactive Functions

let timelineData = null;
let currentLanguage = 'zh';
let activeFilters = new Set();

// 初始化
async function init() {
    try {
        // 加载数据
        const response = await fetch('timeline-data.json');
        timelineData = await response.json();
        
        // 设置事件监听
        setupEventListeners();
        
        // 渲染界面
        renderFilterButtons();
        renderStats();
        renderTimeline();
        
        // 隐藏加载提示
        document.getElementById('loading').style.display = 'none';
    } catch (error) {
        console.error('加载时间线数据失败:', error);
        document.getElementById('loading').textContent = '加载失败，请刷新页面重试。';
    }
}

// 设置事件监听器
function setupEventListeners() {
    // 语言切换
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.language-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentLanguage = e.target.dataset.lang;
            updateLanguage();
        });
    });

    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        filterTimeline(e.target.value);
    });

    // 更新搜索框占位符
    updateSearchPlaceholder();
}

// 更新搜索框占位符
function updateSearchPlaceholder() {
    const searchInput = document.getElementById('searchInput');
    const placeholders = {
        zh: '搜索事件...',
        en: 'Search events...',
        ja: 'イベントを検索...'
    };
    searchInput.placeholder = placeholders[currentLanguage];
}

// 渲染过滤按钮
function renderFilterButtons() {
    const filterControls = document.getElementById('filterControls');
    filterControls.innerHTML = '';

    // 添加"全部"按钮
    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn active';
    allBtn.dataset.category = 'all';
    allBtn.innerHTML = `<span class="dot" style="background: #94a3b8;"></span><span>${getTranslation('all')}</span>`;
    allBtn.addEventListener('click', () => toggleFilter('all', allBtn));
    filterControls.appendChild(allBtn);

    // 添加分类按钮
    Object.entries(timelineData.categories).forEach(([key, category]) => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.dataset.category = key;
        btn.innerHTML = `<span class="dot" style="background: ${category.color};"></span><span>${category[currentLanguage]}</span>`;
        btn.style.setProperty('--category-color', category.color);
        btn.addEventListener('click', () => toggleFilter(key, btn));
        filterControls.appendChild(btn);
    });
}

// 切换过滤器
function toggleFilter(category, btn) {
    if (category === 'all') {
        // 清除所有过滤器
        activeFilters.clear();
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
            b.style.borderColor = '';
            b.style.background = '';
        });
        btn.classList.add('active');
    } else {
        // 移除"全部"按钮的激活状态
        document.querySelector('.filter-btn[data-category="all"]').classList.remove('active');

        if (activeFilters.has(category)) {
            activeFilters.delete(category);
            btn.classList.remove('active');
            btn.style.borderColor = '';
            btn.style.background = '';
        } else {
            activeFilters.add(category);
            btn.classList.add('active');
            const color = timelineData.categories[category].color;
            btn.style.background = color;
            btn.style.borderColor = color;
        }

        // 如果没有激活的过滤器，激活"全部"
        if (activeFilters.size === 0) {
            document.querySelector('.filter-btn[data-category="all"]').classList.add('active');
        }
    }

    renderTimeline();
}

// 渲染统计信息
function renderStats() {
    const stats = document.getElementById('stats');
    
    const totalEvents = timelineData.events.length;
    const timeSpan = `${timelineData.events[0].year}-${timelineData.events[timelineData.events.length - 1].year}`;
    
    // 计算各类别数量
    const categoryCount = {};
    timelineData.events.forEach(event => {
        categoryCount[event.category] = (categoryCount[event.category] || 0) + 1;
    });

    const statsLabels = {
        zh: {
            total: '历史事件总数',
            timespan: '时间跨度',
            wars: '战争冲突',
            reforms: '改革运动'
        },
        en: {
            total: 'Total Events',
            timespan: 'Time Span',
            wars: 'Wars',
            reforms: 'Reforms'
        },
        ja: {
            total: '総事件数',
            timespan: '期間',
            wars: '戦争',
            reforms: '改革'
        }
    };

    stats.innerHTML = `
        <div class="stat-card">
            <div class="stat-number">${totalEvents}</div>
            <div class="stat-label">${statsLabels[currentLanguage].total}</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${timeSpan}</div>
            <div class="stat-label">${statsLabels[currentLanguage].timespan}</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${categoryCount.war || 0}</div>
            <div class="stat-label">${statsLabels[currentLanguage].wars}</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${categoryCount.reform || 0}</div>
            <div class="stat-label">${statsLabels[currentLanguage].reforms}</div>
        </div>
    `;
}

// 渲染时间线
function renderTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';

    let filteredEvents = timelineData.events;

    // 应用过滤器
    if (activeFilters.size > 0) {
        filteredEvents = filteredEvents.filter(event => activeFilters.has(event.category));
    }

    // 渲染事件
    filteredEvents.forEach((event, index) => {
        const item = createTimelineItem(event, index);
        timeline.appendChild(item);
    });

    // 添加动画延迟
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// 创建时间线项
function createTimelineItem(event, index) {
    const item = document.createElement('div');
    item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${event.importance}`;
    item.dataset.category = event.category;

    const yearText = event.endYear && event.endYear !== event.year 
        ? `${event.year}-${event.endYear}` 
        : event.year;

    const categoryColor = timelineData.categories[event.category].color;

    // 后果列表HTML
    const consequencesHTML = event.consequences && event.consequences.length > 0
        ? `
        <div class="timeline-consequences">
            <h4>${getTranslation('consequences')}</h4>
            <ul>
                ${event.consequences.map(c => `<li>${c}</li>`).join('')}
            </ul>
        </div>
        `
        : '';

    item.innerHTML = `
        <div class="timeline-marker" style="border-color: ${categoryColor};"></div>
        <div class="timeline-content" style="border-left-color: ${categoryColor};">
            <div class="timeline-year">${yearText}</div>
            <div class="timeline-title">${event.title[currentLanguage]}</div>
            <div class="timeline-category" style="background: ${categoryColor};">
                ${timelineData.categories[event.category][currentLanguage]}
            </div>
            <div class="timeline-description">${event.description[currentLanguage]}</div>
            ${consequencesHTML}
            ${event.link ? `<a href="${event.link}" class="timeline-link" target="_blank">${getTranslation('readMore')}</a>` : ''}
        </div>
    `;

    return item;
}

// 搜索过滤
function filterTimeline(searchText) {
    const items = document.querySelectorAll('.timeline-item');
    const search = searchText.toLowerCase().trim();

    if (!search) {
        items.forEach(item => item.classList.remove('hidden'));
        return;
    }

    items.forEach(item => {
        const title = item.querySelector('.timeline-title').textContent.toLowerCase();
        const description = item.querySelector('.timeline-description').textContent.toLowerCase();
        const year = item.querySelector('.timeline-year').textContent;

        if (title.includes(search) || description.includes(search) || year.includes(search)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// 更新语言
function updateLanguage() {
    // 更新标题
    const titles = {
        zh: {
            main: '中国百年国耻时间线 (1839-1949)',
            sub: 'China\'s Century of Humiliation Timeline'
        },
        en: {
            main: 'China\'s Century of Humiliation Timeline (1839-1949)',
            sub: '中国百年国耻时间线'
        },
        ja: {
            main: '中国屈辱の世紀タイムライン (1839-1949)',
            sub: 'China\'s Century of Humiliation Timeline'
        }
    };

    document.getElementById('mainTitle').textContent = titles[currentLanguage].main;
    document.getElementById('subtitle').textContent = titles[currentLanguage].sub;

    // 更新搜索框
    updateSearchPlaceholder();

    // 重新渲染
    renderFilterButtons();
    renderStats();
    renderTimeline();
}

// 获取翻译
function getTranslation(key) {
    const translations = {
        all: {
            zh: '全部',
            en: 'All',
            ja: 'すべて'
        },
        consequences: {
            zh: '主要后果',
            en: 'Key Consequences',
            ja: '主な結果'
        },
        readMore: {
            zh: '了解更多 →',
            en: 'Read More →',
            ja: '詳細を見る →'
        }
    };

    return translations[key]?.[currentLanguage] || key;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
