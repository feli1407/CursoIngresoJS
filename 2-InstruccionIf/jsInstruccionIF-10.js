function mostrar()
{
	let nota;
	nota = Math.floor(Math.random()* 11);

	if(nota>=9)
	{
		mensaje = "Excelente, su calificacion fue: ";
	}
    
	else if(nota<4)
	{
		mensaje = "Vamos, la proxima se puede, su calificacion fue: ";
	}
	
	else 
	{
		mensaje = "aprobo, su calificacion fue: ";
	}
	
	alert(mensaje+nota);
}//FIN DE LA FUNCIÓN