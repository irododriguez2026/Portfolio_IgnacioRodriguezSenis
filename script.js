let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function select(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("python");
        habilidades[2].classList.add("c");
        habilidades[3].classList.add("prolog");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("matlab");
        habilidades[6].classList.add("network");
        habilidades[7].classList.add("communication");
        habilidades[8].classList.add("teamwork");
        habilidades[9].classList.add("creativity");
        habilidades[10].classList.add("dedication");
        habilidades[11].classList.add("performance");
        habilidades[12].classList.add("resolutive");
        habilidades[13].classList.add("detailed");
    }
}



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 