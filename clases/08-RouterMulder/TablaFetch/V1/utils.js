fetch('https://restcountries.com/v3.1/region/europe')
.then(response => response.json())
.then(data => {

var tabla = document.createElement('table');

// por cada dato se crea una fila
for (const fila of data){
    let tr = document.createElement('tr');

    // otro bucle para recorrer los datos de cada objeto
    for (const atributo of Object.values(fila)) {

        var celda = document.createElement('td');
        celda.textContent = atributo;
        celda.style.border = '1px solid';
        tr.appendChild(celda);
    }

    tr.appendChild(celda);

    tabla.appendChild(tr);
}
document.body.appendChild(tabla);
})