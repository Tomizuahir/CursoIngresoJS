/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largodelterreno;
	var anchodelterreno;
	var resultado;
	largodelterreno=document.getElementById('Largo').value;
	anchodelterreno=document.getElementById('Ancho').value;
	resultado=largodelterreno*anchodelterreno*3;
	alert("Se necesita de alambre" + resultado);


}
function Circulo () 
{
	var radio
	var resultado
	radio=document.getElementById('Radio').value;
	radio=3.14
	resultado=radio*3;
	alert("Se necesita de alambre" + resultado);

}
function Materiales () 
{
	var largodelterreno;
	var anchodelterreno;
	var cemento;
	var cal;
	var resultado;
	largodelterreno=document.getElementById('Largo').value;
	anchodelterreno=document.getElementById('Ancho').value;
	cemento=2;
	cal=3;
	resultado=largodelterreno*anchodelterreno*cemento;
	alert("Se necesitan de cemento"  +  resultado);
	resultado=largodelterreno*anchodelterreno*cal;
	alert("Se necesitan de cal"  +  resultado);
	

}