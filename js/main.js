// ==================== 基础安全功能 ====================

// 禁用F12和开发者工具
function disableF12(e) {
    if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0) || (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))))) {
        e.preventDefault();
        e.returnValue = false;
        return false;
    }
}

// 防止右键菜单
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// 防止Ctrl+U查看源码
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.keyCode == 85) {
        e.preventDefault();
        return false;
    }
});

// ==================== 壁纸系统配置 ====================

// 壁纸相关变量
let currentWallpaperIndex = -1;
let wallpaperHistory = [];
let isLoadingWallpaper = false;

// 背景色相关变量
let currentBgColorIndex = 8;
let isGradientActive = true;
let isLoadingBgColor = false;

// 本地壁纸配置
const localWallpapers = [
    './assets/wallpapers/1.jpg',
    './assets/wallpapers/3.jpg',
    './assets/wallpapers/4.jpg',
    './assets/wallpapers/5.jpg',
    './assets/wallpapers/6.jpg',
    './assets/wallpapers/7.jpg',
    './assets/wallpapers/8.jpg',
    './assets/wallpapers/9.jpg',
    './assets/wallpapers/10.jpg'
];

// 渐变背景颜色
const gradientColors = [
    { name: '清晨天空', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { name: '海洋深处', gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)' },
    { name: '梦幻紫粉', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { name: '日落橙红', gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)' },
    { name: '金秋落叶', gradient: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)' },
    { name: '温暖沙滩', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
    { name: '冰川蓝', gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)' },
    { name: '深夜星空', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { name: '神秘紫', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
    { name: '石墨灰', gradient: 'linear-gradient(135deg, #434343 0%, #000000 100%)' },
    { name: '科技蓝', gradient: 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)' },
    { name: '简约白灰', gradient: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)' },
    { name: '森林绿', gradient: 'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)' },
    { name: '樱花粉', gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' },
    { name: '湖泊蓝', gradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)' }
];

// ==================== 全局变量 ====================

// 温馨提示相关变量
let currentFriendUrl = '';
let currentFriendName = '';

// 当前语言
var currentLanguage = 'zh-CN';