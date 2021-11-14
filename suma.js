<!DOCTYPE html>
<html Lang="es">
<head>
    <meta charset="utf-8">
    
    <title>SUMA</title>

</head>
<body>

<h4>Ingresa los numeros a sumar</h4>

<br><br>
<form action="">
    <input type="text" placeholder="Ingresa un numero" id="numero1"><br><br>

    <input type="text" placeholder="Ingresa un numero" id="numero2"><br><br>

    <input type="text" placeholder="Ingresa un numero" id="numero3"><br><br>

    <input type="text" placeholder="Ingresa un numero" id="numero4"><br><br>

    <input type="button" value="suma" onclick="alert( suma(10,50));"> 
</form>

<script>
	var suma = function (numero1, numero2, numero3, numero4) {
		var numero1 = parseFloat(document.getElementById("numero1").value);
		var numero2 = parseFloat(document.getElementById("numero2").value);
		var numero3 = parseFloat(document.getElementById("numero3").value);
		var numero4 = parseFloat(document.getElementById("numero4").value);

		var resultado = numero1 + numero2 + numero3 + numero4;

		return resultado;
			}
</script>
</body>
</html>