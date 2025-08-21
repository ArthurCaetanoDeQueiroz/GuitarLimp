const productSlides = document.querySelector('.product-slides');
const productItems = document.querySelectorAll('.product-item');
const productPrevBtn = document.querySelector('.product-arrow.left');
const productNextBtn = document.querySelector('.product-arrow.right');
const selectBtns = document.querySelectorAll('.select-btn');

let currentProductIndex = 0;
const itemsPerPage = 3;

function updateProductCarousel() {
    const itemWidth = productItems[0].offsetWidth + 20;
    productSlides.style.transform = `translateX(-${currentProductIndex * itemWidth}px)`;
}

productPrevBtn.addEventListener('click', () => {
    if (currentProductIndex > 0) {
        currentProductIndex--;
        updateProductCarousel();
    }
});

productNextBtn.addEventListener('click', () => {
    if (currentProductIndex < productItems.length - itemsPerPage) {
        currentProductIndex++;
        updateProductCarousel();
    }
});

window.addEventListener('resize', updateProductCarousel);