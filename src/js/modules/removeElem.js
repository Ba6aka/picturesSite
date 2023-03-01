function removeElement(elementSelector){
    const elem = document.querySelector(elementSelector);
    elem.remove();
}

export {removeElement};