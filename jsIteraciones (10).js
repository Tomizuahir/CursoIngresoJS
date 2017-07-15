function Mostrar()
{
	//declarar contadores y variables 
	var contador=0;
	var numero;
	var respuesta="si"
	var sexo;
	var edad;
	var edadmay=0;
	var edadmen;
	var contadorMasc=0;
	var contadorFem=0;
	var acumuladoredad=0;
	var gobier;
	var opocision;
	var otro;
	//ejemplo de obtencion, validacion y extraccion de infromacion de esta encuesta se debe informar 1)cuantas mujeres y cuantos hombres 
	//fueron entrevistados 2)la persona de mayor edad 3) el promedio de edad 4)quien ganara las elecciones 5)informar cuantas mujeres mayores de edad hay
	//6) informar cuantos hombres menores a 30 años hay 7)informar la altura del hombre que menos edad tiene 8) informar cuantos hombres votaron a otro 
	//9)de las mujeres informar cuantas votaron a la opocision 10)cuantas personas de 50 años votaron 11)cuantas personas de 50 años mujeres votaron
	 //.12)cuantas mujeres de 50 años de mas de 1 metro votaron al gobierno  
	while(respuesta!="no")
	{	
		contador=contador+1
		sexo=prompt("ingrese su sexo");
		while(!(sexo=="m" || sexo=="f"))
		{
			alert("reintente por favor");
			sexo=prompt("reingrese su sexo");
		}
		edad=prompt("ingrese su edad");
		while(edad>0 && edad<100)
		{
			alert("reintente por favor");
			edad=prompt("reingrese su edad");
		}
		acumuladoredad=acumuladoredad/contador;
		if(sexo=="m")
		{
			contadorMasc=contadorMasc+1
		}
		else
		{
			contadorFem=contadorFem+1
		}
		
		if(edad>edadmay)
		{
			edadmay=edad;
		}
		else
		{
			edadmen=edad;
		}






		respuesta=prompt("ingrese si para continuar");
	}

}//FIN DE LA FUNCIÓN