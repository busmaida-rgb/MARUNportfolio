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


// 헤더 스크롤 방향에 따른 `on` 클래스 토글 (스크롤 다운 시 추가, 업 시 제거)
(() => {
    let headerEl = null;
    let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
    let ticking = false;
    const delta = 5;
    const threshold = 50; // 처음에 너무 민감하지 않게 하기 위한 기준

    function resolveHeader() {
        if (!headerEl || !document.contains(headerEl)) {
            headerEl = document.querySelector('header');
        }
        return headerEl;
    }

    function onScroll() {
        const hdr = resolveHeader();
        if (!hdr) {
            ticking = false;
            lastScroll = window.pageYOffset || document.documentElement.scrollTop;
            return;
        }

        const current = window.pageYOffset || document.documentElement.scrollTop;
        if (Math.abs(current - lastScroll) <= delta) {
            ticking = false;
            return;
        }

        if (current > lastScroll && current > threshold) {
            hdr.classList.add('on');
        } else {
            hdr.classList.remove('on');
        }

        lastScroll = current;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });

    // 헤더에 마우스를 올리면 1층 콘텐츠가 보이도록 처리
    document.addEventListener('pointerover', (e) => {
        const hdr = e.target && e.target.closest && e.target.closest('header');
        if (!hdr) return;
        hdr.classList.remove('on');
        hdr.dataset._hover = '1';
    });

    document.addEventListener('pointerout', (e) => {
        const hdr = e.target && e.target.closest && e.target.closest('header');
        if (!hdr) return;
        const to = e.relatedTarget;
        if (to && hdr.contains(to)) return; // 여전히 헤더 내부로 이동한 경우 무시

        hdr.dataset._hover = '';
        const current = window.pageYOffset || document.documentElement.scrollTop;
        if (current > threshold) {
            hdr.classList.add('on');
        } else {
            hdr.classList.remove('on');
        }
    });
})();