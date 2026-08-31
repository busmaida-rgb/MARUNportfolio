const btnMenu = document.querySelector('.btn-menu');
const smartOverlayMenu = document.querySelector('.smart-overlay-menu');
const btnMenuClose = document.querySelector('.btn-menu-close');

//스마트 디바이스 메뉴 열기닫기
if(btnMenu){
    btnMenu.addEventListener('click',()=>{
        smartOverlayMenu.classList.add('on');
    });
};
if(btnMenuClose){
    btnMenuClose.addEventListener('click',()=>{
        smartOverlayMenu.classList.remove('on');
    });
};

const smartLi = document.querySelectorAll('.gnb-smart>li');
const gnb2depthSmarts = document.querySelectorAll('.gnb2depth-smart');

smartLi.forEach((li,idx)=>{
    li.addEventListener('click',(e)=>{
        if(idx===0){return};
        e.preventDefault();
        smartLi.forEach(litag=>litag.classList.remove('on'));
        li.classList.add('on');
        gnb2depthSmarts.forEach(div=>div.classList.remove('on'));
        gnb2depthSmarts[idx-1].classList.add('on');
    });
});