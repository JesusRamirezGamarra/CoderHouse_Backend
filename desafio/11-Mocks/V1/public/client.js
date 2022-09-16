import {denormalizeData } from './normalizer.js'

///////////////////////////Socket//////////////////
// const socket = io();
let socket= io({
  autoConnect:true//para que no se autoconecte el socket
})
socket.emit('allProducts');
socket.emit('allMsgs');

socket.on('producto', (unProducto) => {
  attachRow(unProducto,true);
});

socket.on('mensaje', (mensajes) => {
  // new TextEncoder().encode("Hola@@@`  2|||ón").length//  -->17
  // "Hola@@@`  2|||ón".length //  -->16
  //const compresionJSON_NormalizrVsDenormalizr = 1 - (parseFloat(new TextEncoder().encode(JSON.stringify(denormalizeData(mensajes))).length/new TextEncoder().encode(JSON.stringify(mensajes)).length)*100).toFixed(2)
  //const compresionJSON_NormalizrVsDenormalizr = 1-  (parseFloat( JSON.stringify(denormalizeData(mensajes)).length/ JSON.stringify(mensajes).length))


  console.log(mensajes);
	console.log('denormalized data');
	const denormalizedData = denormalizeData(mensajes)
  console.log(denormalizedData);

  const NormalizrFile = (new TextEncoder().encode(JSON.stringify(mensajes))).length
  const originalFile  = (new TextEncoder().encode(JSON.stringify(denormalizedData))).length
  const compresionJSON_NormalizrVsDenormalizr = NormalizrFile / originalFile
  const GananciacompresionJSON_NormalizrVsDenormalizr = ( 1 - compresionJSON_NormalizrVsDenormalizr )
  const porcentajeCompresion = (GananciacompresionJSON_NormalizrVsDenormalizr * 100).toFixed(2)

  const compresion_SubTitle = document.getElementById('info')
  const compresion_Title = document.getElementById('compresion')
  
  compresion_Title.innerHTML = `[ Compresion : ${porcentajeCompresion}% ]`
  compresion_SubTitle.innerHTML =  `[ Normalizado : ${NormalizrFile} || Denormalizado : ${originalFile} ]`
  nvoMensaje(denormalizedData);
});

/////////////////////mensajes////////////////////////////////
const boxMensajes = document.getElementById('messages')
const btnMensajes = document.getElementById("btnMensajes")
const mensaje = document.getElementById('mensaje')
const email= document.getElementById('email')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const edad = document.getElementById('edad')
const alias = document.getElementById('alias')
const avatar = document.getElementById('avatar')


const nvoMensaje = (array) => {
  array.chats .forEach(elem => {
  const fila = document.createElement('div');
  
  fila.innerHTML = `<img class="avatar" src="${elem.author.avatar}"/>
                    <strong class="date">[${elem.dateMessage}]</strong> 
                    <strong class="author">${elem.author.alias}</strong> 
                    <em class="msg">${elem.message}</em>`;
                    // El elemento HTML <em> es el apropiado para marcar con énfasis las partes importantes de un texto. El elemento <em> puede ser anidado, con cada nivel de anidamiento indicando un mayor grado de énfasis.                    

  boxMensajes.appendChild(fila);
  });
};

btnMensajes.addEventListener('click', async (e) => {
  e.preventDefault();
  try {
    const data = {
      email: email.value,
      name: nombre.value,
      surname: apellido.value,
      age: edad.value,
      alias: alias.value,
      avatar: avatar.value,
      message: mensaje.value
    };

    const url = 'http://localhost:8080/api/mensajes';
    response = await postData(url, data);
    mensaje.value = '';
  } catch (err) {
    console.log(err);
  }
});

/////////////////////productos////////////////////////////////
const botonGuardarProducto = document.getElementById("botonGuardarProducto")
const precio = document.getElementById('precio')
const nombreProd = document.getElementById('nombreProd')
const thumbnail = document.getElementById('thumbnail')
const tabla = document.getElementById('tableContent')

const attachRow = (elem,Faker = true) => {
  const fila = document.createElement('tr');
  if(Faker)
    fila.className = 'table-active'
  else
    fila.className = 'table-warning'
  fila.innerHTML = `
                    <th id="id" scope="row">${elem.id}</th>
                    <td id="nombre">${elem.name}</td>
                    <td id="precio">${elem.price}</td>
                    <td>
                      <img id="thumbnail" class="imgTabla" src="${elem.thumbnail}" alt="">
                    </td>`
                    ;

  tabla.appendChild(fila);
};

botonGuardarProducto.addEventListener('click', async (e) => {
  e.preventDefault();
  try {
    const data = {
      nombre: nombreProd.value,
      precio: precio.value,
      thumbnail: thumbnail.value
    };

    const url = 'http://localhost:8080/api/productos';
    response = await postData(url, data);

    precio.value = '', nombreProd.value = '', thumbnail.value = '';
  } catch (err) {
    console.log(err);
  }
});

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
      //return response.json(); // parses JSON response into native JavaScript objects
      if( url == 'http://localhost:8080/api/productos'){
        const data = await response.json()
        console.log(data)
        // console.log(data)
        attachRow({id:data.data[0].id,name:data.data[0].nombre,price:data.data[0].precio,thumbnail:data.data[0].thumbnail},false)
      }
      //return data;
}