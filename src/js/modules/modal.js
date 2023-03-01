function modal (triggerSelector, windowSelector, closeSelector, clickOverlayModal = true ){
    
    const trigger = document.querySelectorAll(triggerSelector),
    // windows = document.querySelectorAll('[data-modal]'),
    modalWindow = document.querySelector(windowSelector),
    close = document.querySelector(closeSelector),
    scrol = calcScroll();
   
//   function closeModalWindows(){
//       windows.forEach((item) =>{
//           item.style.display = 'none';
//       });
//   }

  trigger.forEach((item) =>{
      item.addEventListener('click', (e) =>{
          if (e.target){
              e.preventDefault(); }
            //   closeModalWindows();
              modalWindow.style.display = 'block ';
              document.body.style.overflow = 'hidden';
              document.body.style.marginRight = `${scrol}px`;
      });
  });

  modalWindow.addEventListener('click', (e) =>{
      if (e.target == modalWindow && clickOverlayModal){
        console.log(e.target)
          modalWindow.style.display = 'none';
          document.body.style.overflow = '';
          document.body.style.marginRight = `0px`;
      }
          
  });

  close.addEventListener('click', (e) =>{
      if (e.target){
          modalWindow.style.display = 'none';
          document.body.style.overflow = '';
        //   closeModalWindows();
          document.body.style.marginRight = `0px`;
      }
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
}

export {modal};