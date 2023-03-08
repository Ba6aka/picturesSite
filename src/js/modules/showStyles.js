import { getData } from "../servises/servises";

const showStyles = (containerSelector, triggerSelector) =>{
    const triggerButton = document.querySelector(triggerSelector);    
 
    triggerButton.addEventListener('click', () =>{
        getData('http://localhost:3000/styles')
        .then(res =>{
           createCards(res);
           triggerButton.remove();
        })
        .catch(er =>{console.error(er);});
        });
      
    function createCards(res){
        for (let k of res){
            let card = document.createElement('div');
                card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            
             card.innerHTML =`			
             <div class=styles-block>
                 <img src=${k.src} alt>
                 <h4>${k.title}</h4>
                 <a href="${k.link}">Подробнее</a>
             </div>`;

         document.querySelector(containerSelector).appendChild(card);
         }
    }
    
};

export {showStyles};