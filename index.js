const body = document.body;


//Elegir colores para el fondo
var color1 = 'rgb(0, 1, 65)';
var color2 = 'rgb(39, 5, 22)';
var color3 = 'rgb(8, 39, 5)';
var color4 = '#0b0b0b';

var colorPorDefecto = color4;

/*--------------------------------------*/

//Elegir imágenes para el fondo
var patron1 = "url('img/patron1.png')";
var patron2 = "url('img/patron2.png')";
var patron3 = "url('img/patron3.png')";
var patron4 = "url('img/patron4.png')";

var patronPorDefecto = patron3;

/*--------------------------------------*/

//Elegir colores para énfasis
var colorEnfasis1 = 'rgb(255, 203, 14)';
var colorEnfasis2 = 'rgb(245, 100, 209)';
var colorEnfasis3 = 'rgb(180, 180, 180)';
var colorEnfasis4 = 'rgb(130, 126, 255)';

var enfasisPorDefecto = colorEnfasis3;

/*--------------------------------------*/





var botonDesplegar = document.getElementById("apertura");
var panelBotones = document.getElementById("PanelPersonalizacion");

panelBotones.style.left = "-14.5vw";
botonDesplegar.style.left = "0vw";

botonDesplegar.addEventListener("click", function () {

    DeseleccionarMaterias();

    if (panelBotones.style.left === "-14.5vw") {
        panelBotones.style.left = "0";
        botonDesplegar.style.left = "14.5vw"; // Ocultar el menú
        botonDesplegar.textContent = "◄";
    }
    else {
        panelBotones.style.left = "-14.5vw";
        botonDesplegar.style.left = "0vw"; // Mostrar el menú
        botonDesplegar.textContent = "►";
    }
});












document.getElementById("linkLinkedin").onclick = function () { window.open("https://www.linkedin.com/in/juli%C3%A1n-fonrouge-aa9127210/", target = "_blank"); }
document.getElementById("linkWhats").onclick = function () { window.open("https://wa.me/1135850553/", target = "_blank"); }

