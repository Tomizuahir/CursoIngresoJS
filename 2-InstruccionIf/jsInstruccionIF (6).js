function Mostrar()
{
	//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	if(edad>17)
	{
		alert("mayor de edad");
	}
	if(edad<18 && edad>12)
	{
		alert("adolescente");
	}
	if(edad<13)
	{
		alert("niño");
	}




}//FIN DE LA FUNCIÓN