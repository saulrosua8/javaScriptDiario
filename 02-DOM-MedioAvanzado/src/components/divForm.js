
const divForm = () =>{
    const divForm = document.createElement('div');
    divForm.classList.add('form-container');
    //Crear el formulario
    const formEmail = document.createElement('form');
    //crear el label
    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'Ingrese su email:';
    formEmail.appendChild(labelEmail);
    //<input type="email" name="email" id"email">
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('name', 'email');
    inputEmail.id = "email";
    inputEmail.placeholder = 'Escribe tu email';
    formEmail.appendChild(inputEmail);

    //añadimos el formulario al contenedor
    divForm.appendChild(formEmail);

    //añadimos el contenedor al app
    app.appendChild(divForm);

    const pEmailCheck  = document.createElement("p");
    pEmailCheck.id = "email-check";
    pEmailCheck.textContent = "email no valido";
    pEmailCheck.style.color = "red"
    pEmailCheck.style.display = "none";

    divForm.appendChild(pEmailCheck);

    //logica de validacion de email
    //necesito una expresion regular de validacion del email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    inputEmail.addEventListener('input', () => {
        const isValidEmail = emailRegex.test(inputEmail.value);
        pEmailCheck.style.display = isValidEmail ? "none" : "block";
    })
    



    
    return divForm;

};

export default divForm;