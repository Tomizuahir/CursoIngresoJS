function Mostrar()
{

	var contador=0;
	var edad;
	var maximo;
	var minimo;
	var nombre;
	var nombredelmayor;
	var sexo;
	var notaminima;
	var nota;
	var sexonotaminima;
	var desaprobadomasculino;
	var desaprobadofemenino;
	var promedionotas;
	var promedioedad;
	var acumuladordenotas;
	var aprobados; 
	var bandera="nadie";
	var nombredel10;
	var sexodel10;	
	var edaddel10;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
		while(edad>0 || edad<100)
		{
			edad=prompt("Ingrese edad")
		}
		sexo=prompt("Ingrese sexo");
		while(sexo!= "f" && sexo!="m")
		{
			sexo=prompt("vuelva a ingresar el sexo");
		}
		// promedio de la edad de las mujeres 


		contador=contador+1
		nota=prompt("Ingrese nota");
		while(nota>0 || nota<11)
		{
			nota=prompt("vuelva a ingresar la nota");
			nota=parseInt(nota);
		}
		if(nota==10 && bandera=="nadie")
		{
			nombredel10=nombre
			edaddel10=edad
			sexodel10=sexo
		}
		//cantidad de personas aprobadas


		if(nota<4 && sexo="m")
		{
			desaprobadomasculino=desaprobadomasculino;
		}
		contador=contador+1
		
		if(nota<4 && sexo="f")
		{	
			desaprobadofemenino=desaprobadofemenino;

		}
		// promedio 
		//aca estoy sumando el promedio de notas

		//cantidad de mujeres que aprobaron con nota par y son menores de edad
		if(sexo="f")
		{				
			sexo=prompt("ingrese sexo");
		}
		if(nota>4)
		{
			aprobados=aprobados;
		}
		if()

		contador=contador+1;
		nombre=prompt("Ingrese nombre");
		if(contador==1)
		{
			maximo=edad;
			minimo=edad;
		}
		else
		{
			if(edad>maximo)
			{
				maximo=edad;
				nombredelmayor=nombre;
			}	
			if(edad<minimo)
			{
				minimo=edad;
				notaminima=sexo;

			}
			if(nota>)

			
		}

		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo;



		respuesta=prompt("para salir teclee no");
	
	}




}//FIN DE LA FUNCIÓN