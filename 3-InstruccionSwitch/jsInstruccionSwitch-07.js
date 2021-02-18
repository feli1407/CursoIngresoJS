function mostrar()
{
let destino;
destino = document.getElementById("txtIdDestino").value;

switch(destino)
{
	case "Bariloche":

		mensaje= "queda en el sur";
		break;

	case "Cataratas":

		mensaje = "queda en el norte";
		break;

	case "Mar del plata":

		mensaje = "queda en el este";
		break;

	case "Ushuaia":

		mensaje = "queda en el sur";
		break;
}

alert(mensaje);

}//FIN DE LA FUNCIÓN
