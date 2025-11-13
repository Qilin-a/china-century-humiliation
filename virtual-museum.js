// 虚拟博物馆 JavaScript
let currentLanguage = 'zh';

// 展品数据
const exhibits = [
    {
        id: 'opium-wars',
        year: '1839-1860',
        icon: '🔥',
        title: {
            zh: '鸦片战争时代',
            en: 'Opium Wars Era',
            ja: 'アヘン戦争時代'
        },
        description: {
            zh: '两次鸦片战争打开了中国的大门，标志着百年国耻的开始。',
            en: 'Two Opium Wars opened China\'s doors, marking the beginning of the Century of Humiliation.',
            ja: '二度のアヘン戦争が中国の門を開き、屈辱の世紀の始まりを告げた。'
        },
        badge: {
            zh: '战争',
            en: 'War',
            ja: '戦争'
        },
        context: {
            zh: '19世纪初，英国为扭转对华贸易逆差，向中国大量走私鸦片。清政府派林则徐禁烟，引发英国发动战争。',
            en: 'In early 19th century, Britain smuggled opium to reverse trade deficit. Qing sent Lin Zexu to ban opium, triggering British invasion.',
            ja: '19世紀初頭、イギリスは貿易赤字を解消するため中国に大量のアヘンを密輸。清朝が林則徐を派遣して禁煙を実施、イギリスの侵略を招いた。'
        },
        keyEvents: {
            zh: ['虎门销烟 (1839)', '《南京条约》签订 (1842)', '圆明园被焚 (1860)', '《北京条约》签订 (1860)'],
            en: ['Destruction of opium at Humen (1839)', 'Treaty of Nanking (1842)', 'Summer Palace burned (1860)', 'Treaty of Beijing (1860)'],
            ja: ['虎門でのアヘン焼却 (1839)', '南京条約 (1842)', '円明園焼失 (1860)', '北京条約 (1860)']
        },
        impact: {
            zh: ['中国沦为半殖民地半封建社会', '割让香港，开放五口通商', '赔款白银，国库空虚', '主权丧失，民族危机'],
            en: ['China became semi-colonial', 'Hong Kong ceded, five ports opened', 'Massive indemnities', 'Sovereignty lost, national crisis'],
            ja: ['中国が半植民地化', '香港割譲、五港開港', '巨額賠償、国庫枯渇', '主権喪失、民族危機']
        }
    },
    {
        id: 'taiping',
        year: '1850-1864',
        icon: '⚔️',
        title: {
            zh: '太平天国运动',
            en: 'Taiping Rebellion',
            ja: '太平天国の乱'
        },
        description: {
            zh: '中国历史上规模最大的农民起义，持续14年，造成巨大伤亡。',
            en: 'Largest peasant uprising in Chinese history, lasting 14 years with massive casualties.',
            ja: '中国史上最大規模の農民蜂起、14年間続き甚大な犠牲者。'
        },
        badge: {
            zh: '起义',
            en: 'Uprising',
            ja: '蜂起'
        },
        context: {
            zh: '鸦片战争后社会矛盾激化，洪秀全创立拜上帝教，发动起义，建立太平天国政权，定都南京。',
            en: 'After Opium Wars, social conflicts intensified. Hong Xiuquan founded God Worshipping Society, launched rebellion, established Taiping Heavenly Kingdom in Nanjing.',
            ja: 'アヘン戦争後の社会矛盾激化。洪秀全が拝上帝会を創設、蜂起を起こし、南京に太平天国政権を樹立。'
        },
        keyEvents: {
            zh: ['金田起义 (1851)', '定都天京 (1853)', '天京事变 (1856)', '天京陷落 (1864)'],
            en: ['Jintian Uprising (1851)', 'Capital at Tianjing (1853)', 'Tianjing Incident (1856)', 'Fall of Tianjing (1864)'],
            ja: ['金田起義 (1851)', '天京遷都 (1853)', '天京事変 (1856)', '天京陥落 (1864)']
        },
        impact: {
            zh: ['2000-3000万人死亡', '社会经济严重破坏', '清朝中央权威削弱', '地方军阀势力崛起'],
            en: ['20-30 million deaths', 'Severe economic destruction', 'Qing authority weakened', 'Regional warlords emerged'],
            ja: ['2000-3000万人死亡', '社会経済の甚大な破壊', '清朝中央権威の弱体化', '地方軍閥の台頭']
        }
    },
    {
        id: 'sino-japanese-war',
        year: '1894-1895',
        icon: '⚓',
        title: {
            zh: '甲午中日战争',
            en: 'First Sino-Japanese War',
            ja: '日清戦争'
        },
        description: {
            zh: '日本侵略战争，北洋水师全军覆没，洋务运动失败。',
            en: 'Japanese invasion, Beiyang Fleet destroyed, Self-Strengthening Movement failed.',
            ja: '日本の侵略戦争、北洋艦隊壊滅、洋務運動失敗。'
        },
        badge: {
            zh: '战争',
            en: 'War',
            ja: '戦争'
        },
        context: {
            zh: '日本明治维新后国力增强，企图侵略朝鲜和中国。清朝虽经洋务运动，但腐败无能，最终惨败。',
            en: 'After Meiji Restoration, Japan grew stronger and invaded Korea and China. Despite Self-Strengthening, Qing was corrupt and defeated.',
            ja: '明治維新後の日本が国力を増強、朝鮮と中国侵略を企図。清朝は洋務運動を経たが腐敗し惨敗。'
        },
        keyEvents: {
            zh: ['丰岛海战 (1894.7)', '黄海海战 (1894.9)', '威海卫之战 (1895.1)', '《马关条约》(1895.4)'],
            en: ['Battle of Pungdo (1894.7)', 'Battle of Yellow Sea (1894.9)', 'Battle of Weihaiwei (1895.1)', 'Treaty of Shimonoseki (1895.4)'],
            ja: ['豊島海戦 (1894.7)', '黄海海戦 (1894.9)', '威海衛の戦い (1895.1)', '下関条約 (1895.4)']
        },
        impact: {
            zh: ['割让台湾、澎湖给日本', '赔款2亿两白银', '日本在华设厂特权', '中国国际地位一落千丈'],
            en: ['Taiwan, Penghu ceded to Japan', '200 million taels indemnity', 'Japanese factory rights in China', 'China\'s international status plummeted'],
            ja: ['台湾・澎湖を日本に割譲', '2億両賠償', '日本の中国での工場設立権', '中国の国際地位急落']
        }
    },
    {
        id: 'boxer-rebellion',
        year: '1900',
        icon: '🏛️',
        title: {
            zh: '八国联军侵华',
            en: 'Eight-Nation Alliance',
            ja: '八カ国連合軍侵攻'
        },
        description: {
            zh: '八国联军攻占北京，签订《辛丑条约》，中国完全沦为半殖民地。',
            en: 'Eight nations captured Beijing, Boxer Protocol signed, China fully semi-colonized.',
            ja: '八カ国連合軍が北京占領、辛丑条約締結、中国完全半植民地化。'
        },
        badge: {
            zh: '侵略',
            en: 'Invasion',
            ja: '侵略'
        },
        context: {
            zh: '义和团"扶清灭洋"运动兴起，慈禧太后利用义和团向列强宣战。英、美、俄、日等八国组成联军侵华。',
            en: 'Boxer "Support Qing, Destroy Foreign" movement rose. Cixi used Boxers to declare war on powers. Eight nations formed alliance to invade.',
            ja: '義和団の「扶清滅洋」運動勃発。西太后が義和団を利用し列強に宣戦。英米露日など八カ国が連合軍結成。'
        },
        keyEvents: {
            zh: ['义和团进京 (1900.6)', '八国联军攻占大沽 (1900.7)', '慈禧西逃 (1900.8)', '《辛丑条约》(1901.9)'],
            en: ['Boxers entered Beijing (1900.6)', 'Alliance took Dagu (1900.7)', 'Cixi fled west (1900.8)', 'Boxer Protocol (1901.9)'],
            ja: ['義和団入京 (1900.6)', '連合軍大沽占領 (1900.7)', '西太后西逃 (1900.8)', '辛丑条約 (1901.9)']
        },
        impact: {
            zh: ['赔款4.5亿两，史上最大', '外国驻军北京', '使馆区中国人禁入', '清朝威信扫地'],
            en: ['450 million taels, largest ever', 'Foreign troops in Beijing', 'Legation Quarter off-limits', 'Qing prestige destroyed'],
            ja: ['4.5億両賠償、史上最大', '外国軍北京駐留', '使館区中国人立入禁止', '清朝威信失墜']
        }
    },
    {
        id: 'xinhai-revolution',
        year: '1911-1912',
        icon: '🎆',
        title: {
            zh: '辛亥革命',
            en: 'Xinhai Revolution',
            ja: '辛亥革命'
        },
        description: {
            zh: '推翻清朝，建立民国，结束两千年帝制，开启共和新纪元。',
            en: 'Overthrew Qing, established Republic, ended 2000 years of imperial rule, began republican era.',
            ja: '清朝打倒、民国樹立、2000年の帝政終結、共和制新時代開始。'
        },
        badge: {
            zh: '革命',
            en: 'Revolution',
            ja: '革命'
        },
        context: {
            zh: '清末新政失败，革命思想传播。孙中山成立同盟会，多次起义失败后，武昌起义终于成功，清朝灭亡。',
            en: 'Late Qing reforms failed, revolutionary ideas spread. Sun Yat-sen founded Alliance, after many failed uprisings, Wuchang Uprising succeeded, Qing fell.',
            ja: '清末新政失敗、革命思想伝播。孫文が同盟会設立、多数の蜂起失敗後、武昌起義成功、清朝滅亡。'
        },
        keyEvents: {
            zh: ['武昌起义 (1911.10.10)', '各省独立响应', '清帝退位 (1912.2.12)', '中华民国成立 (1912.1.1)'],
            en: ['Wuchang Uprising (1911.10.10)', 'Provincial independence', 'Emperor abdicated (1912.2.12)', 'ROC established (1912.1.1)'],
            ja: ['武昌起義 (1911.10.10)', '各省独立呼応', '皇帝退位 (1912.2.12)', '中華民国成立 (1912.1.1)']
        },
        impact: {
            zh: ['结束封建帝制', '建立亚洲第一个共和国', '民主共和观念传播', '但革命不彻底'],
            en: ['Ended imperial system', 'First Asian republic', 'Democratic ideas spread', 'But revolution incomplete'],
            ja: ['封建帝制終結', 'アジア初の共和国', '民主共和理念伝播', 'しかし革命不徹底']
        }
    },
    {
        id: 'may-fourth',
        year: '1919',
        icon: '📢',
        title: {
            zh: '五四运动',
            en: 'May Fourth Movement',
            ja: '五・四運動'
        },
        description: {
            zh: '反帝爱国运动，新文化运动高潮，新民主主义革命的开端。',
            en: 'Anti-imperialist patriotic movement, New Culture Movement peak, beginning of New Democratic Revolution.',
            ja: '反帝愛国運動、新文化運動の頂点、新民主主義革命の始まり。'
        },
        badge: {
            zh: '运动',
            en: 'Movement',
            ja: '運動'
        },
        context: {
            zh: '巴黎和会外交失败，山东权益被转让给日本。北京学生发起抗议，迅速发展为全国性反帝爱国运动。',
            en: 'Paris Peace Conference failed China, Shandong transferred to Japan. Beijing students protested, quickly became nationwide anti-imperialist movement.',
            ja: 'パリ講和会議で中国外交失敗、山東が日本に譲渡。北京学生が抗議、全国的反帝愛国運動に発展。'
        },
        keyEvents: {
            zh: ['天安门集会 (1919.5.4)', '火烧赵家楼', '全国罢工罢课罢市', '拒签和约成功'],
            en: ['Tiananmen gathering (1919.5.4)', 'Zhao mansion burned', 'Nationwide strikes', 'Treaty signing rejected'],
            ja: ['天安門集会 (1919.5.4)', '趙家楼焼打ち', '全国ストライキ', '条約調印拒否成功']
        },
        impact: {
            zh: ['促进马克思主义传播', '工人阶级登上舞台', '为中共成立奠基', '新文化运动深入'],
            en: ['Promoted Marxism spread', 'Working class emerged', 'Laid foundation for CCP', 'New Culture deepened'],
            ja: ['マルクス主義伝播促進', '労働者階級登場', '中共成立の基礎', '新文化運動深化']
        }
    },
    {
        id: 'war-of-resistance',
        year: '1937-1945',
        icon: '🎖️',
        title: {
            zh: '全面抗日战争',
            en: 'War of Resistance',
            ja: '抗日戦争'
        },
        description: {
            zh: '八年浴血抗战，2000多万人牺牲，最终取得胜利。',
            en: 'Eight years of bloody resistance, 20+ million sacrificed, final victory achieved.',
            ja: '八年の血みどろの抗戦、2000万以上犠牲、最終勝利。'
        },
        badge: {
            zh: '抗战',
            en: 'Resistance',
            ja: '抗戦'
        },
        context: {
            zh: '日本侵华野心不断膨胀，卢沟桥事变后全面侵华。中国军民奋起抵抗，经过8年艰苦抗战，最终胜利。',
            en: 'Japanese ambitions grew, full invasion after Marco Polo Bridge Incident. Chinese resisted, after 8 years of hard fighting, finally won.',
            ja: '日本の侵略野心拡大、盧溝橋事変後全面侵攻。中国軍民抵抗、8年の苦しい抗戦の末、勝利。'
        },
        keyEvents: {
            zh: ['卢沟桥事变 (1937.7.7)', '南京大屠杀 (1937.12)', '台儿庄大捷 (1938)', '日本投降 (1945.8.15)'],
            en: ['Marco Polo Bridge (1937.7.7)', 'Nanjing Massacre (1937.12)', 'Taierzhuang Victory (1938)', 'Japan surrendered (1945.8.15)'],
            ja: ['盧溝橋事変 (1937.7.7)', '南京大虐殺 (1937.12)', '台児荘大勝 (1938)', '日本降伏 (1945.8.15)']
        },
        impact: {
            zh: ['2000-3500万人伤亡', '台湾光复回归', '中国国际地位提高', '为新中国成立奠基'],
            en: ['20-35 million casualties', 'Taiwan recovered', 'China\'s status elevated', 'Foundation for new China'],
            ja: ['2000-3500万人犠牲', '台湾光復回帰', '中国国際地位向上', '新中国成立の基礎']
        }
    },
    {
        id: 'prc-founding',
        year: '1949',
        icon: '🇨🇳',
        title: {
            zh: '中华人民共和国成立',
            en: 'PRC Founded',
            ja: '中華人民共和国成立'
        },
        description: {
            zh: '新中国诞生，百年国耻终结，中国人民站起来了！',
            en: 'New China born, Century of Humiliation ended, Chinese people stood up!',
            ja: '新中国誕生、屈辱の世紀終結、中国人民立ち上がる！'
        },
        badge: {
            zh: '建国',
            en: 'Founding',
            ja: '建国'
        },
        context: {
            zh: '解放战争胜利，1949年10月1日，毛泽东在天安门城楼宣布中华人民共和国成立，中国人民从此站起来了。',
            en: 'Liberation War won. On Oct 1, 1949, Mao Zedong proclaimed PRC at Tiananmen. Chinese people stood up.',
            ja: '解放戦争勝利。1949年10月1日、毛沢東が天安門で中華人民共和国成立を宣言。中国人民立ち上がる。'
        },
        keyEvents: {
            zh: ['第一届政协会议', '开国大典 (1949.10.1)', '确立国旗国歌', '新政权建立'],
            en: ['First CPPCC session', 'Founding Ceremony (1949.10.1)', 'Flag and anthem established', 'New government formed'],
            ja: ['第一回政協会議', '建国式典 (1949.10.1)', '国旗国歌制定', '新政権樹立']
        },
        impact: {
            zh: ['百年国耻彻底结束', '国家独立民族解放', '开启社会主义建设', '民族复兴新征程'],
            en: ['Century of Humiliation ended', 'Independence and liberation', 'Socialist construction began', 'National rejuvenation started'],
            ja: ['屈辱の世紀完全終結', '国家独立民族解放', '社会主義建設開始', '民族復興新征途']
        }
    }
];

// 初始化
function init() {
    renderExhibits();
    setupEventListeners();
}

// 渲染展品
function renderExhibits() {
    const hall = document.getElementById('museumHall');
    hall.innerHTML = '';

    exhibits.forEach(exhibit => {
        const card = document.createElement('div');
        card.className = 'exhibit-card';
        card.onclick = () => openModal(exhibit);

        card.innerHTML = `
            <div class="exhibit-image">${exhibit.icon}</div>
            <div class="exhibit-content">
                <div class="exhibit-year">${exhibit.year}</div>
                <div class="exhibit-title">${exhibit.title[currentLanguage]}</div>
                <div class="exhibit-description">${exhibit.description[currentLanguage]}</div>
                <span class="exhibit-badge">${exhibit.badge[currentLanguage]}</span>
            </div>
        `;

        hall.appendChild(card);
    });
}

// 打开模态框
function openModal(exhibit) {
    const modal = document.getElementById('exhibitModal');
    
    document.getElementById('modalYear').textContent = exhibit.year;
    document.getElementById('modalTitle').textContent = exhibit.title[currentLanguage];
    document.getElementById('modalDescription').textContent = exhibit.description[currentLanguage];
    document.getElementById('contextContent').textContent = exhibit.context[currentLanguage];
    
    const eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = '';
    exhibit.keyEvents[currentLanguage].forEach(event => {
        const li = document.createElement('li');
        li.textContent = event;
        eventsList.appendChild(li);
    });
    
    const impactList = document.getElementById('impactList');
    impactList.innerHTML = '';
    exhibit.impact[currentLanguage].forEach(impact => {
        const li = document.createElement('li');
        li.textContent = impact;
        impactList.appendChild(li);
    });
    
    modal.classList.add('active');
}

// 关闭模态框
function closeModal() {
    document.getElementById('exhibitModal').classList.remove('active');
}

// 更新语言
function updateLanguage() {
    const titles = {
        zh: {
            page: '虚拟博物馆 - 中国百年国耻历史展',
            historical: '历史背景',
            keyEvents: '关键事件',
            impact: '历史影响',
            timeline: '时间线视图',
            map: '地图视图',
            animation: '动画视图'
        },
        en: {
            page: 'Virtual Museum - China\'s Century of Humiliation Exhibition',
            historical: 'Historical Context',
            keyEvents: 'Key Events',
            impact: 'Historical Impact',
            timeline: 'Timeline View',
            map: 'Map View',
            animation: 'Animation View'
        },
        ja: {
            page: 'バーチャル博物館 - 中国屈辱の世紀展',
            historical: '歴史的背景',
            keyEvents: '主な出来事',
            impact: '歴史的影響',
            timeline: 'タイムライン',
            map: '地図表示',
            animation: 'アニメーション'
        }
    };

    document.getElementById('pageTitle').textContent = titles[currentLanguage].page;
    document.getElementById('historicalContext').textContent = titles[currentLanguage].historical;
    document.getElementById('keyEvents').textContent = titles[currentLanguage].keyEvents;
    document.getElementById('historicalImpact').textContent = titles[currentLanguage].impact;
    document.getElementById('timelineText').textContent = titles[currentLanguage].timeline;
    document.getElementById('mapText').textContent = titles[currentLanguage].map;
    document.getElementById('animationText').textContent = titles[currentLanguage].animation;
    
    renderExhibits();
}

// 设置事件监听
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

    // 滚动监听 - 隐藏/显示header
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector('.header');
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 向下滚动且超过100px，隐藏header
            header.classList.add('hidden');
        } else {
            // 向上滚动，显示header
            header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // 导航按钮
    document.getElementById('timelineBtn').addEventListener('click', () => {
        window.location.href = 'timeline.html';
    });

    document.getElementById('mapBtn').addEventListener('click', () => {
        window.location.href = 'map.html';
    });

    document.getElementById('animationBtn').addEventListener('click', () => {
        window.location.href = 'timeline-animation.html';
    });

    // 点击模态框外部关闭
    document.getElementById('exhibitModal').addEventListener('click', (e) => {
        if (e.target.id === 'exhibitModal') {
            closeModal();
        }
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
