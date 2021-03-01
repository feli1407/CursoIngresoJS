/*Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/ 
function mostrar()
{
let tipodeproducto;
let precio;
let cantidaddeunidades;
let marca;
let fabricante;
let contadorcompra;
let contadorjabones;
let jabonmascaro;
let cantidadjabonesmascaros;
let fabricantejabonmascaro;
let cantidadbarbijos;
let cantidadealcohol;
let contadordebarbijo;
let contadordealcohol;
let promedio;
let mensaje;

contadordealcohol=0;
contadordebarbijo=0;
cantidadealcohol=0;
cantidadbarbijos=0;
cantidadjabonesmascaros=0; 
cantidadjabones=0;
jabonmascaro=0;
contadorcompra=0;
contadorjabones=0;

while(contadorcompra<2)
{
	tipodeproducto = prompt("ingrese un producto");
	while(isNaN(tipodeproducto) == false || tipodeproducto != "barbijo" && tipodeproducto != "jabon" && tipodeproducto != "alcohol")
	{
		tipodeproducto = prompt("error, ingrese un producto");
	}

	precio = prompt("ingrese precio");
	precio = parseInt(precio);
	while(isNaN(precio) == true || precio < 100 || precio > 300)
	{
		precio = prompt("error, ingrese precio");
		precio = parseInt(precio);
		
	}

	cantidaddeunidades = prompt("ingrese cantidad de unidades");
	cantidaddeunidades = parseInt(cantidaddeunidades);
	while(isNaN(cantidaddeunidades) == true || cantidaddeunidades <= 0 || cantidaddeunidades > 1000)
	{
		cantidaddeunidades = prompt("error, ingrese cantidad de unidades");
		cantidaddeunidades = parseInt(cantidaddeunidades);

	}

	marca = prompt("ingrese marca");
	while(isNaN(marca) == false)
	{
		marca = prompt("error, ingrese marca");
	}

	fabricante = prompt("ingrese fabricante");
	while(isNaN(fabricante) == false)
	{
		fabricante = prompt("error, ingrese fabricante");
	}

	switch(tipodeproducto)
	{
		case "jabon":
			
			if(contadorjabones == 0)
			{
				jabonmascaro = precio;
				cantidadjabones = cantidaddeunidades;
				cantidadjabonesmascaros = cantidaddeunidades;
				fabricantejabonmascaro = fabricante;
				contadorjabones++;
			}
			else
			{
				if(precio > jabonmascaro)
				{
					jabonmascaro = precio;
					cantidadjabonesmascaros = cantidaddeunidades;
					fabricantejabonmascaro = fabricante;
					cantidadjabones = cantidadjabones + cantidaddeunidades;
				}
				else
				{
					cantidadjabones = cantidadjabones + cantidaddeunidades;
				}
			}

			contadorjabones++;
			break;

		case "barbijo":
			cantidadbarbijos = cantidadbarbijos + cantidaddeunidades;
			contadordebarbijo++;
			break;

		case "alcohol":
			cantidadealcohol = cantidadealcohol + cantidaddeunidades;
			contadordealcohol++;
			break;

	}

	contadorcompra++;
}

if(cantidadjabones > cantidadealcohol && cantidadjabones > cantidadbarbijos)
{
	promedio = cantidadjabones/contadorjabones;
	mensaje = "el producto con mas unidades en total de la compra es el jabon y el promedio por compra es: "+promedio;
}
else if( cantidadealcohol >cantidadjabones && cantidadealcohol > cantidadbarbijos)
{
	promedio = cantidadealcohol/contadordealcohol;
	mensaje = "el producto con mas unidades en total de la compra es el alcohol y el promedio por compra es: "+promedio;
}
else if( cantidadbarbijos > cantidadjabones && cantidadbarbijos > cantidadealcohol)
{
	promedio = cantidadbarbijos/contadordebarbijo;
	mensaje = "el producto con mas unidades en total de la compra es el barbijo y el promedio por compra es: "+promedio;
}

if(contadorjabones == 0)
{
	alert("no se compraron jabones");
}
else
{
	alert("el jabon mas caro sale: "+jabonmascaro+" y se compraron: "+cantidadjabonesmascaros+" del fabricante: "+fabricantejabonmascaro);
}

alert(mensaje);
alert("se compraron: "+cantidadbarbijos+" cantidad de barbijos en total");

}
