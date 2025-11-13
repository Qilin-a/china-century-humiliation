// 3D历史场景 JavaScript - Part 1
let currentLanguage = 'zh';
let scene, camera, renderer, controls;
let currentSceneIndex = 0;

// 场景数据
const scenes = [
    {
        id: 'summer-palace',
        year: '1860',
        title: {
            zh: '圆明园焚毁',
            en: 'Summer Palace Burned',
            ja: '円明園焼失'
        },
        description: {
            zh: '第二次鸦片战争中，英法联军攻入北京，焚毁被誉为"万园之园"的圆明园，这座世界园林艺术瑰宝化为废墟。',
            en: 'During Second Opium War, Anglo-French forces invaded Beijing and burned the Summer Palace, destroying this world heritage garden.',
            ja: '第二次アヘン戦争で英仏連合軍が北京侵入、"万園の園"と称された円明園を焼失。'
        },
        details: {
            zh: [
                '圆明园占地350公顷，拥有150余座建筑',
                '收藏了无数珍贵文物和艺术品',
                '英法联军洗劫3天后纵火焚烧',
                '大火持续3天3夜，万园之园化为废墟'
            ],
            en: [
                '350 hectares with 150+ buildings',
                'Countless precious artifacts and artworks',
                'Looted for 3 days then burned',
                'Fire lasted 3 days, Garden of Gardens destroyed'
            ],
            ja: [
                '350ヘクタール、150以上の建築物',
                '無数の貴重な文物と芸術品',
                '3日間略奪後に放火',
                '3日3晩の火災で万園の園は廃墟に'
            ]
        },
        color: '#dc2626'
    },
    {
        id: 'weihaiwei-battle',
        year: '1895',
        title: {
            zh: '威海卫海战',
            en: 'Battle of Weihaiwei',
            ja: '威海衛海戦'
        },
        description: {
            zh: '甲午战争中，日本海军围攻威海卫，北洋水师全军覆没，标志着洋务运动的彻底失败。',
            en: 'In First Sino-Japanese War, Japanese navy besieged Weihaiwei, Beiyang Fleet destroyed, marking Self-Strengthening failure.',
            ja: '日清戦争で日本海軍が威海衛を包囲、北洋艦隊壊滅。洋務運動の完全失敗を象徴。'
        },
        details: {
            zh: [
                '北洋水师是清朝耗资数千万两白银建立',
                '拥有当时亚洲最强大的舰队',
                '提督丁汝昌自杀殉国',
                '标志着中国海军的彻底覆灭'
            ],
            en: [
                'Beiyang Fleet cost tens of millions of taels',
                'Asia\'s most powerful fleet at the time',
                'Admiral Ding Ruchang committed suicide',
                'Marked complete destruction of Chinese navy'
            ],
            ja: [
                '北洋艦隊は数千万両の費用で建設',
                '当時アジア最強の艦隊',
                '提督丁汝昌自決',
                '中国海軍の完全壊滅を象徴'
            ]
        },
        color: '#3b82f6'
    },
    {
        id: 'eight-nations',
        year: '1900',
        title: {
            zh: '八国联军攻占北京',
            en: 'Eight Nations Captured Beijing',
            ja: '八カ国連合軍北京占領'
        },
        description: {
            zh: '义和团运动失败后，八国联军攻占北京城，慈禧太后仓皇西逃，签订《辛丑条约》，中国完全沦为半殖民地。',
            en: 'After Boxer Rebellion, Eight-Nation Alliance captured Beijing. Cixi fled, Boxer Protocol signed, China fully semi-colonized.',
            ja: '義和団運動失敗後、八カ国連合軍が北京占領。西太后逃亡、辛丑条約締結、中国完全半植民地化。'
        },
        details: {
            zh: [
                '八国联军包括英、美、俄、日、法、德、意、奥',
                '占领北京后大肆烧杀抢掠',
                '赔款4.5亿两白银，史上最大',
                '允许外国军队永久驻扎北京'
            ],
            en: [
                'Eight nations: Britain, USA, Russia, Japan, France, Germany, Italy, Austria',
                'Massive looting and killing after occupation',
                '450 million taels indemnity, largest in history',
                'Foreign troops permanently stationed in Beijing'
            ],
            ja: [
                '八カ国：英米露日仏独伊墺',
                '占領後の大規模な略奪と殺戮',
                '4.5億両賠償、史上最大',
                '外国軍隊の北京永久駐留許可'
            ]
        },
        color: '#7c3aed'
    },
    {
        id: 'wuchang-uprising',
        year: '1911',
        title: {
            zh: '武昌起义',
            en: 'Wuchang Uprising',
            ja: '武昌起義'
        },
        description: {
            zh: '1911年10月10日，革命党人在武昌发动起义，打响了辛亥革命第一枪，最终推翻了清朝统治。',
            en: 'On October 10, 1911, revolutionaries launched uprising in Wuchang, first shot of Xinhai Revolution, eventually overthrowing Qing.',
            ja: '1911年10月10日、革命家が武昌で蜂起。辛亥革命の火蓋を切り、最終的に清朝を打倒。'
        },
        details: {
            zh: [
                '起义由新军工程第八营首先发动',
                '一夜之间占领武昌全城',
                '各省纷纷响应宣布独立',
                '三个月内推翻清朝统治'
            ],
            en: [
                'Started by 8th Engineering Battalion',
                'Wuchang captured overnight',
                'Provinces declared independence',
                'Qing overthrown in three months'
            ],
            ja: [
                '工兵第八営が最初に蜂起',
                '一夜で武昌全市占領',
                '各省が呼応し独立宣言',
                '3ヶ月で清朝打倒'
            ]
        },
        color: '#dc2626'
    },
    {
        id: 'founding-ceremony',
        year: '1949',
        title: {
            zh: '开国大典',
            en: 'Founding Ceremony',
            ja: '建国式典'
        },
        description: {
            zh: '1949年10月1日下午3时，毛泽东在天安门城楼庄严宣告：中华人民共和国中央人民政府今天成立了！中国人民从此站起来了！',
            en: 'At 3 PM on October 1, 1949, Mao Zedong solemnly proclaimed at Tiananmen: The Central People\'s Government of PRC is established today! Chinese people have stood up!',
            ja: '1949年10月1日午後3時、毛沢東が天安門で厳かに宣言：中華人民共和国中央人民政府は今日成立した！中国人民は立ち上がった！'
        },
        details: {
            zh: [
                '30万军民在天安门广场参加典礼',
                '毛泽东亲自按动电钮升起第一面五星红旗',
                '54门礼炮齐鸣28响',
                '标志着百年国耻的彻底终结'
            ],
            en: [
                '300,000 people attended at Tiananmen Square',
                'Mao personally pressed button to raise first five-star red flag',
                '54 cannons fired 28 salutes',
                'Marked complete end of Century of Humiliation'
            ],
            ja: [
                '30万人が天安門広場で式典参加',
                '毛沢東自ら最初の五星紅旗を掲揚',
                '54門の礼砲が28発',
                '屈辱の世紀の完全終結を象徴'
            ]
        },
        color: '#dc2626'
    },
    {
        id: 'nanjing-treaty',
        year: '1842',
        title: {
            zh: '南京条约签订',
            en: 'Treaty of Nanjing',
            ja: '南京条約締結'
        },
        description: {
            zh: '1842年8月29日，清政府在南京下关江面的英国军舰上签订《南京条约》，这是中国近代史上第一个不平等条约。',
            en: 'On August 29, 1842, Qing government signed Treaty of Nanjing on British warship, the first unequal treaty in modern Chinese history.',
            ja: '1842年8月29日、清朝政府が南京で英国軍艦上で南京条約を締結、中国近代史上初の不平等条約。'
        },
        details: {
            zh: [
                '割让香港岛给英国',
                '赔款2100万银元',
                '开放广州、厦门、福州、宁波、上海五口通商',
                '中国开始沦为半殖民地半封建社会'
            ],
            en: [
                'Ceded Hong Kong Island to Britain',
                'Indemnity of 21 million silver dollars',
                'Opened 5 treaty ports: Guangzhou, Xiamen, Fuzhou, Ningbo, Shanghai',
                'China began to become semi-colonial and semi-feudal'
            ],
            ja: [
                '香港島を英国に割譲',
                '2100万銀元の賠償',
                '広州、厦門、福州、寧波、上海の5港開港',
                '中国が半植民地半封建社会へ'
            ]
        },
        color: '#7c3aed'
    },
    {
        id: 'nanjing-massacre',
        year: '1937',
        title: {
            zh: '南京大屠杀',
            en: 'Nanjing Massacre',
            ja: '南京大虐殺'
        },
        description: {
            zh: '1937年12月13日，日军攻占南京后进行了长达6周的大屠杀，30万中国平民和战俘惨遭杀害。',
            en: 'On December 13, 1937, Japanese army occupied Nanjing and conducted 6-week massacre, killing 300,000 Chinese civilians and POWs.',
            ja: '1937年12月13日、日本軍が南京占領後6週間の大虐殺、30万人の中国人民間人と捕虜が殺害された。'
        },
        details: {
            zh: [
                '30万人遇难，是二战中最惨烈的暴行之一',
                '大规模强奸、抢劫、纵火',
                '国际安全区保护了约25万难民',
                '战后东京审判确认此罪行'
            ],
            en: [
                '300,000 killed, one of WWII\'s worst atrocities',
                'Mass rape, looting, arson',
                'International Safety Zone protected 250,000 refugees',
                'Tokyo Trials confirmed this crime'
            ],
            ja: [
                '30万人犠牲、第二次大戦最悪の残虐行為の一つ',
                '大規模な強姦、略奪、放火',
                '国際安全区が約25万人の難民保護',
                '戦後東京裁判でこの罪確認'
            ]
        },
        color: '#dc2626'
    },
    {
        id: 'september-18',
        year: '1931',
        title: {
            zh: '九一八事变',
            en: 'September 18 Incident',
            ja: '九・一八事変'
        },
        description: {
            zh: '1931年9月18日夜，日本关东军炸毁沈阳柳条湖铁路，嫁祸中国军队，以此为借口发动侵华战争。',
            en: 'On night of September 18, 1931, Japanese Kwantung Army bombed Shenyang railway, blamed Chinese army, used as pretext to invade China.',
            ja: '1931年9月18日夜、日本関東軍が瀋陽柳条湖鉄道を爆破、中国軍に罪を着せ、侵華戦争の口実に。'
        },
        details: {
            zh: [
                '日军4个多月占领东北三省',
                '建立伪满洲国傀儡政权',
                '中国开始14年抗日战争',
                '国际联盟调查但未能制止日本'
            ],
            en: [
                'Japanese occupied 3 Northeast provinces in 4 months',
                'Established puppet state Manchukuo',
                'China began 14-year War of Resistance',
                'League of Nations investigated but failed to stop Japan'
            ],
            ja: [
                '日本軍が4ヶ月で東北三省占領',
                '傀儡政権満州国樹立',
                '中国14年抗日戦争開始',
                '国際連盟調査も日本阻止できず'
            ]
        },
        color: '#ea580c'
    },
    {
        id: 'may-fourth',
        year: '1919',
        title: {
            zh: '五四运动',
            en: 'May Fourth Movement',
            ja: '五・四運動'
        },
        description: {
            zh: '1919年5月4日，北京学生发起爱国运动，抗议巴黎和会将德国在山东的权益转让给日本，掀起反帝反封建浪潮。',
            en: 'On May 4, 1919, Beijing students launched patriotic movement, protesting Paris Peace Conference\'s transfer of German rights in Shandong to Japan.',
            ja: '1919年5月4日、北京学生が愛国運動発起、パリ講和会議でドイツの山東権益が日本に移譲されることに抗議。'
        },
        details: {
            zh: [
                '3000多名学生在天安门前集会',
                '提出"外争主权、内除国贼"口号',
                '引发全国罢工罢课罢市',
                '促进了马克思主义在中国的传播'
            ],
            en: [
                '3,000+ students gathered at Tiananmen',
                'Slogan: "Fight for sovereignty abroad, punish traitors at home"',
                'Triggered nationwide strikes',
                'Promoted spread of Marxism in China'
            ],
            ja: [
                '3000人以上の学生が天安門前に集結',
                'スローガン：「外に主権を争い、内に国賊を除く」',
                '全国的なストライキ引き起こす',
                '中国でのマルクス主義普及促進'
            ]
        },
        color: '#2563eb'
    }
];

// 初始化3D场景
function init() {
    const container = document.getElementById('canvas-container');
    
    // 创建场景
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);
    scene.fog = new THREE.Fog(0x0f172a, 10, 50);
    
    // 创建相机
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 5, 15);
    
    // 创建渲染器
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    
    // 添加光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0x3b82f6, 1, 50);
    pointLight.position.set(0, 10, 0);
    scene.add(pointLight);
    
    // 添加地面
    const groundGeometry = new THREE.PlaneGeometry(50, 50);
    const groundMaterial = new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        roughness: 0.8,
        metalness: 0.2
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);
    
    // 添加网格辅助线
    const gridHelper = new THREE.GridHelper(50, 50, 0x3b82f6, 0x334155);
    scene.add(gridHelper);
    
    // 加载第一个场景
    loadScene(0);
    
    // 设置事件监听
    setupEventListeners();
    
    // 开始动画循环
    animate();
    
    // 隐藏加载提示
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 1000);
}

// Part 2: 场景加载和对象创建

// 加载场景
function loadScene(index) {
    currentSceneIndex = index;
    const sceneData = scenes[index];
    
    // 清除所有场景对象（保留基础光源和地面）
    const objectsToRemove = [];
    scene.children.forEach(child => {
        // 保留环境光、定向光、地面和网格
        if (child instanceof THREE.AmbientLight || 
            child instanceof THREE.DirectionalLight ||
            (child instanceof THREE.Mesh && child.geometry instanceof THREE.PlaneGeometry && child.rotation.x < 0) ||
            (child instanceof THREE.GridHelper)) {
            return;
        }
        objectsToRemove.push(child);
    });
    objectsToRemove.forEach(obj => {
        scene.remove(obj);
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
            if (Array.isArray(obj.material)) {
                obj.material.forEach(m => m.dispose());
            } else {
                obj.material.dispose();
            }
        }
    });
    
    // 重置雾效
    scene.fog = new THREE.Fog(0x0f172a, 10, 50);
    
    // 根据场景创建不同的3D对象
    switch(sceneData.id) {
        case 'summer-palace':
            createSummerPalaceScene();
            break;
        case 'weihaiwei-battle':
            createNavalBattleScene();
            break;
        case 'eight-nations':
            createBeijingScene();
            break;
        case 'wuchang-uprising':
            createUprisingScene();
            break;
        case 'founding-ceremony':
            createFoundingScene();
            break;
        case 'nanjing-treaty':
            createNanjingTreatyScene();
            break;
        case 'nanjing-massacre':
            createNanjingMassacreScene();
            break;
        case 'september-18':
            createSeptember18Scene();
            break;
        case 'may-fourth':
            createMayFourthScene();
            break;
    }
    
    // 更新UI
    updateSceneInfo(sceneData);
    updateSceneList();
}

// 创建圆明园场景
function createSummerPalaceScene() {
    // 主殿残骸 - 使用组合几何体创建更真实的建筑
    const palaceGroup = new THREE.Group();
    
    // 石柱基座
    for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 6;
        
        // 石柱
        const pillarGeometry = new THREE.CylinderGeometry(0.3, 0.35, 4, 8);
        const pillarMaterial = new THREE.MeshStandardMaterial({
            color: 0x9ca3af,
            roughness: 0.8,
            metalness: 0.1
        });
        const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
        pillar.position.set(
            Math.cos(angle) * radius,
            2,
            Math.sin(angle) * radius
        );
        pillar.castShadow = true;
        pillar.receiveShadow = true;
        
        // 部分柱子倾斜或断裂
        if (Math.random() > 0.5) {
            pillar.rotation.z = (Math.random() - 0.5) * 0.5;
            pillar.position.y = Math.random() * 1.5 + 0.5;
        }
        
        palaceGroup.add(pillar);
        
        // 柱头装饰
        const capitalGeometry = new THREE.BoxGeometry(0.6, 0.3, 0.6);
        const capital = new THREE.Mesh(capitalGeometry, pillarMaterial);
        capital.position.set(
            pillar.position.x,
            pillar.position.y + 2.2,
            pillar.position.z
        );
        capital.castShadow = true;
        palaceGroup.add(capital);
    }
    
    scene.add(palaceGroup);
    
    // 废墟碎片
    for (let i = 0; i < 20; i++) {
        const size = Math.random() * 0.8 + 0.3;
        const debrisGeometry = new THREE.BoxGeometry(
            size,
            size * (Math.random() * 0.5 + 0.5),
            size * (Math.random() * 0.5 + 0.5)
        );
        const debrisMaterial = new THREE.MeshStandardMaterial({
            color: Math.random() > 0.5 ? 0x8b7355 : 0x9ca3af,
            roughness: 0.9,
            metalness: 0.05
        });
        const debris = new THREE.Mesh(debrisGeometry, debrisMaterial);
        debris.position.set(
            (Math.random() - 0.5) * 15,
            size / 2,
            (Math.random() - 0.5) * 15
        );
        debris.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );
        debris.castShadow = true;
        debris.receiveShadow = true;
        scene.add(debris);
    }
    
    // 断壁残垣
    for (let i = 0; i < 5; i++) {
        const wallGeometry = new THREE.BoxGeometry(
            Math.random() * 4 + 2,
            Math.random() * 3 + 1,
            0.5
        );
        const wallMaterial = new THREE.MeshStandardMaterial({
            color: 0xd4a574,
            roughness: 0.85,
            metalness: 0.1
        });
        const wall = new THREE.Mesh(wallGeometry, wallMaterial);
        wall.position.set(
            (Math.random() - 0.5) * 18,
            wall.geometry.parameters.height / 2,
            (Math.random() - 0.5) * 18
        );
        wall.rotation.y = Math.random() * Math.PI;
        // 部分墙体倾斜
        if (Math.random() > 0.6) {
            wall.rotation.z = (Math.random() - 0.5) * 0.4;
        }
        wall.castShadow = true;
        wall.receiveShadow = true;
        scene.add(wall);
    }
    
    // 火焰效果 - 动态光源
    for (let i = 0; i < 8; i++) {
        const fireLight = new THREE.PointLight(0xff4400, 3, 12);
        fireLight.position.set(
            (Math.random() - 0.5) * 18,
            Math.random() * 2 + 1,
            (Math.random() - 0.5) * 18
        );
        fireLight.castShadow = true;
        fireLight.userData.flickerSpeed = Math.random() * 2 + 1;
        fireLight.userData.initialIntensity = fireLight.intensity;
        scene.add(fireLight);
        
        // 火焰粒子（用发光球体模拟）
        const fireGeometry = new THREE.SphereGeometry(0.5, 8, 8);
        const fireMaterial = new THREE.MeshBasicMaterial({
            color: 0xff6600,
            transparent: true,
            opacity: 0.8
        });
        const fireSphere = new THREE.Mesh(fireGeometry, fireMaterial);
        fireSphere.position.copy(fireLight.position);
        fireSphere.userData.isFlame = true;
        scene.add(fireSphere);
        
        // 烟雾效果
        const smokeGeometry = new THREE.SphereGeometry(1, 8, 8);
        const smokeMaterial = new THREE.MeshBasicMaterial({
            color: 0x333333,
            transparent: true,
            opacity: 0.3
        });
        const smoke = new THREE.Mesh(smokeGeometry, smokeMaterial);
        smoke.position.set(
            fireLight.position.x,
            fireLight.position.y + 2,
            fireLight.position.z
        );
        smoke.userData.isSmoke = true;
        scene.add(smoke);
    }
    
    // 环境雾效果增强
    scene.fog = new THREE.FogExp2(0x1a1410, 0.02);
}

// 创建海战场景
function createNavalBattleScene() {
    // 创建波浪海面
    const waterGeometry = new THREE.PlaneGeometry(50, 50, 32, 32);
    const waterMaterial = new THREE.MeshStandardMaterial({
        color: 0x2563eb,
        roughness: 0.2,
        metalness: 0.6,
        transparent: true,
        opacity: 0.9
    });
    const water = new THREE.Mesh(waterGeometry, waterMaterial);
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0;
    water.receiveShadow = true;
    water.userData.isWater = true;
    scene.add(water);
    
    // 创建北洋舰队军舰（中国）
    const createWarship = (x, z, isChinese) => {
        const shipGroup = new THREE.Group();
        
        // 舰体
        const hullGeometry = new THREE.BoxGeometry(4, 1.2, 1.8);
        const hullMaterial = new THREE.MeshStandardMaterial({
            color: isChinese ? 0x4a5568 : 0x1e293b,
            roughness: 0.7,
            metalness: 0.5
        });
        const hull = new THREE.Mesh(hullGeometry, hullMaterial);
        hull.position.y = 0.6;
        hull.castShadow = true;
        hull.receiveShadow = true;
        shipGroup.add(hull);
        
        // 甲板
        const deckGeometry = new THREE.BoxGeometry(3.8, 0.2, 1.6);
        const deckMaterial = new THREE.MeshStandardMaterial({
            color: 0x8b7355,
            roughness: 0.9
        });
        const deck = new THREE.Mesh(deckGeometry, deckMaterial);
        deck.position.y = 1.3;
        deck.castShadow = true;
        shipGroup.add(deck);
        
        // 舰桥
        const bridgeGeometry = new THREE.BoxGeometry(1.5, 1, 1);
        const bridge = new THREE.Mesh(bridgeGeometry, hullMaterial);
        bridge.position.set(0, 2, 0);
        bridge.castShadow = true;
        shipGroup.add(bridge);
        
        // 烟囱
        const stackGeometry = new THREE.CylinderGeometry(0.3, 0.35, 1.5, 8);
        const stackMaterial = new THREE.MeshStandardMaterial({
            color: 0x1a1a1a,
            roughness: 0.8
        });
        const stack1 = new THREE.Mesh(stackGeometry, stackMaterial);
        stack1.position.set(-0.8, 2.5, 0);
        stack1.castShadow = true;
        shipGroup.add(stack1);
        
        const stack2 = stack1.clone();
        stack2.position.set(0.8, 2.5, 0);
        shipGroup.add(stack2);
        
        // 烟雾效果
        const smokeGeometry = new THREE.SphereGeometry(0.4, 8, 8);
        const smokeMaterial = new THREE.MeshBasicMaterial({
            color: 0x666666,
            transparent: true,
            opacity: 0.4
        });
        const smoke1 = new THREE.Mesh(smokeGeometry, smokeMaterial);
        smoke1.position.set(-0.8, 3.5, 0);
        smoke1.userData.isSmoke = true;
        shipGroup.add(smoke1);
        
        const smoke2 = smoke1.clone();
        smoke2.position.set(0.8, 3.5, 0);
        smoke2.userData.isSmoke = true;
        shipGroup.add(smoke2);
        
        // 火炮
        for (let i = 0; i < 3; i++) {
            const cannonGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 8);
            const cannonMaterial = new THREE.MeshStandardMaterial({
                color: 0x2a2a2a,
                metalness: 0.8,
                roughness: 0.3
            });
            const cannon = new THREE.Mesh(cannonGeometry, cannonMaterial);
            cannon.rotation.z = Math.PI / 2;
            cannon.position.set(-1 + i * 1, 1.5, 0.9);
            shipGroup.add(cannon);
        }
        
        shipGroup.position.set(x, 0.5, z);
        shipGroup.userData.isShip = true;
        shipGroup.userData.bobSpeed = Math.random() + 0.5;
        scene.add(shipGroup);
        
        return shipGroup;
    };
    
    // 北洋舰队（中国，3艘）
    createWarship(-8, -6, true);
    createWarship(0, -7, true);
    createWarship(8, -6, true);
    
    // 日本舰队（4艘）
    createWarship(-10, 6, false);
    createWarship(-3, 7, false);
    createWarship(4, 7, false);
    createWarship(10, 6, false);
    
    // 炮火效果
    for (let i = 0; i < 6; i++) {
        const explosionLight = new THREE.PointLight(0xff8800, 2, 8);
        explosionLight.position.set(
            (Math.random() - 0.5) * 20,
            1,
            (Math.random() - 0.5) * 10
        );
        explosionLight.userData.isExplosion = true;
        explosionLight.userData.flickerSpeed = Math.random() * 3 + 2;
        scene.add(explosionLight);
        
        // 爆炸球
        const explosionGeometry = new THREE.SphereGeometry(0.6, 8, 8);
        const explosionMaterial = new THREE.MeshBasicMaterial({
            color: 0xff6600,
            transparent: true,
            opacity: 0.7
        });
        const explosion = new THREE.Mesh(explosionGeometry, explosionMaterial);
        explosion.position.copy(explosionLight.position);
        explosion.userData.isExplosion = true;
        scene.add(explosion);
    }
    
    // 环境雾效果
    scene.fog = new THREE.Fog(0x0f172a, 15, 40);
}

// 创建北京城场景
function createBeijingScene() {
    // 主城墙
    const wallGeometry = new THREE.BoxGeometry(35, 6, 3);
    const wallMaterial = new THREE.MeshStandardMaterial({
        color: 0x8b7355,
        roughness: 0.85,
        metalness: 0.1
    });
    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
    wall.position.y = 3;
    wall.position.z = -12;
    wall.castShadow = true;
    wall.receiveShadow = true;
    scene.add(wall);
    
    // 城墙垡楼
    for (let i = 0; i < 5; i++) {
        const towerGeometry = new THREE.BoxGeometry(2.5, 4, 2.5);
        const tower = new THREE.Mesh(towerGeometry, wallMaterial);
        tower.position.set(
            -15 + i * 7.5,
            5,
            -12
        );
        tower.castShadow = true;
        scene.add(tower);
        
        // 垡楼屏顶
        const roofGeometry = new THREE.ConeGeometry(2, 1.5, 4);
        const roofMaterial = new THREE.MeshStandardMaterial({
            color: 0x8b4513,
            roughness: 0.7
        });
        const roof = new THREE.Mesh(roofGeometry, roofMaterial);
        roof.position.set(tower.position.x, 7.5, tower.position.z);
        roof.rotation.y = Math.PI / 4;
        roof.castShadow = true;
        scene.add(roof);
    }
    
    // 主城门
    const gateGeometry = new THREE.BoxGeometry(5, 5, 3);
    const gateMaterial = new THREE.MeshStandardMaterial({
        color: 0x4a3728,
        roughness: 0.9
    });
    const gate = new THREE.Mesh(gateGeometry, gateMaterial);
    gate.position.y = 2.5;
    gate.position.z = -10.5;
    gate.castShadow = true;
    scene.add(gate);
    
    // 门楼
    const gateHouseGeometry = new THREE.BoxGeometry(6, 3, 4);
    const gateHouse = new THREE.Mesh(gateHouseGeometry, wallMaterial);
    gateHouse.position.set(0, 6.5, -10.5);
    gateHouse.castShadow = true;
    scene.add(gateHouse);
    
    // 门楼屋顶
    const gateRoofGeometry = new THREE.BoxGeometry(7, 0.5, 5);
    const gateRoofMaterial = new THREE.MeshStandardMaterial({
        color: 0xdc2626,
        roughness: 0.6
    });
    const gateRoof = new THREE.Mesh(gateRoofGeometry, gateRoofMaterial);
    gateRoof.position.set(0, 8.5, -10.5);
    gateRoof.castShadow = true;
    scene.add(gateRoof);
    
    // 城内建筑群
    const buildings = [];
    for (let i = 0; i < 12; i++) {
        const width = Math.random() * 2 + 1.5;
        const height = Math.random() * 5 + 3;
        const depth = Math.random() * 2 + 1.5;
        
        const buildingGeometry = new THREE.BoxGeometry(width, height, depth);
        const buildingMaterial = new THREE.MeshStandardMaterial({
            color: Math.random() > 0.5 ? 0xd4a574 : 0xa0826d,
            roughness: 0.8,
            metalness: 0.1
        });
        const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
        building.position.x = (Math.random() - 0.5) * 28;
        building.position.y = height / 2;
        building.position.z = (Math.random() - 0.5) * 10 - 2;
        building.castShadow = true;
        building.receiveShadow = true;
        scene.add(building);
        buildings.push(building);
        
        // 屋顶
        const roofGeometry = new THREE.ConeGeometry(width * 0.7, 1, 4);
        const roofMaterial2 = new THREE.MeshStandardMaterial({
            color: 0x8b4513,
            roughness: 0.7
        });
        const roof = new THREE.Mesh(roofGeometry, roofMaterial2);
        roof.position.set(
            building.position.x,
            building.position.y + height / 2 + 0.5,
            building.position.z
        );
        roof.rotation.y = Math.PI / 4;
        roof.castShadow = true;
        scene.add(roof);
    }
    
    // 八国联军旗帜
    const flagColors = [0xff0000, 0x0055a4, 0xffffff, 0x000000, 0xffd700];
    for (let i = 0; i < 8; i++) {
        const poleGeometry = new THREE.CylinderGeometry(0.08, 0.08, 4);
        const poleMaterial = new THREE.MeshStandardMaterial({ color: 0x4a4a4a });
        const pole = new THREE.Mesh(poleGeometry, poleMaterial);
        pole.position.set(
            (Math.random() - 0.5) * 25,
            2,
            (Math.random() - 0.5) * 8
        );
        pole.castShadow = true;
        scene.add(pole);
        
        const flagGeometry = new THREE.PlaneGeometry(1.2, 0.8);
        const flagMaterial = new THREE.MeshStandardMaterial({
            color: flagColors[i % flagColors.length],
            side: THREE.DoubleSide
        });
        const flag = new THREE.Mesh(flagGeometry, flagMaterial);
        flag.position.set(
            pole.position.x + 0.6,
            3.5,
            pole.position.z
        );
        flag.userData.isFlag = true;
        scene.add(flag);
    }
    
    // 火光效果（被攻陷的场景）
    for (let i = 0; i < 4; i++) {
        const fireLight = new THREE.PointLight(0xff4400, 2, 10);
        fireLight.position.set(
            (Math.random() - 0.5) * 20,
            2,
            (Math.random() - 0.5) * 8
        );
        fireLight.castShadow = true;
        fireLight.userData.flickerSpeed = Math.random() * 2 + 1;
        scene.add(fireLight);
    }
    
    scene.fog = new THREE.Fog(0x0f172a, 10, 45);
}

// 创建起义场景
function createUprisingScene() {
    // 武昌楚望台军械库
    const arsenalGeometry = new THREE.BoxGeometry(12, 5, 8);
    const arsenalMaterial = new THREE.MeshStandardMaterial({
        color: 0x5a5a5a,
        roughness: 0.8,
        metalness: 0.2
    });
    const arsenal = new THREE.Mesh(arsenalGeometry, arsenalMaterial);
    arsenal.position.set(0, 2.5, -10);
    arsenal.castShadow = true;
    arsenal.receiveShadow = true;
    scene.add(arsenal);
    
    // 屋顶
    const roofGeometry = new THREE.BoxGeometry(13, 0.5, 9);
    const roofMaterial = new THREE.MeshStandardMaterial({
        color: 0x8b4513,
        roughness: 0.7
    });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.set(0, 5.5, -10);
    roof.castShadow = true;
    scene.add(roof);
    
    // 起义军旗帜（18星旗）
    for (let i = 0; i < 7; i++) {
        const poleGeometry = new THREE.CylinderGeometry(0.12, 0.12, 7);
        const poleMaterial = new THREE.MeshStandardMaterial({
            color: 0x8b4513,
            roughness: 0.8
        });
        const pole = new THREE.Mesh(poleGeometry, poleMaterial);
        pole.position.set((i - 3) * 4, 3.5, 2);
        pole.castShadow = true;
        scene.add(pole);
        
        // 革命旗帜
        const flagGeometry = new THREE.PlaneGeometry(2.4, 1.6);
        const flagMaterial = new THREE.MeshStandardMaterial({
            color: 0xdc2626,
            side: THREE.DoubleSide,
            roughness: 0.6
        });
        const flag = new THREE.Mesh(flagGeometry, flagMaterial);
        flag.position.set(pole.position.x + 1.2, 6, pole.position.z);
        flag.userData.isFlag = true;
        scene.add(flag);
        
        // 旗帜上的星星装饰
        const starGeometry = new THREE.SphereGeometry(0.15, 8, 8);
        const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
        for (let j = 0; j < 3; j++) {
            const star = new THREE.Mesh(starGeometry, starMaterial);
            star.position.set(
                flag.position.x + (Math.random() - 0.5) * 1.5,
                flag.position.y + (Math.random() - 0.5) * 1,
                flag.position.z + 0.05
            );
            scene.add(star);
        }
    }
    
    // 起义士兵（用简单几何体表示人群）
    for (let i = 0; i < 15; i++) {
        const soldierGeometry = new THREE.CylinderGeometry(0.3, 0.2, 1.5);
        const soldierMaterial = new THREE.MeshStandardMaterial({
            color: Math.random() > 0.5 ? 0x4a5568 : 0x6b7280
        });
        const soldier = new THREE.Mesh(soldierGeometry, soldierMaterial);
        soldier.position.set(
            (Math.random() - 0.5) * 18,
            0.75,
            (Math.random() - 0.5) * 10 + 5
        );
        soldier.castShadow = true;
        scene.add(soldier);
        
        // 头部
        const headGeometry = new THREE.SphereGeometry(0.25, 8, 8);
        const head = new THREE.Mesh(headGeometry, soldierMaterial);
        head.position.set(
            soldier.position.x,
            soldier.position.y + 1,
            soldier.position.z
        );
        head.castShadow = true;
        scene.add(head);
    }
    
    // 火把照明
    for (let i = 0; i < 6; i++) {
        const torchLight = new THREE.PointLight(0xffa500, 2, 8);
        torchLight.position.set(
            (i - 2.5) * 5,
            3,
            0
        );
        torchLight.castShadow = true;
        torchLight.userData.flickerSpeed = Math.random() + 0.5;
        scene.add(torchLight);
        
        // 火把视觉效果
        const torchGeometry = new THREE.SphereGeometry(0.3, 8, 8);
        const torchMaterial = new THREE.MeshBasicMaterial({
            color: 0xff6600,
            transparent: true,
            opacity: 0.8
        });
        const torch = new THREE.Mesh(torchGeometry, torchMaterial);
        torch.position.copy(torchLight.position);
        torch.userData.isFlame = true;
        scene.add(torch);
    }
    
    scene.fog = new THREE.Fog(0x0f172a, 12, 40);
}

// 创建开国大典场景
function createFoundingScene() {
    // 天安门城楼主体
    const gateGeometry = new THREE.BoxGeometry(24, 6, 5);
    const gateMaterial = new THREE.MeshStandardMaterial({
        color: 0xdc2626,
        roughness: 0.6,
        metalness: 0.2
    });
    const gate = new THREE.Mesh(gateGeometry, gateMaterial);
    gate.position.set(0, 3, -12);
    gate.castShadow = true;
    gate.receiveShadow = true;
    scene.add(gate);
    
    // 城楼多层屋檐
    const roofLayers = 3;
    for (let i = 0; i < roofLayers; i++) {
        const roofGeometry = new THREE.BoxGeometry(
            26 - i * 2,
            0.4,
            6 - i * 0.5
        );
        const roofMaterial = new THREE.MeshStandardMaterial({
            color: 0xfbbf24,
            roughness: 0.5,
            metalness: 0.3
        });
        const roof = new THREE.Mesh(roofGeometry, roofMaterial);
        roof.position.set(0, 6.5 + i * 0.8, -12);
        roof.castShadow = true;
        scene.add(roof);
    }
    
    // 城楼柱子
    for (let i = 0; i < 11; i++) {
        const pillarGeometry = new THREE.CylinderGeometry(0.3, 0.35, 5);
        const pillarMaterial = new THREE.MeshStandardMaterial({
            color: 0xdc2626,
            roughness: 0.7
        });
        const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
        pillar.position.set(-10 + i * 2, 2.5, -11);
        pillar.castShadow = true;
        scene.add(pillar);
    }
    
    // 国旗旗杆
    const flagPoleGeometry = new THREE.CylinderGeometry(0.25, 0.25, 12);
    const flagPoleMaterial = new THREE.MeshStandardMaterial({
        color: 0xffd700,
        roughness: 0.3,
        metalness: 0.8
    });
    const flagPole = new THREE.Mesh(flagPoleGeometry, flagPoleMaterial);
    flagPole.position.set(-8, 6, 8);
    flagPole.castShadow = true;
    scene.add(flagPole);
    
    // 五星红旗
    const flagGeometry = new THREE.PlaneGeometry(5, 3.5);
    const flagMaterial = new THREE.MeshStandardMaterial({
        color: 0xde2910,
        side: THREE.DoubleSide,
        roughness: 0.5
    });
    const flag = new THREE.Mesh(flagGeometry, flagMaterial);
    flag.position.set(-5.5, 10, 8);
    flag.userData.isFlag = true;
    scene.add(flag);
    
    // 五角星
    const starGeometry = new THREE.CircleGeometry(0.5, 5);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffde00 });
    const bigStar = new THREE.Mesh(starGeometry, starMaterial);
    bigStar.position.set(-6.5, 11, 8.1);
    scene.add(bigStar);
    
    // 四颗小星
    for (let i = 0; i < 4; i++) {
        const smallStar = new THREE.Mesh(
            new THREE.CircleGeometry(0.25, 5),
            starMaterial
        );
        smallStar.position.set(
            -5 + (i % 2) * 0.6,
            11.5 - Math.floor(i / 2) * 0.6,
            8.1
        );
        scene.add(smallStar);
    }
    
    // 观礼台（用几何体表示人群）
    for (let i = 0; i < 30; i++) {
        const personGeometry = new THREE.CylinderGeometry(0.2, 0.15, 1.2);
        const personMaterial = new THREE.MeshStandardMaterial({
            color: Math.random() > 0.5 ? 0x1e40af : 0x4a5568
        });
        const person = new THREE.Mesh(personGeometry, personMaterial);
        person.position.set(
            (Math.random() - 0.5) * 20,
            0.6,
            (Math.random() - 0.5) * 8 + 2
        );
        person.castShadow = true;
        scene.add(person);
    }
    
    // 礼炮
    for (let i = 0; i < 6; i++) {
        const cannonGeometry = new THREE.CylinderGeometry(0.3, 0.4, 2, 8);
        const cannonMaterial = new THREE.MeshStandardMaterial({
            color: 0x2a2a2a,
            metalness: 0.9,
            roughness: 0.2
        });
        const cannon = new THREE.Mesh(cannonGeometry, cannonMaterial);
        cannon.rotation.z = -Math.PI / 6;
        cannon.position.set(
            -10 + i * 4,
            1,
            -2
        );
        cannon.castShadow = true;
        scene.add(cannon);
    }
    
    // 金色聚光灯效果
    const spotlight1 = new THREE.SpotLight(0xffd700, 3, 30, Math.PI / 6);
    spotlight1.position.set(-8, 15, 8);
    spotlight1.target.position.set(-8, 0, 8);
    spotlight1.castShadow = true;
    scene.add(spotlight1);
    scene.add(spotlight1.target);
    
    const spotlight2 = new THREE.SpotLight(0xdc2626, 2, 25, Math.PI / 5);
    spotlight2.position.set(0, 12, -12);
    spotlight2.target.position.set(0, 0, 0);
    spotlight2.castShadow = true;
    scene.add(spotlight2);
    scene.add(spotlight2.target);
    
    // 环境光增强，营造喜庆氛围
    const additionalLight = new THREE.AmbientLight(0xffd700, 0.3);
    scene.add(additionalLight);
    
    scene.fog = new THREE.Fog(0x1a1a2e, 20, 50);
}

// 创建南京条约场景
function createNanjingTreatyScene() {
    // 英国军舰
    const shipGeometry = new THREE.BoxGeometry(8, 2, 3);
    const shipMaterial = new THREE.MeshStandardMaterial({
        color: 0x2c3e50,
        roughness: 0.7,
        metalness: 0.4
    });
    const ship = new THREE.Mesh(shipGeometry, shipMaterial);
    ship.position.set(0, 1, -5);
    ship.castShadow = true;
    scene.add(ship);
    
    // 甲板
    const deckGeometry = new THREE.BoxGeometry(7.5, 0.3, 2.5);
    const deckMaterial = new THREE.MeshStandardMaterial({ color: 0x8b7355 });
    const deck = new THREE.Mesh(deckGeometry, deckMaterial);
    deck.position.set(0, 2.2, -5);
    deck.castShadow = true;
    scene.add(deck);
    
    // 英国国旗
    const flagGeometry = new THREE.PlaneGeometry(2, 1.5);
    const flagMaterial = new THREE.MeshStandardMaterial({
        color: 0xff0000,
        side: THREE.DoubleSide
    });
    const flag = new THREE.Mesh(flagGeometry, flagMaterial);
    flag.position.set(3, 4, -5);
    flag.userData.isFlag = true;
    scene.add(flag);
    
    // 条约文件（用发光立方体表示）
    const treatyGeometry = new THREE.BoxGeometry(1.5, 0.1, 1);
    const treatyMaterial = new THREE.MeshStandardMaterial({
        color: 0xf4e4c1,
        emissive: 0xf4e4c1,
        emissiveIntensity: 0.3
    });
    const treaty = new THREE.Mesh(treatyGeometry, treatyMaterial);
    treaty.position.set(0, 2.5, -5);
    treaty.rotation.x = -Math.PI / 6;
    scene.add(treaty);
    
    // 水面
    const waterGeometry = new THREE.PlaneGeometry(40, 40);
    const waterMaterial = new THREE.MeshStandardMaterial({
        color: 0x1e40af,
        roughness: 0.3,
        metalness: 0.6
    });
    const water = new THREE.Mesh(waterGeometry, waterMaterial);
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0;
    scene.add(water);
    
    scene.fog = new THREE.Fog(0x0f172a, 15, 40);
}

// 创建南京大屠杀场景
function createNanjingMassacreScene() {
    // 纪念碑
    const monumentGeometry = new THREE.BoxGeometry(3, 8, 1);
    const monumentMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a1a1a,
        roughness: 0.8
    });
    const monument = new THREE.Mesh(monumentGeometry, monumentMaterial);
    monument.position.set(0, 4, -8);
    monument.castShadow = true;
    scene.add(monument);
    
    // 纪念碑顶部
    const topGeometry = new THREE.BoxGeometry(3.5, 0.5, 1.5);
    const top = new THREE.Mesh(topGeometry, monumentMaterial);
    top.position.set(0, 8.5, -8);
    scene.add(top);
    
    // 蜡烛（纪念）
    for (let i = 0; i < 12; i++) {
        const candleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5);
        const candleMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const candle = new THREE.Mesh(candleGeometry, candleMaterial);
        candle.position.set(
            (i % 6 - 2.5) * 0.8,
            0.25,
            Math.floor(i / 6) * 2 + 3
        );
        scene.add(candle);
        
        // 烛光
        const light = new THREE.PointLight(0xffa500, 1, 5);
        light.position.copy(candle.position);
        light.position.y += 0.5;
        light.userData.flickerSpeed = Math.random() + 0.5;
        scene.add(light);
    }
    
    // 花圈
    for (let i = 0; i < 5; i++) {
        const wreathGeometry = new THREE.TorusGeometry(0.5, 0.15, 8, 16);
        const wreathMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22 });
        const wreath = new THREE.Mesh(wreathGeometry, wreathMaterial);
        wreath.position.set(
            (i - 2) * 1.5,
            0.5,
            5
        );
        wreath.rotation.x = Math.PI / 2;
        scene.add(wreath);
    }
    
    scene.fog = new THREE.Fog(0x1a1a1a, 10, 35);
}

// 创建九一八事变场景
function createSeptember18Scene() {
    // 铁路轨道
    for (let i = 0; i < 20; i++) {
        const railGeometry = new THREE.BoxGeometry(0.3, 0.2, 3);
        const railMaterial = new THREE.MeshStandardMaterial({
            color: 0x4a4a4a,
            metalness: 0.8,
            roughness: 0.3
        });
        const rail = new THREE.Mesh(railGeometry, railMaterial);
        rail.position.set(-10 + i * 1, 0.1, 0);
        rail.castShadow = true;
        scene.add(rail);
    }
    
    // 爆炸点
    const explosionGeometry = new THREE.SphereGeometry(1, 16, 16);
    const explosionMaterial = new THREE.MeshBasicMaterial({
        color: 0xff4400,
        transparent: true,
        opacity: 0.7
    });
    const explosion = new THREE.Mesh(explosionGeometry, explosionMaterial);
    explosion.position.set(0, 1, 0);
    explosion.userData.isExplosion = true;
    scene.add(explosion);
    
    // 爆炸光
    const explosionLight = new THREE.PointLight(0xff4400, 3, 15);
    explosionLight.position.copy(explosion.position);
    explosionLight.userData.isExplosion = true;
    scene.add(explosionLight);
    
    // 日军坦克
    const tankGeometry = new THREE.BoxGeometry(3, 1.5, 2);
    const tankMaterial = new THREE.MeshStandardMaterial({ color: 0x3a3a3a });
    const tank = new THREE.Mesh(tankGeometry, tankMaterial);
    tank.position.set(-8, 0.75, -5);
    tank.castShadow = true;
    scene.add(tank);
    
    // 炮塔
    const turretGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.8);
    const turret = new THREE.Mesh(turretGeometry, tankMaterial);
    turret.position.set(-8, 1.9, -5);
    scene.add(turret);
    
    scene.fog = new THREE.Fog(0x2a2a2a, 12, 40);
}

// 创建五四运动场景
function createMayFourthScene() {
    // 天安门简化模型
    const gateGeometry = new THREE.BoxGeometry(20, 4, 3);
    const gateMaterial = new THREE.MeshStandardMaterial({ color: 0xdc2626 });
    const gate = new THREE.Mesh(gateGeometry, gateMaterial);
    gate.position.set(0, 2, -10);
    gate.castShadow = true;
    scene.add(gate);
    
    // 学生人群
    for (let i = 0; i < 40; i++) {
        const studentGeometry = new THREE.CylinderGeometry(0.2, 0.15, 1.2);
        const studentMaterial = new THREE.MeshStandardMaterial({
            color: Math.random() > 0.5 ? 0x1e40af : 0x4a5568
        });
        const student = new THREE.Mesh(studentGeometry, studentMaterial);
        student.position.set(
            (Math.random() - 0.5) * 25,
            0.6,
            (Math.random() - 0.5) * 12 + 2
        );
        student.castShadow = true;
        scene.add(student);
    }
    
    // 抗议标语旗帜
    for (let i = 0; i < 8; i++) {
        const poleGeometry = new THREE.CylinderGeometry(0.08, 0.08, 5);
        const poleMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
        const pole = new THREE.Mesh(poleGeometry, poleMaterial);
        pole.position.set(
            (i - 3.5) * 3.5,
            2.5,
            3
        );
        pole.castShadow = true;
        scene.add(pole);
        
        const bannerGeometry = new THREE.PlaneGeometry(2, 1);
        const bannerMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide
        });
        const banner = new THREE.Mesh(bannerGeometry, bannerMaterial);
        banner.position.set(pole.position.x, 4.5, pole.position.z);
        banner.userData.isFlag = true;
        scene.add(banner);
    }
    
    scene.fog = new THREE.Fog(0x0f172a, 15, 45);
}

// Part 3: UI更新和事件处理

// 更新场景信息面板
function updateSceneInfo(sceneData) {
    document.getElementById('sceneTitle').textContent = sceneData.title[currentLanguage];
    
    // 根据语言格式化年份显示
    const yearSuffix = {
        zh: '年',
        en: '',
        ja: '年'
    };
    document.getElementById('sceneYear').textContent = sceneData.year + yearSuffix[currentLanguage];
    
    document.getElementById('sceneDescription').textContent = sceneData.description[currentLanguage];
    
    const detailsList = document.getElementById('sceneDetails');
    detailsList.innerHTML = '';
    sceneData.details[currentLanguage].forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        detailsList.appendChild(li);
    });
}

// 更新场景列表
function updateSceneList() {
    const sceneList = document.getElementById('sceneList');
    sceneList.innerHTML = '';
    
    scenes.forEach((scene, index) => {
        const item = document.createElement('div');
        item.className = 'scene-item' + (index === currentSceneIndex ? ' active' : '');
        item.onclick = () => loadScene(index);
        
        item.innerHTML = `
            <div class="scene-item-title">${scene.title[currentLanguage]}</div>
            <div class="scene-item-year">${scene.year}</div>
        `;
        
        sceneList.appendChild(item);
    });
}

// 更新语言
function updateLanguage() {
    const titles = {
        zh: {
            page: '3D历史场景 - 中国百年国耻',
            selector: '选择历史场景',
            details: '场景详情',
            loading: '加载3D场景中...',
            mouse: '鼠标拖动',
            rotate: '旋转视角',
            scroll: '滚轮',
            zoom: '缩放',
            scene: '切换场景'
        },
        en: {
            page: '3D Historical Scenes - China\'s Century of Humiliation',
            selector: 'Select Historical Scene',
            details: 'Scene Details',
            loading: 'Loading 3D Scene...',
            mouse: 'Mouse Drag',
            rotate: 'Rotate View',
            scroll: 'Scroll',
            zoom: 'Zoom',
            scene: 'Switch Scene'
        },
        ja: {
            page: '3D歴史シーン - 中国屈辱の世紀',
            selector: '歴史シーンを選択',
            details: 'シーン詳細',
            loading: '3Dシーン読み込み中...',
            mouse: 'マウスドラッグ',
            rotate: '視点回転',
            scroll: 'スクロール',
            zoom: 'ズーム',
            scene: 'シーン切替'
        }
    };
    
    document.getElementById('pageTitle').textContent = titles[currentLanguage].page;
    document.getElementById('sceneSelectorTitle').textContent = titles[currentLanguage].selector;
    document.getElementById('detailsTitle').textContent = titles[currentLanguage].details;
    document.getElementById('loadingText').textContent = titles[currentLanguage].loading;
    document.getElementById('mouseHint').textContent = titles[currentLanguage].mouse;
    document.getElementById('rotateText').textContent = titles[currentLanguage].rotate;
    document.getElementById('scrollHint').textContent = titles[currentLanguage].scroll;
    document.getElementById('zoomText').textContent = titles[currentLanguage].zoom;
    document.getElementById('sceneText').textContent = titles[currentLanguage].scene;
    
    updateSceneInfo(scenes[currentSceneIndex]);
    updateSceneList();
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
    
    // 键盘控制
    document.addEventListener('keydown', (e) => {
        const key = parseInt(e.key);
        if (key >= 1 && key <= 9) {
            loadScene(key - 1);
        }
    });
    
    // 窗口大小调整
    window.addEventListener('resize', onWindowResize);
    
    // 鼠标控制相机
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    renderer.domElement.addEventListener('mousedown', () => {
        isDragging = true;
    });
    
    renderer.domElement.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaMove = {
                x: e.offsetX - previousMousePosition.x,
                y: e.offsetY - previousMousePosition.y
            };
            
            camera.position.x += deltaMove.x * 0.01;
            camera.position.y -= deltaMove.y * 0.01;
            camera.lookAt(scene.position);
        }
        
        previousMousePosition = {
            x: e.offsetX,
            y: e.offsetY
        };
    });
    
    renderer.domElement.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    // 滚轮缩放
    renderer.domElement.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY * 0.01;
        camera.position.z += delta;
        camera.position.z = Math.max(5, Math.min(30, camera.position.z));
    });
}

// 窗口大小调整
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// 动画循环
function animate() {
    requestAnimationFrame(animate);
    
    const time = Date.now() * 0.001;
    
    scene.children.forEach(child => {
        // 旗帜飘动效果
        if (child.userData.isFlag) {
            child.rotation.y = Math.sin(time * 2) * 0.15;
            child.position.y += Math.sin(time * 3) * 0.002;
        }
        
        // 火焰闪烁效果
        if (child.userData.isFlame) {
            const flicker = Math.sin(time * 8 + child.position.x) * 0.5 + 0.5;
            child.scale.set(1 + flicker * 0.3, 1 + flicker * 0.5, 1 + flicker * 0.3);
            child.material.opacity = 0.6 + flicker * 0.3;
        }
        
        // 烟雾上升效果
        if (child.userData.isSmoke) {
            child.position.y += 0.01;
            child.scale.multiplyScalar(1.002);
            child.material.opacity *= 0.995;
            
            // 重置烟雾
            if (child.material.opacity < 0.1 || child.position.y > 15) {
                child.position.y = child.userData.initialY || 2;
                child.scale.set(1, 1, 1);
                child.material.opacity = 0.3;
            }
        }
        
        // 火光闪烁（点光源）
        if (child instanceof THREE.PointLight && child.userData.flickerSpeed) {
            const flicker = Math.sin(time * child.userData.flickerSpeed) * 0.5 + 0.5;
            child.intensity = (child.userData.initialIntensity || 2) * (0.7 + flicker * 0.6);
        }
        
        // 爆炸效果闪烁
        if (child.userData.isExplosion) {
            if (child instanceof THREE.PointLight) {
                const flicker = Math.random();
                child.intensity = flicker * 3;
            } else {
                const flicker = Math.random();
                child.material.opacity = flicker * 0.8;
                child.scale.set(1 + flicker * 0.5, 1 + flicker * 0.5, 1 + flicker * 0.5);
            }
        }
        
        // 水面波浪效果
        if (child.userData.isWater && child.geometry.vertices) {
            const vertices = child.geometry.vertices;
            for (let i = 0; i < vertices.length; i++) {
                vertices[i].z = Math.sin(time + vertices[i].x * 0.5) * 0.1 +
                               Math.cos(time * 0.7 + vertices[i].y * 0.5) * 0.1;
            }
            child.geometry.verticesNeedUpdate = true;
        }
        
        // 船只摇摆效果
        if (child.userData.isShip) {
            const bobSpeed = child.userData.bobSpeed || 1;
            child.position.y = 0.5 + Math.sin(time * bobSpeed) * 0.15;
            child.rotation.z = Math.sin(time * bobSpeed * 0.8) * 0.05;
            child.rotation.x = Math.cos(time * bobSpeed * 0.6) * 0.03;
        }
    });
    
    renderer.render(scene, camera);
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', init);
