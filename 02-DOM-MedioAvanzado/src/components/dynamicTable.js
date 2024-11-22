
/**
 * 
Data de ejemplo : con nombre, edad y emai.
 */

const data = [
    {name: 'John Doe', age: 30, email: 'john.doe@example.com'},
    {name: 'Jane Smith', age: 25, email: 'jane.smith@example.com'},
    {name: 'Alice Johnson', age: 35, email: 'alice.johnson@example.com'},
];

const dynamicTable = (data, headers) => {
    //creamos la tabla
    const table = document.createElement('table');
    table.id = "table-data-users";
    table.style.border = 1;
    //creamos el thead
    const thead = document.createElement('thead');
    //creamos el tr
    const headerRow = document.createElement('tr');

    headers.forEach(header => {
        //creamos le th
        const th = document.createElement('th');
        th.textContent = header;
        

        // -----------------SI QUIERO QUE AL HACER CLICK EN EL HEADER ORDENE LA TABLA ----------------
        // aqui iria la logica de ordenacion
        //añadimos cada th al tr
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);

    const tbody = documentCreateElement('tbody');
    tbody.innerHTML = "";

    data.forEach(user =>{
        //creamos el tr
        const trUser = document.createElement('tr');
        trUser.innerHTML = `
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>`
        //recorremos los datos de cada usuario

        //añadimos cada td al tr
        tbody.appendChild(trUser);

    })

    //añadimos el thead y el tbody
    table.appendChild(thead);
    table.appendChild(tbody);

    return table;

}