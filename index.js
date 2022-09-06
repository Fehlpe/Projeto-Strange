let cartoon = document.getElementById('cartoon')
let imgStrange1 = document.getElementById('titulo-cartoon');
let imgStrange2 = document.getElementById('strange-cartoon');
let paginaLancamento = document.getElementById('paginaLancamento');
let circulo1 = document.getElementById('img1');
let circulo2 = document.getElementById('img2');
let circulo3 = document.getElementById('img3');

imgStrange1.addEventListener('click', (e) => {
    cartoon.classList.toggle('fade');
    setTimeout(mostrarTela, 1000);
    setTimeout(mostrarCirculo1, 4000);
    setTimeout(mostrarCirculo2, 5000);
    setTimeout(mostrarCirculo3, 6000);
})

imgStrange2.addEventListener("click", (e) => {
    cartoon.classList.toggle('fade');
    setTimeout(mostrarTela, 1000);
    setTimeout(mostrarCirculo1, 4000);
    setTimeout(mostrarCirculo2, 5000);
    setTimeout(mostrarCirculo3, 6000);
})

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