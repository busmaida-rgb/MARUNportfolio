document.addEventListener('click', (e) => {
    const reviewToggleBtn = e.target.closest('.btn-rvtxt');

    if (reviewToggleBtn) {
        e.preventDefault();
        const reviewTxt = reviewToggleBtn.closest('.review-txt');

        if (reviewTxt) {
            reviewTxt.classList.toggle('fold');
        }
    }

    const productBtn = e.target.closest('.btn');
    if (productBtn) {
        const productDetailBox = document.querySelector('#product-detail-2');

        if (productDetailBox && productDetailBox.contains(productBtn)) {
            e.preventDefault();
        }
    }
});