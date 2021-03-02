/*Casco Felipe
Enunciado:
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro 
*/
function mostrar()
{
let respuesta;
let tipomaterial;
let cantidaddebolsas;
let precioporbolsa;
let acumuladordebolsas;
let preciototal;
let acumuladorprecio;
let precioconquincedescuento;
let precioconventicincodescuento;
let acumuladordebolsascemento;
let acumuladordebolsasarena;
let acumuladordebolsascal;
let precioarena;
let preciocal;
let preciocemento;
let flagcal;
let flagarena;
let flagcemento;

flagcal=0;
flagarena=0;
flagcemento=0;
preciocal=0;
preciocemento=0;
precioarena=0;
acumuladordebolsasarena=0;
acumuladordebolsascal=0;
acumuladordebolsascemento=0;
precioconventicincodescuento=0;
acumuladorprecio=0;
precioconquincedescuento=0;
preciototal=0;
acumuladordebolsas=0;


do
{
  tipomaterial = prompt("ingrese el tipo de material que desea(arena, cal o cemento)");
  while(isNaN(tipomaterial) == false || tipomaterial != "arena" && tipomaterial != "cal" && tipomaterial != "cemento")
  {
    tipomaterial = prompt("error, ingrese el tipo de material que desea(arena, cal o cemento)");
  }

  cantidaddebolsas = prompt("ingrese cantidad de bolsas");
  cantidaddebolsas = parseInt(cantidaddebolsas);
  while(isNaN(cantidaddebolsas) == true || cantidaddebolsas < 1)
  {
    cantidaddebolsas = prompt("error, ingrese cantidad de bolsas");
    cantidaddebolsas = parseInt(cantidaddebolsas);
  }

  precioporbolsa = prompt("ingrese precio de las bolsas");
  precioporbolsa = parseInt(precioporbolsa);
  while(isNaN(precioporbolsa) == true || precioporbolsa < 1)
  {
    precioporbolsa = prompt("error, ingrese precio de las bolsas");
    precioporbolsa = parseInt(precioporbolsa);
  }

  acumuladordebolsas = acumuladordebolsas + cantidaddebolsas;
  preciototal = precioporbolsa * cantidaddebolsas;
  acumuladorprecio = acumuladorprecio + preciototal;

  switch(tipomaterial)
  {
    case "arena":
      acumuladordebolsasarena = acumuladordebolsasarena + cantidaddebolsas;
      if(flagarena == 0)
      {
        precioarena = precioporbolsa;
        flagarena = 1;
      }
      else
      {
        if(precioporbolsa > precioarena)
        {
          precioarena = precioporbolsa;
        }
      }
      break;
    case "cal":
      acumuladordebolsascal = acumuladordebolsascal + cantidaddebolsas;
      if(flagcal == 0)
      {
        preciocal = precioporbolsa;
        flagcal = 1;
      }
      else
      {
        if(precioporbolsa > preciocal)
        {
          preciocal = precioporbolsa;
        }
      }
       break;
    case "cemento":
      acumuladordebolsascemento = acumuladordebolsascemento + cantidaddebolsas;
      if(flagcemento == 0)
      {
        preciocemento = precioporbolsa;
        flagcemento = 1;
      }
      else
      {
        if(precioporbolsa > preciocemento)
        {
          preciocemento = precioporbolsa;
        }
      }
      break;   

  }




  respuesta = prompt("quiere seguir comprando? responda si o no");
  while(isNaN(respuesta) == false || respuesta != "si" && respuesta != "no")
  {
    respuesta = prompt("error, quiere seguir comprando? responda si o no");
  }
}while(respuesta == "si");


if(acumuladordebolsas < 10)
{
  alert("el importe total bruto es: "+ acumuladorprecio);
}
else if(acumuladordebolsas > 10 && acumuladordebolsas < 30)
{
  precioconquincedescuento = acumuladorprecio * 0.85;
  alert("el importe total bruto es: "+acumuladorprecio+" pero como compro mas de 10 bolsas usted debe pagar: "+precioconquincedescuento);
}
else if(acumuladordebolsas > 30)
{
  precioconventicincodescuento = acumuladorprecio * 0.75;
  alert("el importe total bruto es: "+acumuladorprecio+" pero como compro mas de 30 bolsas usted debe pagar: "+precioconventicincodescuento);
}

if(acumuladordebolsascemento > acumuladordebolsascal && acumuladordebolsascemento > acumuladordebolsasarena)
{
  alert("las bolsas que mas se compraron fueron las de cemento");
}
else if(acumuladordebolsascal > acumuladordebolsascemento && acumuladordebolsascal > acumuladordebolsasarena)
{
  alert("las bolsas que mas se compraron fueron las de cal");
}
else if(acumuladordebolsasarena > acumuladordebolsascemento && acumuladordebolsasarena > acumuladordebolsascal)
{
  alert("las bolsas que mas se compraron fueron las de arena");
}

if(preciocemento > preciocal && preciocemento > precioarena)
{
  alert("las bolsas mas caras fueron las de cemento");
}
else if(preciocal > preciocemento && preciocal > precioarena)
{
  alert("las bolsas mas caras fueron las de cal");
}
else if(precioarena > preciocemento && acumuladordebolprecioarenasasarena > preciocal)
{
  alert("las bolsas mas caras fueron las de arena");
}



}
