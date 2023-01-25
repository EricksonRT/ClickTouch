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
// showModal.addEventListener('click', () => dialogModal.showModal());
closeModal.addEventListener('click', () => dialogModal.close());
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
    // document.getElementById("ancho").textContent = "Ancho: " + ancho;
    // document.getElementById("alto").textContent = "Alto: " + alto;
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
            // alert("Se acabó el tiempo");
            timer.textContent = "Se acabo el tiemmpo: " + puntos;
            clearInterval(intervalo);
            mostrarPuntajeFinal(puntos);
            dialogModal.showModal();
        }
    }, 100);


}
cronometro();

// Muestra puntuación y datos del modal
const mostrarPuntajeFinal=(puntajeFinal)=>{
    const $html_PuntajeFInal=document.querySelector('#puntajeFInal');
    const $html_PuntajeMax=document.querySelector('#puntajeMax');
    $html_PuntajeFInal.textContent=puntajeFinal;
    $html_PuntajeMax.textContent="s";
}

