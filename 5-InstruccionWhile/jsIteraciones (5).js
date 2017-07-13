function Mostrar()
{
	var clave;
	clave=prompt("ingrese su sexo");
	//while (clave!="f"&& clave!="m")
	while (!(clave=="f"|| clave=="m"))
	{
		alert("reingrese");
		clave=prompt("re ingrese su sexo");
	}
	alert("bienvenido");

}//FIN DE LA FUNCIÓN