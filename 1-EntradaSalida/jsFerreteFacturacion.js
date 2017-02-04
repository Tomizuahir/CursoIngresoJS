/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var resultado;
	preciouno=document.getElementById('PrecioUno').value;
	preciouno=parseInt(preciouno);
	preciodos=document.getElementById('PrecioDos').value;
	preciodos=parseInt(preciodos);
	preciotres=document.getElementById('PrecioTres').value;
	preciotres=parseInt(preciotres);
	resultado=preciouno+preciodos+preciotres;
	alert(resultado);
	
}
function Promedio () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var resultado;
	var promedio;
	preciouno=document.getElementById('PrecioUno').value;
    preciodos=document.getElementById('PrecioDos').value;
    preciotres=document.getElementById('PrecioTres').value;
    preciouno=parseInt(preciouno);
    preciodos=parseInt(preciodos);
    preciotres=parseInt(preciotres);
    resultado=preciouno+preciodos+preciotres;
    promedio=resultado/3;
    promedio=parseInt(promedio);
    alert(promedio);
	
}
function PrecioFinal () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var resultado;
	var preciofinal;
	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;
	preciouno=parseInt(preciouno);
	preciodos=parseInt(preciodos);
    preciotres=parseInt(preciotres);
    resultado=preciouno+preciodos+preciotres;
    preciofinal=resultado*1.21;
    alert(preciofinal);
}