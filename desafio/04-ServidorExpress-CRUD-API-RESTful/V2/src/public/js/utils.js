

const CargarVisitsCounter = async () => {
    try{
        const res = await fetch('http://localhost:8080/api/visits/count');
        if(res.status === 200){
            const data = await res.json();
            const progressbarValue= data[0].visitas;
            const porcentaje = parseInt((data[0].visitas / 1000 ) * 100);
            document.getElementById('progressVisitsCount').innerHTML = '# Visitas : ' + progressbarValue;
            document.getElementById('progressbarvalue').innerHTML = `
            <div class="progress-bar bg-danger" role="progressbar" style="width: ${porcentaje}%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>`
            // document.getElementById('progressbarvalue').innerHTML = `<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${progressbarValue}" aria-valuemin="0" aria-valuemax="1000" style="width: ${porcentaje}%;"></div>`;
            //CargarTabla();
            
        }
    }
    catch(error){
        console.log(error);
    }
}



// Agregar Producto
// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado. 
const form_R = document.querySelector('#form_R');
form_R.addEventListener('submit', async (e) => {
    e.preventDefault();
    let formData = {}
    new FormData(form_R).forEach( (value, key) =>formData[key] = value)
    console.log('formData : ',formData) ;
    document.getElementById('code-form_R_Form').innerHTML = `${JSON.stringify(formData)}`;
    const res =  await fetch('http://localhost:8080/api/productos/', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res =>{
        if(res.status === 200){
            return res.json();
        }
        else{
            return new Error(`Error: ${res.status}`)
        }
    })
    .then(data => {
        console.log( 'data: ',data )
        document.getElementById('code-form_R_Method').innerHTML = `${JSON.stringify(data)}`;
    })
    .catch(err => console.log( 'error: ',err) )
    // CargarTabla();
})

const form_R_Upload = document.querySelector('#form_R_Upload');
form_R_Upload.addEventListener('submit', async (e) => {
    e.preventDefault();
    let formData = {}
    new FormData(form_R_Upload).forEach( (value, key) =>formData[key] = value)
    console.log('formData : ',formData) ;
    document.getElementById('code-form_R_Form').innerHTML = `${JSON.stringify(formData)}`;
    const res =  await fetch('http://localhost:8080/api/productos/Upload', {
        method: 'POST',
        body: formData,
        // headers: {
        //     'Content-Type': 'multipart/form-data'
        // }
        // headers: new HttpHeaders({
        //     // 'Content-Type': undefined,
        //     'Accept': '*/*',
        //     'Authorization': 
        //     "Bearer "+(JSON.parse(sessionStorage.getItem('token')).token),
        //     'Access-Control-Allow-Origin': this.apiURL,
        //     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        //     'Access-Control-Allow-Headers': 'origin,X-Requested-With,content-type,accept',
        //     'Access-Control-Allow-Credentials': 'true' 
    
        //   })
    })
    .then(res =>{
        if(res.status === 200){
            return res.json();
        }
        else{
            return new Error(`Error: ${res.status}`)
        }
    })
    .then(data => {
        console.log( 'data: ',data )
        document.getElementById('code-form_R_Method').innerHTML = `${JSON.stringify(data)}`;
    })
    .catch(err => console.log( 'error: ',err) )
    // CargarTabla();
})


// Buscar Producto
// GET '/api/productos/:id' -> devuelve un producto según su id. 
const form_CxID = document.querySelector('#form_CxID');
form_CxID.addEventListener('submit', async (e) => {
    e.preventDefault();
    let formData = {}
    new FormData(form_CxID).forEach( (value, key) =>formData[key] = value)
    console.log('formData : ',formData) ;
    document.getElementById('code-form_CxID_Form').innerHTML = `${JSON.stringify(formData)}`;
    document.getElementById('Mehotd_form_CxID').innerHTML = `GET '/api/productos/:id' :`
    const res =  await fetch('http://localhost:8080/api/productos/'+formData.productId, {
        method: 'GET'
    })
    .then(res =>{
        if(res.status === 200){
            return res.json();
        }
        else{
            return new Error(`Error: ${res.status}`)
        }
    })
    .then(data => {
        console.log( 'data: ',data )
        document.getElementById('code-form_CxID_Method').innerHTML = `${JSON.stringify(data)}`;
    })
    .catch(err => console.log( 'error: ',err) )
})

// Delete Producto
// DELETE '/api/productos/:id' -> elimina un producto según su id.
const form_D = document.querySelector('#form_D');
form_D.addEventListener('submit', async (e) => {
    e.preventDefault();
    let formData = {}
    new FormData(form_D).forEach( (value, key) =>formData[key] = value)
    console.log('formData : ',formData) ;
    document.getElementById('code-form_CxID_Form').innerHTML = `${JSON.stringify(formData)}`;
    document.getElementById('Mehotd_form_CxID').innerHTML = `PUT '/api/productos/:id' :`
    const res =  await fetch('http://localhost:8080/api/productos/'+formData.productId, {
        method: 'DELETE',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res =>{
        if(res.status === 200){
            return res.json();
        }
        else{
            return new Error(`Error: ${res.status}`)
        }
    })
    .then(data => {
        console.log( 'data: ',data )
        document.getElementById('code-form_CxID_Method').innerHTML = `${JSON.stringify(data)}`;
    })
    .catch(err => console.log( 'error: ',err) )
    // CargarTabla();
})

// Actualizar Producto
// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id. 
const form_U = document.querySelector('#form_U');
form_U.addEventListener('submit', async (e) => {
    e.preventDefault();
    let formData = {}
    new FormData(form_U).forEach( (value, key) =>formData[key] = value)
    console.log('formData : ',formData) ;
    document.getElementById('code-form_U_Form').innerHTML = `${JSON.stringify(formData)}`;
    const res =  await fetch('http://localhost:8080/api/productos/'+formData.productId, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res =>{
        if(res.status === 200){
            return res.json();
        }
        else{
            return new Error(`Error: ${res.status}`)
        }
    })
    .then(data => {
        console.log( 'data: ',data )
        document.getElementById('code-form_U_Method').innerHTML = `${JSON.stringify(data)}`;
    })
    .catch(err => console.log( 'error: ',err) )
    // CargarTabla();
})

// Listar Producto
// GET '/api/productos' -> devuelve todos los productos. 
const form_C = document.querySelector('#form_C');
form_C.addEventListener('submit', async (e) => {
    e.preventDefault();
    // let formData = {}
    // new FormData(form_C).forEach( (value, key) =>formData[key] = value)
    // console.log('formData : ',formData) ;
    CargarTabla();
})

const CargarTabla = async () => {

    table = $('#TableIdContainer').DataTable({
        "lengthMenu": [ [15, 50, 100, -1], [15, 50, 100, "All"] ],
        "pagingType": "simple",
        scrollY: 400,
        destroy: true,
        scrollCollapse: true,
        order: [[ 0, 'asc' ], [3, 'desc' ]],
        ajax: {
            url: 'http://localhost:8080/api/productos/',
        },
        columns: [
            { data: 'id' },
            { data: 'title' },
            { data: 'price' },
            { data: 'thumbnail' }
            ]
        })
    }



CargarVisitsCounter();


// // var _table_ = document.createElement('table'),
// var _table_ = document.getElementById('productViewContainer'),
// _tr_ = document.createElement('tr'),
// _th_ = document.createElement('th'),
// _td_ = document.createElement('td');

// // Builds the HTML Table out of myList json data from Ivy restful service.
// function buildHtmlTable(arr) {
//     var table = _table_.cloneNode(false),
//     columns = addAllColumnHeaders(arr, table);
//     for (var i = 0, maxi = arr.length; i < maxi; ++i) {
//     var tr = _tr_.cloneNode(false);
//     for (var j = 0, maxj = columns.length; j < maxj; ++j) {
//         var td = _td_.cloneNode(false);
//         cellValue = arr[i][columns[j]];
//         td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
//     }
//     return table;
// }

// // Adds a header row to the table and returns the set of columns.
// // Need to do union of keys from all records as some records may not contain
// // all records
// function addAllColumnHeaders(arr, table) {
//     var columnSet = [],
//     tr = _tr_.cloneNode(false);
//     for (var i = 0, l = arr.length; i < l; i++) {
//     for (var key in arr[i]) {
//         if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key) === -1) {
//         columnSet.push(key);
//         var th = _th_.cloneNode(false);
//         th.appendChild(document.createTextNode(key));
//         tr.appendChild(th);
//         }
//     }
//     }
//     table.appendChild(tr);
//     return columnSet;
// }

// document.body.appendChild(buildHtmlTable([{
//     "name": "abc",
//     "age": 50
//     },
//     {
//     "age": "25",
//     "hobby": "swimming"
//     },
//     {
//     "name": "xyz",
//     "hobby": "programming"
//     }
// ]));