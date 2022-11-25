const btnAgregar = document.querySelector('.btn-primary');
const btnDisminuir = document.querySelector('.btn-secondary');
const btnResetear = document.querySelector('.btn-info');
const resultado = document.getElementById('resultado')


let contador = 0;




btnAgregar.addEventListener('click', () => {
    contador++
    actualizarContador()


})

btnDisminuir.addEventListener('click', () => {
    contador--
    actualizarContador()
})

btnResetear.addEventListener('click', () => {
   contador = 0;
   actualizarContador();

})


const actualizarContador = () => {
    resultado.innerText = contador;
}


