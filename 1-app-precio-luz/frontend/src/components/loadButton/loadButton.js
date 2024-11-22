

export function createLoadButton(){
    const loadButton = document.createElement('button');
    loadButton.id = "load-prices-btn";
    loadButton.textContent = "Cargar precios de la luz";
    loadButton.classList.add("load-btn");
    return loadButton;
}