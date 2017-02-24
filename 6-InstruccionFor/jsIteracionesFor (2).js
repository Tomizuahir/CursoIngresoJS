function Mostrar()
{
	var mascota;
	var contador;
	var contadormas
	var tipodemascota;
	var edad;
	var edadmayor;
	for(contador=0;contador<100;)
	{
		mascota=prompt("tiene mascotas");

		while(mascota!="si" && mascota!="no")
		{
			mascota=prompt("¿tiene mascotas?");
			if(mascota=="si")
			{
				contador++;
				mascota=prompt("¿que tipo de mascota?");
				while(tipodemascota!="perro" && tipodemascota!="gato")
				{
					
				}
			}
			else
			{
				contador++;
			}

		}
		edad=prompt("ingrese su edad");
		edadmayor=edad;
		contador


	}
//edad de la persona mas vieja que no tiene mascota
//necesito saber el nombre del primer gato que sea de una mujer mayor a 30 años y el gato no tenga mas 5 años de edad  
}