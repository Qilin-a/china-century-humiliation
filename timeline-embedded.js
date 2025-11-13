// 时间线可视化 - 内嵌数据版本（解决CORS问题）
// Timeline Visualization - Embedded Data Version (Solves CORS issues)

// 直接内嵌时间线数据
const timelineData = {
  "title": "中国百年国耻时间线 (1839-1949)",
  "subtitle": "China's Century of Humiliation Timeline",
  "events": [
    {
      "id": "opium-war-1",
      "year": 1839,
      "endYear": 1842,
      "title": {
        "zh": "第一次鸦片战争",
        "en": "First Opium War",
        "ja": "第一次アヘン戦争"
      },
      "category": "war",
      "importance": "critical",
      "description": {
        "zh": "英国因鸦片贸易问题发动侵华战争，清朝战败，被迫签订《南京条约》，割让香港，开放五口通商。",
        "en": "Britain launched an invasion of China over opium trade issues. Qing defeat led to the Treaty of Nanking, ceding Hong Kong and opening five ports.",
        "ja": "イギリスがアヘン貿易問題で中国侵略戦争を開始。清朝敗北、南京条約により香港割譲、五港開港。"
      },
      "consequences": {
        "zh": [
          "签订《南京条约》(1842)",
          "割让香港给英国",
          "开放五口通商",
          "开启不平等条约时代"
        ],
        "en": [
          "Treaty of Nanking (1842)",
          "Hong Kong ceded to Britain",
          "Five ports opened",
          "Beginning of unequal treaties"
        ],
        "ja": [
          "南京条約締結(1842)",
          "香港をイギリスに割譲",
          "五港開港",
          "不平等条約時代の始まり"
        ]
      },
      "link": {"zh": "docs/zh/events/opium-wars.md", "en": "docs/en/events/opium-wars.md", "ja": "docs/ja/events/opium-wars.md"}
    },
    {
      "id": "taiping-rebellion",
      "year": 1850,
      "endYear": 1864,
      "title": {
        "zh": "太平天国运动",
        "en": "Taiping Rebellion",
        "ja": "太平天国の乱"
      },
      "category": "rebellion",
      "importance": "critical",
      "description": {
        "zh": "洪秀全领导的大规模农民起义，建立太平天国政权，几乎推翻清朝统治，造成2000-3000万人死亡。",
        "en": "Massive peasant uprising led by Hong Xiuquan, establishing the Taiping Heavenly Kingdom. Nearly overthrew Qing rule, causing 20-30 million deaths.",
        "ja": "洪秀全率いる大規模農民蜂起。太平天国政権を樹立、清朝支配をほぼ転覆、2000-3000万人が死亡。"
      },
      "consequences": {
        "zh": [
          "2000-3000万人死亡",
          "社会大规模动荡",
          "清朝统治削弱",
          "地方军队崛起"
        ],
        "en": [
          "20-30 million deaths",
          "Massive social disruption",
          "Weakened Qing Dynasty",
          "Rise of regional armies"
        ],
        "ja": [
          "2000-3000万人死亡",
          "大規模な社会混乱",
          "清朝統治の弱体化",
          "地方軍の台頭"
        ]
      },
      "link": {"zh": "docs/zh/events/taiping-rebellion.md", "en": "docs/en/events/taiping-rebellion.md", "ja": "docs/ja/events/taiping-rebellion.md"}
    },
    {
      "id": "opium-war-2",
      "year": 1856,
      "endYear": 1860,
      "title": {
        "zh": "第二次鸦片战争",
        "en": "Second Opium War",
        "ja": "第二次アヘン戦争"
      },
      "category": "war",
      "importance": "critical",
      "description": {
        "zh": "英法联军侵华，火烧圆明园，签订《北京条约》，割让九龙半岛，开放更多口岸。",
        "en": "Anglo-French forces invaded China, burned the Summer Palace. Treaty of Beijing resulted in more territorial and trade concessions.",
        "ja": "英仏連合軍が中国侵略、円明園焼失。北京条約により九龍半島割譲、更なる開港。"
      },
      "consequences": {
        "zh": [
          "圆明园被焚毁",
          "九龙半岛割让给英国",
          "开放更多口岸",
          "俄国获得领土"
        ],
        "en": [
          "Summer Palace burned",
          "Kowloon ceded to Britain",
          "More ports opened",
          "Russian territorial gains"
        ],
        "ja": [
          "円明園焼失",
          "九龍半島をイギリスに割譲",
          "更なる開港",
          "ロシアの領土獲得"
        ]
      },
      "link": {"zh": "docs/zh/events/opium-wars.md", "en": "docs/en/events/opium-wars.md", "ja": "docs/ja/events/opium-wars.md"}
    },
    {
      "id": "self-strengthening",
      "year": 1861,
      "endYear": 1895,
      "title": {
        "zh": "洋务运动",
        "en": "Self-Strengthening Movement",
        "ja": "洋務運動"
      },
      "category": "reform",
      "importance": "major",
      "description": {
        "zh": "清朝官员推动的现代化改革运动，引进西方军事技术和工业，提出'中体西用'理念。",
        "en": "Modernization reforms led by Qing officials, introducing Western military technology and industry under 'Chinese learning, Western utility' principle.",
        "ja": "清朝官僚による近代化改革運動。西洋軍事技術と工業を導入、'中体西用'理念を提唱。"
      },
      "consequences": {
        "zh": [
          "建立现代化兵工厂",
          "创建北洋水师",
          "有限的工业化",
          "未能改革制度"
        ],
        "en": [
          "Modern arsenals established",
          "Beiyang Fleet created",
          "Limited industrialization",
          "Failed to transform institutions"
        ],
        "ja": [
          "近代兵器工場設立",
          "北洋艦隊創設",
          "限定的工業化",
          "制度改革の失敗"
        ]
      },
      "link": {"zh": "docs/zh/events/self-strengthening-movement.md", "en": "docs/en/events/self-strengthening-movement.md", "ja": "docs/ja/events/self-strengthening-movement.md"}
    },
    {
      "id": "sino-french-war",
      "year": 1884,
      "endYear": 1885,
      "title": {
        "zh": "中法战争",
        "en": "Sino-French War",
        "ja": "清仏戦争"
      },
      "category": "war",
      "importance": "major",
      "description": {
        "zh": "法国侵略越南和中国，清朝虽有胜仗但最终承认法国对越南的保护权。",
        "en": "French aggression against Vietnam and China. Despite some victories, Qing recognized French protectorate over Vietnam.",
        "ja": "フランスがベトナムと中国を侵略。清朝は勝利もあったが、最終的にベトナムに対するフランスの保護権を承認。"
      },
      "consequences": {
        "zh": [
          "失去越南藩属国",
          "法国势力范围扩大",
          "清朝威望下降"
        ],
        "en": [
          "Lost Vietnam as tributary",
          "French sphere of influence",
          "Weakened Qing prestige"
        ],
        "ja": [
          "ベトナムを朝貢国として喪失",
          "フランスの勢力圏",
          "清朝の威信低下"
        ]
      },
      "link": {
        "zh": "docs/zh/events/sino-japanese-war.md",
        "en": "docs/en/events/sino-japanese-war.md",
        "ja": "docs/ja/events/sino-japanese-war.md"
      }
    },
    {
      "id": "sino-japanese-war",
      "year": 1894,
      "endYear": 1895,
      "title": {
        "zh": "甲午中日战争",
        "en": "First Sino-Japanese War",
        "ja": "日清戦争"
      },
      "category": "war",
      "importance": "critical",
      "description": {
        "zh": "日本侵略朝鲜和中国，北洋水师全军覆没，清朝惨败，签订《马关条约》，失去台湾和朝鲜。",
        "en": "Japan invaded Korea and China, destroying the Beiyang Fleet. Treaty of Shimonoseki resulted in loss of Taiwan and Korea.",
        "ja": "日本が朝鮮と中国を侵略、北洋艦隊壊滅。下関条約により台湾と朝鮮を喪失。"
      },
      "consequences": {
        "zh": [
          "台湾割让给日本",
          "失去朝鲜藩属国",
          "巨额赔款",
          "暴露清朝弱点"
        ],
        "en": [
          "Taiwan ceded to Japan",
          "Korea lost as tributary",
          "Massive indemnity",
          "Exposed Qing weakness"
        ],
        "ja": [
          "台湾を日本に割譲",
          "朝鮮を朝貢国として喪失",
          "巨額賠償金",
          "清朝の弱さ露呈"
        ]
      },
      "link": {
        "zh": "docs/zh/events/sino-japanese-war.md",
        "en": "docs/en/events/sino-japanese-war.md",
        "ja": "docs/ja/events/sino-japanese-war.md"
      }
    },
    {
      "id": "hundred-days-reform",
      "year": 1898,
      "endYear": 1898,
      "title": {
        "zh": "百日维新",
        "en": "Hundred Days' Reform",
        "ja": "戊戌変法"
      },
      "category": "reform",
      "importance": "major",
      "description": {
        "zh": "光绪帝和康有为、梁启超推动的维新变法运动，103天后被慈禧太后镇压，六君子遇害。",
        "en": "Reform movement by Guangxu Emperor, Kang Youwei, and Liang Qichao. Crushed by Empress Dowager Cixi after 103 days.",
        "ja": "光緒帝と康有為、梁啓超による変法運動。103日後に西太后により粉砕、六君子処刑。"
      },
      "consequences": {
        "zh": [
          "改革被镇压",
          "戊戌六君子被杀",
          "光绪帝被软禁",
          "保守势力反扑"
        ],
        "en": [
          "Reform crushed",
          "Six Gentlemen executed",
          "Guangxu imprisoned",
          "Conservative backlash"
        ],
        "ja": [
          "改革粉砕",
          "六君子処刑",
          "光緒帝幽閉",
          "保守派の反撃"
        ]
      },
      "link": {
        "zh": "docs/zh/events/hundred-days-reform.md",
        "en": "docs/en/events/hundred-days-reform.md",
        "ja": "docs/ja/events/hundred-days-reform.md"
      }
    },
    {
      "id": "boxer-rebellion",
      "year": 1899,
      "endYear": 1901,
      "title": {
        "zh": "义和团运动与八国联军",
        "en": "Boxer Rebellion",
        "ja": "義和団事件"
      },
      "category": "war",
      "importance": "critical",
      "description": {
        "zh": "义和团反洋教运动，慈禧支持向列强宣战，八国联军攻占北京，签订《辛丑条约》，赔款4.5亿两白银。",
        "en": "Boxer anti-foreign movement. Eight-Nation Alliance captured Beijing. Boxer Protocol imposed massive 450 million tael indemnity.",
        "ja": "義和団による排外運動。八カ国連合軍が北京占領。辛丑条約により4.5億両の賠償金。"
      },
      "consequences": {
        "zh": [
          "赔款4.5亿两白银",
          "外国军队驻扎北京",
          "清朝合法性受损",
          "民族屈辱"
        ],
        "en": [
          "450 million tael indemnity",
          "Foreign troops in Beijing",
          "Qing legitimacy damaged",
          "National humiliation"
        ],
        "ja": [
          "4.5億両の賠償金",
          "外国軍隊の北京駐留",
          "清朝の正統性損傷",
          "国家的屈辱"
        ]
      },
      "link": {"zh": "docs/zh/events/boxer-rebellion.md", "en": "docs/en/events/boxer-rebellion.md", "ja": "docs/ja/events/boxer-rebellion.md"}
    },
    {
      "id": "xinhai-revolution",
      "year": 1911,
      "endYear": 1912,
      "title": {
        "zh": "辛亥革命",
        "en": "Xinhai Revolution",
        "ja": "辛亥革命"
      },
      "category": "revolution",
      "importance": "critical",
      "description": {
        "zh": "孙中山领导的革命推翻清朝，建立中华民国，结束两千年帝制，但未能完全改变中国半殖民地地位。",
        "en": "Sun Yat-sen led revolution overthrew Qing Dynasty, established Republic of China, ending 2000 years of imperial rule.",
        "ja": "孫文率いる革命が清朝を打倒、中華民国樹立。2000年の帝政を終結。"
      },
      "consequences": {
        "zh": [
          "清朝结束",
          "建立共和国",
          "废除帝制",
          "政治动荡开始"
        ],
        "en": [
          "Qing Dynasty ended",
          "Republic established",
          "Imperial system abolished",
          "Political instability began"
        ],
        "ja": [
          "清朝終結",
          "共和国樹立",
          "帝政廃止",
          "政治的不安定開始"
        ]
      },
      "link": {"zh": "docs/zh/events/xinhai-revolution.md", "en": "docs/en/events/xinhai-revolution.md", "ja": "docs/ja/events/xinhai-revolution.md"}
    },
    {
      "id": "new-culture-movement",
      "year": 1915,
      "endYear": 1920,
      "title": {
        "zh": "新文化运动",
        "en": "New Culture Movement",
        "ja": "新文化運動"
      },
      "category": "cultural",
      "importance": "major",
      "description": {
        "zh": "陈独秀、胡适、鲁迅等知识分子发起的思想文化革命，提倡科学与民主，反对传统文化。",
        "en": "Intellectual revolution led by Chen Duxiu, Hu Shi, Lu Xun promoting science, democracy, and vernacular Chinese.",
        "ja": "陳独秀、胡適、魯迅らによる思想文化革命。科学と民主主義を提唱、伝統文化に反対。"
      },
      "consequences": {
        "zh": [
          "文化现代化",
          "推广白话文",
          "个人解放",
          "五四运动的基础"
        ],
        "en": [
          "Cultural modernization",
          "Vernacular Chinese promoted",
          "Individual liberation",
          "Foundation for May Fourth"
        ],
        "ja": [
          "文化近代化",
          "白話文の普及",
          "個人解放",
          "五・四運動の基礎"
        ]
      },
      "link": {"zh": "docs/zh/events/new-culture-movement.md", "en": "docs/en/events/new-culture-movement.md", "ja": "docs/ja/events/new-culture-movement.md"}
    },
    {
      "id": "may-fourth-movement",
      "year": 1919,
      "endYear": 1919,
      "title": {
        "zh": "五四运动",
        "en": "May Fourth Movement",
        "ja": "五・四運動"
      },
      "category": "movement",
      "importance": "critical",
      "description": {
        "zh": "学生抗议巴黎和会将山东权益转给日本，爆发全国性反帝爱国运动，开启中国现代革命。",
        "en": "Student protests against Versailles Treaty transferring Shandong to Japan. Sparked nationwide anti-imperialist movement.",
        "ja": "ヴェルサイユ条約で山東を日本に譲渡することへの学生抗議。全国的反帝国主義運動に発展。"
      },
      "consequences": {
        "zh": [
          "群众性民族主义运动",
          "反帝意识觉醒",
          "文化革命",
          "中共建党基础"
        ],
        "en": [
          "Mass nationalist movement",
          "Anti-imperialist awakening",
          "Cultural revolution",
          "Foundation for CCP"
        ],
        "ja": [
          "大衆的民族主義運動",
          "反帝国主義の覚醒",
          "文化革命",
          "中国共産党の基礎"
        ]
      },
      "link": {"zh": "docs/zh/events/may-fourth-movement.md", "en": "docs/en/events/may-fourth-movement.md", "ja": "docs/ja/events/may-fourth-movement.md"}
    },
    {
      "id": "sino-japanese-war-2",
      "year": 1937,
      "endYear": 1945,
      "title": {
        "zh": "全面抗日战争",
        "en": "Second Sino-Japanese War",
        "ja": "日中戦争"
      },
      "category": "war",
      "importance": "critical",
      "description": {
        "zh": "日本全面侵华，中国军民浴血抗战八年，付出巨大牺牲，最终取得胜利。",
        "en": "Full-scale Japanese invasion of China. Eight-year war of resistance ended in Chinese victory in 1945.",
        "ja": "日本の全面的中国侵略。八年間の抗戦の末、1945年に中国勝利。"
      },
      "consequences": {
        "zh": [
          "2000-3500万中国人死亡",
          "南京大屠杀",
          "1945年盟军胜利",
          "百年国耻结束"
        ],
        "en": [
          "20-35 million Chinese deaths",
          "Nanjing Massacre",
          "Allied victory 1945",
          "End of Century of Humiliation"
        ],
        "ja": [
          "2000-3500万人の中国人死亡",
          "南京大虐殺",
          "1945年連合国勝利",
          "屈辱の世紀終結"
        ]
      },
      "link": {"zh": "docs/zh/events/second-sino-japanese-war.md", "en": "docs/en/events/second-sino-japanese-war.md", "ja": "docs/ja/events/second-sino-japanese-war.md"}
    },
    {
      "id": "prc-founded",
      "year": 1949,
      "endYear": 1949,
      "title": {
        "zh": "中华人民共和国成立",
        "en": "People's Republic of China Founded",
        "ja": "中華人民共和国成立"
      },
      "category": "political",
      "importance": "critical",
      "description": {
        "zh": "1949年10月1日，毛泽东在天安门宣布中华人民共和国成立，百年国耻时代结束。",
        "en": "October 1, 1949, Mao Zedong proclaimed the founding of the People's Republic of China, ending the Century of Humiliation.",
        "ja": "1949年10月1日、毛沢東が天安門で中華人民共和国成立を宣言。屈辱の世紀が終結。"
      },
      "consequences": {
        "zh": [
          "百年国耻结束",
          "恢复民族独立",
          "社会主义改造开始",
          "新中国时代"
        ],
        "en": [
          "Century of Humiliation ended",
          "National independence restored",
          "Socialist transformation began",
          "New China era"
        ],
        "ja": [
          "屈辱の世紀終結",
          "民族独立回復",
          "社会主義改造開始",
          "新中国時代"
        ]
      },
      "link": {"zh": "docs/zh/impact.md", "en": "docs/en/impact.md", "ja": "docs/ja/impact.md"}
    }
  ],
  "categories": {
    "war": {"zh": "战争", "en": "War", "ja": "戦争", "color": "#dc2626"},
    "rebellion": {"zh": "起义", "en": "Rebellion", "ja": "反乱", "color": "#ea580c"},
    "reform": {"zh": "改革", "en": "Reform", "ja": "改革", "color": "#2563eb"},
    "imperialism": {"zh": "帝国主义", "en": "Imperialism", "ja": "帝国主義", "color": "#7c3aed"},
    "revolution": {"zh": "革命", "en": "Revolution", "ja": "革命", "color": "#dc2626"},
    "cultural": {"zh": "文化运动", "en": "Cultural Movement", "ja": "文化運動", "color": "#059669"},
    "movement": {"zh": "运动", "en": "Movement", "ja": "運動", "color": "#0891b2"},
    "political": {"zh": "政治", "en": "Political", "ja": "政治", "color": "#4f46e5"},
    "military": {"zh": "军事", "en": "Military", "ja": "軍事", "color": "#b91c1c"}
  },
  "importance": {
    "critical": {"zh": "关键事件", "en": "Critical Event", "ja": "重要事件", "size": "large"},
    "major": {"zh": "重大事件", "en": "Major Event", "ja": "主要事件", "size": "medium"}
  }
};

let currentLanguage = 'zh';
let activeFilters = new Set();

// 初始化
function init() {
    setupEventListeners();
    renderFilterButtons();
    renderStats();
    renderTimeline();
    document.getElementById('loading').style.display = 'none';
}

function setupEventListeners() {
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.language-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentLanguage = e.target.dataset.lang;
            updateLanguage();
        });
    });

    document.getElementById('searchInput').addEventListener('input', (e) => {
        filterTimeline(e.target.value);
    });
    
    updateSearchPlaceholder();
}

function updateSearchPlaceholder() {
    const placeholders = {zh: '搜索事件...', en: 'Search events...', ja: 'イベントを検索...'};
    document.getElementById('searchInput').placeholder = placeholders[currentLanguage];
}

function renderFilterButtons() {
    const filterControls = document.getElementById('filterControls');
    filterControls.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn active';
    allBtn.dataset.category = 'all';
    allBtn.innerHTML = `<span class="dot" style="background: #94a3b8;"></span><span>${getTranslation('all')}</span>`;
    allBtn.addEventListener('click', () => toggleFilter('all', allBtn));
    filterControls.appendChild(allBtn);

    Object.entries(timelineData.categories).forEach(([key, category]) => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.dataset.category = key;
        btn.innerHTML = `<span class="dot" style="background: ${category.color};"></span><span>${category[currentLanguage]}</span>`;
        btn.addEventListener('click', () => toggleFilter(key, btn));
        filterControls.appendChild(btn);
    });
}

function toggleFilter(category, btn) {
    if (category === 'all') {
        activeFilters.clear();
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
            b.style.borderColor = '';
            b.style.background = '';
        });
        btn.classList.add('active');
    } else {
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
        
        if (activeFilters.size === 0) {
            document.querySelector('.filter-btn[data-category="all"]').classList.add('active');
        }
    }
    renderTimeline();
}

function renderStats() {
    const stats = document.getElementById('stats');
    const totalEvents = timelineData.events.length;
    const timeSpan = `${timelineData.events[0].year}-${timelineData.events[timelineData.events.length - 1].year}`;
    
    const categoryCount = {};
    timelineData.events.forEach(event => {
        categoryCount[event.category] = (categoryCount[event.category] || 0) + 1;
    });

    const statsLabels = {
        zh: {total: '历史事件总数', timespan: '时间跨度', wars: '战争冲突', reforms: '改革运动'},
        en: {total: 'Total Events', timespan: 'Time Span', wars: 'Wars', reforms: 'Reforms'},
        ja: {total: '総事件数', timespan: '期間', wars: '戦争', reforms: '改革'}
    };

    stats.innerHTML = `
        <div class="stat-card"><div class="stat-number">${totalEvents}</div><div class="stat-label">${statsLabels[currentLanguage].total}</div></div>
        <div class="stat-card"><div class="stat-number">${timeSpan}</div><div class="stat-label">${statsLabels[currentLanguage].timespan}</div></div>
        <div class="stat-card"><div class="stat-number">${categoryCount.war || 0}</div><div class="stat-label">${statsLabels[currentLanguage].wars}</div></div>
        <div class="stat-card"><div class="stat-number">${categoryCount.reform || 0}</div><div class="stat-label">${statsLabels[currentLanguage].reforms}</div></div>
    `;
}

function renderTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';

    let filteredEvents = timelineData.events;
    if (activeFilters.size > 0) {
        filteredEvents = filteredEvents.filter(event => activeFilters.has(event.category));
    }

    filteredEvents.forEach((event, index) => {
        timeline.appendChild(createTimelineItem(event, index));
    });

    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

function createTimelineItem(event, index) {
    const item = document.createElement('div');
    item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${event.importance}`;
    item.dataset.category = event.category;

    const yearText = event.endYear && event.endYear !== event.year ? `${event.year}-${event.endYear}` : event.year;
    const categoryColor = timelineData.categories[event.category].color;

    const consequencesHTML = event.consequences && event.consequences[currentLanguage] && event.consequences[currentLanguage].length > 0
        ? `<div class="timeline-consequences"><h4>${getTranslation('consequences')}</h4><ul>${event.consequences[currentLanguage].map(c => `<li>${c}</li>`).join('')}</ul></div>`
        : '';

    item.innerHTML = `
        <div class="timeline-marker" style="border-color: ${categoryColor};"></div>
        <div class="timeline-content" style="border-left-color: ${categoryColor};">
            <div class="timeline-year">${yearText}</div>
            <div class="timeline-title">${event.title[currentLanguage]}</div>
            <div class="timeline-category" style="background: ${categoryColor};">${timelineData.categories[event.category][currentLanguage]}</div>
            <div class="timeline-description">${event.description[currentLanguage]}</div>
            ${consequencesHTML}
            ${event.link ? `<a href="${event.link[currentLanguage]}" class="timeline-link" target="_blank">${getTranslation('readMore')}</a>` : ''}
        </div>
    `;
    return item;
}

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

function updateLanguage() {
    const titles = {
        zh: {main: '中国百年国耻时间线 (1839-1949)', sub: 'China\'s Century of Humiliation Timeline'},
        en: {main: 'China\'s Century of Humiliation Timeline (1839-1949)', sub: '中国百年国耻时间线'},
        ja: {main: '中国屈辱の世紀タイムライン (1839-1949)', sub: 'China\'s Century of Humiliation Timeline'}
    };

    document.getElementById('mainTitle').textContent = titles[currentLanguage].main;
    document.getElementById('subtitle').textContent = titles[currentLanguage].sub;

    updateSearchPlaceholder();
    renderFilterButtons();
    renderStats();
    renderTimeline();
}

function getTranslation(key) {
    const translations = {
        all: {zh: '全部', en: 'All', ja: 'すべて'},
        consequences: {zh: '主要后果', en: 'Key Consequences', ja: '主な結果'},
        readMore: {zh: '了解更多 →', en: 'Read More →', ja: '詳細を見る →'}
    };
    return translations[key]?.[currentLanguage] || key;
}

document.addEventListener('DOMContentLoaded', init);
