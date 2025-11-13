// 交互式历史地图 JavaScript
// Interactive Historical Map

let currentLanguage = 'zh';
let map;

// 历史事件地理数据
const mapEvents = [
    {
        id: 'opium-war-1',
        coords: [31.2304, 121.4737], // 上海
        title: {
            zh: '第一次鸦片战争 - 上海',
            en: 'First Opium War - Shanghai',
            ja: '第一次アヘン戦争 - 上海'
        },
        year: '1839-1842',
        type: 'war',
        description: {
            zh: '英国因鸦片贸易问题发动侵华战争，清朝战败，签订《南京条约》，上海成为五口通商之一。',
            en: 'Britain launched invasion over opium trade. Qing defeat led to Treaty of Nanking, Shanghai became one of five treaty ports.',
            ja: 'イギリスがアヘン貿易問題で侵略戦争を開始。南京条約により上海が五港の一つに。'
        },
        consequences: {
            zh: ['签订《南京条约》', '上海开埠通商', '割让香港', '开启不平等条约时代'],
            en: ['Treaty of Nanking signed', 'Shanghai opened as treaty port', 'Hong Kong ceded', 'Beginning of unequal treaties'],
            ja: ['南京条約締結', '上海開港', '香港割譲', '不平等条約時代開始']
        }
    },
    {
        id: 'nanjing-treaty',
        coords: [32.0603, 118.7969], // 南京
        title: {
            zh: '《南京条约》签订地 - 南京',
            en: 'Treaty of Nanking - Nanjing',
            ja: '南京条約 - 南京'
        },
        year: '1842',
        type: 'treaty',
        description: {
            zh: '1842年8月29日，清朝与英国在南京签订《南京条约》，这是中国近代史上第一个不平等条约。',
            en: 'On August 29, 1842, Qing China signed the Treaty of Nanking with Britain, the first unequal treaty in modern Chinese history.',
            ja: '1842年8月29日、清朝とイギリスが南京条約を締結。中国近代史上初の不平等条約。'
        },
        consequences: {
            zh: ['割让香港岛', '赔款2100万银元', '开放五口通商', '协定关税'],
            en: ['Hong Kong Island ceded', '21 million silver dollars indemnity', 'Five ports opened', 'Fixed tariffs'],
            ja: ['香港島割譲', '2100万銀元賠償', '五港開港', '協定関税']
        }
    },
    {
        id: 'summer-palace',
        coords: [39.9997, 116.2753], // 圆明园
        title: {
            zh: '圆明园被焚 - 北京',
            en: 'Summer Palace Burned - Beijing',
            ja: '円明園焼失 - 北京'
        },
        year: '1860',
        type: 'war',
        description: {
            zh: '第二次鸦片战争中，英法联军攻入北京，焚毁圆明园，这座"万园之园"从此化为废墟。',
            en: 'During Second Opium War, Anglo-French forces invaded Beijing and burned the Summer Palace, destroying the "Garden of Gardens".',
            ja: '第二次アヘン戦争で英仏連合軍が北京に侵入、円明園を焼失。"万園の園"が廃墟に。'
        },
        consequences: {
            zh: ['圆明园被焚毁', '北京被占领', '签订《北京条约》', '文化浩劫'],
            en: ['Summer Palace destroyed', 'Beijing occupied', 'Treaty of Beijing signed', 'Cultural catastrophe'],
            ja: ['円明園破壊', '北京占領', '北京条約締結', '文化的災害']
        }
    },
    {
        id: 'taiping',
        coords: [32.0603, 118.7969], // 南京
        title: {
            zh: '太平天国都城 - 天京（南京）',
            en: 'Taiping Capital - Tianjing (Nanjing)',
            ja: '太平天国首都 - 天京（南京）'
        },
        year: '1853-1864',
        type: 'battle',
        description: {
            zh: '洪秀全领导的太平天国定都南京（改称天京），建立政权，与清朝对峙11年。',
            en: 'Hong Xiuquan\'s Taiping Heavenly Kingdom established capital in Nanjing (renamed Tianjing), opposing Qing for 11 years.',
            ja: '洪秀全率いる太平天国が南京（天京と改称）を首都として、清朝と11年対峙。'
        },
        consequences: {
            zh: ['2000-3000万人死亡', '社会大动荡', '清朝统治削弱', '地方军阀兴起'],
            en: ['20-30 million deaths', 'Massive social upheaval', 'Qing rule weakened', 'Regional warlords emerged'],
            ja: ['2000-3000万人死亡', '大規模社会動乱', '清朝弱体化', '地方軍閥台頭']
        }
    },
    {
        id: 'sino-japanese-war',
        coords: [37.5063, 122.1200], // 威海卫
        title: {
            zh: '甲午海战 - 威海卫',
            en: 'Sino-Japanese Naval Battle - Weihaiwei',
            ja: '日清海戦 - 威海衛'
        },
        year: '1895',
        type: 'war',
        description: {
            zh: '甲午战争中，北洋水师在威海卫全军覆没，标志着洋务运动的失败。',
            en: 'In First Sino-Japanese War, Beiyang Fleet was destroyed at Weihaiwei, marking failure of Self-Strengthening Movement.',
            ja: '日清戦争で北洋艦隊が威海衛で壊滅、洋務運動の失敗を象徴。'
        },
        consequences: {
            zh: ['北洋水师覆灭', '签订《马关条约》', '割让台湾', '赔款2亿两白银'],
            en: ['Beiyang Fleet destroyed', 'Treaty of Shimonoseki signed', 'Taiwan ceded', '200 million taels indemnity'],
            ja: ['北洋艦隊壊滅', '下関条約締結', '台湾割譲', '2億両賠償']
        }
    },
    {
        id: 'boxer-rebellion',
        coords: [39.9042, 116.4074], // 北京
        title: {
            zh: '八国联军攻占北京',
            en: 'Eight-Nation Alliance Captured Beijing',
            ja: '八カ国連合軍北京占領'
        },
        year: '1900',
        type: 'war',
        description: {
            zh: '义和团运动失败后，八国联军攻占北京，慈禧太后仓皇出逃，签订《辛丑条约》。',
            en: 'After Boxer Rebellion failed, Eight-Nation Alliance captured Beijing. Cixi fled, Boxer Protocol signed.',
            ja: '義和団運動失敗後、八カ国連合軍が北京占領。西太后逃亡、辛丑条約締結。'
        },
        consequences: {
            zh: ['赔款4.5亿两白银', '外国军队驻京', '清朝威信扫地', '国家主权丧失'],
            en: ['450 million taels indemnity', 'Foreign troops in Beijing', 'Qing prestige destroyed', 'National sovereignty lost'],
            ja: ['4.5億両賠償', '外国軍駐留', '清朝威信失墜', '国家主権喪失']
        }
    },
    {
        id: 'xinhai-wuchang',
        coords: [30.5928, 114.3055], // 武昌
        title: {
            zh: '辛亥革命起义 - 武昌',
            en: 'Xinhai Revolution - Wuchang',
            ja: '辛亥革命蜂起 - 武昌'
        },
        year: '1911',
        type: 'event',
        description: {
            zh: '1911年10月10日，武昌起义爆发，标志着辛亥革命开始，最终推翻清朝统治。',
            en: 'On October 10, 1911, Wuchang Uprising erupted, marking the start of Xinhai Revolution that overthrew Qing Dynasty.',
            ja: '1911年10月10日、武昌蜂起勃発。辛亥革命の始まりとなり、清朝を打倒。'
        },
        consequences: {
            zh: ['清朝覆灭', '中华民国成立', '结束帝制', '共和制建立'],
            en: ['Qing Dynasty ended', 'Republic of China established', 'Imperial system abolished', 'Republic founded'],
            ja: ['清朝終結', '中華民国成立', '帝政廃止', '共和制樹立']
        }
    },
    {
        id: 'may-fourth',
        coords: [39.9087, 116.3975], // 天安门
        title: {
            zh: '五四运动 - 北京天安门',
            en: 'May Fourth Movement - Tiananmen, Beijing',
            ja: '五・四運動 - 北京天安門'
        },
        year: '1919',
        type: 'event',
        description: {
            zh: '1919年5月4日，北京学生在天安门前集会，抗议巴黎和会将山东权益转让给日本。',
            en: 'On May 4, 1919, Beijing students gathered at Tiananmen to protest Versailles Treaty transferring Shandong to Japan.',
            ja: '1919年5月4日、北京の学生が天安門前で集会、ヴェルサイユ条約による山東譲渡に抗議。'
        },
        consequences: {
            zh: ['反帝爱国运动', '新文化运动高潮', '中国觉醒', '中共建党基础'],
            en: ['Anti-imperialist movement', 'New Culture Movement peak', 'Chinese awakening', 'Foundation for CCP'],
            ja: ['反帝愛国運動', '新文化運動の高まり', '中国覚醒', '中国共産党基礎']
        }
    },
    {
        id: 'nanjing-massacre',
        coords: [32.0603, 118.7969], // 南京
        title: {
            zh: '南京大屠杀',
            en: 'Nanjing Massacre',
            ja: '南京大虐殺'
        },
        year: '1937',
        type: 'war',
        description: {
            zh: '1937年12月，日军攻占南京后，进行了长达6周的大屠杀，30万中国平民和战俘遇难。',
            en: 'In December 1937, after capturing Nanjing, Japanese army conducted 6-week massacre, killing 300,000 Chinese civilians and POWs.',
            ja: '1937年12月、南京占領後、日本軍が6週間の大虐殺を実施、30万人の中国民間人と捕虜が犠牲。'
        },
        consequences: {
            zh: ['30万人遇难', '人类浩劫', '战争罪行', '民族创伤'],
            en: ['300,000 killed', 'Human catastrophe', 'War crimes', 'National trauma'],
            ja: ['30万人犠牲', '人類的災害', '戦争犯罪', '民族的傷']
        }
    },
    {
        id: 'prc-founding',
        coords: [39.9087, 116.3975], // 天安门
        title: {
            zh: '中华人民共和国成立 - 天安门',
            en: 'PRC Founded - Tiananmen',
            ja: '中華人民共和国成立 - 天安門'
        },
        year: '1949',
        type: 'event',
        description: {
            zh: '1949年10月1日，毛泽东在天安门城楼宣布中华人民共和国成立，百年国耻时代结束。',
            en: 'On October 1, 1949, Mao Zedong proclaimed founding of PRC at Tiananmen, ending Century of Humiliation.',
            ja: '1949年10月1日、毛沢東が天安門で中華人民共和国成立を宣言、屈辱の世紀終結。'
        },
        consequences: {
            zh: ['新中国诞生', '国家独立', '民族解放', '百年国耻结束'],
            en: ['New China born', 'National independence', 'National liberation', 'Century of Humiliation ended'],
            ja: ['新中国誕生', '国家独立', '民族解放', '屈辱の世紀終結']
        }
    },
    {
        id: 'tianjin-treaty',
        coords: [39.0851, 117.1996], // 天津
        title: {
            zh: '《天津条约》签订 - 天津',
            en: 'Treaty of Tientsin - Tianjin',
            ja: '天津条約 - 天津'
        },
        year: '1858',
        type: 'treaty',
        description: {
            zh: '第二次鸦片战争期间，清政府被迫与英、法、美、俄分别签订《天津条约》，开放更多口岸，允许外国公使驻京。',
            en: 'During Second Opium War, Qing forced to sign treaties with Britain, France, USA, Russia, opening more ports and allowing foreign legations in Beijing.',
            ja: '第二次アヘン戦争中、清朝が英仏米露と天津条約を締結。更なる開港と外国公使の北京駐在を許可。'
        },
        consequences: {
            zh: ['开放牛庄、登州、台湾、淡水等10处通商口岸', '外国公使可常驻北京', '外国人可到内地游历经商传教', '赔款英法各200万两白银'],
            en: ['10 more treaty ports opened', 'Foreign ministers in Beijing', 'Foreigners allowed inland travel', '2 million taels to Britain and France each'],
            ja: ['10港追加開港', '外国公使の北京常駐', '外国人の内地旅行許可', '英仏各200万両賠償']
        }
    },
    {
        id: 'guangzhou',
        coords: [23.1291, 113.2644], // 广州
        title: {
            zh: '广州十三行与对外贸易',
            en: 'Canton System & Foreign Trade',
            ja: '広州十三行と対外貿易'
        },
        year: '1757-1842',
        type: 'treaty',
        description: {
            zh: '清朝实行闭关锁国政策，只允许广州一口对外通商，由十三行垄断贸易，直到鸦片战争后被迫开放。',
            en: 'Qing implemented closed-door policy, only Canton allowed for foreign trade through Thirteen Factories, until forced open after Opium War.',
            ja: '清朝が鎖国政策実施、広州のみ対外貿易許可、十三行が独占。アヘン戦争後開港を強制される。'
        },
        consequences: {
            zh: ['限制对外贸易', '导致贸易逆差', '引发鸦片走私', '成为开放五口之一'],
            en: ['Restricted foreign trade', 'Led to trade deficit', 'Caused opium smuggling', 'Became one of five treaty ports'],
            ja: ['対外貿易制限', '貿易赤字招く', 'アヘン密輸引き起こす', '五港の一つに']
        }
    },
    {
        id: 'macau',
        coords: [22.1987, 113.5439], // 澳门
        title: {
            zh: '澳门被葡萄牙占据',
            en: 'Macau Occupied by Portugal',
            ja: 'マカオのポルトガル占領'
        },
        year: '1887',
        type: 'treaty',
        description: {
            zh: '1887年，清政府与葡萄牙签订《中葡和好通商条约》，正式承认葡萄牙对澳门的占领。',
            en: 'In 1887, Qing signed treaty with Portugal formally recognizing Portuguese occupation of Macau.',
            ja: '1887年、清朝がポルトガルとの条約でマカオ占領を正式承認。'
        },
        consequences: {
            zh: ['澳门成为葡萄牙殖民地', '失去领土主权', '直到1999年才回归', '殖民统治442年'],
            en: ['Macau became Portuguese colony', 'Lost territorial sovereignty', 'Returned in 1999', '442 years of colonial rule'],
            ja: ['マカオがポルトガル植民地に', '領土主権喪失', '1999年返還', '442年の植民統治']
        }
    },
    {
        id: 'hong-kong',
        coords: [22.3193, 114.1694], // 香港
        title: {
            zh: '香港被英国占领',
            en: 'Hong Kong Occupied by Britain',
            ja: '香港のイギリス占領'
        },
        year: '1842-1898',
        type: 'treaty',
        description: {
            zh: '通过三次不平等条约，英国先后占领香港岛、九龙半岛和新界，直到1997年香港回归中国。',
            en: 'Through three unequal treaties, Britain gradually occupied Hong Kong Island, Kowloon, and New Territories, until 1997 return to China.',
            ja: '三度の不平等条約により、イギリスが香港島、九龍、新界を占領。1997年中国返還。'
        },
        consequences: {
            zh: ['1842年割让香港岛', '1860年割让九龙半岛', '1898年租借新界99年', '1997年回归祖国'],
            en: ['1842: Hong Kong Island ceded', '1860: Kowloon ceded', '1898: New Territories leased 99 years', '1997: Returned to China'],
            ja: ['1842年香港島割譲', '1860年九龍割譲', '1898年新界99年租借', '1997年中国返還']
        }
    },
    {
        id: 'dalian',
        coords: [38.9140, 121.6147], // 大连（旅顺）
        title: {
            zh: '旅顺大连被俄日占领',
            en: 'Lushun & Dalian Occupied by Russia & Japan',
            ja: '旅順・大連の露日占領'
        },
        year: '1898-1945',
        type: 'war',
        description: {
            zh: '1898年俄国强租旅顺大连，日俄战争后日本接管，成为日本侵华基地，1945年抗战胜利后收回。',
            en: 'Russia leased Lushun-Dalian in 1898, Japan took over after Russo-Japanese War, became invasion base, recovered in 1945.',
            ja: '1898年ロシアが旅順・大連を租借、日露戦争後日本が接収、侵略基地に。1945年回収。'
        },
        consequences: {
            zh: ['俄国建立军事基地', '日本接管后加强侵略', '成为满洲国门户', '抗战胜利后收回'],
            en: ['Russian military base', 'Japanese strengthened invasion', 'Gateway to Manchuria', 'Recovered after victory'],
            ja: ['ロシア軍事基地', '日本侵略強化', '満州国への入口', '勝利後回収']
        }
    },
    {
        id: 'shenyang',
        coords: [41.8057, 123.4328], // 沈阳
        title: {
            zh: '九一八事变 - 沈阳',
            en: 'Mukden Incident - Shenyang',
            ja: '柳条湖事件 - 沈陽'
        },
        year: '1931',
        type: 'war',
        description: {
            zh: '1931年9月18日，日本关东军炸毁南满铁路，倒打一耙，攻占沈阳，开始了长达14年的侵华战争。',
            en: 'On September 18, 1931, Japanese Kwantung Army staged railway explosion, occupied Shenyang, beginning 14-year invasion of China.',
            ja: '1931年9月18日、日本関東軍が南満州鉄道を爆破、沈陽占領。14年の侵略戦争開始。'
        },
        consequences: {
            zh: ['东北三省全部治陷', '伪满洲国成立', '引发中国人民抗日', '拉开二战亚洲战场序幕'],
            en: ['Northeast China occupied', 'Manchukuo puppet state', 'Sparked Chinese resistance', 'Prelude to WWII in Asia'],
            ja: ['東北三省全面占領', '僀満州国成立', '中国人民の抗抗引き起こす', '二戦アジア戦場の幕開け']
        }
    },
    {
        id: 'xian',
        coords: [34.3416, 108.9398], // 西安
        title: {
            zh: '西安事变',
            en: 'Xi\'an Incident',
            ja: '西安事件'
        },
        year: '1936',
        type: 'event',
        description: {
            zh: '1936年12月12日，张学良、杨虎城兵谏扣留蒼介石，迫使国共两党停止内战，一致抗日。',
            en: 'On December 12, 1936, Zhang Xueliang and Yang Hucheng detained Chiang Kai-shek, forcing KMT-CCP cooperation to resist Japan.',
            ja: '1936年12月12日、張学良、楊虎城が蔣介石を拘留、国共内戦停止、一致抗日を迫る。'
        },
        consequences: {
            zh: ['国共两党第二次合作', '结束十年内战', '形成抗日民族统一战线', '改变中国命运'],
            en: ['Second KMT-CCP cooperation', 'Ended 10-year civil war', 'United front against Japan', 'Changed China\'s fate'],
            ja: ['国共第二次合作', '10年内戦終結', '抗日民族統一戦線', '中国の運命変える']
        }
    },
    {
        id: 'chongqing',
        coords: [29.5630, 106.5516], // 重庆
        title: {
            zh: '抗战首都重庆',
            en: 'Wartime Capital Chongqing',
            ja: '抗戦首都重慶'
        },
        year: '1937-1945',
        type: 'event',
        description: {
            zh: '全面抗战爆发后，国民政府迁都重庆，重庆成为战时首都，中国抗战的中枕。',
            en: 'After full-scale war began, Nationalist government moved to Chongqing, becoming wartime capital and center of Chinese resistance.',
            ja: '全面抗戦開始後、国民政府が重慶に遷都、抗戦首都、中国抗戦の中心地に。'
        },
        consequences: {
            zh: ['成为战时首都8年', '遭受日军大轰炸', '坚守抗战到底', '为抗战胜利作出贡献'],
            en: ['Wartime capital for 8 years', 'Suffered massive Japanese bombing', 'Held out until victory', 'Contributed to war victory'],
            ja: ['8年間抗戦首都', '日本軍大空袭', '最後まで抗戦', '抗戦勝利へ貢献']
        }
    },
    {
        id: 'yanan',
        coords: [36.5853, 109.4899], // 延安
        title: {
            zh: '革命圣地延安',
            en: 'Revolutionary Base Yan\'an',
            ja: '革命聖地延安'
        },
        year: '1935-1948',
        type: 'event',
        description: {
            zh: '中央红军长征到达陕北后，延安成为中共中央所在地，是中国革命的圣地。',
            en: 'After Long March, Yan\'an became CCP headquarters, the holy land of Chinese revolution.',
            ja: '長征後、延安が中共中央本拠地、中国革命の聖地に。'
        },
        consequences: {
            zh: ['中共中央所在到13年', '毛泽东思想形成地', '培养了大批革命干部', '领导全国解放战争'],
            en: ['CCP HQ for 13 years', 'Mao Zedong Thought formed', 'Trained revolutionary cadres', 'Led Liberation War'],
            ja: ['13年間中共本拠地', '毛沢東思想形成', '革命幹部育成', '解放戦争領導']
        }
    },
    {
        id: 'pingxingguan',
        coords: [39.6833, 113.5833], // 平型关
        title: {
            zh: '平型关大捷',
            en: 'Battle of Pingxingguan',
            ja: '平型関大勝'
        },
        year: '1937',
        type: 'battle',
        description: {
            zh: '1937年9月，八路军在平型关伏击日军，取得抗战以来的首次大捷，极大鼓舞了全国人民士气。',
            en: 'In September 1937, Eighth Route Army ambushed Japanese at Pingxingguan, first major victory in War of Resistance, greatly boosting morale.',
            ja: '1937年9月、八路軍が平型関で日本軍を伏撃、抗戦初の大勝利、全国民の士気大いに高まる。'
        },
        consequences: {
            zh: ['歼灭日军1000余人', '打破日军不可战胜的神话', '鼓舞全国抗日士气', '展示了共产党领导的军队力量'],
            en: ['1000+ Japanese killed', 'Shattered invincibility myth', 'Boosted national morale', 'Showed CCP military strength'],
            ja: ['1000人以上の日本軍死亡', '不敗神話破壊', '全国の士気高揚', '共産党軍事力展示']
        }
    },
    // 日本相关事件
    {
        id: 'hiroshima-nagasaki',
        coords: [34.3853, 132.4553], // 广岛
        title: {
            zh: '广岛长崎原子弹轰炸',
            en: 'Atomic Bombs on Hiroshima & Nagasaki',
            ja: '広島・長崎原爆投下'
        },
        year: '1945',
        type: 'war',
        description: {
            zh: '1945年8月6日和9日，美国对广岛和长崎投下原子弹，加速了日本的投降，中国抗战胜利。',
            en: 'On August 6 and 9, 1945, USA dropped atomic bombs on Hiroshima and Nagasaki, hastening Japan\'s surrender and China\'s victory.',
            ja: '1945年8月6日・9日、米国が広島・長崎に原爆投下、日本降伏を加速、中国抗戦勝利。'
        },
        consequences: {
            zh: ['日本8月15日宣布无条件投降', '中国抗日战争胜利', '第二次世界大战结束', '东京审判开始'],
            en: ['Japan surrendered Aug 15', 'China won War of Resistance', 'WWII ended', 'Tokyo Trials began'],
            ja: ['8月15日日本無条件降伏', '中国抗戦勝利', '第二次世界大戦終結', '東京裁判開始']
        }
    },
    {
        id: 'tokyo-trial',
        coords: [35.6762, 139.6503], // 东京
        title: {
            zh: '远东国际军事法庭 - 东京',
            en: 'Tokyo War Crimes Tribunal',
            ja: '極東国际軍事裁判 - 東京'
        },
        year: '1946-1948',
        type: 'event',
        description: {
            zh: '1946-1948年，在东京对日本甲级战犯进行审判，28名主要战犯被起诉，7人被判处绞刑。',
            en: 'From 1946-1948, Tokyo Trials prosecuted 28 Japanese Class-A war criminals, 7 executed.',
            ja: '1946-1948年、東京で日本のA級戦犯裁判。28名起訴、7名絞首刑。'
        },
        consequences: {
            zh: ['东条英机等七人被处绞刑', '为中国受害者伸张正义', '确立了战争罪行的国际法原则', '但天皇裕仁未被追究'],
            en: ['Tojo and 6 others executed', 'Justice for Chinese victims', 'Established war crime principles', 'But Emperor Hirohito not prosecuted'],
            ja: ['東條英機ら7名絞首刑', '中国被害者の正義', '戦争犯罪の国際法原則確立', '天皇裕仁は追訴されず']
        }
    },
    // 美国相关事件
    {
        id: 'san-francisco-treaty',
        coords: [37.7749, -122.4194], // 旧金山
        title: {
            zh: '旧金山和约 - 旧金山',
            en: 'San Francisco Peace Treaty',
            ja: 'サンフランシスコ講和条約'
        },
        year: '1951',
        type: 'treaty',
        description: {
            zh: '1951年在旧金山签订的对日和约，但中国未被邀请参加，严重损害了中国的战后权益。',
            en: 'Peace treaty with Japan signed in San Francisco 1951, but China was not invited, seriously damaging China\'s post-war rights.',
            ja: '1951年サンフランシスコで署名された対日講和条約、しかし中国は招待されず。'
        },
        consequences: {
            zh: ['中华民国和新中国都未参加', '日本战争赔偿问题悬而未决', '美日同盟形成', '对中国战后地位产生负面影响'],
            en: ['Neither ROC nor PRC participated', 'Japanese war reparations unresolved', 'US-Japan alliance formed', 'Negatively impacted China\'s post-war status'],
            ja: ['中華民国も新中国も不参加', '日本賠償問題未解決', '米日同盟形成', '中国戦後地位へ負の影響']
        }
    },
    {
        id: 'washington-conference',
        coords: [38.9072, -77.0369], // 华盛顿
        title: {
            zh: '华盛顿会议',
            en: 'Washington Naval Conference',
            ja: 'ワシントン会議'
        },
        year: '1921-1922',
        type: 'treaty',
        description: {
            zh: '1921-1922年在华盛顿召开的国际会议，签订《九国公约》，名义上维护了中国主权和领土完整。',
            en: 'International conference in Washington 1921-1922, signed Nine-Power Treaty, nominally maintaining China\'s sovereignty and territorial integrity.',
            ja: '1921-1922年ワシントンで開催、九ヶ国条約署名、名目上中国主権維持。'
        },
        consequences: {
            zh: ['缓和了列强在华矛盾', '但未能真正保障中国权益', '日本退出山东', '中国收回部分关税自主权'],
            en: ['Eased conflicts among powers in China', 'But failed to truly protect China\'s rights', 'Japan withdrew from Shandong', 'China regained some tariff autonomy'],
            ja: ['列強の中国での矛盾緩和', 'しかし真に中国権益保護せず', '日本山東から退出', '中国関税自主権部分回復']
        }
    },
    // 苏联相关事件
    {
        id: 'vladivostok',
        coords: [43.1332, 131.9113], // 海参崴
        title: {
            zh: '海参崴（符拉迪沃斯托克）',
            en: 'Vladivostok (Former Chinese Territory)',
            ja: 'ウラジオストク（旧中国領）'
        },
        year: '1860',
        type: 'treaty',
        description: {
            zh: '1860年《北京条约》中，俄国割占了包括海参崴（原名海参崴）在内的乌苏里江以东地区。',
            en: 'In 1860 Treaty of Beijing, Russia seized territory east of Ussuri River including Vladivostok (originally Haishenwai).',
            ja: '1860年北京条約で、ロシアがウラジオストク（原名海参崴）を含むウスリー川以東割譲。'
        },
        consequences: {
            zh: ['中国丧失乌苏里江以东40万平方公里', '俄国在太平洋获得不冻港', '海参崴改名符拉迪沃斯托克', '成为俄国远东重要港口'],
            en: ['China lost 400,000 sq km east of Ussuri', 'Russia gained ice-free Pacific port', 'Haishenwai renamed Vladivostok', 'Became Russia\'s key Far East port'],
            ja: ['中国ウスリー東方40万平方km喪失', 'ロシア太平洋不凍港獲得', '海参崴がウラジオストクに改名', 'ロシア極東重要港に']
        }
    },
    {
        id: 'yalta-conference',
        coords: [44.4952, 34.1742], // 雅尔塔
        title: {
            zh: '雅尔塔会议',
            en: 'Yalta Conference',
            ja: 'ヤルタ会談'
        },
        year: '1945',
        type: 'treaty',
        description: {
            zh: '1945年2月，美英苏三国首脑在雅尔塔会议上秘密达成协议，损害了中国在东北的权益。',
            en: 'In February 1945, US, UK, USSR leaders secretly agreed at Yalta Conference, damaging China\'s rights in Northeast.',
            ja: '1945年2月、米英ソ三国首脳がヤルタ会談で秘密協定、中国東北権益損害。'
        },
        consequences: {
            zh: ['苏联在中国东北获得特权', '外蒙古状态维持现状', '中国事先未被告知', '引发战后中苏矛盾'],
            en: ['USSR gained privileges in Northeast China', 'Outer Mongolia status maintained', 'China not informed beforehand', 'Led to post-war Sino-Soviet conflicts'],
            ja: ['ソ連が中国東北で特権獲得', '外モンゴル現状維持', '中国事前通告せず', '戦後中ソ矛盾引き起こす']
        }
    },
    {
        id: 'moscow',
        coords: [55.7558, 37.6173], // 莫斯科
        title: {
            zh: '中苏友好同盟互助条约 - 莫斯科',
            en: 'Sino-Soviet Treaty of Friendship - Moscow',
            ja: '中ソ友好同盟条約 - モスクワ'
        },
        year: '1950',
        type: 'treaty',
        description: {
            zh: '1950年2月，新中国与苏联在莫斯科签订友好同盟互助条约，结束了百年屈辱外交。',
            en: 'In February 1950, New China and USSR signed Treaty of Friendship in Moscow, ending century of humiliating diplomacy.',
            ja: '1950年2月、新中国とソ連がモスクワで友好同盟条約署名、百年屈辱外交終結。'
        },
        consequences: {
            zh: ['中国第一次以平等身份签约', '苏联承诺尊重中国主权', '中苏结盟30年', '为新中国建设提供支持'],
            en: ['China\'s first equal treaty', 'USSR promised to respect China\'s sovereignty', '30-year Sino-Soviet alliance', 'Supported New China\'s construction'],
            ja: ['中国初の対等条約', 'ソ連が中国主権尊重約束', '中ソ30年同盟', '新中国建設支援']
        }
    }
];

// 标记颜色映射
const markerColors = {
    war: '#dc2626',
    treaty: '#7c3aed',
    battle: '#ea580c',
    event: '#2563eb'
};

// 存储所有标记
let allMarkers = [];
let currentFilter = 'all';
let islandExpanded = false;

// 灵动岛功能
function toggleIsland() {
    const island = document.getElementById('dynamicIsland');
    islandExpanded = !islandExpanded;
    
    if (islandExpanded) {
        island.classList.add('expanded');
    } else {
        island.classList.remove('expanded');
    }
}

// 更新灵动岛统计
function updateIslandStats() {
    const visibleCount = allMarkers.filter(marker => {
        return marker._icon && marker._icon.style.display !== 'none';
    }).length;
    
    const currentYear = document.getElementById('yearSlider')?.value || 1949;
    
    // 更新紧凑态
    document.getElementById('islandCount').textContent = visibleCount;
    document.getElementById('islandYear').textContent = currentYear;
    
    // 更新展开态
    document.getElementById('statTotal').textContent = allMarkers.length;
    document.getElementById('statVisible').textContent = visibleCount;
    document.getElementById('statYear').textContent = currentYear;
    
    // 更新分类显示
    const categoryMap = {
        zh: { all: '全部', war: '战争', treaty: '条约', battle: '战役', event: '事件' },
        en: { all: 'All', war: 'War', treaty: 'Treaty', battle: 'Battle', event: 'Event' },
        ja: { all: 'すべて', war: '戦争', treaty: '条約', battle: '戦闘', event: '事件' }
    };
    
    document.getElementById('statCategory').textContent = categoryMap[currentLanguage][currentFilter];
}

// 随机事件
function showRandomEvent() {
    const visibleMarkers = allMarkers.filter(marker => {
        return marker._icon && marker._icon.style.display !== 'none';
    });
    
    if (visibleMarkers.length > 0) {
        const randomMarker = visibleMarkers[Math.floor(Math.random() * visibleMarkers.length)];
        map.setView(randomMarker.getLatLng(), 8, { animate: true });
        showEventInfo(randomMarker.eventData);
        
        // 关闭灵动岛
        if (islandExpanded) {
            toggleIsland();
        }
    }
}

// 重置所有筛选
function resetAllFilters() {
    // 重置分类
    currentFilter = 'all';
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');
    
    // 重置年份
    const yearSlider = document.getElementById('yearSlider');
    if (yearSlider) {
        yearSlider.value = 1949;
        document.getElementById('selectedYear').textContent = 1949;
    }
    
    // 应用筛选
    applyFilters(1949);
    updateIslandStats();
    
    // 关闭灵动岛
    if (islandExpanded) {
        toggleIsland();
    }
}

// 初始化地图
function initMap() {
    // 创建地图，中心点设在中国中部
    map = L.map('map').setView([35.0, 110.0], 5);

    // 添加地图图层（使用OpenStreetMap）
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
    }).addTo(map);

    // 添加所有事件标记
    mapEvents.forEach(event => {
        addMarker(event);
    });
}

// 添加标记
function addMarker(event) {
    const markerColor = markerColors[event.type];
    
    // 创建自定义图标
    const customIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="custom-marker" style="background: ${markerColor};"></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });

    // 创建标记
    const marker = L.marker(event.coords, { icon: customIcon }).addTo(map);
    marker.eventData = event; // 保存事件数据到标记

    // 添加工具提示
    marker.bindTooltip(event.title[currentLanguage], {
        permanent: false,
        direction: 'top'
    });

    // 点击事件
    marker.on('click', () => {
        showEventInfo(event);
        map.setView(event.coords, 8, { animate: true });
    });
    
    // 保存到数组
    allMarkers.push(marker);
}

// 显示事件信息
function showEventInfo(event) {
    const panel = document.getElementById('infoPanel');
    
    document.getElementById('eventTitle').textContent = event.title[currentLanguage];
    document.getElementById('eventYear').textContent = event.year;
    document.getElementById('eventDescription').textContent = event.description[currentLanguage];
    
    const consequencesList = document.getElementById('consequencesList');
    consequencesList.innerHTML = '';
    event.consequences[currentLanguage].forEach(consequence => {
        const li = document.createElement('li');
        li.textContent = consequence;
        consequencesList.appendChild(li);
    });
    
    panel.classList.add('active');
}

// 关闭信息面板
function closeInfoPanel() {
    document.getElementById('infoPanel').classList.remove('active');
}

// 筛选标记
function filterMarkers(category) {
    currentFilter = category;
    applyFilters();
}

// 按年份筛选
function filterByYear(maxYear) {
    applyFilters(maxYear);
}

// 应用所有筛选条件
function applyFilters(maxYear) {
    const yearLimit = maxYear || 1949;
    
    allMarkers.forEach(marker => {
        const event = marker.eventData;
        const eventYear = parseInt(event.year.split('-')[0]);
        
        const categoryMatch = currentFilter === 'all' || event.type === currentFilter;
        const yearMatch = eventYear <= yearLimit;
        
        if (categoryMatch && yearMatch) {
            marker.setOpacity(1);
            if (marker._icon) marker._icon.style.display = 'block';
        } else {
            marker.setOpacity(0);
            if (marker._icon) marker._icon.style.display = 'none';
        }
    });
    
    // 更新灵动岛统计
    updateIslandStats();
}

// 更新语言
function updateLanguage() {
    const titles = {
        zh: {
            page: '交互式历史地图 - 中国百年国耻 (1839-1949)',
            legend: '图例',
            war: '战争',
            treaty: '条约/外交',
            battle: '战役/起义',
            event: '重大事件',
            consequences: '主要后果',
            filter: '筛选',
            all: '全部',
            timeline: '时间范围',
            showUntil: '显示到:',
            reset: '重置',
            islandLabel: '事件',
            islandTitle: '地图控制中心',
            statTotalLabel: '总事件',
            statVisibleLabel: '当前显示',
            statYearLabel: '年份',
            statCategoryLabel: '分类',
            actionReset: '重置全部',
            actionRandom: '随机事件',
            actionTimeline: '时间线'
        },
        en: {
            page: 'Interactive Historical Map - China\'s Century of Humiliation (1839-1949)',
            legend: 'Legend',
            war: 'War',
            treaty: 'Treaty/Diplomacy',
            battle: 'Battle/Uprising',
            event: 'Major Event',
            consequences: 'Key Consequences',
            filter: 'Filter',
            all: 'All',
            timeline: 'Time Range',
            showUntil: 'Show until:',
            reset: 'Reset',
            islandLabel: 'Events',
            islandTitle: 'Map Control Center',
            statTotalLabel: 'Total Events',
            statVisibleLabel: 'Visible',
            statYearLabel: 'Year',
            statCategoryLabel: 'Category',
            actionReset: 'Reset All',
            actionRandom: 'Random Event',
            actionTimeline: 'Timeline'
        },
        ja: {
            page: 'インタラクティブ歴史地図 - 中国屈辱の世紀 (1839-1949)',
            legend: '凡例',
            war: '戦争',
            treaty: '条約/外交',
            battle: '戦闘/蜂起',
            event: '重大事件',
            consequences: '主な結果',
            filter: 'フィルター',
            all: 'すべて',
            timeline: '時間範囲',
            showUntil: '表示まで:',
            reset: 'リセット',
            islandLabel: 'イベント',
            islandTitle: '地図コントロール',
            statTotalLabel: '総イベント',
            statVisibleLabel: '表示中',
            statYearLabel: '年',
            statCategoryLabel: 'カテゴリ',
            actionReset: '全リセット',
            actionRandom: 'ランダム',
            actionTimeline: 'タイムライン'
        }
    };

// ...
    document.getElementById('legendTitle').textContent = titles[currentLanguage].legend;
    document.getElementById('legendWar').textContent = titles[currentLanguage].war;
    document.getElementById('legendTreaty').textContent = titles[currentLanguage].treaty;
    document.getElementById('legendBattle').textContent = titles[currentLanguage].battle;
    document.getElementById('legendEvent').textContent = titles[currentLanguage].event;
    document.getElementById('consequencesTitle').textContent = titles[currentLanguage].consequences;
    
    // 更新筛选器
    document.getElementById('filterTitle').textContent = titles[currentLanguage].filter;
    document.getElementById('filterAll').textContent = titles[currentLanguage].all;
    document.getElementById('filterWar').textContent = titles[currentLanguage].war;
    document.getElementById('filterTreaty').textContent = titles[currentLanguage].treaty;
    document.getElementById('filterBattle').textContent = titles[currentLanguage].battle;
    document.getElementById('filterEvent').textContent = titles[currentLanguage].event;
    
    // 更新时间轴滑块
    document.getElementById('timelineTitle').textContent = titles[currentLanguage].timeline;
    document.getElementById('selectedYearLabel').textContent = titles[currentLanguage].showUntil;
    document.getElementById('resetTimeline').textContent = titles[currentLanguage].reset;
    
    // 更新灵动岛
    document.getElementById('islandLabel').textContent = titles[currentLanguage].islandLabel;
    document.getElementById('islandTitle').textContent = titles[currentLanguage].islandTitle;
    document.getElementById('statTotalLabel').textContent = titles[currentLanguage].statTotalLabel;
    document.getElementById('statVisibleLabel').textContent = titles[currentLanguage].statVisibleLabel;
    document.getElementById('statYearLabel').textContent = titles[currentLanguage].statYearLabel;
    document.getElementById('statCategoryLabel').textContent = titles[currentLanguage].statCategoryLabel;
    document.getElementById('actionResetText').textContent = titles[currentLanguage].actionReset;
    document.getElementById('actionRandomText').textContent = titles[currentLanguage].actionRandom;
    document.getElementById('actionTimelineText').textContent = titles[currentLanguage].actionTimeline;
    
    // 更新统计
    updateIslandStats();

    // 重新初始化地图以更新标记提示
    if (map) {
        map.eachLayer(layer => {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });
        mapEvents.forEach(event => {
            addMarker(event);
        });
    }
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
    
    // 分类筛选
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const category = e.target.dataset.category;
            filterMarkers(category);
        });
    });
    
    // 时间轴滑块
    const yearSlider = document.getElementById('yearSlider');
    const selectedYear = document.getElementById('selectedYear');
    
    yearSlider.addEventListener('input', (e) => {
        const year = parseInt(e.target.value);
        selectedYear.textContent = year;
        filterByYear(year);
    });
    
    // 重置按钮
    document.getElementById('resetTimeline').addEventListener('click', () => {
        yearSlider.value = 1949;
        selectedYear.textContent = 1949;
        filterByYear(1949);
    });
    
    // 灵动岛事件
    document.getElementById('islandCompact').addEventListener('click', toggleIsland);
    document.getElementById('islandClose').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleIsland();
    });
    
    // 灵动岛操作按钮
    document.getElementById('actionReset').addEventListener('click', resetAllFilters);
    document.getElementById('actionRandom').addEventListener('click', showRandomEvent);
    document.getElementById('actionTimeline').addEventListener('click', () => {
        window.location.href = 'timeline-animation.html';
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    setupEventListeners();
});
