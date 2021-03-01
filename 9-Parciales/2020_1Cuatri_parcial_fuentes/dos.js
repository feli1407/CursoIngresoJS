/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento") 
Cantidad de bolsas,
Precio por bolsa (más de cero ), 
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
a)El importe total a pagar , bruto sin descuento y...
b)el importe total a pagar con descuento(solo si corresponde)
d)Informar el tipo con mas cantidad de bolsas.		
f)El tipo mas caro
*/

function mostrar()
{
  let tipoingresado;
  let cantidaddebolsas;
  let precioporbolsa;
  let respuesta;
  let preciomenosde10unidades;
  let preciototal;
  let preciototalcon15descuento;
  let preciototalcon25descuento;
  let mensajedescuento;
  let acumuladorarena;
  let acumuladorcal;
  let acumuladorcemento;
  let mensajecantidad;
  let precioarena;
  let preciocal;
  let preciocemento;
  let contadordearena;
  let contadordecal;
  let contadordecemento;
  let tipomascaro;
  let acumuladordebolsas;

  preciototal=0;
  acumuladordebolsas=0;
  contadordearena=0;
  contadordecal=0;
  contadordecemento=0;
  precioarena=0;
  preciocal=0;
  preciocemento=0;
  acumuladorarena=0;
  acumuladorcal=0;
  acumuladorcemento=0;


  do
  {
    tipoingresado = prompt("ingrese tipo");
    while(isNaN(tipoingresado) == false || tipoingresado != "arena" && tipoingresado != "cal" && tipoingresado != "cemento")
    {
      tipoingresado = prompt("error, ingrese tipo");
    }

    cantidaddebolsas = prompt("ingrese cantidad");
    cantidaddebolsas = parseInt(cantidaddebolsas);
    while(isNaN(cantidaddebolsas) == true || cantidaddebolsas<1)
    {
      cantidaddebolsas = prompt("error, ingrese cantidad");
      cantidaddebolsas = parseInt(cantidaddebolsas);
    }

    precioporbolsa = prompt("ingrese precio");
    precioporbolsa = parseInt(precioporbolsa);
    while(isNaN(precioporbolsa) == true || cantidaddebolsas<1)
    {
      precioporbolsa = prompt("error, ingrese precio");
      precioporbolsa = parseInt(precioporbolsa);
    }

preciototal = (cantidaddebolsas * precioporbolsa) + preciototal;
acumuladordebolsas = acumuladordebolsas + cantidaddebolsas;

    //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.

    if(acumuladordebolsas>10 && acumuladordebolsas<30)
    {
      preciototalcon15descuento = preciototal * 0.85;
      mensajedescuento = " usted tiene un 15% de descuento entonces debera pagar: "+preciototalcon15descuento;
    }

    else if(acumuladordebolsas>30)
    {
      preciototalcon25descuento = preciototal * 0.75;
      mensajedescuento = " usted tiene un 25% de descuento entonces debera pagar: "+preciototalcon25descuento;
    }
    else
    {
      preciomenosde10unidades = preciototal;
      mensajedescuento = " usted no obtiene ningun descuento";
    }

    switch(tipoingresado)
    {
      case "arena":
        acumuladorarena = acumuladorarena + cantidaddebolsas;
        if(contadordearena == 0)
        {
           precioarena = precioporbolsa;
        }
        else
        {
           if(precioporbolsa>precioarena)
          {
            precioarena = precioporbolsa;
          }
        }
        contadordearena++;
        break;
      case "cal":
        acumuladorcal = acumuladorcal + cantidaddebolsas;
        if(contadordecal == 0)
        {
          preciocal = precioporbolsa;
        }
        else
        {
          if(precioporbolsa>preciocal)
          {
          preciocal = precioporbolsa;
          }
        }
        contadordecal++;
        break;
      case "cemento":
        acumuladorcemento = acumuladorcemento + cantidaddebolsas;
        if(contadordecemento == 0)
        {
          preciocemento = precioporbolsa;
        }
        
        {
          if(precioporbolsa>preciocemento)
          {
          preciocemento = precioporbolsa;
          }
        }
        contadordecemento++;
        break;
    }

    respuesta = prompt("desea seguir comprando?");
  }while(respuesta == "si");

  if(acumuladorarena>acumuladorcal && acumuladorarena>acumuladorcemento)
  {
    mensajecantidad = "las bolsas que mas se compraron fueron las de arena";
  }
  else if(acumuladorcal>acumuladorarena && acumuladorcal>acumuladorcemento)
  {
    mensajecantidad = "las bolsas que mas se compraron fueron las de cal";
  }
  else if(acumuladorcemento>acumuladorcal && acumuladorcemento>acumuladorarena)
  {
    mensajecantidad = "las bolsas que mas se compraron fueron las de cemento";
  }
  else if(acumuladorcemento == acumuladorarena || acumuladorcemento == acumuladorcal || acumuladorarena == acumuladorcal || acumuladorarena == acumuladorcemento || acumuladorcal == acumuladorarena || acumuladorcal == acumuladorcemento)
  {
    mensajecantidad = "se compro la misma cantidad de bolsas";
  }

  if(preciocemento>precioarena && preciocemento>preciocal)
  {
    tipomascaro = "el tipo mas caro es cemento";
  }
  else if(preciocal>preciocemento && preciocal>precioarena)
  {
    tipomascaro = "el tipo mas caro es cal";
  }
  else if(precioarena>preciocemento && precioarena>preciocal)
  {
    tipomascaro = "el tipo mas caro es arena";
  }



alert("el importe total a pagar es: "+preciototal+mensajedescuento);
alert(mensajecantidad);
alert(tipomascaro);


}
