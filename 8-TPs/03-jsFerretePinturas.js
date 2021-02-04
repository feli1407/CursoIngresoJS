/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let Fahrenheit;
    let centígrados;
    Fahrenheit = document.getElementById("txtIdTemperatura").value;
    Fahrenheit = parseInt(Fahrenheit);
    centígrados = (Fahrenheit - 32) * (5/9);
    alert(Fahrenheit+" fahrenheit son "+centígrados+" centigrados.")
}

function CentigradosFahrenheit () 
{
	let Fahrenheit;
    let centigrados;
    centigrados = document.getElementById("txtIdTemperatura").value;
    centigrados = parseInt(centigrados);
    Fahrenheit = (centigrados * (9/5)) + 32;
    alert(centigrados+" centigrados son "+Fahrenheit+" fahrenheit.");
}
