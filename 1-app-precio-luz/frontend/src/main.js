import { createLoadButton } from "./components/loadButton/loadButton";
import { createSpinner } from "./components/spinner/spinner";

const handleClick =() => {
    
};

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const loadPriceBtn = createLoadButton();
    app.appendChild(loadPriceBtn);

    loadPriceBtn.addEventListener('click', handleClick);

});

/**
 *     const app = document.getElementById('app');
    const spinner = createSpinner();    
    app.appendChild(spinner);
 */