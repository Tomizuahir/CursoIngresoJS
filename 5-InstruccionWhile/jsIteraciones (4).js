function Mostrar()
{
	var clave;
	clave=prompt("ingrese el numero");
	while (!(clave>0 && clave<10))
	{
		alert("reingrese numero");
		clave=prompt("ingrese el numero");
	}
	alert("genial");


}//FIN DE LA FUNCIÓN