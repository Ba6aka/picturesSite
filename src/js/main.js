import { modal } from "./modules/modal";

window.addEventListener('DOMContentLoaded', () => {
    "Use strict";

    modal('.button-design', '.popup-design', '.popup-close');
    modal('.button-consultation', '.popup-consultation', '.popup-close');
    modal('.fixed-gift', '.popup-gift', '.popup-close', true, true);
});