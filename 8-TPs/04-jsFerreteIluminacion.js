/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let preciolamparas;
    let cantidaddelamparas;
    let preciocondescuento;
    let marcadelampara;
    let precioconimpuesto;
    let impuesto;

    preciolamparas = 35;
    cantidaddelamparas = document.getElementById("txtIdCantidad").value;
    cantidaddelamparas = parseInt(cantidaddelamparas);
    marcadelampara = document.getElementById("Marca").value;

    if(cantidaddelamparas>=6)
    {
        preciocondescuento = (preciolamparas * cantidaddelamparas) * 0.5;
    }

    if(cantidaddelamparas == 5)
    {
        if(marcadelampara == "ArgentinaLuz")
        {
            preciocondescuento = (preciolamparas * 5) * 0.6;
        }
        else
        {
            preciocondescuento = (preciolamparas * 5) * 0.7;
        }
    }

    if(cantidaddelamparas == 4)
    {
        if(marcadelampara == "ArgentinaLuz" || marcadelampara == "FelipeLamparas")
        {
            preciocondescuento = (preciolamparas * 4) * 0.75;
        }
        else
        {
            preciocondescuento = (preciolamparas * 4) * 0.8;
        }
    }

    if(cantidaddelamparas == 3)
    {
        if(marcadelampara == "ArgentinaLuz")
        {
            preciocondescuento = (preciolamparas * 3) * 0.85;
        }
        else if(marcadelampara == "FelipeLamparas")
        {
            preciocondescuento = (preciolamparas * 3) * 0.9;
        }
        else
        {
            preciocondescuento = (preciolamparas * 3) * 0.95;
        }
    }

    document.getElementById("txtIdprecioDescuento").value = preciocondescuento;

    if(preciocondescuento>120)
    {
        precioconimpuesto = preciocondescuento * 1.10;
        impuesto = precioconimpuesto - preciocondescuento;
        alert("IIBB Usted pago "+impuesto);
    }

}
