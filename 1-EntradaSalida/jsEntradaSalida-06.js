/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numerouno;
	let numerodos;
	let resultado;
// aca saque los valores del html
	numerouno = document.getElementById("txtIdNumeroUno").value;
	numerodos = document.getElementById("txtIdNumeroDos").value;
// parseint es para pasar de texto a numero
	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);

	resultado = numerouno + numerodos;
	alert("La suma es: "+resultado);

}

