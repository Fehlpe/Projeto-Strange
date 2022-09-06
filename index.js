let cartoon = document.getElementById('cartoon')
let imgStrange1 = document.getElementById('titulo-cartoon');
let imgStrange2 = document.getElementById('strange-cartoon');
let paginaLancamento = document.getElementById('paginaLancamento');
let paginaLancamento2 = document.getElementById('paginaLancamento2');
let circulo1 = document.getElementById('img1');
let circulo2 = document.getElementById('img2');
let circulo3 = document.getElementById('img3');

imgStrange1.addEventListener('click', (e) => {
    var audio = new Audio('images/tema.m4a');
    audio.play();
    cartoon.classList.toggle('fade');
    setTimeout(mostrarTela2, 1000);
    setTimeout(mostrarCirculo1, 2000);
    setTimeout(mostrarCirculo2, 3000);
    setTimeout(mostrarCirculo3, 4000);
    setTimeout(mostrarTela, 5000);
})

imgStrange2.addEventListener("click", (e) => {
    var audio = new Audio('images/tema.m4a');
    audio.volume = 0.050
    audio.play();
    cartoon.classList.toggle('fade');
    setTimeout(mostrarTela2, 1000);
    setTimeout(mostrarCirculo1, 2000);
    setTimeout(mostrarCirculo2, 3000);
    setTimeout(mostrarCirculo3, 4000);
    setTimeout(mostrarTela, 5500);
})

function mostrarTela2(){
    paginaLancamento2.classList.add('show');
}

function mostrarTela(){
    paginaLancamento.classList.add('show');    
}

function mostrarCirculo1(){
    circulo1.classList.add('show')
}

function mostrarCirculo2(){
    circulo2.classList.add('show')
}

function mostrarCirculo3(){
    circulo3.classList.add('show')
}

function esconderCirculos(){
    circulo1.classList.remove('show');
    circulo2.classList.remove('show');
    circulo3.classList.remove('show');
}