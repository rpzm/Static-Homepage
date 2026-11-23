// ==================== 页面初始化 ====================

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 设置当前年份
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // 计算网站运行时间
    const startDate = new Date(2023, 1, 1);
    const now = new Date();

    const totalDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    let years = now.getFullYear() - startDate.getFullYear();
    
    let temp = new Date(startDate.getTime());
    temp.setFullYear(startDate.getFullYear() + years);

    if (temp > now) {
        years--;
        temp = new Date(startDate.getTime());
        temp.setFullYear(startDate.getFullYear() + years);
    }

    const remainingDays = Math.floor((now - temp) / (1000 * 60 * 60 * 24));

    document.getElementById('days').textContent = totalDays;
    document.getElementById('years').textContent = years;
    document.getElementById('remainingDays').textContent = remainingDays;
    
    // 计算域名年龄
    const domainRegistrationDate = new Date(2007, 10, 4);
    let domainAge = now.getFullYear() - domainRegistrationDate.getFullYear();
    
    if (now.getMonth() < domainRegistrationDate.getMonth() || 
        (now.getMonth() === domainRegistrationDate.getMonth() && now.getDate() < domainRegistrationDate.getDate())) {
        domainAge--;
    }
    
    document.getElementById('domainAge').textContent = domainAge > 0 ? domainAge : 1;
    
    // 初始化语言为中文
    updateAllTexts('zh-CN');
    
    // 初始化背景（随机切换壁纸）
    initBackground();
    
    // 根据浏览器语言自动切换
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh')) {
        if (browserLang === 'zh-TW' || browserLang === 'zh-HK' || browserLang === 'zh-MO') {
            translateText('zh-TW');
        } else {
            translateText('zh-CN');
        }
    } else if (browserLang.startsWith('en')) {
        translateText('en');
    } else if (browserLang.startsWith('ko')) {
        translateText('ko');
    } else if (browserLang.startsWith('ja')) {
        translateText('ja');
    }
    
    // ESC键关闭模态框
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
            hideFriendTip();
        }
    });
    
    // 移动端优化
    enableModalScroll();
    optimizeMobileScroll();
});