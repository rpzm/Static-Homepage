// ==================== 模态框功能 ====================

// 显示我的米表浮窗
function showDomainModal() {
    const modal = document.getElementById('domainModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    const domainData = domainsData[currentLanguage];
    
    modalTitle.textContent = domainData.title;
    
    let content = `<p>${domainData.description}</p>`;
    
    domainData.categories.forEach(category => {
        content += `<h4>${category.title}</h4>`;
        
        category.domains.forEach(domain => {
            let statusClass = 'status-registered';
            if (domain.status.includes('用') || domain.status.includes('Use') || domain.status.includes('使用中')) {
                statusClass = 'status-available';
            } else if (domain.status.includes('开发') || domain.status.includes('Developing') || domain.status.includes('開発中')) {
                statusClass = 'status-developing';
            }
            
            content += `
                <div class="domain-item">
                    <div>
                        <span class="domain-name">${domain.name}</span>
                        <div style="font-size: 14px; color: #666; margin-top: 5px;">${domain.description}</div>
                    </div>
                    <span class="domain-status ${statusClass}">${domain.status}</span>
                </div>
            `;
        });
    });
    
    modalBody.innerHTML = content;
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
}

// 显示朋友模态框
function showFriendsModal() {
    const modal = document.getElementById('friendsModal');
    const modalTitle = document.getElementById('friendsModalTitle');
    const modalBody = document.getElementById('friendsModalBody');
    
    const friendsDataLang = friendsData[currentLanguage];
    
    modalTitle.textContent = friendsDataLang.title;
    
    let content = `<div class="friends-container">`;
    
    friendsDataLang.friends.forEach(friend => {
        const safeWebsite = friend.website.replace(/'/g, "\\'");
        const safeName = friend.name.replace(/'/g, "\\'");
        
        content += `
            <div class="friend-card">
                <div class="friend-avatar">
                    <img src="${friend.avatar}" alt="${friend.name}" loading="lazy">
                </div>
                <div class="friend-info">
                    <a href="javascript:void(0);" 
                       onclick="showFriendTip('${safeWebsite}', '${safeName}')" 
                       class="friend-name click-tip">
                        ${friend.name}
                    </a>
                    <div class="friend-description">${friend.description}</div>
                </div>
            </div>
        `;
    });
    
    content += `</div>`;
    
    modalBody.innerHTML = content;
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
}

// 显示免责声明浮窗
function showDisclaimerModal() {
    const modal = document.getElementById('disclaimerModal');
    const disclaimerBody = document.getElementById('disclaimerBody');
    
    disclaimerBody.innerHTML = disclaimerContent[currentLanguage];
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
}

// 显示建站历史模态框
function showHistoryModal() {
    const modal = document.getElementById('historyModal');
    const modalTitle = document.getElementById('historyModalTitle');
    const modalBody = document.getElementById('historyModalBody');
    
    const trans = translations[currentLanguage];
    modalTitle.textContent = trans.historyTitle;
    modalBody.innerHTML = historyContent[currentLanguage];
    
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
}

// 关闭浮窗
function closeModal() {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
    
    document.body.classList.remove('modal-open');
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
    
    if (event.target == document.getElementById('overlay')) {
        hideFriendTip();
    }
}

// 更新模态框内容
function updateModalContent() {
    const domainModal = document.getElementById('domainModal');
    if (domainModal.style.display === 'flex') {
        showDomainModal();
    }
    
    const friendsModal = document.getElementById('friendsModal');
    if (friendsModal.style.display === 'flex') {
        showFriendsModal();
    }
    
    const disclaimerModal = document.getElementById('disclaimerModal');
    if (disclaimerModal.style.display === 'flex') {
        showDisclaimerModal();
    }
    
    const historyModal = document.getElementById('historyModal');
    if (historyModal.style.display === 'flex') {
        showHistoryModal();
    }
}

// 显示微信二维码
function showWechatQR() {
    // 创建或获取微信二维码模态框
    let wechatModal = document.getElementById('wechatQRModal');
    
    if (!wechatModal) {
        // 创建模态框
        wechatModal = document.createElement('div');
        wechatModal.id = 'wechatQRModal';
        wechatModal.className = 'modal-overlay';
        wechatModal.innerHTML = `
            <div class="modal-content" style="max-width: 400px;">
                <div class="modal-header">
                    <h3>微信联系</h3>
                    <button class="close-btn" onclick="closeModal()">&times;</button>
                </div>
                <div class="modal-body" style="text-align: center;">
                    <div style="margin-bottom: 15px;">
                        <p>微信号: <strong>routetable</strong></p>
                        <p>扫一扫二维码添加好友</p>
                    </div>
                    <div style="background: white; padding: 15px; border-radius: 10px; display: inline-block; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                        <img src="./assets/image/wechat-qr.jpg" alt="微信二维码" style="max-width: 250px; height: auto; border-radius: 5px;">
                    </div>
                    <div style="margin-top: 20px; padding: 10px; background: rgba(248, 249, 250, 0.5); border-radius: 8px;">
                        <p style="font-size: 14px; color: #666; margin: 0;">
                            <i class="fas fa-info-circle" style="margin-right: 5px;"></i>
                            请备注"来自如品之茗的博客"
                        </p>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(wechatModal);
    }
    
    wechatModal.style.display = 'flex';
    document.body.classList.add('modal-open');
}

// 显示更多联系方式
function showMoreContacts() {
    // 创建或获取更多联系方式模态框
    let contactsModal = document.getElementById('contactsModal');
    
    if (!contactsModal) {
        contactsModal = document.createElement('div');
        contactsModal.id = 'contactsModal';
        contactsModal.className = 'modal-overlay';
        contactsModal.innerHTML = `
            <div class="modal-content" style="max-width: 500px;">
                <div class="modal-header">
                    <h3>更多联系方式</h3>
                    <button class="close-btn" onclick="closeModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fab fa-telegram"></i>
                        </div>
                        <div class="contact-info">
                            <h4>Telegram</h4>
                            <p><strong>账号:</strong> @uncbox</p>
                            <a href="https://t.me/uncbox" target="_blank" class="contact-link">
                                点击联系 <i class="fas fa-external-link-alt" style="margin-left: 5px;"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-info">
                            <h4>Google邮件</h4>
                            <p><strong>邮箱:</strong> boxpdu@gmail.com</p>
                            <a href="mailto:boxpdu@gmail.com" class="contact-link">
                                发送邮件 <i class="fas fa-paper-plane" style="margin-left: 5px;"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background: rgba(248, 249, 250, 0.5); border-radius: 10px;">
                        <p style="margin: 0; color: #666; font-size: 14px;">
                            <i class="fas fa-lightbulb" style="margin-right: 8px; color: #ffc107;"></i>
                            推荐使用Telegram联系，响应更快
                        </p>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(contactsModal);
    }
    
    contactsModal.style.display = 'flex';
    document.body.classList.add('modal-open');
}

// 更新closeModal函数以关闭所有模态框
function closeModal() {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
    
    document.body.classList.remove('modal-open');
}