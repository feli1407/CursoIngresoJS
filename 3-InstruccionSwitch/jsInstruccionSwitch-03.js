function mostrar()
{
let mesdelaño;
mesdelaño = document.getElementById("txtIdMes").value;

switch(mesdelaño)
{
	case "Febrero":
		alert("Este mes no tiene más de 29 días.");
		break;
	case "Enero":
	case "Marzo":
    case "Abril":
	case "Mayo":
	case "Junio":
	case "Julio":
	case "Agosto":
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Dciciembre":
		alert("Este mes tiene 30 o más días");
		break;
}
	
	
	


}//FIN DE LA FUNCIÓN