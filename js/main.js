function display_image() {
    const img = document.createElement("img");
    img.src = "../assets/img/boton.png";

    document.body.appendChild(img);
    img.classList.toggle("img");

}
display_image();