// 时间线动画 JavaScript
// Timeline Animation

let currentLanguage = 'zh';
let isPlaying = false;
let currentEventIndex = 0;
let animationSpeed = 1;
let animationInterval;

// 历史事件数据
const events = [
    {
        year: 1839,
        endYear: 1842,
        title: {
            zh: '第一次鸦片战争',
            en: 'First Opium War',
            ja: '第一次アヘン戦争'
        },
        category: 'war',
        description: {
            zh: '英国因鸦片贸易问题发动侵华战争，清朝战败，被迫签订《南京条约》，割让香港，开放五口通商，标志着中国近代史的开端。',
            en: 'Britain launched an invasion of China over opium trade issues. Qing defeat led to the Treaty of Nanking, ceding Hong Kong and opening five treaty ports, marking the beginning of modern Chinese history.',
            ja: 'イギリスがアヘン貿易問題で中国侵略戦争を開始。清朝敗北、南京条約により香港割譲、五港開港。中国近代史の始まり。'
        },
        impact: {
            zh: ['签订中国第一个不平等条约《南京条约》', '割让香港岛给英国', '开放广州、厦门、福州、宁波、上海五口通商', '开启百年国耻时代'],
            en: ['First unequal treaty signed', 'Hong Kong Island ceded to Britain', 'Five treaty ports opened', 'Beginning of Century of Humiliation'],
            ja: ['初の不平等条約締結', '香港島をイギリスに割譲', '五港開港', '屈辱の世紀の始まり']
        }
    },
    {
        year: 1850,
        endYear: 1864,
        title: {
            zh: '太平天国运动',
            en: 'Taiping Rebellion',
            ja: '太平天国の乱'
        },
        category: 'revolution',
        description: {
            zh: '洪秀全领导的大规模农民起义，建立太平天国政权，定都南京（改称天京），与清朝对峙14年，造成2000-3000万人死亡。',
            en: 'Massive peasant uprising led by Hong Xiuquan, establishing the Taiping Heavenly Kingdom with capital at Nanjing (renamed Tianjing), causing 20-30 million deaths over 14 years.',
            ja: '洪秀全率いる大規模農民蜂起。太平天国政権樹立、南京を首都に。14年間で2000-3000万人が死亡。'
        },
        impact: {
            zh: ['造成2000-3000万人死亡，为人类历史上最惨烈的内战', '社会经济遭受巨大破坏', '清朝中央权威严重削弱', '地方军阀势力崛起'],
            en: ['20-30 million deaths, deadliest civil war in history', 'Massive social and economic destruction', 'Qing central authority severely weakened', 'Rise of regional warlords'],
            ja: ['人類史上最も凄惨な内戦、2000-3000万人死亡', '社会経済に甚大な破壊', '清朝中央権威の著しい弱体化', '地方軍閥勢力の台頭']
        }
    },
    {
        year: 1856,
        endYear: 1860,
        title: {
            zh: '第二次鸦片战争',
            en: 'Second Opium War',
            ja: '第二次アヘン戦争'
        },
        category: 'war',
        description: {
            zh: '英法联军侵华，攻占北京，火烧圆明园，签订《北京条约》，中国进一步沦为半殖民地半封建社会。',
            en: 'Anglo-French forces invaded China, captured Beijing, and burned the Summer Palace. Treaty of Beijing further reduced China to semi-colonial status.',
            ja: '英仏連合軍が中国侵略、北京占領、円明園焼失。北京条約により中国は半植民地化。'
        },
        impact: {
            zh: ['圆明园被焚毁，文化遗产遭受浩劫', '割让九龙半岛给英国', '开放天津等11个口岸', '外国公使进驻北京，设立使馆区'],
            en: ['Summer Palace destroyed, cultural heritage lost', 'Kowloon Peninsula ceded to Britain', '11 more treaty ports opened', 'Foreign legations established in Beijing'],
            ja: ['円明園焼失、文化遺産の大損失', '九龍半島をイギリスに割譲', '天津など11港開港', '外国公使の北京駐在、使館区設置']
        }
    },
    {
        year: 1894,
        endYear: 1895,
        title: {
            zh: '甲午中日战争',
            en: 'First Sino-Japanese War',
            ja: '日清戦争'
        },
        category: 'war',
        description: {
            zh: '日本侵略朝鲜和中国，北洋水师全军覆没，清朝惨败。签订《马关条约》，割让台湾、澎湖列岛，赔款2亿两白银，洋务运动宣告失败。',
            en: 'Japan invaded Korea and China, destroying the Beiyang Fleet. Treaty of Shimonoseki resulted in loss of Taiwan, Penghu, and 200 million tael indemnity.',
            ja: '日本が朝鮮と中国を侵略、北洋艦隊壊滅。下関条約により台湾・澎湖諸島割譲、2億両賠償。'
        },
        impact: {
            zh: ['割让台湾、澎湖列岛给日本', '赔款2亿两白银（后增至2.3亿两）', '开放沙市、重庆、苏州、杭州为商埠', '允许日本在通商口岸开设工厂'],
            en: ['Taiwan and Penghu ceded to Japan', '200 million tael indemnity (later 230 million)', 'Four more treaty ports opened', 'Japanese factories allowed in treaty ports'],
            ja: ['台湾・澎湖諸島を日本に割譲', '2億両賠償（後に2.3億両）', '4港の開港', '日本の工場設立許可']
        }
    },
    {
        year: 1898,
        endYear: 1898,
        title: {
            zh: '百日维新',
            en: 'Hundred Days\' Reform',
            ja: '戊戌変法'
        },
        category: 'reform',
        description: {
            zh: '光绪帝和康有为、梁启超推动的维新变法运动，历时103天。慈禧太后发动政变，囚禁光绪帝，处死谭嗣同等"戊戌六君子"，变法失败。',
            en: 'Reform movement by Guangxu Emperor, Kang Youwei, and Liang Qichao lasting 103 days. Crushed by Empress Dowager Cixi, Six Gentlemen executed.',
            ja: '光緒帝と康有為、梁啓超による103日間の変法運動。西太后のクーデターで失敗、六君子処刑。'
        },
        impact: {
            zh: ['改革彻底失败，保守势力复辟', '谭嗣同、刘光第等六君子被杀', '光绪帝被囚禁至死', '康有为、梁启超逃亡日本'],
            en: ['Reform completely failed, conservatives restored', 'Six Gentlemen executed', 'Guangxu Emperor imprisoned until death', 'Kang and Liang fled to Japan'],
            ja: ['改革完全失敗、保守派復活', '六君子処刑', '光緒帝幽閉', '康有為、梁啓超は日本へ亡命']
        }
    },
    {
        year: 1899,
        endYear: 1901,
        title: {
            zh: '义和团运动与八国联军侵华',
            en: 'Boxer Rebellion',
            ja: '義和団事件'
        },
        category: 'war',
        description: {
            zh: '义和团"扶清灭洋"运动兴起，慈禧太后利用义和团向列强宣战。八国联军攻占北京，签订《辛丑条约》，赔款4.5亿两白银，为中国历史上最大的屈辱。',
            en: 'Boxer anti-foreign movement. Eight-Nation Alliance captured Beijing. Boxer Protocol imposed 450 million tael indemnity, the greatest humiliation in Chinese history.',
            ja: '義和団の排外運動。八カ国連合軍が北京占領。辛丑条約で4.5億両賠償、中国史上最大の屈辱。'
        },
        impact: {
            zh: ['赔款4.5亿两白银，分39年还清，本息近10亿两', '允许外国军队驻扎在北京至山海关铁路沿线', '划定北京东交民巷为使馆界，不许中国人居住', '拆毁大沽炮台等沿海炮台'],
            en: ['450 million tael indemnity over 39 years, total ~1 billion with interest', 'Foreign troops stationed along Beijing-Shanhaiguan railway', 'Legation Quarter established in Beijing', 'Coastal forts demolished'],
            ja: ['4.5億両を39年で賠償、利子含め約10億両', '北京-山海関鉄道沿線への外国軍駐留許可', '北京東交民巷を使館区に、中国人居住禁止', '大沽砲台など沿海砲台撤去']
        }
    },
    {
        year: 1911,
        endYear: 1912,
        title: {
            zh: '辛亥革命',
            en: 'Xinhai Revolution',
            ja: '辛亥革命'
        },
        category: 'revolution',
        description: {
            zh: '1911年10月10日武昌起义爆发，孙中山领导的革命推翻清朝，1912年建立中华民国，结束两千多年的帝制，但未能彻底改变中国半殖民地地位。',
            en: 'Wuchang Uprising on October 10, 1911. Sun Yat-sen\'s revolution overthrew Qing Dynasty, established Republic of China in 1912, ending 2000 years of imperial rule.',
            ja: '1911年10月10日武昌蜂起。孫文率いる革命が清朝打倒、1912年中華民国樹立。2000年の帝政終結。'
        },
        impact: {
            zh: ['清朝灭亡，结束两千多年封建帝制', '建立中华民国，亚洲第一个共和国', '颁布《中华民国临时约法》', '但革命果实被袁世凯窃取'],
            en: ['Qing Dynasty ended, 2000 years of imperial rule abolished', 'Republic of China established, Asia\'s first republic', 'Provisional Constitution promulgated', 'Revolutionary fruits usurped by Yuan Shikai'],
            ja: ['清朝滅亡、2000年の封建帝制終結', '中華民国樹立、アジア初の共和国', '臨時約法公布', '革命の成果は袁世凱に奪われる']
        }
    },
    {
        year: 1919,
        endYear: 1919,
        title: {
            zh: '五四运动',
            en: 'May Fourth Movement',
            ja: '五・四運動'
        },
        category: 'movement',
        description: {
            zh: '1919年5月4日，北京学生抗议巴黎和会将山东权益转让给日本，爆发反帝爱国运动。口号"外争主权，内除国贼"，标志着中国新民主主义革命的开端。',
            en: 'On May 4, 1919, Beijing students protested Versailles Treaty transferring Shandong to Japan. Sparked nationwide anti-imperialist movement, marking beginning of New Democratic Revolution.',
            ja: '1919年5月4日、北京学生がヴェルサイユ条約での山東譲渡に抗議。全国的反帝国主義運動に発展、新民主主義革命の始まり。'
        },
        impact: {
            zh: ['掀起全国性反帝爱国运动', '促进马克思主义在中国传播', '为中国共产党成立奠定思想基础', '新文化运动达到高潮'],
            en: ['Nationwide anti-imperialist patriotic movement', 'Promoted spread of Marxism in China', 'Laid ideological foundation for CCP', 'New Culture Movement reached peak'],
            ja: ['全国的反帝愛国運動', 'マルクス主義の中国普及促進', '中国共産党成立の思想的基礎', '新文化運動が最高潮に']
        }
    },
    {
        year: 1937,
        endYear: 1945,
        title: {
            zh: '全面抗日战争',
            en: 'Second Sino-Japanese War',
            ja: '日中戦争'
        },
        category: 'war',
        description: {
            zh: '1937年7月7日卢沟桥事变，日本全面侵华。中国军民浴血抗战八年，付出2000-3500万人伤亡的巨大代价，1945年8月15日日本投降，抗战胜利。',
            en: 'Full-scale Japanese invasion began July 7, 1937. Eight years of resistance resulted in 20-35 million Chinese casualties. Japan surrendered August 15, 1945.',
            ja: '1937年7月7日盧溝橋事変、日本の全面侵略開始。八年の抗戦で2000-3500万人の犠牲。1945年8月15日日本降伏。'
        },
        impact: {
            zh: ['造成2000-3500万中国人死亡', '南京大屠杀30万人遇难', '中国经济损失超过6000亿美元', '抗战胜利，台湾光复，百年国耻接近尾声'],
            en: ['20-35 million Chinese deaths', 'Nanjing Massacre: 300,000 killed', 'Economic losses exceeded $600 billion', 'Victory, Taiwan recovered, Century of Humiliation ending'],
            ja: ['2000-3500万人の中国人死亡', '南京大虐殺30万人犠牲', '経済損失6000億ドル超', '抗戦勝利、台湾光復、屈辱の世紀終焉へ']
        }
    },
    {
        year: 1949,
        endYear: 1949,
        title: {
            zh: '中华人民共和国成立',
            en: 'People\'s Republic of China Founded',
            ja: '中華人民共和国成立'
        },
        category: 'revolution',
        description: {
            zh: '1949年10月1日，毛泽东在天安门城楼宣布中华人民共和国成立。中国人民从此站起来了，百年国耻时代彻底结束，开启了中华民族伟大复兴的新征程。',
            en: 'On October 1, 1949, Mao Zedong proclaimed the founding of the People\'s Republic of China at Tiananmen. The Chinese people stood up, ending the Century of Humiliation.',
            ja: '1949年10月1日、毛沢東が天安門で中華人民共和国成立を宣言。中国人民は立ち上がり、屈辱の世紀が完全に終結。'
        },
        impact: {
            zh: ['结束百年国耻，中国人民站起来了', '实现国家独立和民族解放', '建立人民民主专政的社会主义国家', '开启中华民族伟大复兴的历史新纪元'],
            en: ['Century of Humiliation ended, Chinese people stood up', 'National independence and liberation achieved', 'Socialist state established', 'New era of national rejuvenation began'],
            ja: ['屈辱の世紀終結、中国人民が立ち上がる', '国家独立と民族解放実現', '社会主義国家樹立', '民族復興の新時代開始']
        }
    }
];

// 初始化
function init() {
    renderEvents();
    setupEventListeners();
}

// 渲染所有事件
function renderEvents() {
    const container = document.getElementById('timelineEvents');
    container.innerHTML = '';

    events.forEach((event, index) => {
        const eventDiv = document.createElement('div');
        eventDiv.className = `timeline-event ${index % 2 === 0 ? 'left' : 'right'}`;
        eventDiv.dataset.index = index;

        const yearText = event.endYear && event.endYear !== event.year 
            ? `${event.year}-${event.endYear}` 
            : event.year;

        const categoryClass = `category-${event.category}`;

        eventDiv.innerHTML = `
            <div class="event-marker"></div>
            <div class="event-content">
                <div class="event-year">${yearText}</div>
                <div class="event-title">${event.title[currentLanguage]}</div>
                <div class="event-category ${categoryClass}">${getCategoryName(event.category)}</div>
                <div class="event-description">${event.description[currentLanguage]}</div>
                <div class="event-impact">
                    <h4>${getTranslation('impact')}</h4>
                    <ul>
                        ${event.impact[currentLanguage].map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        container.appendChild(eventDiv);
    });
}

// 播放/暂停动画
function toggleAnimation() {
    isPlaying = !isPlaying;
    const playBtn = document.getElementById('playBtn');
    const playText = document.getElementById('playText');

    if (isPlaying) {
        playBtn.querySelector('span:first-child').textContent = '⏸';
        playText.textContent = getTranslation('pause');
        startAnimation();
    } else {
        playBtn.querySelector('span:first-child').textContent = '▶';
        playText.textContent = getTranslation('play');
        stopAnimation();
    }
}

// 开始动画
function startAnimation() {
    if (currentEventIndex >= events.length) {
        currentEventIndex = 0;
        // 重置所有事件
        document.querySelectorAll('.timeline-event').forEach(el => {
            el.classList.remove('active');
        });
        document.getElementById('progressLine').style.height = '0%';
    }

    animationInterval = setInterval(() => {
        if (currentEventIndex < events.length) {
            showEvent(currentEventIndex);
            currentEventIndex++;
        } else {
            stopAnimation();
            isPlaying = false;
            const playBtn = document.getElementById('playBtn');
            playBtn.querySelector('span:first-child').textContent = '▶';
            document.getElementById('playText').textContent = getTranslation('play');
        }
    }, 3000 / animationSpeed);
}

// 停止动画
function stopAnimation() {
    if (animationInterval) {
        clearInterval(animationInterval);
        animationInterval = null;
    }
}

// 显示事件
function showEvent(index) {
    const eventElements = document.querySelectorAll('.timeline-event');
    if (eventElements[index]) {
        eventElements[index].classList.add('active');
        
        // 更新进度线
        const progress = ((index + 1) / events.length) * 100;
        document.getElementById('progressLine').style.height = `${progress}%`;

        // 更新年份指示器
        const event = events[index];
        document.getElementById('yearIndicator').textContent = event.year;

        // 滚动到事件位置
        eventElements[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// 设置速度
function setSpeed(speed) {
    animationSpeed = speed;
    document.querySelectorAll('.speed-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    if (isPlaying) {
        stopAnimation();
        startAnimation();
    }
}

// 获取分类名称
function getCategoryName(category) {
    const names = {
        war: { zh: '战争', en: 'War', ja: '戦争' },
        treaty: { zh: '条约', en: 'Treaty', ja: '条約' },
        reform: { zh: '改革', en: 'Reform', ja: '改革' },
        revolution: { zh: '革命', en: 'Revolution', ja: '革命' },
        cultural: { zh: '文化', en: 'Cultural', ja: '文化' },
        movement: { zh: '运动', en: 'Movement', ja: '運動' }
    };
    return names[category]?.[currentLanguage] || category;
}

// 获取翻译
function getTranslation(key) {
    const translations = {
        play: { zh: '播放动画', en: 'Play Animation', ja: 'アニメーション再生' },
        pause: { zh: '暂停', en: 'Pause', ja: '一時停止' },
        impact: { zh: '历史影响', en: 'Historical Impact', ja: '歴史的影響' },
        speed: { zh: '速度:', en: 'Speed:', ja: '速度:' },
        pageTitle: {
            zh: '时间线动画 - 中国百年国耻历程 (1839-1949)',
            en: 'Timeline Animation - China\'s Century of Humiliation (1839-1949)',
            ja: 'タイムラインアニメーション - 中国屈辱の世紀 (1839-1949)'
        }
    };
    return translations[key]?.[currentLanguage] || key;
}

// 更新语言
function updateLanguage() {
    document.getElementById('pageTitle').textContent = getTranslation('pageTitle');
    document.getElementById('playText').textContent = isPlaying ? getTranslation('pause') : getTranslation('play');
    document.getElementById('speedLabel').textContent = getTranslation('speed');
    
    renderEvents();
    
    // 重新显示已激活的事件
    document.querySelectorAll('.timeline-event.active').forEach((el, idx) => {
        // 保持激活状态
    });
}

// 设置事件监听
function setupEventListeners() {
    // 播放按钮
    document.getElementById('playBtn').addEventListener('click', toggleAnimation);

    // 语言切换
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.language-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentLanguage = e.target.dataset.lang;
            updateLanguage();
        });
    });

    // 速度控制
    document.querySelectorAll('.speed-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            animationSpeed = parseFloat(e.target.dataset.speed);
            document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            if (isPlaying) {
                stopAnimation();
                startAnimation();
            }
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
