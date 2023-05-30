function antesedepois(){

    var x
    var r

    var numero=prompt("Digite um número inteiro")
    numero= parseFloat(numero)
    x = numero-1 + " é " + "seu antecessor";
    document.getElementById("info").innerHTML=x
    r = numero +1 + " é " + "seu sucessor";
    document.getElementById("info_2").innerHTML=r
}