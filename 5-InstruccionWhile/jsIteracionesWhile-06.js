function mostrar()
{
	let contador;
	let acumulador;
	let numero;
	contador=0;
	acumulador=0;

	while(contador<5)
	{
		numero = parseInt(prompt("ingrese un numero"));
		acumulador = acumulador + numero;
		contador = contador + 1;
		console.log("el numero es: "+numero);
	}
	
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/5;
}//FIN DE LA FUNCIÓN