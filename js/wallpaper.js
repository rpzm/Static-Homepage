// ==================== 壁纸功能函数 ====================

// 获取随机本地壁纸（优化版）- 确保每次刷新都不同
function getRandomLocalWallpaper() {
    // 如果所有壁纸都已使用过，清空历史记录重新开始
    if (wallpaperHistory.length >= localWallpapers.length) {
        console.log('所有本地壁纸都已使用过，清空历史重新开始');
        wallpaperHistory = [];
        localStorage.removeItem('wallpaperHistory');
    }
    
    // 创建可用壁纸列表（排除最近使用过的）
    let availableWallpapers = localWallpapers.filter(wp => !wallpaperHistory.includes(wp));
    
    // 如果没有可用壁纸（理论上不会发生），则使用所有壁纸
    if (availableWallpapers.length === 0) {
        availableWallpapers = [...localWallpapers];
    }
    
    // 随机选择壁纸
    const randomIndex = Math.floor(Math.random() * availableWallpapers.length);
    const wallpaperUrl = availableWallpapers[randomIndex];
    
    return {
        url: wallpaperUrl,
        source: 'local',
        index: randomIndex
    };
}

// 预加载图片函数
function preloadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            if (img.complete && img.naturalWidth > 0) {
                resolve(url);
            } else {
                reject(new Error('图片加载不完整'));
            }
        };
        img.onerror = () => reject(new Error('图片加载失败'));
        img.src = url;
        
        // 设置超时（3秒）
        setTimeout(() => {
            if (!img.complete) {
                reject(new Error('图片加载超时'));
            }
        }, 3000);
    });
}

// 检查图片是否可访问
async function checkImageAvailability(url) {
    try {
        await preloadImage(url);
        return true;
    } catch (error) {
        console.warn(`本地图片检查失败: ${url}`, error.message);
        return false;
    }
}

// 应用壁纸
function applyWallpaper(imageUrl, targetElement, photoBg) {
    if (photoBg) {
        photoBg.style.backgroundImage = `url('${imageUrl}')`;
        photoBg.style.backgroundSize = 'cover';
        photoBg.style.backgroundPosition = 'center';
        photoBg.style.backgroundRepeat = 'no-repeat';
        photoBg.style.transition = 'background-image 0.5s ease';
    } else {
        document.getElementById('gradientBg').classList.remove('active');
        document.body.style.backgroundImage = `url('${imageUrl}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.transition = 'background-image 0.5s ease';
    }
}

// 壁纸切换功能（优化版）- 增加自动切换模式
async function changeWallpaper(isAutoRefresh = false) {
    if (isLoadingWallpaper) return;
    
    const wallpaperBtn = document.getElementById('wallpaperIconBtn');
    const photoBg = document.querySelector('.photo-bg');
    const targetElement = photoBg || document.body;
    
    if (!isAutoRefresh) {
        wallpaperBtn.classList.add('loading');
    }
    isLoadingWallpaper = true;
    
    try {
        // 尝试多次获取可用的壁纸
        let wallpaper = null;
        let attempts = 0;
        const maxAttempts = 3;
        
        while (attempts < maxAttempts && !wallpaper) {
            attempts++;
            wallpaper = getRandomLocalWallpaper();
            
            if (wallpaper && wallpaper.url) {
                try {
                    // 预加载图片
                    await preloadImage(wallpaper.url);
                    break; // 图片加载成功，跳出循环
                } catch (error) {
                    console.warn(`壁纸 ${wallpaper.url} 加载失败，尝试下一个:`, error.message);
                    wallpaper = null;
                    // 将失败的壁纸加入历史，避免重复尝试
                    if (!wallpaperHistory.includes(wallpaper.url)) {
                        wallpaperHistory.push(wallpaper.url);
                    }
                }
            }
        }
        
        if (!wallpaper || !wallpaper.url) {
            throw new Error('无法获取可用的本地壁纸');
        }
        
        // 记录历史
        wallpaperHistory.push(wallpaper.url);
        
        // 限制历史记录长度，最多保存最近10个壁纸
        if (wallpaperHistory.length > 10) {
            wallpaperHistory.shift();
        }
        
        // 保存到localStorage
        localStorage.setItem('wallpaperHistory', JSON.stringify(wallpaperHistory));
        
        // 应用壁纸
        applyWallpaper(wallpaper.url, targetElement, photoBg);
        localStorage.setItem('currentWallpaper', wallpaper.url);
        localStorage.setItem('wallpaperSource', 'local');
        localStorage.setItem('isGradientActive', 'false');
        
        // 更新状态
        currentWallpaperIndex = wallpaper.index;
        isGradientActive = false;
        
        if (!isAutoRefresh) {
            showWallpaperToast('壁纸切换成功');
        }
        
    } catch (error) {
        console.error('壁纸切换失败:', error);
        
        // 如果壁纸切换失败，尝试使用第一个本地壁纸作为默认
        try {
            const defaultWallpaper = localWallpapers[0];
            if (defaultWallpaper) {
                await preloadImage(defaultWallpaper);
                applyWallpaper(defaultWallpaper, targetElement, photoBg);
                localStorage.setItem('currentWallpaper', defaultWallpaper);
                localStorage.setItem('wallpaperSource', 'local');
                localStorage.setItem('isGradientActive', 'false');
                isGradientActive = false;
                if (!isAutoRefresh) {
                    showWallpaperToast('壁纸切换成功');
                }
            } else {
                throw new Error('没有可用的默认壁纸');
            }
        } catch (defaultError) {
            // 如果默认壁纸也失败，切换到渐变背景
            const gradientBg = document.getElementById('gradientBg');
            gradientBg.classList.add('active');
            document.body.style.backgroundImage = 'none';
            isGradientActive = true;
            
            // 保存设置
            localStorage.setItem('isGradientActive', 'true');
            localStorage.removeItem('currentWallpaper');
            
            if (!isAutoRefresh) {
                showWallpaperToast('已切换到渐变背景');
            }
        }
    } finally {
        if (!isAutoRefresh) {
            wallpaperBtn.classList.remove('loading');
        }
        isLoadingWallpaper = false;
    }
}

// 背景色切换功能
async function changeBackgroundColor() {
    if (isLoadingBgColor) return;
    
    const bgcolorBtn = document.getElementById('bgcolorIconBtn');
    bgcolorBtn.classList.add('loading');
    isLoadingBgColor = true;
    
    try {
        // 随机选择渐变背景
        const availableGradients = gradientColors.filter((_, index) => 
            index !== currentBgColorIndex
        );
        
        const gradientPool = availableGradients.length > 0 ? availableGradients : gradientColors;
        const randomIndex = Math.floor(Math.random() * gradientPool.length);
        const selectedGradient = gradientPool[randomIndex];
        
        // 应用渐变背景
        const gradientBg = document.getElementById('gradientBg');
        gradientBg.style.background = selectedGradient.gradient;
        gradientBg.classList.add('active');
        
        // 移除壁纸背景
        document.body.style.backgroundImage = 'none';
        
        // 更新当前索引
        currentBgColorIndex = randomIndex;
        isGradientActive = true;
        
        // 保存到localStorage
        localStorage.setItem('currentBgGradient', selectedGradient.gradient);
        localStorage.setItem('currentBgColorIndex', currentBgColorIndex);
        localStorage.setItem('isGradientActive', 'true');
        localStorage.removeItem('currentWallpaper');
        
        showWallpaperToast(`背景色切换: ${selectedGradient.name}`);
        
    } catch (error) {
        showWallpaperToast('背景色切换失败，请重试', true);
    } finally {
        bgcolorBtn.classList.remove('loading');
        isLoadingBgColor = false;
    }
}

// 显示壁纸/背景切换提示（优化版）
function showWallpaperToast(message, isError = false) {
    let toast = document.getElementById('wallpaper-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'wallpaper-toast';
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: ${isError ? 'rgba(248, 215, 218, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
            color: ${isError ? '#721c24' : '#333'};
            padding: 12px 20px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 10px;
            backdrop-filter: blur(10px);
            border: 1px solid ${isError ? 'rgba(245, 198, 203, 0.5)' : 'rgba(255, 255, 255, 0.2)'};
            transform: translateY(100px);
            opacity: 0;
            transition: all 0.3s ease;
            max-width: 300px;
        `;
        document.body.appendChild(toast);
    }
    
    const icon = isError ? '⚠️' : '✨';
    toast.innerHTML = `
        <span style="font-size: 16px;">${icon}</span>
        <span>${message}</span>
    `;
    
    // 确保toast在modal之上
    toast.style.zIndex = '10000';
    
    setTimeout(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
    }, 10);
    
    setTimeout(() => {
        toast.style.transform = 'translateY(100px)';
        toast.style.opacity = '0';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// 初始化壁纸和背景（完全重写）- 实现刷新时自动切换
async function initBackground() {
    const photoBg = document.querySelector('.photo-bg');
    const targetElement = photoBg || document.body;
    
    // 从localStorage加载壁纸历史
    const savedHistory = localStorage.getItem('wallpaperHistory');
    if (savedHistory) {
        try {
            wallpaperHistory = JSON.parse(savedHistory);
            // 确保历史记录不会过长
            if (wallpaperHistory.length > 10) {
                wallpaperHistory = wallpaperHistory.slice(-10);
                localStorage.setItem('wallpaperHistory', JSON.stringify(wallpaperHistory));
            }
        } catch (e) {
            console.warn('无法解析壁纸历史记录，重置为空数组');
            wallpaperHistory = [];
        }
    }
    
    // 检查用户上次使用的是壁纸还是渐变背景
    const isGradientActiveSaved = localStorage.getItem('isGradientActive');
    const savedGradient = localStorage.getItem('currentBgGradient');
    const savedWallpaper = localStorage.getItem('currentWallpaper');
    
    // 设置一个标记，记录用户是否已经手动切换过背景
    const hasUserSwitched = localStorage.getItem('hasUserSwitchedBackground');
    
    // 如果没有用户操作记录，或者用户上次使用的是壁纸，则每次刷新都随机切换壁纸
    if (!hasUserSwitched || isGradientActiveSaved !== 'true') {
        // 清除保存的壁纸，强制重新随机选择
        localStorage.removeItem('currentWallpaper');
        
        // 随机切换壁纸（静默模式，不显示提示）
        await changeWallpaper(true);
        
        // 标记已经自动切换过
        if (!hasUserSwitched) {
            localStorage.setItem('hasUserSwitchedBackground', 'true');
        }
    } else if (isGradientActiveSaved === 'true') {
        // 用户上次使用的是渐变背景，保持渐变背景
        const gradientBg = document.getElementById('gradientBg');
        if (savedGradient) {
            gradientBg.style.background = savedGradient;
            try {
                currentBgColorIndex = parseInt(localStorage.getItem('currentBgColorIndex') || 8);
            } catch (e) {
                currentBgColorIndex = 8;
            }
        } else {
            // 使用默认的神秘紫
            gradientBg.style.background = gradientColors[8].gradient;
            currentBgColorIndex = 8;
        }
        gradientBg.classList.add('active');
        isGradientActive = true;
    } else if (savedWallpaper && targetElement) {
        // 用户上次使用的是壁纸，并且有保存的壁纸，检查是否可用
        try {
            const isAvailable = await checkImageAvailability(savedWallpaper);
            
            if (isAvailable) {
                applyWallpaper(savedWallpaper, targetElement, photoBg);
                isGradientActive = false;
                document.getElementById('gradientBg').classList.remove('active');
                
                // 确保壁纸在历史记录中
                if (!wallpaperHistory.includes(savedWallpaper)) {
                    wallpaperHistory.push(savedWallpaper);
                    if (wallpaperHistory.length > 10) {
                        wallpaperHistory.shift();
                    }
                    localStorage.setItem('wallpaperHistory', JSON.stringify(wallpaperHistory));
                }
            } else {
                // 保存的壁纸不可用，随机切换新壁纸
                throw new Error('保存的壁纸不可用');
            }
        } catch (error) {
            console.warn('加载保存的壁纸失败:', error.message);
            // 保存的壁纸不可用，随机切换新壁纸
            localStorage.removeItem('currentWallpaper');
            await changeWallpaper(true);
        }
    } else {
        // 默认情况：随机切换壁纸
        await changeWallpaper(true);
    }
}