import divForm from "./components/divForm.js"
import formComponent from "./components/formComponent.js";

document.addEventListener('DOMContentLoaded', function() {

    const app = document.getElementById('app');
    
    const divFormulario = divForm();
    app.appendChild(divFormulario);

    // const divLogin = formComponent();
    // app.appendChild(divLogin);

});