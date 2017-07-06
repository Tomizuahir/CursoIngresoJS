function Mostrar()
{
	var edad;
	var estadocivil;
	estadocivil=document.getElementById('estadoCivil').value;
	edad=document.getElementById('edad').value;
	if(estadocivil!="Soltero" && edad<18)
	{	
		alert("es muy pequeño para no ser soltero");
	}	


	


}//FIN DE LA FUNCIÓN