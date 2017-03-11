function Mostrar()
{
	//declarar contadores y variables 
	var respuesta="si";
	var numero;
	var cantpositivos=0;
	var cantnegativos=0;
	var cantceros=0;
	var cantpares=0;
	var sumapositivos=0;
	var sumanegativos=0;
	var promediopositivos=0;
	var promedionegativos=0;
	while(respuesta=="si")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		respuesta=prompt("ingrese si para continuar");
		if(numero>=0)
		{
			cantpositivos++;
			sumapositivos=sumapositivos+numero;
			
		}
		if(numero<0)
		{
			cantnegativos++;
			sumanegativos=sumanegativos+numero;
			
		}
		if(numero==0)
		{
			cantceros++;
		}
		if(numero%2==0)
		{
			cantpares++;
		}
		
	
		
	
	}
	promediopositivos=sumapositivos/cantpositivos;
	promedionegativos=sumanegativos/cantnegativos;
	document.write("la cantidad de positivos es " +cantpositivos+ "<br/>");
	document.write("la cantidad de negativos es " +cantnegativos+ "<br/>");
	document.write("la cantidad de ceros es " +cantceros+ "<br/>");
	document.write("la suma de positivos es " +sumapositivos+ "<br/>");
	document.write("la suma de negativos es " +sumanegativos+ "<br/>");
	document.write("el promedio de los positivos es " +promediopositivos+ "<br/>");
	document.write("el promedio de los negativos es " +promedionegativos+ "<br/>");
	document.write("la cantidad de pares es " +cantpares+ "<br/>");



}//FIN DE LA FUNCIÓN