
// (async () => {

//     const { value: email } = await Swal.fire({
//       title: 'Identifícate',
//       input: 'email',
//       inputLabel: 'Your email address',
//       inputPlaceholder: 'Ingresa tu email address',
//       text: "Ingresa el usuario para identificarte en el chat",
//       allowOutsideClick: false,
//       allowEscapeKey: false,
//     })
    
//     // if (email) {
//     //   Swal.fire(`Accesos Condecido al email: ${email}`)
//     // }
// })()

let userEmail;
let socket= io({
    autoConnect:false//para que no se autoconecte el socket
})


const productForm = $('#productForm')
const productViewContainer = $('#productViewContainer')
const chatForm = $('#chatForm')
const chatContainer = $('#chatContainer')


class Usuario{
  constructor(email,nombre){
      this.email=email ;
      this.nombre=nombre;        
  }
}

let oUsuarioSession
if( sessionStorage.getItem('UsuarioschatForm')){     
    oUsuarioSession = JSON.parse( sessionStorage.getItem('UsuarioschatForm') )
}else{
    oUsuarioSession = []
    sessionStorage.setItem('UsuarioschatForm',JSON.stringify(oUsuarioSession))
}

if(oUsuarioSession==''){     
  chatForm[0][0].disabled = false;

  Swal.fire({
    title: 'Identifícate',
    input: 'email',
    inputLabel: 'Your email address',
    inputPlaceholder: 'Ingresa tu email address',
    text: "Ingresa el usuario para identificarte en el chat",
    allowOutsideClick: false,
    allowEscapeKey: false,
    })
    .then(result => {
        sessionStorage.setItem('UsuarioschatForm',JSON.stringify(new Usuario(result.value)))
        chatForm[0][0].value = result.value;
        chatForm[0][0].disabled = true;
        //socket.connect()
        //socket.connect('http://localhost:8080',{ query: "foo=bar" })
        // socket.connect('',{ query: { email : result.value }});
        //socket.connect('',{ query: { email: 'myValue' } })

        socket.io.opts.query = {email: result.value };
        socket.disconnect();
        socket.connect();

        userEmail = result.value
    });



}
else{
  oUsuarioSession = JSON.parse( sessionStorage.getItem('UsuarioschatForm') )
  chatForm[0][0].value = oUsuarioSession.email;
  chatForm[0][0].disabled = true;
  socket.connect()
  userEmail = oUsuarioSession.email
}


///////////////////////////////////////////////////////////////////////////////////




function CerrarSeccionButton() {
  oUsuarioSession = JSON.parse( sessionStorage.getItem('UsuarioschatForm') )
  sessionStorage.removeItem('UsuarioschatForm')
  socket.emit('disconnection', {email:oUsuarioSession.email})
  socket.disconnect();
  location.reload()
}



//https://www.codegrepper.com/code-examples/javascript/document+ready+without+jquery
// “document ready without jquery”
$(function () {

  socket.on('socketConnected', () => {
    socket.emit('productListRequest')
    socket.emit('chatMessagesRequest')
  })
    
    //////////////////////////////////////////////////////////////////////////////////
    ////        PRODUCT LIST  
    //////////////////////////////////////////////////////////////////////////////////


      productForm.submit((event) => {
        event.preventDefault()

        const newProduct = {
          title: productForm[0][0].value,
          price: productForm[0][1].value,
          //thumbnail: productForm[0][2].value,
        }

        //socket.emit('addNewProduct', newProduct)
        const ourFile = document.getElementById('thumbnail').files[0];
        const reader = new FileReader();
        reader.onloadend = function() {
            socket.emit("addNewProduct", {
              data:reader.result, 
              filename: ourFile.name, 
              title: newProduct.title,
              price: newProduct.price//,
              //thumbnail: newProduct.thumbnail
            });
        }
        reader.readAsDataURL(ourFile);
        productForm.trigger('reset');
      })

      socket.on('updateProductList', productListHandler)

      async function productListHandler(allProducts) {
        const productLayout = await fetch('layouts/productView.hbs')
        const layoutText = await productLayout.text()
        const compiledHbsTemplate = Handlebars.compile(layoutText)
        const html = compiledHbsTemplate({ allProducts })
        productViewContainer.empty().append(html)
      }

      
    //////////////////////////////////////////////////////////////////////////////////
    ////        CHAT ROOM
    //////////////////////////////////////////////////////////////////////////////////

      chatForm.submit((event) => {
        event.preventDefault()

        const newMessage = {
          email: chatForm[0][0].value,
          messageText: chatForm[0][1].value,
        }
        socket.emit('addNewMessage', newMessage)
        chatForm.trigger('reset')
      })

      socket.on('updateChatRoom', chatRoomHandler)

      async function chatRoomHandler(allMessages) {
        const chatLayout = await fetch('layouts/chatRoom.hbs')
        const layoutText = await chatLayout.text()
        const compiledHbsTemplate = Handlebars.compile(layoutText)
        const html = compiledHbsTemplate({ allMessages })
        chatContainer.empty().append(html)


      }

    //////////////////////////////////////////////////////////////////////////////////
    ////        newConnection
    //////////////////////////////////////////////////////////////////////////////////


    socket.on('newConnection', newConnectionHandler)


    async function newConnectionHandler(data) {
      /*
      * @message  {String or DOMElement} The notification message contents.
      * @type     {String }              The Type of notification message (CSS class name 'ajs-{type}' to be added).
      * @wait     {Number}               The time (in seconds) to wait before the notification is auto-dismissed.
      * @callback {Function}             A callback function to be invoked when the notification is dismissed.
      * 
      * @return {Object} Notification object.
      *
      * alertify.notify(message, type, wait, callback)
      *
      */
      var notification = alertify.notify(`new Connection :  ${data.email} `, 'success', 5, function(){  console.log(`newConnection : ${data.email} `); });
    }


    //////////////////////////////////////////////////////////////////////////////////
    ////        disconnection
    //////////////////////////////////////////////////////////////////////////////////
    socket.on('disconnection', disconnectHandler)

    async function disconnectHandler(data) {
      /*
      * @message  {String or DOMElement} The notification message contents.
      * @type     {String }              The Type of notification message (CSS class name 'ajs-{type}' to be added).
      * @wait     {Number}               The time (in seconds) to wait before the notification is auto-dismissed.
      * @callback {Function}             A callback function to be invoked when the notification is dismissed.
      * 
      * @return {Object} Notification object.
      *
      * alertify.notify(message, type, wait, callback)
      *
      */
      var notification = alertify.notify(`disconnect :  ${data.email} `, 'error', 5, function(){  console.log(`disconnect : ${data.email} `); });
    }





    //////////////////////////////////////////////////////////////////////////////////
    ////        error
    //////////////////////////////////////////////////////////////////////////////////

    socket.on('error', errorHandler)

    async function errorHandler(data) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Vuelve a intentarlo',
        allowOutsideClick: false,
        allowEscapeKey: false,
        footer: '<a href="">Revisa la informacion ingresada antes de continuar</a>'
        })
    }

})



