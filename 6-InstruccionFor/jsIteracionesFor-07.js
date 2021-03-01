function mostrar()
{
let numeroingresado;
let contador;
let contadornumerosdivisores;

contador=0;
contadornumerosdivisores=0;

for(contador=1;contador<numeroingresado;contador++)
{
	if(numeroingresado%contador==0)
	{
		contadornumerosdivisores++;
		alert("numero divisor: "+contador);
	}
}

alert("la cantidad de numeros divisores es: "+contadornumerosdivisores);
}//FIN DE LA FUNCIÓN