console.log('Hola')

fetch('/api/users')
    .then(res=>res.json())
    .then(json=>console.log(json))