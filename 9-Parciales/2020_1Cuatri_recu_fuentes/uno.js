/* Casco Felipe 43595259 div 1a

Enunciado:

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
let contador;
let tipodeproducto;
let precio;
let cantidaddeunidades;
let marca;
let fabricante;
let contadorjabon;
let preciojabonmascaro;
let fabricantejabonmascaro;
let cantidadjabonmascaro;
let contadorbarbijo;
let contadoralcohol;
let acumuladorjabon;
let acumuladorbarbijo;
let acumuladoralcohol;
let promedio;

acumuladorjabon=0;
acumuladorbarbijo=0;
acumuladoralcohol=0;
contadorbarbijo=0;
contadoralcohol=0;
contadorjabon=0;
contador=0;

for(contador=0;contador<5;contador++)
{
	tipodeproducto=prompt("ingrese un producto (barbijo, jabon o alcohol");
	while(isNaN(tipodeproducto) == false || tipodeproducto != "barbijo" && tipodeproducto != "jabon" && tipodeproducto != "alcohol")
	{
		tipodeproducto=prompt("error, ingrese un producto (barbijo, jabon o alcohol");
	}

	precio=prompt("ingrese precio del producto");
	precio=parseInt(precio);
	while(isNaN(precio) == true || precio < 100 || precio > 300)
	{
		precio=prompt("error, ingrese precio del producto");
	    precio=parseInt(precio);
	}

	cantidaddeunidades=prompt("ingrese cantidad de unidades");
	cantidaddeunidades=parseInt(cantidaddeunidades);
	while(isNaN(cantidaddeunidades) == true || cantidaddeunidades <= 0 || cantidaddeunidades > 1000)
	{
		cantidaddeunidades=prompt("error, ingrese cantidad de unidades");
	    cantidaddeunidades=parseInt(cantidaddeunidades);
	}

	marca=prompt("ingrese marca del producto");
	while(isNaN(marca) == false)
	{
		marca=prompt("error, ingrese marca del producto");
	}

	fabricante=prompt("ingrese fabricante del producto");
	while(isNaN(fabricante) == false)
	{
		fabricante=prompt("error, ingrese fabricante del producto");
	}

	switch(tipodeproducto)
	{
		case "jabon":
			if(contadorjabon == 0)
			{
				preciojabonmascaro=precio;
				fabricantejabonmascaro=fabricante;
				cantidadjabonmascaro=cantidaddeunidades;
				acumuladorjabon=cantidaddeunidades;
				contadorjabon++;
			}
			else
			{
				if(precio>preciojabonmascaro)
				{
					preciojabonmascaro=precio;
					fabricantejabonmascaro=fabricante;
					cantidadjabonmascaro=cantidaddeunidades;
					acumuladorjabon=acumuladorjabon+cantidaddeunidades;
					contadorjabon++;
				}
				else
				{
					acumuladorjabon=acumuladorjabon+cantidaddeunidades;
					contadorjabon++;
				}
			}
			break;
		case "alcohol":
			acumuladoralcohol=acumuladoralcohol+cantidaddeunidades;
			contadoralcohol++;
			break;
		case "barbijo":
			acumuladorbarbijo=acumuladorbarbijo+cantidaddeunidades;
			contadorbarbijo++;
			break;		
	}







}

alert("se compraron: "+cantidadjabonmascaro+" unidades del jabon mas caro del fabricante: "+fabricantejabonmascaro);

if(acumuladorjabon>acumuladorbarbijo && acumuladorjabon>acumuladoralcohol)
{
	promedio=acumuladorjabon/contadorjabon;
	alert("el producto con mas unidades del total de la compra es el jabon y el promedio por compra es: "+promedio);
}
else if(acumuladorbarbijo>acumuladorjabon && acumuladorbarbijo>acumuladoralcohol)
{
	promedio=acumuladorbarbijo/contadorbarbijo;
	alert("el producto con mas unidades del total de la compra es el barbijo y el promedio por compra es: "+promedio);
}
else if(acumuladoralcohol>acumuladorjabon && acumuladoralcohol>acumuladorbarbijo)
{
	promedio=acumuladoralcohol/contadoralcohol;
	alert("el producto con mas unidades del total de la compra es el alcohol y el promedio por compra es: "+promedio);
}

alert("se compraron en total: "+acumuladorbarbijo+" barbijos");


}

