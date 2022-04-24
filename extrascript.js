const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.ntx-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', ()=>{
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth;
    })
})