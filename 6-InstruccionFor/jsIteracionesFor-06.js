function mostrar()
{
let numeroingresado;
let contador;
let contadornumerospares;

contador=0;
contadornumerospares=0;

numeroingresado=prompt("ingrese un numero");
numeroingresado=parseInt(numeroingresado);

for(contador=1;contador<numeroingresado;contador++)
{
	if(contador%2==0)
	{
		contadornumerospares++;
		alert("numero par "+contadornumerospares);
	}
}

alert("la cantidad de numeros pares es: "+contadornumerospares);

}//FIN DE LA FUNCIÓN