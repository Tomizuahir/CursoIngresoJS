function Mostrar()
{
	var numero;
	var numeromax=0;
	var numeromin;
	var respuesta="si"
	while(respuesta=="si")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(numero>numeromax)
		{
			numeromax=numero;
		}
		else
		{
			numeromin=numero;
		}







		respuesta=prompt("ingrese si para continuar");
	}
	document.getElementById('maximo').value=numeromax;
	document.getElementById('minimo').value=numeromin;



}//FIN DE LA FUNCIÓN