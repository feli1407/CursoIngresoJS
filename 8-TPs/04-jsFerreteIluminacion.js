/*	ejercicio solo con if: https://www.onlinegdb.com/HJWi_t9Zu
ejercicio solo con switch: https://onlinegdb.com/FkjM5A7KD 
ejercicio con switch de cantidad e if de marca: https://onlinegdb.com/HkdzhjcZu 

 */
function CalcularPrecio () 
{
    let preciolamparas;
    let cantidaddelamparas;
    let preciocondescuento;
    let descuento;
    let marcadelampara;
    let precioconimpuesto;
    let impuesto;

    preciolamparas = 35;
    cantidaddelamparas = document.getElementById("txtIdCantidad").value;
    cantidaddelamparas = parseInt(cantidaddelamparas);
    marcadelampara = document.getElementById("Marca").value;


    switch(cantidaddelamparas)
    {
        case 5:
            if(marcadelampara == "ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
        break;
        case 4:
            if(marcadelampara == "ArgentinaLuz" || marcadelampara == "FelipeLamparas" )
            {
                descuento = 25;
            }
            else
            {
                descuento = 20;
            }
        break;
        case 3:
            if(marcadelampara == "ArgentinaLuz" )
            {
                descuento = 15;
            }
            else if(marcadelampara == "FelipeLamparas")
            {
                descuento = 10;
            }
            else 
            {
                descuento = 5;
            }
        break;
            
        case 2:
        case 1:
            descuento = 100;
            break;

        default:
            descuento = 50;
            break;
    }    
    
    preciocondescuento = (preciolamparas * descuento / 100) * cantidaddelamparas;

    document.getElementById("txtIdprecioDescuento").value = preciocondescuento;

    if(preciocondescuento>120)
    {
        precioconimpuesto = preciocondescuento * 1.10;
        impuesto = precioconimpuesto - preciocondescuento;
        alert("IIBB Usted pago "+impuesto);
    }

}
