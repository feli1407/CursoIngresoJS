/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let preciouno;
    let preciodos;
    let preciotres;
    let resultado;

    preciouno = document.getElementById("txtIdPrecioUno").value;
    preciodos = document.getElementById("txtIdPrecioDos").value;
    preciotres = document.getElementById("txtIdPrecioTres").value;

    preciouno = parseInt(preciouno);
    preciodos = parseInt(preciodos);
    preciotres = parseInt(preciotres);

    resultado = preciouno+preciodos+preciotres;
    alert("precio total: "+resultado);
}
function Promedio () 
{
	let preciouno;
    let preciodos;
    let preciotres;
    let suma;
    let resultado;

    preciouno = document.getElementById("txtIdPrecioUno").value;
    preciodos = document.getElementById("txtIdPrecioDos").value;
    preciotres = document.getElementById("txtIdPrecioTres").value;

    preciouno = parseInt(preciouno);
    preciodos = parseInt(preciodos);
    preciotres = parseInt(preciotres);

    suma = preciouno+preciodos+preciotres;
    resultado = suma / 3;
    // se puede hacer asi pero en el curso de ingreso piden hacerlo con mas pasos 
    //resultado = (preciouno+preciodos+preciotres) / 3;
    alert("precio total: "+resultado);
}
function PrecioFinal () 
{
	let preciouno;
    let preciodos;
    let preciotres;
    let suma; 
    let resultado;
    const iva = 21;

    preciouno = document.getElementById("txtIdPrecioUno").value;
    preciodos = document.getElementById("txtIdPrecioDos").value;
    preciotres = document.getElementById("txtIdPrecioTres").value;

    preciouno = parseInt(preciouno);
    preciodos = parseInt(preciodos);
    preciotres = parseInt(preciotres);

    suma = preciouno+preciodos+preciotres;
    resultado = suma + suma * (iva /100);
    // esta seria la forma facil de hacerla pero para el curso de ingreso nos piden
    // aclarar bien todo lo que hacemos.
    // resultado = (preciouno+preciodos+preciotres) * 1.21;
    alert("precio total: "+resultado);
}