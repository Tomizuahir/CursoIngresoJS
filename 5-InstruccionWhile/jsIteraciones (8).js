function Mostrar()
{
	var numero;
	
	var positivo=0;
	var negativo=1;
	var respuesta="si"
	while(respuesta=="si")
	{
		
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(numero<0)
		{
			negativo=negativo*numero;
		}
		else
		{
			positivo=positivo+numero;
		}
		respuesta=prompt("ingrese si para continuar");
		
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
	
}//FIN DE LA FUNCIÓN