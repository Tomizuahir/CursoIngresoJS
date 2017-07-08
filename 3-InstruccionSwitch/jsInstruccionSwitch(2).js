function Mostrar()
{
//tomo la edad  
	var mesdelaño=document.getElementById('mes').value;
	switch (mesdelaño) 
	{
    	case "Enero":
        case "Febrero":
    	case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
        alert("falta para el frio");
        break;
   		case "Julio":
        case "Agosto":
        alert("abrigate que hace frio");
        break;
        case "Septiembre":
   		case "Octubre":
        case "Noviembre":
		case "Diciembre":
		 alert("ya pasamos el frio, ahora calor ");
		break;
        
        
    }



}//FIN DE LA FUNCIÓN