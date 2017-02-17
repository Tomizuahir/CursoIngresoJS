function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	while(sexo!="f" && sexo!="m")
	{
		sexo=prompt("reingrese el sexo");

	}



	document.getElementById('Sexo').value=sexo;
	alert("El sexo es" +sexo);

}//FIN DE LA FUNCIÓN