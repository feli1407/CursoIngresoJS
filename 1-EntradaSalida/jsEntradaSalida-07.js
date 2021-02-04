/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numerouno;
	let numerodos;
	let resultado;
	  numerouno = document.getElementById("txtIdNumeroUno").value;
	  numerodos = document.getElementById("txtIdNumeroDos").value;
	  numerouno = parseInt(numerouno);
	  numerodos = parseInt(numerodos);
	  resultado = numerouno + numerodos;
	  alert("La suma es: "+resultado);

}

function restar()
{
	let numerouno;
	let numerodos;
	let resultado;
	  numerouno = document.getElementById("txtIdNumeroUno").value;
	  numerodos = document.getElementById("txtIdNumeroDos").value;
	  numerouno = parseInt(numerouno);
	  numerodos = parseInt(numerodos);
	  resultado = numerouno - numerodos;
	  alert("La resta es: "+resultado);
}

function multiplicar()
{ 
	let numerouno;
	let numerodos;
	let resultado;
	  numerouno = document.getElementById("txtIdNumeroUno").value;
	  numerodos = document.getElementById("txtIdNumeroDos").value;
	  numerouno = parseInt(numerouno);
	  numerodos = parseInt(numerodos);
	  resultado = numerouno * numerodos;
	  alert("La multiplicacion es: "+resultado)
}

function dividir()
{
	let numerouno;
	let numerodos;
	let resultado;
	  numerouno = document.getElementById("txtIdNumeroUno").value;
	  numerodos = document.getElementById("txtIdNumeroDos").value;
	  numerouno = parseInt(numerouno);
	  numerodos = parseInt(numerodos);
	  resultado = parseFloat (numerouno / numerodos);
	  alert("La division es: "+resultado);
}

