
export default function formComponent(){
    const divFormLogin = document.createElement('div');
    divFormLogin.classList.add('form-container');
    divFormLogin.id = 'form-container-login';
    //Crear el formulario
    const formEmail = document.createElement('form');
    formEmail.htmlfor = "form-container";
    //Crear el labelUsername
    const labelUsername = document.createElement('label');
    labelUsername.textContent = 'Username:';
    formEmail.appendChild(labelUsername);
    //<input type="text" name="username" id"username">
    const inputUsername = document.createElement('input');
    inputUsername.id = "username";
    inputUsername.type = "text";
    inputUsername.name = "username";
    inputUsername.placeholder = "Escribe tu username";
    formEmail.appendChild(inputUsername);

    //label Password
    const labelPassword = document.createElement('label');
    labelPassword.textContent = 'Password:';
    formEmail.appendChild(labelPassword);
    //<input type="password" name="password" id"password">
    const inputPassword = document.createElement('input');
    inputPassword.id = "password";
    inputPassword.type = "password";
    inputPassword.name = "password";
    inputPassword.placeholder = "Escribe tu password";
    formEmail.appendChild(inputPassword);

    //button
    const buttonLogin = document.createElement('button');
    buttonLogin.textContent = 'Login';
    buttonLogin.id= "button-login";
    buttonLogin.type = "submit";
    buttonLogin.textContent = "Iniciar sesion";
    formEmail.appendChild(buttonLogin);

    divFormLogin.appendChild(formEmail);
    
    return divFormLogin;

}