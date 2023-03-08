const showStyles = (stylesSelector, triggerSelector) =>{
    const styles = document.querySelectorAll(stylesSelector),
          triggerButton = document.querySelector(triggerSelector);    

    styles.forEach((item) =>{
        item.classList.add('animated', 'fadeInUp');
    });

    triggerButton.addEventListener('click', () =>{
        styles.forEach((item) =>{
            console.log(item);
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
            item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
    triggerButton.remove();
    });

};

export {showStyles};