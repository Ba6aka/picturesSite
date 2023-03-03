function slider({sliderItemsSelector,  prevSelector, nextSelector, dir}){
    const sliderItems = document.querySelectorAll(sliderItemsSelector);

    let  slideIndex = 1,
         paused = false;

    function showSlide(n){
        if (n > sliderItems.length){
            slideIndex = 1;
        }
        if (n < 1){
            slideIndex = sliderItems.length;
        }
        sliderItems.forEach((item) =>{
            item.classList.add('animated');
            item.style.display = 'none';  
        });

        sliderItems[slideIndex - 1].style.display = 'block';
        
    }

    showSlide(slideIndex);

    function plusSlide(n){
        showSlide(slideIndex +=n );
    }

    try{
       const btnPrev = document.querySelector(prevSelector),
             btnNext = document.querySelector(nextSelector);

        btnPrev.addEventListener('click', () =>{
            plusSlide(-1);
            sliderItems[slideIndex - 1].classList.remove('slideInLeft');
            sliderItems[slideIndex - 1].classList.add('slideInRight');
        });

        btnNext.addEventListener('click', () =>{
            plusSlide(1);
            sliderItems[slideIndex - 1].classList.remove('slideInRight');
            sliderItems[slideIndex - 1].classList.add('slideInLeft');
        });

    }
    catch(e){}

    function activateAnimation(){
        if (dir === 'vertical') {
            paused = setInterval(() => {
               plusSlide(1);
               sliderItems[slideIndex - 1].classList.add('slideInDown'); 
            }, 3000);
        }
        else{
            paused = setInterval(function () {
                plusSlide(1);
                sliderItems[slideIndex - 1].classList.remove('slideInRight');
                sliderItems[slideIndex - 1].classList.add('slideInLeft');
             }, 3000);
        }
    }
   
    activateAnimation();

    sliderItems[0].parentNode.addEventListener('mouseenter', () =>{
        clearInterval(paused);
    });

    sliderItems[0].parentNode.addEventListener('mouseleave', () =>{
        activateAnimation();
    });
}

export {slider};