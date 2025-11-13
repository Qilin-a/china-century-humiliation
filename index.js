// 全局错误处理（仅记录日志，不显示用户提示）
window.addEventListener('error', function(e) {
    // 只记录错误到控制台，不显示用户提示
    if (e.target === window && e.error) {
        console.error('页面错误:', e.error);
    }
});

window.addEventListener('unhandledrejection', function(e) {
    // 只记录Promise错误到控制台，不显示用户提示
    console.error('未处理的Promise错误:', e.reason);
});

// 页面加载动画
window.addEventListener('load', function() {
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.classList.add('hidden');
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 500);
        }, 800);
    }
});

// 页面滚动进度条
const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    if (scrollProgress) {
        scrollProgress.style.width = scrollPercent + '%';
    }
});

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // 更新导航激活状态
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
    
    // 滚动时更新导航激活状态
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        // 导航栏滚动效果
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 0 30px rgba(0, 255, 102, 0.5)';
        } else {
            navbar.style.boxShadow = '0 0 20px rgba(0, 255, 102, 0.3)';
        }
    });
    
    // 语言切换功能
    const langButtons = document.querySelectorAll('.lang-btn');
    const translations = {
        zh: {
            navTitle: '百年国耻历史',
            navSubtitle: 'Century of Humiliation 1839-1949',
            navHome: '首页',
            navAbout: '关于',
            navModules: '功能模块',
            navTimeline: '历史脉络',
            navResources: '资源',
            mobileMenuTitle: '菜单',
            mobileMenuLang: '选择语言',
            heroTitle: '中国百年国耻历史',
            heroSubtitle: "China's Century of Humiliation (1839-1949)",
            heroDescription: '通过交互式地图、3D场景和时间线动画，全方位了解这段改变中国命运的历史时期',
            btnExplore: '开始探索',
            btnLearn: '了解更多',
            btnNewFeatures: '🎉 新功能指南',
            heroStat1: '历史事件',
            heroStat2: '3D场景',
            heroStat3: '年时间跨度',
            heroStat4: '语言支持',
            aboutTitle: '关于本项目',
            aboutEdu: '教育目的',
            aboutEduText: '本项目记录了中国历史上的百年国耻时期（约1839年至1949年）。这一时期以外国干涉、不平等条约、领土丧失和民族危机为特征，深刻影响了现代中国的形成。',
            aboutCore: '核心价值',
            searchPlaceholder: '搜索历史事件...',
            coreValue1: '📚 客观历史记录',
            coreValue1Text: '基于可靠来源的学术研究',
            coreValue2: '🌍 全球视角',
            coreValue2Text: '多语言支持，国际化展示',
            coreValue3: '🎨 创新体验',
            coreValue3Text: '3D场景、互动地图、时间线动画',
            coreValue4: '🎓 教育导向',
            coreValue4Text: '适合学校、博物馆、个人学习',
            feature1Title: '交互式地图',
            feature1Desc: '27个历史事件，地理位置可视化',
            feature2Title: '3D历史场景',
            feature2Desc: '9个精美场景，沉浸式体验',
            feature3Title: '时间线动画',
            feature3Desc: '110年历史，动态展示',
            feature4Title: '多语言支持',
            feature4Desc: '中文、英文、日文三语',
            modulesTitle: '三大核心模块',
            modulesSubtitle: '通过不同维度，深度探索百年历史',
            module1Title: '交互式历史地图',
            module1Feature1: '✓ 27个历史事件标记',
            module1Feature2: '✓ 时间轴动态筛选（1839-1949）',
            module1Feature3: '✓ 4种事件分类',
            module1Feature4: '✓ 灵动岛实时统计',
            module1Stat1: '中国本土 15+城市',
            module1Stat2: '国际地点 7个',
            module1Btn: '进入地图 →',
            module2Title: '3D历史场景',
            module2Feature1: '✓ 9个精美历史场景',
            module2Feature2: '✓ Three.js实时渲染',
            module2Feature3: '✓ 动态光影效果',
            module2Feature4: '✓ 沉浸式体验',
            module2Stat1: '500+ 3D对象',
            module2Stat2: '20+ 动画效果',
            module2Btn: '进入3D场景 →',
            module3Title: '时间线动画',
            module3Feature1: '✓ 自动播放功能',
            module3Feature2: '✓ 事件卡片动画',
            module3Feature3: '✓ 速度可调节',
            module3Feature4: '✓ 进度可视化',
            module3Stat1: '110年历史',
            module3Stat2: '流畅动画',
            module3Btn: '查看时间线 →',
            timelineTitle: '历史脉络',
            timelineSubtitle: '从鸦片战争到新中国成立',
            timeline1Title: '第一次鸦片战争',
            timeline1Desc: '百年国耻的开端，《南京条约》签订',
            timeline2Title: '第二次鸦片战争',
            timeline2Desc: '圆明园被焚毁，北京条约签订',
            timeline3Title: '甲午战争',
            timeline3Desc: '北洋水师全军覆没，《马关条约》签订',
            timeline4Title: '八国联军侵华',
            timeline4Desc: '《辛丑条约》签订，赔款4.5亿两白银',
            timeline5Title: '辛亥革命',
            timeline5Desc: '推翻清朝，建立中华民国',
            timeline6Title: '五四运动',
            timeline6Desc: '新文化运动，思想启蒙',
            timeline7Title: '抗日战争',
            timeline7Desc: '全民族抗战，最终胜利',
            timeline8Title: '开国大典',
            timeline8Desc: '中华人民共和国成立，百年国耻终结',
            bookmarksTitle: '我的收藏',
            bookmarksEmpty: '暂无收藏，点击事件旁的 ☆ 收藏',
            bookmarksClear: '清空收藏',
            resourcesTitle: '学习资源',
            resource1Title: '📖 文档资料',
            resource1Link1: '中文时间线',
            resource1Link2: 'English Timeline',
            resource1Link3: '日本語タイムライン',
            resource2Title: '📚 事件详情',
            resource2Link1: '中文事件',
            resource2Link2: 'English Events',
            resource2Link3: '日本語イベント',
            resource3Title: '📜 条约分析',
            resource3Link1: '不平等条约',
            resource3Link2: '历史影响',
            resource3Link3: '参考文献',
            resource4Title: 'ℹ️ 项目信息',
            resource4Link1: '项目说明',
            resource4Link2: '项目总结',
            resource4Link3: '开源协议',
            resource5Title: '🎉 新功能',
            resource5Link1: '功能使用指南',
            resource5Link2: '互动功能演示',
            resource5Link3: '详细功能文档',
            footerAbout: '关于项目',
            footerAboutText: '本项目旨在通过现代科技手段，客观记录和展示中国百年国耻历史，以史为鉴，面向未来。',
            footerLinks: '快速链接',
            footerLink1: '交互式地图',
            footerLink2: '3D历史场景',
            footerLink3: '时间线动画',
            footerLang: '多语言',
            footerLang1: '中文 (Chinese)',
            footerLang2: 'English',
            footerLang3: '日本語 (Japanese)'
        },
        en: {
            navTitle: "Century of Humiliation",
            navSubtitle: 'Historical Documentation 1839-1949',
            navHome: 'Home',
            navAbout: 'About',
            navModules: 'Modules',
            navTimeline: 'Timeline',
            navResources: 'Resources',
            mobileMenuTitle: 'Menu',
            mobileMenuLang: 'Select Language',
            heroTitle: "China's Century of Humiliation",
            heroSubtitle: "Historical Documentation (1839-1949)",
            heroDescription: 'Explore this transformative period through interactive maps, 3D scenes, and timeline animations',
            btnExplore: 'Start Exploring',
            btnLearn: 'Learn More',
            btnNewFeatures: '🎉 New Features Guide',
            heroStat1: 'Historical Events',
            heroStat2: '3D Scenes',
            heroStat3: 'Years Timespan',
            heroStat4: 'Languages',
            aboutTitle: 'About This Project',
            aboutEdu: 'Educational Purpose',
            aboutEduText: 'This project documents the Century of Humiliation period in Chinese history (approximately 1839-1949). This era was characterized by foreign intervention, unequal treaties, territorial losses, and national crises, profoundly shaping modern China.',
            aboutCore: 'Core Values',
            searchPlaceholder: 'Search historical events...',
            coreValue1: '📚 Objective Historical Record',
            coreValue1Text: 'Academic research based on reliable sources',
            coreValue2: '🌍 Global Perspective',
            coreValue2Text: 'Multilingual support, international presentation',
            coreValue3: '🎨 Innovative Experience',
            coreValue3Text: '3D scenes, interactive maps, timeline animations',
            coreValue4: '🎓 Educational Orientation',
            coreValue4Text: 'Suitable for schools, museums, personal learning',
            feature1Title: 'Interactive Map',
            feature1Desc: '27 historical events, geographic visualization',
            feature2Title: '3D Historical Scenes',
            feature2Desc: '9 exquisite scenes, immersive experience',
            feature3Title: 'Timeline Animation',
            feature3Desc: '110 years of history, dynamic display',
            feature4Title: 'Multilingual Support',
            feature4Desc: 'Chinese, English, Japanese',
            modulesTitle: 'Three Core Modules',
            modulesSubtitle: 'Explore history through different dimensions',
            module1Title: 'Interactive Historical Map',
            module1Feature1: '✓ 27 historical event markers',
            module1Feature2: '✓ Dynamic timeline filtering (1839-1949)',
            module1Feature3: '✓ 4 event categories',
            module1Feature4: '✓ Real-time statistics',
            module1Stat1: 'China 15+ cities',
            module1Stat2: 'International 7 locations',
            module1Btn: 'Enter Map →',
            module2Title: '3D Historical Scenes',
            module2Feature1: '✓ 9 exquisite historical scenes',
            module2Feature2: '✓ Three.js real-time rendering',
            module2Feature3: '✓ Dynamic lighting effects',
            module2Feature4: '✓ Immersive experience',
            module2Stat1: '500+ 3D objects',
            module2Stat2: '20+ animations',
            module2Btn: 'Enter 3D Scenes →',
            module3Title: 'Timeline Animation',
            module3Feature1: '✓ Auto-play function',
            module3Feature2: '✓ Event card animations',
            module3Feature3: '✓ Adjustable speed',
            module3Feature4: '✓ Progress visualization',
            module3Stat1: '110 years history',
            module3Stat2: 'Smooth animations',
            module3Btn: 'View Timeline →',
            timelineTitle: 'Historical Timeline',
            timelineSubtitle: 'From Opium Wars to New China',
            timeline1Title: 'First Opium War',
            timeline1Desc: 'Beginning of the Century of Humiliation, Treaty of Nanking signed',
            timeline2Title: 'Second Opium War',
            timeline2Desc: 'Old Summer Palace burned, Treaty of Beijing signed',
            timeline3Title: 'First Sino-Japanese War',
            timeline3Desc: 'Beiyang Fleet destroyed, Treaty of Shimonoseki signed',
            timeline4Title: 'Eight-Nation Alliance',
            timeline4Desc: 'Boxer Protocol signed, indemnity of 450 million taels of silver',
            timeline5Title: 'Xinhai Revolution',
            timeline5Desc: 'Overthrow of Qing Dynasty, establishment of Republic of China',
            timeline6Title: 'May Fourth Movement',
            timeline6Desc: 'New Culture Movement, ideological enlightenment',
            timeline7Title: 'War of Resistance Against Japan',
            timeline7Desc: 'National resistance, final victory',
            timeline8Title: 'Founding Ceremony',
            timeline8Desc: "People's Republic of China established, end of Century of Humiliation",
            bookmarksTitle: 'My Bookmarks',
            bookmarksEmpty: 'No bookmarks yet, click ☆ next to events to bookmark',
            bookmarksClear: 'Clear All',
            resourcesTitle: 'Learning Resources',
            resource1Title: '📖 Documentation',
            resource1Link1: 'Chinese Timeline',
            resource1Link2: 'English Timeline',
            resource1Link3: 'Japanese Timeline',
            resource2Title: '📚 Event Details',
            resource2Link1: 'Chinese Events',
            resource2Link2: 'English Events',
            resource2Link3: 'Japanese Events',
            resource3Title: '📜 Treaty Analysis',
            resource3Link1: 'Unequal Treaties',
            resource3Link2: 'Historical Impact',
            resource3Link3: 'References',
            resource4Title: 'ℹ️ Project Info',
            resource4Link1: 'Project Description',
            resource4Link2: 'Project Summary',
            resource4Link3: 'Open Source License',
            resource5Title: '🎉 New Features',
            resource5Link1: 'Feature Guide',
            resource5Link2: 'Interactive Demo',
            resource5Link3: 'Detailed Documentation',
            footerAbout: 'About Project',
            footerAboutText: 'This project aims to objectively document and present the Century of Humiliation in Chinese history through modern technology, learning from history and facing the future.',
            footerLinks: 'Quick Links',
            footerLink1: 'Interactive Map',
            footerLink2: '3D Historical Scenes',
            footerLink3: 'Timeline Animation',
            footerLang: 'Languages',
            footerLang1: '中文 (Chinese)',
            footerLang2: 'English',
            footerLang3: '日本語 (Japanese)'
        },
        ja: {
            navTitle: '百年屈辱の歴史',
            navSubtitle: '歴史的記録 1839-1949',
            navHome: 'ホーム',
            navAbout: '概要',
            navModules: 'モジュール',
            navTimeline: 'タイムライン',
            navResources: 'リソース',
            mobileMenuTitle: 'メニュー',
            mobileMenuLang: '言語を選択',
            heroTitle: '中国百年屈辱の歴史',
            heroSubtitle: '歴史的記録（1839-1949）',
            heroDescription: 'インタラクティブマップ、3Dシーン、タイムラインアニメーションで中国の運命を変えたこの時期を理解する',
            btnExplore: '探索を始める',
            btnLearn: '詳しく見る',
            btnNewFeatures: '🎉 新機能ガイド',
            heroStat1: '歴史的イベント',
            heroStat2: '3Dシーン',
            heroStat3: '年の時間軸',
            heroStat4: '言語',
            aboutTitle: 'このプロジェクトについて',
            aboutEdu: '教育目的',
            aboutEduText: 'このプロジェクトは、中国の歴史における百年屈辱の時期（約1839年から1949年）を記録しています。この時期は、外国の干渉、不平等条約、領土喪失、民族危機を特徴とし、現代中国の形成に深く影響を与えました。',
            aboutCore: 'コアバリュー',
            searchPlaceholder: '歴史的イベントを検索...',
            coreValue1: '📚 客観的な歴史記録',
            coreValue1Text: '信頼できる情報源に基づく学術研究',
            coreValue2: '🌍 グローバルな視点',
            coreValue2Text: '多言語サポート、国際的なプレゼンテーション',
            coreValue3: '🎨 革新的な体験',
            coreValue3Text: '3Dシーン、インタラクティブマップ、タイムラインアニメーション',
            coreValue4: '🎓 教育志向',
            coreValue4Text: '学校、博物館、個人学習に適しています',
            feature1Title: 'インタラクティブマップ',
            feature1Desc: '27の歴史的イベント、地理的可視化',
            feature2Title: '3D歴史シーン',
            feature2Desc: '9つの精巧なシーン、没入型体験',
            feature3Title: 'タイムラインアニメーション',
            feature3Desc: '110年の歴史、動的表示',
            feature4Title: '多言語サポート',
            feature4Desc: '中国語、英語、日本語',
            modulesTitle: '三つのコアモジュール',
            modulesSubtitle: '異なる次元から歴史を深く探る',
            module1Title: 'インタラクティブ歴史マップ',
            module1Feature1: '✓ 27の歴史的イベントマーカー',
            module1Feature2: '✓ 動的タイムラインフィルタリング（1839-1949）',
            module1Feature3: '✓ 4つのイベントカテゴリ',
            module1Feature4: '✓ リアルタイム統計',
            module1Stat1: '中国本土 15+都市',
            module1Stat2: '国際地点 7箇所',
            module1Btn: 'マップに入る →',
            module2Title: '3D歴史シーン',
            module2Feature1: '✓ 9つの精巧な歴史シーン',
            module2Feature2: '✓ Three.jsリアルタイムレンダリング',
            module2Feature3: '✓ 動的ライティング効果',
            module2Feature4: '✓ 没入型体験',
            module2Stat1: '500+ 3Dオブジェクト',
            module2Stat2: '20+ アニメーション',
            module2Btn: '3Dシーンに入る →',
            module3Title: 'タイムラインアニメーション',
            module3Feature1: '✓ 自動再生機能',
            module3Feature2: '✓ イベントカードアニメーション',
            module3Feature3: '✓ 速度調整可能',
            module3Feature4: '✓ 進捗の可視化',
            module3Stat1: '110年の歴史',
            module3Stat2: 'スムーズなアニメーション',
            module3Btn: 'タイムラインを見る →',
            timelineTitle: '歴史の流れ',
            timelineSubtitle: 'アヘン戦争から新中国成立まで',
            timeline1Title: '第一次アヘン戦争',
            timeline1Desc: '百年屈辱の始まり、南京条約調印',
            timeline2Title: '第二次アヘン戦争',
            timeline2Desc: '円明園焼失、北京条約調印',
            timeline3Title: '日清戦争',
            timeline3Desc: '北洋艦隊全滅、下関条約調印',
            timeline4Title: '八カ国連合軍侵攻',
            timeline4Desc: '辛丑条約調印、賠償金4.5億両',
            timeline5Title: '辛亥革命',
            timeline5Desc: '清朝打倒、中華民国樹立',
            timeline6Title: '五四運動',
            timeline6Desc: '新文化運動、思想啓蒙',
            timeline7Title: '抗日戦争',
            timeline7Desc: '全国民抵抗、最終勝利',
            timeline8Title: '建国式典',
            timeline8Desc: '中華人民共和国成立、百年屈辱終結',
            bookmarksTitle: 'マイブックマーク',
            bookmarksEmpty: 'ブックマークはまだありません、イベントの横の☆をクリックしてブックマーク',
            bookmarksClear: 'すべてクリア',
            resourcesTitle: '学習リソース',
            resource1Title: '📖 ドキュメント',
            resource1Link1: '中国語タイムライン',
            resource1Link2: '英語タイムライン',
            resource1Link3: '日本語タイムライン',
            resource2Title: '📚 イベント詳細',
            resource2Link1: '中国語イベント',
            resource2Link2: '英語イベント',
            resource2Link3: '日本語イベント',
            resource3Title: '📜 条約分析',
            resource3Link1: '不平等条約',
            resource3Link2: '歴史的影響',
            resource3Link3: '参考文献',
            resource4Title: 'ℹ️ プロジェクト情報',
            resource4Link1: 'プロジェクト説明',
            resource4Link2: 'プロジェクト概要',
            resource4Link3: 'オープンソースライセンス',
            resource5Title: '🎉 新機能',
            resource5Link1: '機能ガイド',
            resource5Link2: 'インタラクティブデモ',
            resource5Link3: '詳細ドキュメント',
            footerAbout: 'プロジェクトについて',
            footerAboutText: 'このプロジェクトは、現代技術を通じて中国の百年屈辱の歴史を客観的に記録し、提示することを目的としており、歴史から学び、未来に向き合います。',
            footerLinks: 'クイックリンク',
            footerLink1: 'インタラクティブマップ',
            footerLink2: '3D歴史シーン',
            footerLink3: 'タイムラインアニメーション',
            footerLang: '言語',
            footerLang1: '中文 (Chinese)',
            footerLang2: 'English',
            footerLang3: '日本語 (Japanese)'
        }
    };
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // 更新按钮状态
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 更新页面文本
            const t = translations[lang];
            if (t) {
                // 导航栏
                const navLogo = document.querySelector('.nav-logo h1');
                const navSubtitle = document.querySelector('.nav-logo .subtitle');
                if (navLogo) navLogo.textContent = t.navTitle;
                if (navSubtitle) navSubtitle.textContent = t.navSubtitle;
                
                const navLinks = document.querySelectorAll('.nav-link');
                if (navLinks[0]) navLinks[0].textContent = t.navHome;
                if (navLinks[1]) navLinks[1].textContent = t.navAbout;
                if (navLinks[2]) navLinks[2].textContent = t.navModules;
                if (navLinks[3]) navLinks[3].textContent = t.navTimeline;
                if (navLinks[4]) navLinks[4].textContent = t.navResources;
                
                // 移动端菜单
                const mobileMenuHeader = document.querySelector('.mobile-menu-header h2');
                if (mobileMenuHeader) mobileMenuHeader.textContent = t.mobileMenuTitle;
                const mobileMenuFooter = document.querySelector('.mobile-menu-footer p');
                if (mobileMenuFooter) mobileMenuFooter.textContent = t.mobileMenuLang;
                
                const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
                if (mobileNavLinks[0]) mobileNavLinks[0].textContent = t.navHome;
                if (mobileNavLinks[1]) mobileNavLinks[1].textContent = t.navAbout;
                if (mobileNavLinks[2]) mobileNavLinks[2].textContent = t.navModules;
                if (mobileNavLinks[3]) mobileNavLinks[3].textContent = t.navTimeline;
                if (mobileNavLinks[4]) mobileNavLinks[4].textContent = t.navResources;
                
                // 英雄区域
                document.querySelector('.hero-title').textContent = t.heroTitle;
                document.querySelector('.hero-subtitle').textContent = t.heroSubtitle;
                document.querySelector('.hero-description').textContent = t.heroDescription;
                
                // 英雄区域统计标签
                const heroStatLabels = document.querySelectorAll('.hero-stats .stat-label');
                if (heroStatLabels[0]) heroStatLabels[0].textContent = t.heroStat1;
                if (heroStatLabels[1]) heroStatLabels[1].textContent = t.heroStat2;
                if (heroStatLabels[2]) heroStatLabels[2].textContent = t.heroStat3;
                if (heroStatLabels[3]) heroStatLabels[3].textContent = t.heroStat4;
                
                const heroBtns = document.querySelectorAll('.hero-actions .btn');
                if (heroBtns[0]) heroBtns[0].textContent = t.btnExplore;
                if (heroBtns[1]) heroBtns[1].textContent = t.btnLearn;
                if (heroBtns[2]) heroBtns[2].textContent = t.btnNewFeatures;
                
                // 关于项目区域
                const sectionTitles = document.querySelectorAll('.section-title');
                const sectionSubtitles = document.querySelectorAll('.section-subtitle');
                
                if (sectionTitles[0]) sectionTitles[0].textContent = t.aboutTitle;
                
                // 关于项目内容
                const aboutH3s = document.querySelectorAll('.about-text h3');
                if (aboutH3s[0]) aboutH3s[0].textContent = t.aboutEdu;
                if (aboutH3s[1]) aboutH3s[1].textContent = t.aboutCore;
                const aboutPs = document.querySelectorAll('.about-text p');
                if (aboutPs[0]) aboutPs[0].innerHTML = t.aboutEduText;
                
                // 核心价值列表
                const valueLis = document.querySelectorAll('.value-list li');
                if (valueLis[0]) valueLis[0].innerHTML = t.coreValue1 + ' - ' + t.coreValue1Text;
                if (valueLis[1]) valueLis[1].innerHTML = t.coreValue2 + ' - ' + t.coreValue2Text;
                if (valueLis[2]) valueLis[2].innerHTML = t.coreValue3 + ' - ' + t.coreValue3Text;
                if (valueLis[3]) valueLis[3].innerHTML = t.coreValue4 + ' - ' + t.coreValue4Text;
                
                // 特性卡片
                const featureCards = document.querySelectorAll('.feature-card');
                if (featureCards[0]) {
                    featureCards[0].querySelector('h4').textContent = t.feature1Title;
                    featureCards[0].querySelector('p').textContent = t.feature1Desc;
                }
                if (featureCards[1]) {
                    featureCards[1].querySelector('h4').textContent = t.feature2Title;
                    featureCards[1].querySelector('p').textContent = t.feature2Desc;
                }
                if (featureCards[2]) {
                    featureCards[2].querySelector('h4').textContent = t.feature3Title;
                    featureCards[2].querySelector('p').textContent = t.feature3Desc;
                }
                if (featureCards[3]) {
                    featureCards[3].querySelector('h4').textContent = t.feature4Title;
                    featureCards[3].querySelector('p').textContent = t.feature4Desc;
                }
                
                // 模块区域
                if (sectionTitles[1]) sectionTitles[1].textContent = t.modulesTitle;
                if (sectionSubtitles[0]) sectionSubtitles[0].textContent = t.modulesSubtitle;
                
                // 模块卡片标题、特性、统计徽章和按钮
                const moduleCards = document.querySelectorAll('.module-card');
                if (moduleCards[0]) {
                    moduleCards[0].querySelector('h3').textContent = t.module1Title;
                    const features1 = moduleCards[0].querySelectorAll('.module-features li');
                    if (features1[0]) features1[0].textContent = t.module1Feature1;
                    if (features1[1]) features1[1].textContent = t.module1Feature2;
                    if (features1[2]) features1[2].textContent = t.module1Feature3;
                    if (features1[3]) features1[3].textContent = t.module1Feature4;
                    const stats1 = moduleCards[0].querySelectorAll('.module-stats .stat-badge');
                    if (stats1[0]) stats1[0].textContent = t.module1Stat1;
                    if (stats1[1]) stats1[1].textContent = t.module1Stat2;
                    moduleCards[0].querySelector('.module-btn').textContent = t.module1Btn;
                }
                if (moduleCards[1]) {
                    moduleCards[1].querySelector('h3').textContent = t.module2Title;
                    const features2 = moduleCards[1].querySelectorAll('.module-features li');
                    if (features2[0]) features2[0].textContent = t.module2Feature1;
                    if (features2[1]) features2[1].textContent = t.module2Feature2;
                    if (features2[2]) features2[2].textContent = t.module2Feature3;
                    if (features2[3]) features2[3].textContent = t.module2Feature4;
                    const stats2 = moduleCards[1].querySelectorAll('.module-stats .stat-badge');
                    if (stats2[0]) stats2[0].textContent = t.module2Stat1;
                    if (stats2[1]) stats2[1].textContent = t.module2Stat2;
                    moduleCards[1].querySelector('.module-btn').textContent = t.module2Btn;
                }
                if (moduleCards[2]) {
                    moduleCards[2].querySelector('h3').textContent = t.module3Title;
                    const features3 = moduleCards[2].querySelectorAll('.module-features li');
                    if (features3[0]) features3[0].textContent = t.module3Feature1;
                    if (features3[1]) features3[1].textContent = t.module3Feature2;
                    if (features3[2]) features3[2].textContent = t.module3Feature3;
                    if (features3[3]) features3[3].textContent = t.module3Feature4;
                    const stats3 = moduleCards[2].querySelectorAll('.module-stats .stat-badge');
                    if (stats3[0]) stats3[0].textContent = t.module3Stat1;
                    if (stats3[1]) stats3[1].textContent = t.module3Stat2;
                    moduleCards[2].querySelector('.module-btn').textContent = t.module3Btn;
                }
                
                // 时间线区域
                if (sectionTitles[2]) sectionTitles[2].textContent = t.timelineTitle;
                if (sectionSubtitles[1]) sectionSubtitles[1].textContent = t.timelineSubtitle;
                
                // 时间线事件
                const timelineItems = document.querySelectorAll('.timeline-item');
                const timelineData = [
                    { title: t.timeline1Title, desc: t.timeline1Desc },
                    { title: t.timeline2Title, desc: t.timeline2Desc },
                    { title: t.timeline3Title, desc: t.timeline3Desc },
                    { title: t.timeline4Title, desc: t.timeline4Desc },
                    { title: t.timeline5Title, desc: t.timeline5Desc },
                    { title: t.timeline6Title, desc: t.timeline6Desc },
                    { title: t.timeline7Title, desc: t.timeline7Desc },
                    { title: t.timeline8Title, desc: t.timeline8Desc }
                ];
                timelineItems.forEach((item, index) => {
                    if (timelineData[index]) {
                        const h4 = item.querySelector('h4');
                        const p = item.querySelector('p');
                        if (h4) h4.textContent = timelineData[index].title;
                        if (p) p.textContent = timelineData[index].desc;
                    }
                });
                
                // 收藏夹
                const bookmarksHeader = document.querySelector('.bookmarks-header h3');
                if (bookmarksHeader) bookmarksHeader.textContent = t.bookmarksTitle;
                const clearBtn = document.querySelector('.clear-bookmarks');
                if (clearBtn) clearBtn.textContent = t.bookmarksClear;
                
                // 资源区域
                if (sectionTitles[3]) sectionTitles[3].textContent = t.resourcesTitle;
                
                // 资源卡片标题和链接
                const resourceCards = document.querySelectorAll('.resource-card');
                if (resourceCards[0]) {
                    resourceCards[0].querySelector('h4').textContent = t.resource1Title;
                    const links1 = resourceCards[0].querySelectorAll('ul li a');
                    if (links1[0]) links1[0].textContent = t.resource1Link1;
                    if (links1[1]) links1[1].textContent = t.resource1Link2;
                    if (links1[2]) links1[2].textContent = t.resource1Link3;
                }
                if (resourceCards[1]) {
                    resourceCards[1].querySelector('h4').textContent = t.resource2Title;
                    const links2 = resourceCards[1].querySelectorAll('ul li a');
                    if (links2[0]) links2[0].textContent = t.resource2Link1;
                    if (links2[1]) links2[1].textContent = t.resource2Link2;
                    if (links2[2]) links2[2].textContent = t.resource2Link3;
                }
                if (resourceCards[2]) {
                    resourceCards[2].querySelector('h4').textContent = t.resource3Title;
                    const links3 = resourceCards[2].querySelectorAll('ul li a');
                    if (links3[0]) links3[0].textContent = t.resource3Link1;
                    if (links3[1]) links3[1].textContent = t.resource3Link2;
                    if (links3[2]) links3[2].textContent = t.resource3Link3;
                }
                if (resourceCards[3]) {
                    resourceCards[3].querySelector('h4').textContent = t.resource4Title;
                    const links4 = resourceCards[3].querySelectorAll('ul li a');
                    if (links4[0]) links4[0].textContent = t.resource4Link1;
                    if (links4[1]) links4[1].textContent = t.resource4Link2;
                    if (links4[2]) links4[2].textContent = t.resource4Link3;
                }
                if (resourceCards[4]) {
                    resourceCards[4].querySelector('h4').textContent = t.resource5Title;
                    const links5 = resourceCards[4].querySelectorAll('ul li a');
                    if (links5[0]) links5[0].textContent = t.resource5Link1;
                    if (links5[1]) links5[1].textContent = t.resource5Link2;
                    if (links5[2]) links5[2].textContent = t.resource5Link3;
                }
                
                // 页脚
                const footerH4s = document.querySelectorAll('.footer-section h4');
                if (footerH4s[0]) footerH4s[0].textContent = t.footerAbout;
                if (footerH4s[1]) footerH4s[1].textContent = t.footerLinks;
                if (footerH4s[2]) footerH4s[2].textContent = t.footerLang;
                
                const footerPs = document.querySelectorAll('.footer-section p');
                if (footerPs[0]) footerPs[0].textContent = t.footerAboutText;
                
                // 页脚链接
                const footerSections = document.querySelectorAll('.footer-section');
                if (footerSections[1]) {
                    const quickLinks = footerSections[1].querySelectorAll('ul li a');
                    if (quickLinks[0]) quickLinks[0].textContent = t.footerLink1;
                    if (quickLinks[1]) quickLinks[1].textContent = t.footerLink2;
                    if (quickLinks[2]) quickLinks[2].textContent = t.footerLink3;
                }
                if (footerSections[2]) {
                    const langLinks = footerSections[2].querySelectorAll('ul li');
                    if (langLinks[0]) langLinks[0].textContent = t.footerLang1;
                    if (langLinks[1]) langLinks[1].textContent = t.footerLang2;
                    if (langLinks[2]) langLinks[2].textContent = t.footerLang3;
                }
                
                // 搜索框占位符
                const navSearchInput = document.getElementById('navSearchInput');
                if (navSearchInput) navSearchInput.placeholder = t.searchPlaceholder;
                const searchInput = document.getElementById('searchInput');
                if (searchInput) searchInput.placeholder = t.searchPlaceholder;
            }
            
            // 保存语言偏好
            localStorage.setItem('preferredLanguage', lang);
        });
    });
    
    // 加载保存的语言偏好
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        const savedBtn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
        if (savedBtn) {
            savedBtn.click();
        }
    }
    
    // 模块卡片动画
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll('.module-card, .feature-card, .resource-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    // 统计数字动画
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                statNumbers.forEach((stat, index) => {
                    const target = parseInt(stat.textContent);
                    let current = 0;
                    const increment = target / 50;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.textContent = target;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current);
                        }
                    }, 30);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
    
    // 时间线项目逐个显示
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
    });
    
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(timelineItems).indexOf(entry.target);
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
    
    // 背景粒子效果（可选）
    createParticles();
});

// 创建背景粒子效果
function createParticles() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    canvas.style.opacity = '0.3';
    document.body.insertBefore(canvas, document.body.firstChild);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = `rgba(0, 255, 102, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ============= 新增功能 =============

// 主题切换功能
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
let currentTheme = localStorage.getItem('theme') || 'dark';

// 应用保存的主题
if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeIcon.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    showToast(isLight ? '已切换到浅色主题' : '已切换到深色主题', 'success');
});

// 移动端菜单功能
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    mobileMenuToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
});

mobileMenuClose.addEventListener('click', closeMobileMenu);

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
    document.body.style.overflow = '';
}

// 移动端导航链接点击
mobileNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            closeMobileMenu();
            setTimeout(() => {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }
    });
});

// 移动端语言切换
const mobileLangBtns = document.querySelectorAll('.mobile-lang-btn');
mobileLangBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        mobileLangBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // 同步桌面端语言按钮
        const desktopBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
        if (desktopBtn) {
            desktopBtn.click();
        }
    });
});

// 搜索功能
const navSearchInput = document.getElementById('navSearchInput');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// 搜索数据（从页面内容提取）
const searchData = [
    { title: '第一次鸦片战争', desc: '1839-1842年，百年国耻的开端，《南京条约》签订', section: 'timeline' },
    { title: '第二次鸦片战争', desc: '1856-1860年，圆明园被焚毁，北京条约签订', section: 'timeline' },
    { title: '甲午战争', desc: '1894-1895年，北洋水师全军覆没，《马关条约》签订', section: 'timeline' },
    { title: '八国联军侵华', desc: '1900年，《辛丑条约》签订，赔款4.5亿两白银', section: 'timeline' },
    { title: '辛亥革命', desc: '1911年，推翻清朝，建立中华民国', section: 'timeline' },
    { title: '五四运动', desc: '1919年，新文化运动，思想启蒙', section: 'timeline' },
    { title: '抗日战争', desc: '1937-1945年，全民族抗战，最终胜利', section: 'timeline' },
    { title: '开国大典', desc: '1949年，中华人民共和国成立，百年国耻终结', section: 'timeline' },
    { title: '交互式历史地图', desc: '27个历史事件标记，时间轴动态筛选', section: 'modules' },
    { title: '3D历史场景', desc: '9个精美场景，沉浸式体验', section: 'modules' },
    { title: '时间线动画', desc: '110年历史，动态展示', section: 'modules' }
];

// 点击导航栏搜索框打开搜索覆盖层
navSearchInput.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    searchInput.focus();
});

searchClose.addEventListener('click', closeSearch);

searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
        closeSearch();
    }
});

function closeSearch() {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
}

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length === 0) {
        searchResults.innerHTML = '';
        return;
    }
    
    const results = searchData.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.desc.toLowerCase().includes(query)
    );
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-no-results">未找到相关结果</div>';
        return;
    }
    
    searchResults.innerHTML = results.map(item => `
        <div class="search-result-item" data-section="${item.section}">
            <div class="search-result-title">${item.title}</div>
            <div class="search-result-desc">${item.desc}</div>
        </div>
    `).join('');
    
    // 添加点击事件
    document.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
            const section = item.getAttribute('data-section');
            const targetSection = document.getElementById(section);
            if (targetSection) {
                closeSearch();
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }
        });
    });
});

// 返回顶部按钮
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Toast 通知系统
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: '✓',
        error: '✗',
        info: 'ℹ'
    };
    
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || icons.info}</span>
        <span class="toast-message">${message}</span>
        <button class="toast-close">&times;</button>
    `;
    
    toastContainer.appendChild(toast);
    
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
        toast.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    });
    
    // 自动关闭
    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => toast.remove(), 300);
        }
    }, 3000);
}

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    // ESC 关闭所有弹窗
    if (e.key === 'Escape') {
        closeSearch();
        closeMobileMenu();
    }
    
    // Ctrl/Cmd + K 打开搜索
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchBtn.click();
    }
    
    // Ctrl/Cmd + / 打开移动菜单
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        if (window.innerWidth <= 768) {
            mobileMenuToggle.click();
        }
    }
});

// 图片懒加载
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// 收藏功能
const bookmarksToggle = document.getElementById('bookmarksToggle');
const bookmarksPanel = document.getElementById('bookmarksPanel');
const bookmarksClose = document.getElementById('bookmarksClose');
const bookmarksList = document.getElementById('bookmarksList');
const bookmarksCount = document.getElementById('bookmarksCount');
const clearBookmarksBtn = document.getElementById('clearBookmarks');
const bookmarkBtns = document.querySelectorAll('.bookmark-btn');

// 从localStorage加载收藏
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

// 初始化收藏按钮状态
function initBookmarks() {
    bookmarkBtns.forEach(btn => {
        const eventId = btn.getAttribute('data-event-id');
        if (bookmarks.some(b => b.id === eventId)) {
            btn.classList.add('bookmarked');
            btn.querySelector('.bookmark-icon').textContent = '★';
        }
    });
    updateBookmarksUI();
}

// 切换收藏
bookmarkBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const eventId = btn.getAttribute('data-event-id');
        const timelineItem = document.querySelector(`.timeline-item[data-event-id="${eventId}"]`);
        
        const year = timelineItem.querySelector('.timeline-year').textContent;
        const title = timelineItem.querySelector('h4').textContent;
        const desc = timelineItem.querySelector('p').textContent;
        
        const bookmarkIndex = bookmarks.findIndex(b => b.id === eventId);
        
        if (bookmarkIndex > -1) {
            // 取消收藏
            bookmarks.splice(bookmarkIndex, 1);
            btn.classList.remove('bookmarked');
            btn.querySelector('.bookmark-icon').textContent = '☆';
            showToast('已取消收藏', 'info');
        } else {
            // 添加收藏
            bookmarks.push({ id: eventId, year, title, desc });
            btn.classList.add('bookmarked');
            btn.querySelector('.bookmark-icon').textContent = '★';
            showToast('已添加到收藏', 'success');
        }
        
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        updateBookmarksUI();
    });
});

// 更新收藏UI
function updateBookmarksUI() {
    bookmarksCount.textContent = bookmarks.length;
    
    if (bookmarks.length === 0) {
        bookmarksList.innerHTML = '<div class="bookmarks-empty">暂无收藏，点击事件旁的 ☆ 收藏</div>';
        return;
    }
    
    bookmarksList.innerHTML = bookmarks.map(bookmark => `
        <div class="bookmark-item" data-event-id="${bookmark.id}">
            <div class="bookmark-item-year">${bookmark.year}</div>
            <div class="bookmark-item-title">${bookmark.title}</div>
            <div class="bookmark-item-desc">${bookmark.desc}</div>
            <button class="bookmark-remove" data-event-id="${bookmark.id}">&times;</button>
        </div>
    `).join('');
    
    // 添加删除事件
    document.querySelectorAll('.bookmark-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const eventId = btn.getAttribute('data-event-id');
            removeBookmark(eventId);
        });
    });
    
    // 添加点击事件跳转
    document.querySelectorAll('.bookmark-item').forEach(item => {
        item.addEventListener('click', () => {
            const eventId = item.getAttribute('data-event-id');
            const timelineItem = document.querySelector(`.timeline-item[data-event-id="${eventId}"]`);
            if (timelineItem) {
                closeBookmarksPanel();
                setTimeout(() => {
                    timelineItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    timelineItem.style.animation = 'pulse 1s ease-in-out 2';
                }, 300);
            }
        });
    });
}

// 删除收藏
function removeBookmark(eventId) {
    bookmarks = bookmarks.filter(b => b.id !== eventId);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    
    // 更新按钮状态
    const btn = document.querySelector(`.bookmark-btn[data-event-id="${eventId}"]`);
    if (btn) {
        btn.classList.remove('bookmarked');
        btn.querySelector('.bookmark-icon').textContent = '☆';
    }
    
    updateBookmarksUI();
    showToast('已删除收藏', 'info');
}

// 打开收藏面板
bookmarksToggle.addEventListener('click', () => {
    bookmarksPanel.classList.add('active');
});

// 关闭收藏面板
bookmarksClose.addEventListener('click', closeBookmarksPanel);

function closeBookmarksPanel() {
    bookmarksPanel.classList.remove('active');
}

// 清空所有收藏
clearBookmarksBtn.addEventListener('click', () => {
    if (bookmarks.length === 0) return;
    
    if (confirm('确定要清空所有收藏吗？')) {
        bookmarks = [];
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        
        // 重置所有按钮
        bookmarkBtns.forEach(btn => {
            btn.classList.remove('bookmarked');
            btn.querySelector('.bookmark-icon').textContent = '☆';
        });
        
        updateBookmarksUI();
        showToast('已清空所有收藏', 'info');
    }
});

// 初始化收藏
initBookmarks();

// 分享功能
const shareBtn = document.getElementById('shareBtn');
if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
        // 获取当前语言
        const currentLang = localStorage.getItem('preferredLanguage') || 'zh';
        
        // 多语言分享内容
        const shareContent = {
            zh: {
                title: '中国百年国耻历史',
                emailSubject: '铭记历史，和平未来',
                text: '铭记国耻，和平为荣\n\n📚 GitHub项目：https://github.com/Qilin-a/china-century-humiliation.git\n\n✨ 项目特色：\n• 通过交互式地图、3D场景和时间线动画，全方位了解中国百年国耻历史（1839-1949）\n• 完整的Markdown文档历史记录（中英日三语）\n• 详细的历史事件、不平等条约分析和长期影响评估\n\n📖 文档资源：\n• 完整时间线：docs/zh/timeline.md\n• 历史事件详解：docs/zh/events/\n• 不平等条约分析：docs/zh/treaties.md\n\n以史为鉴，珍爱和平 🕊️',
                slogan: '铭记国耻，和平为荣',
                emailBody: '铭记国耻，和平为荣\n\n📚 GitHub项目：https://github.com/Qilin-a/china-century-humiliation.git\n\n✨ 项目特色：\n• 通过交互式地图、3D场景和时间线动画，全方位了解中国百年国耻历史（1839-1949）\n• 完整的Markdown文档历史记录（中英日三语）\n• 详细的历史事件、不平等条约分析和长期影响评估\n\n📖 文档资源：\n• 完整时间线：docs/zh/timeline.md\n• 历史事件详解：docs/zh/events/\n• 不平等条约分析：docs/zh/treaties.md\n\n以史为鉴，珍爱和平 🕊️'
            },
            en: {
                title: "China's Century of Humiliation",
                emailSubject: 'Remember History, Peaceful Future',
                text: 'Remember the humiliation, honor the peace\n\n📚 GitHub Project: https://github.com/Qilin-a/china-century-humiliation.git\n\n✨ Project Features:\n• Explore the Century of Humiliation (1839-1949) through interactive maps, 3D scenes, and timeline animations\n• Complete Markdown documentation with historical records (Chinese, English, Japanese)\n• Detailed historical events, unequal treaties analysis, and long-term impact assessment\n\n📖 Documentation:\n• Complete Timeline: docs/en/timeline.md\n• Historical Events: docs/en/events/\n• Treaties Analysis: docs/en/treaties.md\n\nLearn from history, cherish peace 🕊️',
                slogan: 'Remember the humiliation, honor the peace',
                emailBody: 'Remember the humiliation, honor the peace\n\n📚 GitHub Project: https://github.com/Qilin-a/china-century-humiliation.git\n\n✨ Project Features:\n• Explore the Century of Humiliation (1839-1949) through interactive maps, 3D scenes, and timeline animations\n• Complete Markdown documentation with historical records (Chinese, English, Japanese)\n• Detailed historical events, unequal treaties analysis, and long-term impact assessment\n\n📖 Documentation:\n• Complete Timeline: docs/en/timeline.md\n• Historical Events: docs/en/events/\n• Treaties Analysis: docs/en/treaties.md\n\nLearn from history, cherish peace 🕊️'
            },
            ja: {
                title: '中国百年屈辱の歴史',
                emailSubject: '歴史を銘記し、平和な未来へ',
                text: '屈辱を忘れず、平和を尊ぶ\n\n📚 GitHubプロジェクト：https://github.com/Qilin-a/china-century-humiliation.git\n\n✨ プロジェクトの特徴：\n• インタラクティブマップ、3Dシーン、タイムラインアニメーションで百年屈辱の歴史（1839-1949）を理解する\n• 完全なMarkdownドキュメントによる歴史記録（中国語、英語、日本語）\n• 詳細な歴史的イベント、不平等条約の分析、長期的影響の評価\n\n📖 ドキュメント：\n• 完全なタイムライン：docs/ja/timeline.md\n• 歴史的イベント：docs/ja/events/\n• 条約分析：docs/ja/treaties.md\n\n歴史から学び、平和を大切に 🕊️',
                slogan: '屈辱を忘れず、平和を尊ぶ',
                emailBody: '屈辱を忘れず、平和を尊ぶ\n\n📚 GitHubプロジェクト：https://github.com/Qilin-a/china-century-humiliation.git\n\n✨ プロジェクトの特徴：\n• インタラクティブマップ、3Dシーン、タイムラインアニメーションで百年屈辱の歴史（1839-1949）を理解する\n• 完全なMarkdownドキュメントによる歴史記録（中国語、英語、日本語）\n• 詳細な歴史的イベント、不平等条約の分析、長期的影響の評価\n\n📖 ドキュメント：\n• 完全なタイムライン：docs/ja/timeline.md\n• 歴史的イベント：docs/ja/events/\n• 条約分析：docs/ja/treaties.md\n\n歴史から学び、平和を大切に 🕊️'
            }
        };
        
        const content = shareContent[currentLang];
        const githubUrl = 'https://github.com/Qilin-a/china-century-humiliation.git';
        
        const shareData = {
            title: content.title,
            text: content.text,
            url: githubUrl
        };

        try {
            // 检查是否支持 Web Share API
            if (navigator.share) {
                // 先显示提示，因为分享对话框打开后无法判断用户是否完成分享
                showToast('正在打开分享...', 'info');
                // 打开分享对话框
                await navigator.share(shareData);
                // 如果没有抛出错误，说明用户至少打开了分享对话框
                // 注意：无法确定用户是否真的完成了分享
            } else {
                // 降级方案：复制完整内容到剪贴板
                const clipboardText = content.emailBody;
                await navigator.clipboard.writeText(clipboardText);
                // 复制成功后显示提示
                showToast('内容已复制到剪贴板！可以粘贴到邮件或其他应用', 'success');
            }
        } catch (err) {
            // 用户取消分享不显示错误
            if (err.name !== 'AbortError') {
                // 只有真正的错误才显示提示
                console.error('分享失败:', err);
                showToast('分享失败，已复制内容到剪贴板', 'info');
                // 尝试复制到剪贴板作为备用方案
                try {
                    await navigator.clipboard.writeText(content.emailBody);
                } catch (clipErr) {
                    console.error('复制失败:', clipErr);
                }
            }
            // 用户取消分享时不显示任何提示
        }
    });
}

// 导出文档功能
const exportBtn = document.getElementById('exportBtn');
if (exportBtn) {
    exportBtn.addEventListener('click', async () => {
        showToast('正在准备导出文档...', 'info');
        
        // 定义所有 Markdown 文档的路径
        const mdFiles = [
            // 中文文档
            { path: 'docs/zh/timeline.md', name: '中文-时间线.md', category: 'zh' },
            { path: 'docs/zh/treaties.md', name: '中文-条约分析.md', category: 'zh' },
            { path: 'docs/zh/impact.md', name: '中文-历史影响.md', category: 'zh' },
            { path: 'docs/zh/references.md', name: '中文-参考文献.md', category: 'zh' },
            { path: 'docs/zh/visual-materials-guide.md', name: '中文-视觉材料指南.md', category: 'zh' },
            { path: 'docs/zh/events/opium-wars.md', name: '中文-事件-鸦片战争.md', category: 'zh' },
            { path: 'docs/zh/events/sino-japanese-war.md', name: '中文-事件-甲午战争.md', category: 'zh' },
            { path: 'docs/zh/events/boxer-rebellion.md', name: '中文-事件-八国联军.md', category: 'zh' },
            { path: 'docs/zh/events/xinhai-revolution.md', name: '中文-事件-辛亥革命.md', category: 'zh' },
            { path: 'docs/zh/events/taiping-rebellion.md', name: '中文-事件-太平天国.md', category: 'zh' },
            { path: 'docs/zh/events/self-strengthening-movement.md', name: '中文-事件-洋务运动.md', category: 'zh' },
            { path: 'docs/zh/events/hundred-days-reform.md', name: '中文-事件-戊戌变法.md', category: 'zh' },
            { path: 'docs/zh/events/new-culture-movement.md', name: '中文-事件-新文化运动.md', category: 'zh' },
            { path: 'docs/zh/events/may-fourth-movement.md', name: '中文-事件-五四运动.md', category: 'zh' },
            { path: 'docs/zh/events/second-sino-japanese-war.md', name: '中文-事件-抗日战争.md', category: 'zh' },
            // 英文文档
            { path: 'docs/en/timeline.md', name: 'English_Timeline.md', category: 'en' },
            { path: 'docs/en/treaties.md', name: 'English_Treaties.md', category: 'en' },
            { path: 'docs/en/impact.md', name: 'English_Impact.md', category: 'en' },
            { path: 'docs/en/references.md', name: 'English_References.md', category: 'en' },
            { path: 'docs/en/visual-materials-guide.md', name: 'English_Visual_Materials_Guide.md', category: 'en' },
            { path: 'docs/en/events/opium-wars.md', name: 'English_Events_Opium_Wars.md', category: 'en' },
            { path: 'docs/en/events/sino-japanese-war.md', name: 'English_Events_Sino_Japanese_War.md', category: 'en' },
            { path: 'docs/en/events/boxer-rebellion.md', name: 'English_Events_Boxer_Rebellion.md', category: 'en' },
            { path: 'docs/en/events/xinhai-revolution.md', name: 'English_Events_Xinhai_Revolution.md', category: 'en' },
            { path: 'docs/en/events/taiping-rebellion.md', name: 'English_Events_Taiping_Rebellion.md', category: 'en' },
            { path: 'docs/en/events/self-strengthening-movement.md', name: 'English_Events_Self_Strengthening.md', category: 'en' },
            { path: 'docs/en/events/hundred-days-reform.md', name: 'English_Events_Hundred_Days_Reform.md', category: 'en' },
            { path: 'docs/en/events/new-culture-movement.md', name: 'English_Events_New_Culture_Movement.md', category: 'en' },
            { path: 'docs/en/events/may-fourth-movement.md', name: 'English_Events_May_Fourth_Movement.md', category: 'en' },
            { path: 'docs/en/events/second-sino-japanese-war.md', name: 'English_Events_Second_Sino_Japanese_War.md', category: 'en' },
            // 日语文档
            { path: 'docs/ja/timeline.md', name: '日本語_タイムライン.md', category: 'ja' },
            { path: 'docs/ja/treaties.md', name: '日本語_条約.md', category: 'ja' },
            { path: 'docs/ja/impact.md', name: '日本語_影響.md', category: 'ja' },
            { path: 'docs/ja/references.md', name: '日本語_参考文献.md', category: 'ja' },
            { path: 'docs/ja/visual-materials-guide.md', name: '日本語_視覚資料ガイド.md', category: 'ja' },
            { path: 'docs/ja/events/opium-wars.md', name: '日本語_イベント_アヘン戦争.md', category: 'ja' },
            { path: 'docs/ja/events/sino-japanese-war.md', name: '日本語_イベント_日清戦争.md', category: 'ja' },
            { path: 'docs/ja/events/boxer-rebellion.md', name: '日本語_イベント_義和団.md', category: 'ja' },
            { path: 'docs/ja/events/xinhai-revolution.md', name: '日本語_イベント_辛亥革命.md', category: 'ja' },
            { path: 'docs/ja/events/taiping-rebellion.md', name: '日本語_イベント_太平天国.md', category: 'ja' },
            { path: 'docs/ja/events/self-strengthening-movement.md', name: '日本語_イベント_洋務運動.md', category: 'ja' },
            { path: 'docs/ja/events/hundred-days-reform.md', name: '日本語_イベント_戊戌変法.md', category: 'ja' },
            { path: 'docs/ja/events/new-culture-movement.md', name: '日本語_イベント_新文化運動.md', category: 'ja' },
            { path: 'docs/ja/events/may-fourth-movement.md', name: '日本語_イベント_五四運動.md', category: 'ja' },
            { path: 'docs/ja/events/second-sino-japanese-war.md', name: '日本語_イベント_抗日戦争.md', category: 'ja' },
            // 项目文档
            { path: 'README.md', name: 'README.md', category: 'project' },
            { path: 'SUMMARY.md', name: 'SUMMARY.md', category: 'project' },
            { path: 'QUICK_START.md', name: 'QUICK_START.md', category: 'project' },
            { path: 'PROJECT_SUMMARY.md', name: 'PROJECT_SUMMARY.md', category: 'project' },
            { path: 'PROJECT_COMPLETE.md', name: 'PROJECT_COMPLETE.md', category: 'project' },
            { path: 'README_NEW_FEATURES.md', name: 'README_NEW_FEATURES.md', category: 'project' },
            { path: 'SEARCH_FEATURE.md', name: 'SEARCH_FEATURE.md', category: 'project' },
            { path: 'MAP_ENHANCEMENT_COMPLETE.md', name: 'MAP_ENHANCEMENT_COMPLETE.md', category: 'project' }
        ];
        
        try {
            // 创建一个包含所有文档链接的 HTML 页面
            let exportContent = `# 中国百年国耻历史 - 文档导出\n\n`;
            exportContent += `导出时间：${new Date().toLocaleString('zh-CN')}\n\n`;
            exportContent += `## 📚 文档列表\n\n`;
            exportContent += `本项目包含 ${mdFiles.length} 个 Markdown 文档文件。\n\n`;
            const zhDocs = mdFiles.filter(f => f.category === 'zh');
            const enDocs = mdFiles.filter(f => f.category === 'en');
            const jaDocs = mdFiles.filter(f => f.category === 'ja');
            const projectDocs = mdFiles.filter(f => f.category === 'project');
            
            exportContent += `### 中文文档 (Chinese) - ${zhDocs.length} 个文件\n\n`;
            zhDocs.forEach(f => {
                exportContent += `- [${f.name}](${f.path})\n`;
            });
            
            exportContent += `\n### 英文文档 (English) - ${enDocs.length} files\n\n`;
            enDocs.forEach(f => {
                exportContent += `- [${f.name}](${f.path})\n`;
            });
            
            exportContent += `\n### 日语文档 (Japanese) - ${jaDocs.length} ファイル\n\n`;
            jaDocs.forEach(f => {
                exportContent += `- [${f.name}](${f.path})\n`;
            });
            
            exportContent += `\n### 项目文档 (Project Documentation) - ${projectDocs.length} files\n\n`;
            projectDocs.forEach(f => {
                exportContent += `- [${f.name}](${f.path})\n`;
            });
            
            exportContent += `\n\n## 📖 使用说明\n\n`;
            exportContent += `1. 所有文档均为 Markdown 格式\n`;
            exportContent += `2. 可以使用任何 Markdown 编辑器打开\n`;
            exportContent += `3. 文档包含中英日三语版本\n`;
            exportContent += `4. GitHub 项目地址：https://github.com/Qilin-a/china-century-humiliation.git\n\n`;
            exportContent += `## 🕊️ 铭记历史，和平未来\n`;
            
            // 创建 Blob 并下载
            const blob = new Blob([exportContent], { type: 'text/markdown;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = '百年国耻历史_文档列表.md';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            showToast('文档列表已导出！', 'success');
        } catch (error) {
            console.error('导出失败:', error);
            showToast('导出失败，请重试', 'error');
        }
    });
}

// 欢迎提示
setTimeout(() => {
    showToast('欢迎来到中国百年国耻历史项目！', 'success');
}, 1000);

// 控制台彩蛋
console.log('%c欢迎来到中国百年国耻历史项目！', 'color: #00ff66; font-size: 20px; font-weight: bold;');
console.log('%c以史为鉴，珍爱和平 🕊️', 'color: #00ff66; font-size: 16px;');
console.log('%c快捷键提示:', 'color: #00ff66; font-size: 14px; font-weight: bold;');
console.log('%c  Ctrl/Cmd + K: 打开搜索', 'color: #888; font-size: 12px;');
console.log('%c  ESC: 关闭弹窗', 'color: #888; font-size: 12px;');
console.log('%cGitHub: https://github.com', 'color: #888; font-size: 12px;');
