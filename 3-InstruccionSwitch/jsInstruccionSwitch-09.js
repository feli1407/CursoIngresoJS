/*

BARRIOS FERNANDO

Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año 
y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba 
tiene un descuento del 10%, Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba
tiene un aumento del 10%, Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas 
tiene un aumento del 10%,Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin descuento.

Base = 15000

Invierno:
	Bariloche = + 20% - 18000
	Cordoba = - 10%  - 13500
	Cataratas = - 10%  - 13500
	Mar del plata = -20% - 12000
Verano:
	Bariloche = - 20 % - 12000
	Cataratas = + 10 % - 16500
	Cordoba = + 10 % - 16500
	Mar del plata = +20 % - 18000

Otoño y Primavera:
	Bariloche = + 10 % - 16500
	Cataratas  +10 % - 16500
	Mar del plata = + 10 % - 16500
	Cordoba = 0 % - 15000

*/ 
function mostrar()
{
	let estacionIngresada;
	let precioBase;
	let destino;
	let descuento;
	let precioFinal;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	precioBase = 15000;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino){
				case "Bariloche": //Bariloche = + 20% - 18000
					descuento = 20;
				break;
				case "Cordoba": // Cordoba = - 10%  - 13500
					descuento = -10;
				break;
				case "Cataratas": // Cataratas = - 10%  - 13500
					descuento = -10;
				break;
				case "Mar del plata": // Mar del plata = -20% - 12000
					descuento = -20;
				break;
		
	}
		break;

		case "Verano":
			switch(destino)
			{
				case "Bariloche": //Bariloche = - 20 % - 12000
					descuento = -20;
				break;
				case "Cordoba": // Cordoba = + 10 % - 16500
					descuento = 10;
				break;
				case "Cataratas": // Cataratas = + 10 % - 16500
					descuento = 10;
				break;
				case "Mar del plata": // Mar del plata = +20 % - 18000
					descuento = 20;
				break;
			}
		break;

		default:
			switch(destino)
			{
				case "Bariloche": //Bariloche = + 10 % - 16500
					descuento = 10;
				break;
				case "Cordoba": // Cordoba = 0 % - 15000
					descuento = 0;
				break;
				case "Cataratas": // Cataratas  +10 % - 16500
					descuento = 10;
				break;
				case "Mar del plata": // Mar del plata = + 10 % - 16500
					descuento = 10;
				break;
			}
		break;
			
	}

	precioFinal = precioBase + (precioBase * descuento / 100); 
	alert("El precio del viaje seleccionado es de $" + precioFinal);
	
	//es mas facil procesar si se pone solo el descuento en los case y desp se hace la cuenta.

}//FIN DE LA FUNCIÓN
