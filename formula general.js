<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>
	<title>FORMULA GENERAL</title>
</head>
<body>

<script type="text/javascript">
var a= prompt("Introduce un valor numerico:(a)")
var b= prompt("Introduce un valor numerico:(b)")
var c= prompt("Introduce un valor numerico:(c)")

function x1 (a, b, c){
	return (((-1)*b)-(Math.sqrt(Math.pow (b,2))-(4*a*c)))/(2*a);
}
var resultado_x1 = x1 (a, b, c);
alert("x1 =" + resultado_x1)
function x2 (a, b, c){
return (((-1)*b)-(Math.sqrt(Math.pow (b,2))-(4*a*c)))/(2*a);
}
var resultado_x2 = x2 (a, b, c);
alert ("x2 =" + resultado_x2)

</script>

</body>
</html>