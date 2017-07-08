function Mostrar()
{
	//tomo la edad  
	var mesdelaño=document.getElementById('mes').value;
	/*if(mesdelaño="Enero")
	{
		alert("que comiences bien el año");
	}
	
	if(mesdelaño="Marzo")
	{
		alert("a clases!!!");
	}
	if(mesdelaño="Julio");
	{
		alert("se vienen las vacaciones");
	}*/
	switch (mesdelaño) 
	{
    	case "Enero":
        alert("que comiences bien el año");
        break;
    	case "Marzo":
        alert("a clases");
        break;
   		case "Julio":
        alert("se viene las vacaciones");
        break;
    	case "Diciembre":
        alert("felices fiestas");
        break;
    }
	
	





}//FIN DE LA FUNCIÓN