/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numerorandom;
var numerointentos;
var numeroingresado;
var resultado;
resultado = 0;
numerointentos = 0;

function comenzar()
{
	numerorandom = Math.floor(Math.random() * 101);
	console.log(numerorandom);

}

function verificar()
{
	numerointentos = numerointentos + 1;
  numeroingresado = parseInt(document.getElementById("txtIdNumero").value);

  if(numeroingresado == numerorandom)
  {
    alert("usted es un ganador!!! y en solo "+numerointentos+" intentos.");
  }
  else if(numeroingresado>numerorandom)
  {
    resultado = numeroingresado - numerorandom;
    alert("te pasaste por "+resultado);
  }
	else
  {
    resultado = numerorandom -numeroingresado;
    alert("te falta "+resultado);
  }

  document.getElementById("txtIdIntentos").value=numerointentos;
}