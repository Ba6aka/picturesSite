import { removeElement } from "./removeElem";
function modal (triggerSelector, windowSelector, closeSelector, clickOverlayModal = true, del = false ){
    
    const trigger = document.querySelectorAll(triggerSelector),
    windows = document.querySelectorAll('[data-modal]'),
    modalWindow = document.querySelector(windowSelector),
    close = document.querySelectorAll(closeSelector),
    scrol = calcScroll();
   
  function closeModalWindows(){
      windows.forEach((item) =>{
          item.style.display = 'none';
      });
  }

  trigger.forEach((item) =>{
      item.addEventListener('click', (e) =>{
        if (e.target){
            e.preventDefault(); }
              closeModalWindows();
        if (del){
            removeElement(triggerSelector);
            }
        modalWindow.style.display = 'block ';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scrol}px`;
      });
  });

  modalWindow.addEventListener('click', (e) =>{
      if (e.target && e.target == modalWindow && clickOverlayModal){
          modalWindow.style.display = 'none';
          document.body.style.overflow = '';
          document.body.style.marginRight = `0px`;
      }
     
          
  });

  close.forEach((item) =>{
    item.addEventListener('click', (e) =>{
        if (e.target){
            modalWindow.style.display = 'none';
            document.body.style.overflow = '';
            closeModalWindows();
            document.body.style.marginRight = `0px`;
        }
    });
  });

    function calcScroll(){
    let div = document.createElement('div');
    
    div.style.height = '50px';
    div.style.width = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);

    let scroll = div.offsetWidth - div.clientWidth;

    return scroll;
    }

    function showModalByTime(selector, time){
        setTimeout(() => {
            let display;

            document.querySelectorAll('[data-modal]').forEach((item) =>{
                if (getComputedStyle(item).display !== 'none'){
                    display = 'block';
                } 
            });
         
           if (!display){
                document.querySelector(selector).style.display = 'block';
                document.body.overflow = 'hidden';
           } 
        }, time);
        
    }

    showModalByTime('.popup-consultation', 5000);
}

export {modal};