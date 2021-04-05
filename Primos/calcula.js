let resultado = document.querySelector(".result");
let resultado2 = document.querySelector(".result-2");
let numeros = document.querySelectorAll(".botao");
function calcula() {
    resultado.innerText = "";
    let intI = document.getElementById('vi').value;
    let intF = document.getElementById('vf').value;
    intprimos(intI, intF);

}

function intprimos(vi, vf){
    let primo = true;
    vi = parseInt(vi,10);
    vf = parseInt(vf,10);
    let cont = 0;
    for (let i=vi; i < vf; i++){
        primo = true;
        for (let j = 2; j < i; j++){
            if (i % j === 0){
                primo = false;
                break;    
            }
        }
        if (primo) {
            if (cont === 0){
                resultado.innerHTML += i;    
            }else{
                resultado.innerHTML += ", " + i;
            }
            cont++;
        }
    }
    resultado.innerHTML += '<Hr>'+'Quantidade = ' + cont;
}

function primos(num){
    for(let i=2; i <= num/2; i++){
        if (num % i == 0){
            return false;
        }
    }
    return true;
}

function calcula_perf(){
    resultado2.innerText = "";
    let intI = document.getElementById('vi2').value;
    let intF = document.getElementById('vf2').value;
    intperf(intI, intF);
}

function intperf(vi,vf){
    vi = parseInt(vi,10);
    vf = parseInt(vf,10);
    let cont = 0;
    let soma_div = 0;
    for (let i=vi; i < vf; i++){
        for (let j = 1; j <= i/2; j++){
            if (i % j === 0){
                soma_div += j;    
            }
        }
        if (soma_div === i){
            if (cont === 0){
                resultado2.innerHTML += i;  // acrescenta texto ou elementos html dentro de uma tag       
            }else{
                resultado2.innerHTML += ", " + i;
            }
            cont++;
        }
        soma_div = 0;
    }
    resultado2.innerHTML += '<hr>'+'Quantidade = ' + cont;
}

function corPar(){
    console.log(numeros[0].innerHTML);
    for(let i=0; i < numeros.length; i++){
        if (numeros[i].innerHTML % 2 == 0){
            if (numeros[i].classList[1] == 'corPrimo'){
                numeros[i].classList.add("corEspecial2");
            }
            else{
                numeros[i].classList.add("corPar");
            }
        }
    }
}

function corImpar(){
    for(let i=0; i < numeros.length; i++){
        if (numeros[i].innerHTML % 2 != 0){
            console.log(numeros[i].classList[1]);
            if (numeros[i].classList[1] == "corPrimo"){
                numeros[i].classList.add("corEspecial");
             } else{
                numeros[i].classList.add("corImpar");
             }    
        }
    }
}

function corPrimo(){
    console.log(numeros[0].classList[1]);
    for(let i=0; i < numeros.length; i++){
        if (primos(numeros[i].innerHTML)){
            console.log(numeros[i].classList[1]);
            if (numeros[i].classList[1] == "corImpar"){
                numeros[i].classList.add("corEspecial");
            } else if (numeros[i].classList[1] == "corPar") {
                numeros[i].classList.add("corEspecial2");
            }
            else{
                numeros[i].classList.add("corPrimo");
            }    
        }
    }
}



function caixas(){
    
}
