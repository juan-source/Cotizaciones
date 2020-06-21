var enviar = function(){
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    var num1 = parseInt(valor1);
    var num2 = parseInt(valor2);
    
    var nuevo
    nuevo = num1 + num2
    console.log(nuevo)
    document.getElementById("resultado").innerHTML=nuevo
};