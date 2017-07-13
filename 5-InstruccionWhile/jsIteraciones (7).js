function Mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero;
	while(contador)
	{
		contador=contador+1;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

	}
	document.getElementById('suma').value=acumulador;
	document.getElementById("promedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN