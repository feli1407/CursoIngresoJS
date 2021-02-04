/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largodelterreno;
    let anchodelterreno;
    let resultado;
    largodelterreno = document.getElementById("txtIdLargo").value;
    anchodelterreno = document.getElementById("txtIdAncho").value;
    largodelterreno = parseInt(largodelterreno);
    anchodelterreno = parseInt(anchodelterreno);
    resultado = ((largodelterreno * 2) + (anchodelterreno * 2)) * 3;
    alert("usted necesita "+resultado+" de alambre.");
}
function Circulo () 
{
    let radiodelterreno;
    let resultado;
    radiodelterreno = document.getElementById("txtIdRadio").value; 
    radiodelterreno = parseInt(radiodelterreno);
    resultado = ((2 * 3.14) * radiodelterreno) * 3;
    alert("usted necesita "+resultado+" de alambre.");
}
function Materiales ()
{
	let largodelterreno;
    let anchodelterreno;
    let area;
    let cemento;
    let cal;
    
    largodelterreno = document.getElementById("txtIdLargo").value;
    anchodelterreno = document.getElementById("txtIdAncho").value;
    largodelterreno = parseInt(largodelterreno);
    anchodelterreno = parseInt(anchodelterreno);
    area = largodelterreno * anchodelterreno;
    cemento = area * 2;
    cal = area * 3;
    alert("para un terreno de "+area+" usted va a necesitar "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.");
}