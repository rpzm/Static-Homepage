// ==================== 移动端优化 ====================

// 修复移动端滚动问题
function enableModalScroll() {
    const modals = document.querySelectorAll('.modal-content, .friend-link-tip');
    modals.forEach(modal => {
        modal.addEventListener('touchstart', function(e) {
            this.startY = e.touches[0].clientY;
            this.scrollTop = this.scrollTop || 0;
        }, { passive: true });
        
        modal.addEventListener('touchmove', function(e) {
            const deltaY = e.touches[0].clientY - this.startY;
            const isAtTop = this.scrollTop <= 0;
            const isAtBottom = this.scrollTop + this.clientHeight >= this.scrollHeight;
            
            if ((isAtTop && deltaY > 0) || (isAtBottom && deltaY < 0)) {
                e.preventDefault();
            }
        }, { passive: false });
    });
}

// 优化移动端滚动体验
function optimizeMobileScroll() {
    if ('overscrollBehavior' in document.body.style) {
        document.body.style.overscrollBehavior = 'none';
    }
    
    document.addEventListener('touchmove', function(e) {
        if (document.body.classList.contains('modal-open')) {
            e.preventDefault();
        }
    }, { passive: false });
}