const collapsible = (triggerSelector) =>{
    const triggers = document.querySelectorAll(triggerSelector);
         
    triggers.forEach((triger) =>{
        triger.addEventListener('click', function () {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('active-content');
            
            if (this.classList.contains('active')){
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }

        });
    });
};

export {collapsible};