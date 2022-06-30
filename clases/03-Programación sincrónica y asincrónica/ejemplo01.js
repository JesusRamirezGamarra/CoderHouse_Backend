console.log("Hola mama");
let button = document.getElementById('bottonCallBack')

const decirHola = () => console.log("Hola");
const decirAdios = () => console.log("Adios");
const alertar = () =>{
    alert('Hola')
}


button.addEventListener('click', alertar);