function Mostrar()
{
	var contador=0;
	var nota;
	var notamayor;
	var notaminima;
	var respuesta="si";
	
	while(contador<3)
	{
		contador=contador+1;
		console.log("vuelta"+contador);
		nota=prompt("ingrese nota");
		if(contador==1)//detecta la primera ves que se ingresa el numero
		{
			notamayor=nota;
			notaminima=nota;
		}
		//muestra la nota maxima y minima 
		else
		{
			if(nota>notamayor)
			{
				notamayor=nota;
			}
			if(nota<notaminima)
			{
				notaminima=nota;
			}
		}
		

		
		
	}
	console.log("la nota mayor es "+notamayor);
	console.log("la nota minima es "+notaminima);
	/*document.getElementById('suma').value=acumulador;
	document.getElementById("promedio").value=acumulador/contador;*/

}//FIN DE LA FUNCIÓN