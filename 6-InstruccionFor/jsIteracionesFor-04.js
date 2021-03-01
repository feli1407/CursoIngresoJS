function mostrar()
{
let contador;
contador=0;

for(contador=1;contador<10;contador++)
{
	alert("repeticion: "+contador);
	
	if(contador == 5)
	{
		break;
	}
}

alert("el break hizo que se terminara el for antes de las 10 repeticiones");

}//FIN DE LA FUNCIÓN