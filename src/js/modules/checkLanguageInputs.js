const checkLanguageInputs = (selector) =>{
    const inputs = document.querySelectorAll(selector);

    inputs.forEach((item) =>{
        item.addEventListener('keypress', (e) =>{
            if (e.key.match(/[^a-z 0-9]/ig)){
                e.preventDefault();
            }
        });
    });
};

export {checkLanguageInputs};