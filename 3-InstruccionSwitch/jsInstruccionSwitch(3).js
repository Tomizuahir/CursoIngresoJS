function Mostrar()
{
//tomo la edad  
	var mesdelaño=document.getElementById('mes').value;
	switch(mesdelaño)
	{
		case "Febrero":
		alert("este mes no tiene mas de 29 dias");
		break;
		case "Abril":
		alert("este mes tiene 30 o mas dias");
		
		default:
		alert("este mes tiene 31 dias");
		break;
		
	}
	
	


}//FIN DE LA FUNCIÓN