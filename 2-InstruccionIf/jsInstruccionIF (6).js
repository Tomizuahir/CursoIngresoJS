function Mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	if(edad<13)
	{
		alert("es un niño");
	}
	else
	{
		if(edad>=18)
		{
			alert("es mayor de edad");
		}
		else
		{
			alert("es adolescente");
		}
	}



}//FIN DE LA FUNCIÓN