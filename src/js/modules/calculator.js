const calculator = (sizeSelector, materialSelector, optionsSelector, promocodeSelector, resultSelector) => {
    const sizeBlock = document.querySelector(sizeSelector),
          materialBlock = document.querySelector(materialSelector),
          optionsBlock = document.querySelector(optionsSelector),
          promocodeBlock = document.querySelector(promocodeSelector),
          resultBlock = document.querySelector(resultSelector);
    console.log(sizeBlock);
    console.log(materialBlock);
    console.log(optionsBlock);
    console.log(resultBlock);
    function calulationFunction (){
        let sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == ''){
            resultBlock.textContent = 'Будь ласка, оберіть розмір і матеріал картини.';
        } else if (promocodeBlock.value == 'IWANTPORTANT') {
            resultBlock.textContent = `${Math.round(sum * 0.7)}грн`;
        } else {
            resultBlock.textContent = `${sum}грн`;
        }
    }

    sizeBlock.addEventListener('change', calulationFunction);
    materialBlock.addEventListener('change', calulationFunction);
    optionsBlock.addEventListener('change', calulationFunction);
    promocodeBlock.addEventListener('input', calulationFunction);
};

export {calculator};