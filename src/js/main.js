import { modal } from "./modules/modal";
import { slider } from "./modules/slider";
import { forms } from "./modules/forms";
import { Mask } from "./modules/mask";
import { checkLanguageInputs } from "./modules/checkLanguageInputs";
import { showStyles } from "./modules/showStyles";

window.addEventListener('DOMContentLoaded', () => {
    "Use strict";

    modal('.button-design', '.popup-design', '.popup-close');
    modal('.button-consultation', '.popup-consultation', '.popup-close');
    modal('.fixed-gift', '.popup-gift', '.popup-close', true, true);
    slider({
        sliderItemsSelector: '.feedback-slider-item',
        prevSelector: '.main-prev-btn',
        nextSelector: '.main-next-btn',
    });
    slider({
        sliderItemsSelector: '.main-slider-item',
        dir: 'vertical'
    });
    forms();
    Mask('[name="phone"]');
    checkLanguageInputs('[name="name"]');
    checkLanguageInputs('[name="message"]');
    showStyles('.styles-2', '.button-styles');
});