<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>
	<title>BINOMIO CUADRADO PERFECTO</title>
</head>
<body>

<h4>Ingresa los numeros a calcular el binomio cuadrado perfecto</h4>

<br><br>
<form action="">
    <input type="text" placeholder="Ingresa un numero" id="Introduce un valor numerico:(a)"><br><br>

    <input type="text" placeholder="Ingresa un numero" id="Introduce un valor numerico:(b)"><br><br>

    <input type="button" value="binomio" onclick="alert( binomio(10,50));"> 
</form>
<script type="text/javascript">
	var binomio = function (a, b) {
        var a = parseFloat(document.getElementById("Introduce un valor numerico:(a)").value);
		var b = parseFloat(document.getElementById("Introduce un valor numerico:(b)").value);


		var resultado = (a*a)+(2*a*b)+(b*b);

		return resultado;
			}

</script>

</body>
</html>