function mostrar()
{
let mesdelaño;
mesdelaño = document.getElementById("txtIdMes").value;

switch(mesdelaño)
{
	case "Febrero":
		mensaje = "este mes tiene 28 dias";
		break;
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
		mensaje = "este mes tiene 30 dias";
		break;
	default:
		mensaje = "este mes tiene 31 dias";
		break;
}

alert(mensaje);
	
	
	
	



}//FIN DE LA FUNCIÓN