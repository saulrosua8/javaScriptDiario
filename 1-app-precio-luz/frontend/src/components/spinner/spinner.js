/**
 * Spinner con 3 estados
 *  - Crear el spinner
 *  - Mostrar el spinner
 *  - Ocultar el spinner
 */

export const createSpinner = () =>{

    // Crear el elemento spinner
    const spinner = document.createElement('div');
    spinner.id = 'spinner';
    spinner.classList.add("hidden", "spinner");
    spinner.textContent = "Cargando...";
    return spinner;
}


export function showSpinner(){
    // Mostrar el elemento spinner
    const spinner  = document.getElementById("spinner");
    spinner.classList.remove("hidden");
}

export function hideSpinner(){
    // Ocultar el elemento spinner
    const spinner = document.getElementById("spinner");
    spinner.classList.add("hidden");
}