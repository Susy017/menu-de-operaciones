<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>
	<title>RAIZ CUADRADA</title>
</head>
<body>

<h4>Ingresa el numero a sacar la raiz cuadrada</h4>

<br><br>
<form action="">
    <input type="text" placeholder="Ingresa un numero" id="numero"><br><br>

    <input type="button" value="Raiz" onclick="alert( Raiz(10,50));"> 
</form>

<script>
	var Raiz = function (numero1) {
		var numero = parseFloat(document.getElementById("numero").value);

		var resultado = Math.sqrt(numero);

		return resultado;
			}
</script>

</body>
</html>