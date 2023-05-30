btn = document.getElementById ("btn")

btn.addEventListener("click", function() {
 

let produto=prompt("Informe o produto a ser comprado:")

let real =prompt("Quanto custa " + produto + "?" )

let dinheiro =prompt("Qual o valor dado ao caixa pelo " + produto + "?" )


real= parseFloat(real)
dinheiro= parseFloat(dinheiro)

let troco= dinheiro-real

alert(`Você comprou ${produto} que custa ${real}.
Deste ${dinheiro}. Seu troco é ${troco} .`  )


})