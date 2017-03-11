function Mostrar()
{
	var bandera=0;
	var nummax;
	var nummin;
	var numero;
	var respuesta="si"
	while(respuesta=="si")
	{	
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		respuesta=prompt("ingrese si para continuar");
		
		if(numero>nummax)
		{
			nummax=numero;
		}
		if(numero<nummin)
		{
			nummin=numero;
		}
		
		if(bandera == 0)
		{
			nummax=numero;
			nummin=numero;
			bandera++;
		}
	}
	
	document.getElementById("maximo").value=nummax;
	document.getElementById("minimo").value=nummin;
	alert("hola");	




}//FIN DE LA FUNCIÓN