<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>
	<title>DIVICION</title>
</head>
<body>

<h4>Ingresa los numeros a dividir</h4>

<br><br>
<form action="">
    <input type="text" placeholder="Ingresa un numero" id="numero1"><br><br>

    <input type="text" placeholder="Ingresa un numero" id="numero2"><br><br>

    <input type="button" value="dividir" onclick="alert( dividir(10,50));"> 
</form>

<script>
	var dividir = function (numero1, numero2) {
		var numero1 = parseFloat(document.getElementById("numero1").value);
		var numero2 = parseFloat(document.getElementById("numero2").value);

		var resultado = numero1 / numero2;

		return resultado;
			}
</script>

</body>
</html>