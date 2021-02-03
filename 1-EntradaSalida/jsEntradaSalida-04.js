
/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;

	nombre = prompt("ingrese su nombre")
//esto es para escribir en un cuadro de texto de la pagina
	document.getElementById("txtIdNombre").value = "su nombre es: "+nombre+", bienvenido/a";
}

