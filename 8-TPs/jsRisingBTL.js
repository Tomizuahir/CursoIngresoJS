/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadocivil;
 	var sueldobruto;
 	var numerolegajo;
 	var nacionalidad;
 	edad=prompt("ingrese su edad");
 	sexo=prompt("ingrese su sexo f para femenino o m para masculino");
 	estadocivil=prompt("ingrese su estado civil 1 para soltero 2 para casado 3 para divorciado o 4 para viudo");
 	sueldobruto=prompt("ingrese su sueldo");
 	numerolegajo=prompt("ingrese su numero de legajo sin ceros a la izquierda");
 	nacionalidad=prompt("ingrese su nacionalidad A para argentino E para extrajero o N para nacionalizado");
 
 	while(!(edad>17 && edad<91))
 	{
 		alert("reintente por favor");
 		edad=prompt("reingrese edad");
 	}
 	while(!(sexo=="m" || sexo=="f"))
 	{
 		alert("reintente por favor")
 		sexo=prompt("reingrese su sexo f para femenino o m para masculino");
 	}
 	while(!(estadocivil==1 ||  estadocivil==2 ||  estadocivil==3 ||  estadocivil ==4))
 	{
 		alert("reintente por favor")
 		estadocivil=prompt("reingrese su estado civil");
 	}
 	while(sueldobruto<7999)
 	{
 		alert("reintente por favor");
 		sueldobruto=prompt("reingrese su sueldo");
 	}
 	 while ()
 	 { 
 	 	alert("reintente por favor");
 	 	numerolegajo=prompt("reingrese su numero de legajo sin ceros a la izquierda");
 	 }



 	while(!(nacionalidad=="A" || nacionalidad=="E" || nacionalidad=="N"))
 	{
 		alert("reintente por favor");
 		nacionalidad=prompt("reingrese su nacionalidad A para argentino E para extrajero o N para nacionalizado");
 	}

 
  document.getElementById('Edad').value=edad;
  document.getElementById('Sexo').value=sexo;
  document.getElementById('EstadoCivil').value=estadocivil;
  document.getElementById('Sueldo').value=sueldobruto;
  document.getElementById('Legajo').value=numerolegajo;
  document.getElementById('Nacionalidad').value=nacionalidad;




  alert("bienvenido");
}
