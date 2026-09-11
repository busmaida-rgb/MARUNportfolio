const newpUlTag = document.querySelector('.new-product');

function formatMoney(value){
    return Number(value).toLocaleString('ko-KR');
};

let result = newProductArray.map(product =>{
    return `<li>
                <a href="#">
                    <figure>
                        <img src='./img/${product.pthumbFilename}' alt='${product.pname}'>
                    </figure>
                    <div class="sale-txt">
                        <h4 class="title-1">${product.pname}</h4>
                        <p class="desc-1">${product.pdesc}</p>
                        <div class="pay-frame">
                            <div class="pay-original">
                                <span>${formatMoney(product.price)}</span>원
                            </div>
                            <div class="pay-discount">
                                <div class="discount">${Math.round(product.pdiscount*100)}%</div>
                                <div class="pay"><b>${formatMoney(product.price*(1 - product.pdiscount))}</b>원</div>
                            </div>
                        </div>
                    </div>
    </li>`
}).join('');

newpUlTag.innerHTML = result;