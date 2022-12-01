
//Insere o valor dos botões dentro do h1
function inserir(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

//apaga tudo que está no h1
function apagar() {
    document.getElementById('resultado').innerHTML = "";}


//pega a string formada no h1 e faz o calculo usando a função eval
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(resultado);
}