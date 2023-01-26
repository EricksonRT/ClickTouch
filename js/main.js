//creamos la variable canvas, para poder inicializar la imagen de la pelota, dentro del canvas
var canva = document.getElementById('canvas');
//--------------------------------------------------------------------------Variables globales-------------------------------------------------------------------------------
// Ancho del canvas------------------------------------
const divWidth = canva.offsetWidth;
//Alto del canvas---------------------------------------
const divHeight = canva.offsetHeight;
//cronometro--------------------------------------------
let timer = document.querySelector('#timer');
//puntos------------------------------------------------
let puntos = 0;
let inpt_puntos = document.querySelector('#inpt_puntos');
//--------------------------------------------------------

// -------------------------------------------------------
// MODAL
const dialogModal = document.querySelector('dialog');
const closeModal = document.querySelector('#cancel');
const showModal = document.querySelector('#show');
const btnRestartGame=document.querySelector("#restart");
// Botón de prueba para abrir el modal manualmente
// showModal.addEventListener('click', () => dialogModal.showModal());
closeModal.addEventListener('click', () => dialogModal.close());
// Cierra el modal, e inicia el juego nuevamente
btnRestartGame.addEventListener('click',()=> dialogModal.close(), iniciarJuego());
// -------------------------------------------------------

console.log("Ancho de pagina:" + divWidth);
console.log("Alto de pagina:" + divHeight);



function inicializarPelota() {
    //creacion un elemento de tipo img
    const img = document.createElement("img");
    img.src = "../assets/img/boton.png";
    // agregamos el elemento como hijo del div, llamado canva
    canva.appendChild(img);
    img.classList.toggle("img");
    //agregamos un id
    img.setAttribute('id', 'modelPelota')

}
inicializarPelota();

// Inicia el juego al cargar la pagina
const iniciarJuego=()=> {
    puntos = 0
    cronometro();
};
iniciarJuego()

//Numeros random generados aleatoriamente acorde a la pantalla del dispositivo
let nroRandomAncho = () => {
    return Math.floor(Math.random() * divWidth - 30);
}
let nroRandomAlto = () => {
    return Math.floor(Math.random() * (divHeight - 45));
}


//Evento de la pelota cuando le damos click
let pelota = document.querySelector('#modelPelota');
pelota.addEventListener('click', () => {

    //guardamos los valores random en nuevas variables 
    let = ancho = nroRandomAncho();
    let = alto = nroRandomAlto();
    sumaPuntos();
    pelota.setAttribute('style', 'opacity:0;')
    pelota.setAttribute('style', 'opacity:1; transform: translate(' + ancho + 'px, ' + alto + 'px)');
    // pelota.classList.contains('anim') ? pelota.classList.remove('anim') : pelota.classList.add('anim')

})



// Sistema de puntuación//
const sumaPuntos = () => {
    puntos += 1;
    inpt_puntos.textContent = "Puntuación: " + puntos;
}

//Tiempo
const cronometro = () => {
    let tiempo = 60;
    let intervalo = setInterval(() => {
        tiempo -= 1;
        timer.textContent = "Tiempo restante: " + tiempo;
        //Si llega a 0 se detiene el intervalo
        if (tiempo == 0) {
            timer.textContent = "Se acabo el tiempo";
            clearInterval(intervalo);
            mostrarPuntajeFinal(puntos);
            dialogModal.showModal();
        }
    }, 100);


}


// Muestra puntuación y datos del modal
const mostrarPuntajeFinal=(puntajeFinal)=>{
    const $html_PuntajeFInal=document.querySelector('#puntajeFInal');
    const $html_PuntajeMax=document.querySelector('#puntajeMax');
    $html_PuntajeFInal.textContent=puntajeFinal;
    $html_PuntajeMax.textContent=localStoragePuntajeMaximo(puntajeFinal);
}

// Verifica que la localStorage exista, si no se ha creado, la crea en vacio.
let puntajeMaximo=0;
if (localStorage.getItem('Puntuacion_maxima', '') ==null) localStorage.setItem('Puntuacion_maxima', '');
// Recibe el puntaje actual y compara si el localStorage está vacío
const localStoragePuntajeMaximo=(puntajeFinal)=>{
    let puntajeActual=puntajeFinal;
        // Si está vacio, compara el puntaje actual con el maximo y guarda el valor en el local storage, sino, valida el puntaje actual con el del localStorage
    if (localStorage.getItem('Puntuacion_maxima')==='') {
        if(puntajeActual>puntajeMaximo) puntajeMaximo=puntajeActual, localStorage.setItem('Puntuacion_maxima',puntajeMaximo);
            }else{
                if(puntajeActual>localStorage.getItem('Puntuacion_maxima')) puntajeMaximo=puntajeActual, localStorage.setItem('Puntuacion_maxima',puntajeMaximo);
            }
    return localStorage.getItem('Puntuacion_maxima');
}
