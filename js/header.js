document.addEventListener('click', (e) => {
    const menuBtn = e.target.closest('.btn-menu');
    const menuCloseBtn = e.target.closest('.btn-menu-close');
    const smartMenuItem = e.target.closest('.gnb-smart > li');

    if (menuBtn) {
        e.preventDefault();
        const smartOverlayMenu = document.querySelector('.smart-overlay-menu');
        if (smartOverlayMenu) {
            smartOverlayMenu.classList.add('on');
        }
        return;
    }

    if (menuCloseBtn) {
        e.preventDefault();
        const smartOverlayMenu = document.querySelector('.smart-overlay-menu');
        if (smartOverlayMenu) {
            smartOverlayMenu.classList.remove('on');
        }
        return;
    }

    if (smartMenuItem) {
        const smartLi = [...document.querySelectorAll('.gnb-smart > li')];
        const gnb2depthSmarts = document.querySelectorAll('.gnb2depth-smart');
        const idx = smartLi.indexOf(smartMenuItem);

        if (idx === 0) return;

        e.preventDefault();
        smartLi.forEach((li) => li.classList.remove('on'));
        smartMenuItem.classList.add('on');
        gnb2depthSmarts.forEach((div) => div.classList.remove('on'));

        if (gnb2depthSmarts[idx - 1]) {
            gnb2depthSmarts[idx - 1].classList.add('on');
        }
    }
});