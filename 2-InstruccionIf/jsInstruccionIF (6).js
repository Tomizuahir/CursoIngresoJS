function Mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	if(edad<14)
	{
		alert("es un niño");
	}
	else
	{
		if(edad>12 && edad<18)
		{
			alert("es adolescente");
		}
		else
		{
			alert("es mayor de edad");
		}
	}	


}//FIN DE LA FUNCIÓN