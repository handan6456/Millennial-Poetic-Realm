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

document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;
    document.querySelectorAll('.nav a').forEach(a => {
        if (a.dataset.page === page) a.classList.add('active');
    });
});

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
