// ===== 千年诗境 · 公共 JS =====
const API_BASE = '/api';

async function fetchAPI(path) {
    try {
        const res = await fetch(API_BASE + path);
        return await res.json();
    } catch (e) {
        console.warn('接口暂未就绪，使用模拟数据:', path, e);
        return null;
    }
}

// 掐丝珐琅传统配色（所有页面共用）
const THEME_COLORS = [
    '#19325F',  // 佛头青
    '#77171C',  // 朱樱
    '#C9A96E',  // 描金
    '#3D6036',  // 松绿
    '#A33F32',  // 朱草
    '#C7935F',  // 佛赤
    '#19325F',  // 佛头青（深）
    '#E5D3AA',  // 莲子白
];

// ===== 中英文界面切换 =====
const I18N = {
    zh: {
        'logo': '千年诗境',
        'nav.dynasty': '朝代分析',
        'nav.poet': '诗人图谱',
        'nav.text': '诗词文本分析',
        'nav.imagery': '诗境意象',
        'nav.overview': '诗词数据概览',
        'home.title': '千&nbsp;年&nbsp;诗&nbsp;境',
        'home.card1.title': '朝代分析',
        'home.card1.desc': '各朝代作品数量、诗人数量、平均长度',
        'home.card2.title': '诗人图谱',
        'home.card2.desc': '作品数量 TopN、各朝代代表诗人',
        'home.card3.title': '诗词文本分析',
        'home.card3.desc': '高频字词、长度分布、朝代高频字',
        'home.card4.title': '诗境意象',
        'home.card4.desc': '月、柳、酒等意象出现频率与分布',
        'home.card5.title': '诗词数据概览',
        'home.card5.desc': '类别统计、TopN、朝代×类别、长度区间',
        'switchBg': '换景',
        'bgTitle': '更换背景',
        'langBtn': 'English',
        /* 朝代显示名 */
        'dyn.唐代': '唐代', 'dyn.宋代': '宋代', 'dyn.元代': '元代',
        'dyn.明代': '明代', 'dyn.清代': '清代', 'dyn.魏晋': '魏晋', 'dyn.先秦': '先秦',
        /* 类别显示名 */
        'cat.古体诗': '古体诗', 'cat.近体诗': '近体诗', 'cat.词': '词',
        'cat.绝句': '绝句', 'cat.律诗': '律诗',
        /* 诗词数据概览 */
        'ov.title': '诗词数据概览',
        'ov.sub': '诗词类型与结构分析',
        'ov.statTotal': '诗词总数',
        'ov.statCategory': '诗词类别数',
        'ov.statAvgLen': '平均字数',
        'ov.statTopCat': '最常见类别',
        'ov.catPie': '各诗词类别数量（点击扇区下钻）',
        'ov.catTop': '诗词类别 TopN',
        'ov.dynCat': '朝代 × 类别 分布（点击柱段，下方联动查看朝代详情）',
        'ov.detailTitle': '该朝代各类别数量',
        'ov.lenRange': '诗词长度区间分布（含平均线）',
        'ov.totalPrefix': '共计',
        'ov.totalSuffix': '首诗词',
        'ov.noVerse': '（暂无诗句）',
        'ov.quantity': '数量',
        'ov.share': '占比',
        'ov.rangeName': '字数区间',
        'ov.poemCount': '诗词数量',
        'ov.average': '平均',
        'ov.avgFmt': '平均: {c}',
        'ov.lenUnit': '字',
        /* 朝代分析 */
        'dy.title': '朝代分析',
        'dy.sub': '各朝代作品数、诗人数量、平均长度、朝代 TopN',
        'dy.c1': '各朝代诗词数量',
        'dy.c2': '各朝代作者数量',
        'dy.c3': '各朝代平均诗词长度',
        'dy.c4': '各朝代诗词数量 TopN',
        'dy.empty': '数据待接入',
        'dy.emptySub': '等待 MapReduce 结果',
        /* 诗人图谱 */
        'pt.title': '诗人图谱',
        'pt.sub': '作者作品数量 TopN、各朝代代表诗人',
        'pt.c1': '作者作品数量 TopN',
        'pt.c2': '各朝代作者数量',
        'pt.c3': '作者平均作品长度 TopN',
        'pt.c4': '各朝代代表诗人 TopN',
        /* 诗词文本分析 */
        'tx.title': '诗词文本分析',
        'tx.sub': '高频字、高频词、长度分布、各朝代高频字',
        'tx.c1': '高频字统计',
        'tx.c2': '高频词统计',
        'tx.c3': '诗词长度分布',
        'tx.c4': '各朝代高频字统计',
        /* 诗境意象 */
        'im.title': '诗境意象',
        'im.sub': '意象出现次数、意象 TopN、朝代×意象、作者×意象',
        'im.c1': '意象出现次数统计',
        'im.c2': '意象 TopN',
        'im.c3': '朝代 × 意象',
        'im.c4': '作者 × 意象',
    },
    en: {
        'logo': 'Millennial Poetry',
        'nav.dynasty': 'Dynasties',
        'nav.poet': 'Poets',
        'nav.text': 'Text Analysis',
        'nav.imagery': 'Imagery',
        'nav.overview': 'Overview',
        'home.title': 'MILLENNIAL<br>POETIC REALM',
        'home.card1.title': 'Dynasty Analysis',
        'home.card1.desc': 'Works, poets & average length per dynasty',
        'home.card2.title': 'Poet Gallery',
        'home.card2.desc': 'Top poets by works, representative poets',
        'home.card3.title': 'Text Analysis',
        'home.card3.desc': 'Frequent characters & words, length distribution',
        'home.card4.title': 'Imagery',
        'home.card4.desc': 'Frequency & distribution of imagery, e.g. moon & willow',
        'home.card5.title': 'Data Overview',
        'home.card5.desc': 'Category stats, TopN, dynasty×category, length range',
        'switchBg': 'Scene',
        'bgTitle': 'Switch background',
        'langBtn': '中文',
        /* 朝代显示名 */
        'dyn.唐代': 'Tang', 'dyn.宋代': 'Song', 'dyn.元代': 'Yuan',
        'dyn.明代': 'Ming', 'dyn.清代': 'Qing', 'dyn.魏晋': 'Wei-Jin', 'dyn.先秦': 'Pre-Qin',
        /* 类别显示名 */
        'cat.古体诗': 'Ancient-style', 'cat.近体诗': 'Recent-style', 'cat.词': 'Ci',
        'cat.绝句': 'Jueju', 'cat.律诗': 'Lushi',
        /* 诗词数据概览 */
        'ov.title': 'Data Overview',
        'ov.sub': 'Poetry type & structure analysis',
        'ov.statTotal': 'Total Poems',
        'ov.statCategory': 'Categories',
        'ov.statAvgLen': 'Avg. Length',
        'ov.statTopCat': 'Top Category',
        'ov.catPie': 'Category counts (click to drill down)',
        'ov.catTop': 'Category TopN',
        'ov.dynCat': 'Dynasty × Category (click a bar for details below)',
        'ov.detailTitle': 'Category counts of this dynasty',
        'ov.lenRange': 'Length range distribution (with average line)',
        'ov.totalPrefix': 'Total',
        'ov.totalSuffix': 'poems',
        'ov.noVerse': '(no verse yet)',
        'ov.quantity': 'Count',
        'ov.share': 'Share',
        'ov.rangeName': 'Length range',
        'ov.poemCount': 'Poem count',
        'ov.average': 'Average',
        'ov.avgFmt': 'Avg: {c}',
        'ov.lenUnit': 'chars',
        /* 朝代分析 */
        'dy.title': 'Dynasty Analysis',
        'dy.sub': 'Works, poets, average length & TopN per dynasty',
        'dy.c1': 'Poems per dynasty',
        'dy.c2': 'Poets per dynasty',
        'dy.c3': 'Average poem length per dynasty',
        'dy.c4': 'TopN poems per dynasty',
        'dy.empty': 'Data pending',
        'dy.emptySub': 'Awaiting MapReduce results',
        /* 诗人图谱 */
        'pt.title': 'Poet Gallery',
        'pt.sub': 'Top poets by works, representative poets of dynasties',
        'pt.c1': 'TopN poets by works',
        'pt.c2': 'Poets per dynasty',
        'pt.c3': 'TopN by average work length',
        'pt.c4': 'TopN representative poets per dynasty',
        /* 诗词文本分析 */
        'tx.title': 'Text Analysis',
        'tx.sub': 'Frequent characters & words, length distribution, per-dynasty frequent chars',
        'tx.c1': 'Frequent character stats',
        'tx.c2': 'Frequent word stats',
        'tx.c3': 'Poem length distribution',
        'tx.c4': 'Frequent characters per dynasty',
        /* 诗境意象 */
        'im.title': 'Imagery',
        'im.sub': 'Imagery counts, TopN, dynasty×imagery, poet×imagery',
        'im.c1': 'Imagery occurrence stats',
        'im.c2': 'Imagery TopN',
        'im.c3': 'Dynasty × Imagery',
        'im.c4': 'Poet × Imagery',
    }
};

function applyLang(lang) {
    window.__lang = lang;
    const dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.dataset.i18nTitle;
        if (dict[key] != null) el.title = dict[key];
    });
    const btn = document.getElementById('langSwitch');
    if (btn) btn.textContent = dict['langBtn'];
    document.documentElement.lang = (lang === 'zh') ? 'zh-CN' : 'en';
    localStorage.setItem('poetry_lang', lang);
    // 通知各页面脚本重绘/更新动态文本
    window.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
}

// 取当前语言下的文本（供 JS 动态内容使用）
function t(key) {
    const dict = I18N[window.__lang || 'zh'];
    return (dict && dict[key] != null) ? dict[key] : key;
}

function toggleLang() {
    const cur = localStorage.getItem('poetry_lang') || 'zh';
    applyLang(cur === 'zh' ? 'en' : 'zh');
}

document.addEventListener('DOMContentLoaded', () => {
    // 高亮当前页导航
    const page = document.body.dataset.page;
    document.querySelectorAll('.nav a').forEach(a => {
        if (a.dataset.page === page) a.classList.add('active');
    });

    // 注入中英文切换按钮（右下角；首页时紧挨换景按钮）
    if (!document.getElementById('langSwitch')) {
        const btn = document.createElement('button');
        btn.id = 'langSwitch';
        btn.className = 'lang-switch';
        btn.type = 'button';
        btn.onclick = toggleLang;
        document.body.appendChild(btn);
        const hasBg = document.querySelector('.bg-switch');
        btn.style.right = hasBg ? '96px' : '28px';
    }

    // 应用已保存的语言
    applyLang(localStorage.getItem('poetry_lang') || 'zh');
});
