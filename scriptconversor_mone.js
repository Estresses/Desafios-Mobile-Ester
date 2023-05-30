btn = document.getElementById ("btn")

let d

let dolar= prompt("Qual a cotação do dólar agora?")


btn.addEventListener("click", function() {


var real = prompt("Informe a quantidade em reais")
dolar= parseFloat(dolar)
real= parseFloat(real)
d = real/dolar + "  " + "é o que seu dinheiro equivale em dolar."; 
alert(d)

})