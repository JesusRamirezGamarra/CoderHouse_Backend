class Usuario{
  constructor(email,clave,nombre){
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

const socket = io()

$(function () {
  socket.on('socketConnected', () => {
    socket.emit('productListRequest')
    socket.emit('chatMessagesRequest')
  })

  
//////////////////////////////////////////////////////////////////////////////////
////        PRODUCT LIST  
//////////////////////////////////////////////////////////////////////////////////
  const productForm = $('#productForm')
  const productViewContainer = $('#productViewContainer')

  productForm.submit((event) => {
    event.preventDefault()

    const newProduct = {
      title: productForm[0][0].value,
      price: productForm[0][1].value,
      thumbnail: productForm[0][2].value,
    }

    socket.emit('addNewProduct', newProduct)
    productForm.trigger('reset')
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
  const chatForm = $('#chatForm')
  const chatContainer = $('#chatContainer')

  chatForm.submit((event) => {
    event.preventDefault()

    const newMessage = {
      email: chatForm[0][0].value,
      messageText: chatForm[0][1].value,
    }

    if(oUsuarioSession){
      sessionStorage.setItem('UsuarioschatForm',JSON.stringify(new Usuario(newMessage.email)))
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


    if(oUsuarioSession==''){     
      chatForm[0][0].disabled = false;
    }
    else{
      oUsuarioSession = JSON.parse( sessionStorage.getItem('UsuarioschatForm') )
      chatForm[0][0].value = oUsuarioSession.email;
      chatForm[0][0].disabled = true;
    }
  }


  
})
