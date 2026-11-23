// ==================== 语言和文本功能 ====================

// 更新语言选择器
function updateLangSelector(lang) {
    document.getElementById('langDropdown').classList.remove('show');
    
    // 更新图标显示
    const langIconBtn = document.getElementById('langIconBtn');
    let flagPath = './assets/country/China.png'; // 默认图标
    
    switch(lang) {
        case 'zh-CN':
        case 'zh-TW':
            flagPath = './assets/country/China.png';
            break;
        case 'en':
            flagPath = './assets/country/America.png';
            break;
        case 'ko':
            flagPath = './assets/country/Korea.png';
            break;
        case 'ja':
            flagPath = './assets/country/Japan.png';
            break;
    }
    
    // 使用自定义的国旗图标
    langIconBtn.innerHTML = `<img src="${flagPath}" alt="${lang}" class="current-lang-flag">`;
    
    // 更新所有选项的激活状态
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.classList.remove('active');
    });
    
    // 根据当前语言设置激活状态
    let activeOption = null;
    switch(lang) {
        case 'zh-CN':
            activeOption = document.querySelector('.lang-option:nth-child(1)');
            break;
        case 'zh-TW':
            activeOption = document.querySelector('.lang-option:nth-child(2)');
            break;
        case 'en':
            activeOption = document.querySelector('.lang-option:nth-child(3)');
            break;
        case 'ko':
            activeOption = document.querySelector('.lang-option:nth-child(4)');
            break;
        case 'ja':
            activeOption = document.querySelector('.lang-option:nth-child(5)');
            break;
    }
    
    if (activeOption) {
        activeOption.classList.add('active');
    }
}

// 更新所有文本内容
function updateAllTexts(lang) {
    const trans = translations[lang];
    
    document.getElementById('title').textContent = trans.title;
    document.getElementById('intro').innerHTML = trans.intro;
    document.getElementById('catch-me').textContent = trans.catchMe;
    
    const buttons = document.querySelectorAll('.btn');
    if (buttons.length >= 4) {
        buttons[0].textContent = trans.blog;
        buttons[1].textContent = trans.photos;
        buttons[2].textContent = trans.tools;
        buttons[3].textContent = trans.email;
    }
    
    document.getElementById('follow-me').textContent = trans.followMe;
    document.getElementById('more-contact').title = trans.moreContact;
    
    document.getElementById('history-link').innerHTML = '<b>' + trans.history + '</b>';
    document.getElementById('resume-link').innerHTML = '<b>' + trans.resume + '</b>';
    document.getElementById('friends-link').innerHTML = '<b>' + trans.friends + '</b>';
    document.getElementById('domains-link').innerHTML = '<b>' + trans.domains + '</b>';
    document.getElementById('disclaimer-link').innerHTML = '<b>' + trans.disclaimer + '</b>';
    
    const currentYear = document.getElementById('currentYear').textContent;
    document.getElementById('copyright').textContent = 
        trans.copyright.replace('CURRENTYEAR', currentYear);
    
    const domainAge = document.getElementById('domainAge').textContent;
    document.getElementById('domain-age-text').textContent = 
        trans.domainAge.replace('DOMAINAGE', domainAge);
    
    const days = document.getElementById('days').textContent;
    const years = document.getElementById('years').textContent;
    const remainingDays = document.getElementById('remainingDays').textContent;
    document.getElementById('site-time-text').textContent = 
        trans.siteTime
            .replace('DAYS', days)
            .replace('YEARS', years)
            .replace('REMAININGDAYS', remainingDays);
}

// 切换语言
function translateText(language) {
    currentLanguage = language;
    updateAllTexts(language);
    updateLangSelector(language);
    updateModalContent();
}

// 显示朋友链接提示
function showFriendTip(url, name) {
    currentFriendUrl = url;
    currentFriendName = name;
    
    const tipData = friendTipContent[currentLanguage] || friendTipContent['zh-CN'];
    
    document.getElementById('tipTitle').textContent = tipData.title;
    
    let content = `
        <p>${tipData.content.intro}</p>
        <div class="tip-url">${url}</div>
        <p>${tipData.content.notice}</p>
        <ul>
    `;
    
    tipData.content.points.forEach(point => {
        content += `<li>${point}</li>`;
    });
    
    content += `</ul>`;
    
    document.getElementById('tipContent').innerHTML = content;
    
    const buttons = document.querySelectorAll('.tip-btn');
    buttons[0].textContent = tipData.cancel;
    buttons[1].textContent = tipData.confirm;
    
    document.getElementById('friendLinkTip').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.classList.add('modal-open');
}

// 隐藏朋友链接提示
function hideFriendTip() {
    document.getElementById('friendLinkTip').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    currentFriendUrl = '';
    currentFriendName = '';
    document.body.classList.remove('modal-open');
}

// 确认访问朋友链接
function confirmFriendLink() {
    if (currentFriendUrl) {
        window.open(currentFriendUrl, '_blank', 'noopener,noreferrer');
        hideFriendTip();
    }
}

// 切换语言下拉菜单
function toggleLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    dropdown.classList.toggle('show');
}

// 关闭语言下拉菜单
document.addEventListener('click', function(event) {
    const langSwitcher = document.getElementById('language-switcher');
    const dropdown = document.getElementById('langDropdown');
    if (!langSwitcher.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});