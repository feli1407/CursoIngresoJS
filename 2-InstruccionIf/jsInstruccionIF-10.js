function mostrar()
{
	let nota;
	nota = Math.floor(Math.random()* 11);

	if(nota>=9)
	{
		alert("Excelente, su calificacion es: "+nota);
	}
    
	else if(nota<4)
	{
		alert("Vamos, la proxima se puede, su calificacion es: "+nota);
	}
	
	switch(nota)
	{
		case 4:
			{
				alert("aprobo, su calificacion fue: 4");
				break;
			}
			
		case 5:
			{
				alert("aprobo, su calificacion fue: 5");
				break;
			}
		case 6:
			{
				alert("aprobo, su calificacion fue: 6");
				break;
			}
		case 7:
			{
				alert("aprobo, su calificacion fue: 7");
				break;
			}
		case 8:
			{
				alert("aprobo, su calificacion fue: 8");
				break;
			}
		
	}
	
}//FIN DE LA FUNCIÓN