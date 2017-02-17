/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var centígrados;
	var resultado;
	temperatura=document.getElementById('Temperatura').value;
	centígrados=temperatura*9/5-32;
	resultado=centígrados;
	alert("el resultado en celcius es" + resultado);

	
	


	
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var Fahrenheit;
	var resultado;
	temperatura=document.getElementById('Temperatura').value;
	Fahrenheit=temperatura*9/5+32;
	resultado=Fahrenheit;
	alert("el resultado en fahrenheit es " + resultado);
	

	
}
