// 初始化字体控制功能
function initFontControls() {
    // 检查是否已存在字体控制按钮
    if (document.querySelector('.font-controls')) return;
    
    // 创建按钮容器
    const fontControls = document.createElement('div');
    fontControls.className = 'font-controls';
    fontControls.innerHTML = `
        <span class="font-btn" data-size="small">S</span>
        <span class="font-btn active" data-size="medium">M</span>
        <span class="font-btn" data-size="large">L</span>
    `;
    
    // 添加到导航栏品牌后面
    const navbarBrand = document.querySelector('.navbar-brand');
    if (navbarBrand) {
        navbarBrand.insertAdjacentElement('afterend', fontControls);
    }
    
    // 设置按钮点击事件
    document.querySelectorAll('.font-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const size = this.getAttribute('data-size');
            setFontSize(size);
        });
    });
    
    // 初始化字体大小
    const savedSize = localStorage.getItem('fontSize') || 'medium';
    setFontSize(savedSize, false);
}

// 设置字体大小
function setFontSize(size, save = true) {
    let sizeValue;
    switch(size) {
        case 'small': sizeValue = '0.875rem'; break;
        case 'medium': sizeValue = '1rem'; break;
        case 'large': sizeValue = '1.125rem'; break;
        default: sizeValue = '1rem';
    }
    
    document.documentElement.style.fontSize = sizeValue;
    
    // 更新按钮状态
    document.querySelectorAll('.font-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-size') === size) {
            btn.classList.add('active');
        }
    });
    
    // 保存到本地存储
    if (save) {
        localStorage.setItem('fontSize', size);
    }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    initFontControls();
});