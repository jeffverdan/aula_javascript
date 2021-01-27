
function funcaoChange(elemento){
    console.log(elemento.value);
}

function load(){
    alert("Página Carregada");
}



function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado";
    elemento.innerHTML = "Obrigado";
}

function voltar(elemento){
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
   elemento.innerHTML = "Passe o mouse"; 
}
//FUNÇÃO CLIQUE E LINK EM OUTRA JANELA 
function redirecionar(){
    window.open("https://google.com.br");
}

function clique(){
    document.getElementById("agradecimento").innerHTML = "Obrigado";
}

/*
 FUNCTION BOTÃO
function clique(){
    alert("Obrigado por clicar!");
}

*/

/*  FUNÇÃO COM RETORNO VERDADEIRO OU FALSO
function validaIdade(idade){
    var validar;
    if (idade >= 18){
            validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt ("Qual sua idade");
console.log (validaIdade(idade));
*/

/* FUNÇÃO SOMA E REPLACE
function soma(n1,n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma (5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/* DATA
var d = new Date();
alert(d);
alert(d.getDate());
*/

/* ESTRUTURA DE REPETIÇÃO COM FOR
var count;
for (count=0; count <= 5; count ++){
    alert(count);
}

/* ESTRUTURA DE REPETIÇÃO COM WHILE
var count = 0;
while (count < 5) {
    console.log(count);
    count ++;
}
*/

/* CONDICIONAL IF ELSE
var idade = prompt("Qual sua idade");
if (idade >= 18){
     alert("Maior de idade");
}else { 
     alert("Menor de idade");
    }
*/


/* ARRAY E DICIONÁRIO
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas[1].nome);
alert(frutas[1].cor);
*/


//var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta.nome);


    //LISTAS
//var lista = ["maça","pêra","laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista.reverse());
//console.log(lista.length);
//console.log(lista.toString);
//console.log(lista.join(" - "));



//var nome = "Jeferson Verdan";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " + idade + " anos ");
//alert(n1 + n2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão","Brasil"));


