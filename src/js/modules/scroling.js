const scrolling = (upSelector) =>{
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650){
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    const links = document.querySelectorAll('[href^="#"]'),
          speed = 0.1;

    links.forEach((link) =>{
        link.addEventListener('click', function (event) {
            event.preventDefault();
    
            let topWidth = document.documentElement.scrollTop,
                start = null,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top;
            
            requestAnimationFrame(frame);
    
            function frame (time){
                if (start == null){
                    start = time;
                } 
        
                let progress = time - start,
                r = (toBlock < 0 ? Math.max(topWidth - progress/speed, topWidth + toBlock ):  Math.min(topWidth + progress/speed, topWidth + toBlock ) ); 
        
                document.documentElement.scrollTo(0, r);
        
                if (r != topWidth + toBlock){
                    requestAnimationFrame(frame);
                } else {
                    location.hash = hash;
                }
                
            }
        });
    
    });
    
  
    
};


export {scrolling};