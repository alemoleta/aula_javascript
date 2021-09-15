function load(){
    alert("Página carregada");
}

function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";
//    alert("Obrigado por clicar");
}

//function redirecionar(){
//    window.open("https://digitalinnovation.one/");
//        window.location.href="https://digitalinnovation.one/";
//}

function trocar(elemento){
//    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
//    alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
 //   document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*function validaIdade(idade){
    var validar;
    if (idade>=18){
        validar=true;

    }
        else{
            validar=false;
        }
        return validar;
    
}
var idade = prompt("Qual sua idade:");
console.log(validaIdade(idade));
*/
//function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome);
//}
//alert(setReplace("Vai Japão","Japão","Brasil"));

//function soma(n1, n2){
//    return n1+n2;
//}
//alert(soma(5,10));

//var d = new Date();
//alert (d.getDay());
//alert(d.getFullYear());
//alert(d.getHours());
//alert(d.getMinutes());
//console.log("Hoje é " + getDate() + "/" + (getMonth()+1));


//var count;
//for(count=0; count<=5; count++){
//    console.log(count);
//}

//var count=0;
//while(count<=5){
//    console.log(count);
//    count++;
//}

//var idade=prompt("Qual é sua idade:");
//var idade=18;
//if (idade>=18){
//    alert("Maior de idade");
//}else{
//    alert("menor de idade");
//}

/*
var frutas =[{nome:"melão", cor:"amarelo"},{nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].cor);
*/
//var lista=["maçã","mamão","banana"];
//lista.push("uva");
//lista.pop(); 
/*console.log(lista);
console.log(lista.length);
console.log(lista[0]);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join(" . "));
var fruta ={nome:"melão", cor:"amarelo"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/
//var nome="Alessandro Moleta";
//var idade=40;
//var idade2=10;
//var frase="Eu gosto de melancia.";
//alert("Bem vindo " + nome + ". Você tem " + idade + " anos.");
//alert (idade+idade2);
//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.toLowerCase());
//alert(frase.replace("melancia","uva"));
//alert(idade*idade2);