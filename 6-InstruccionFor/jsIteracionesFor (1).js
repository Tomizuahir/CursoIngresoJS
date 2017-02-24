function Mostrar()
{
	var contador=0;
	var numerorandom;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var contador10=0;
	for(;contador<10;contador++)
	{	
		numerorandom=Math.floor((Math.random() * 10) + 1);
		console.log(numerorandom);

		switch(numerorandom)
		{
			case 1:
			contador1++;
			break;
			case 2:
			contador2++;
			break;
			case 3:
			contador3++;
			case 4:
			contador4++;
			break;
			case 5:
			contador5++;
			break;
			case 6:
			contador6++;
			break;
			if(contador7==7)
			{
				continue;
			}
			case 
			
			case 8:
			contador8++;
			break;
			case 9:
			contador9++;
			break;
			case 10:
			contador10++;
			break;
		}
	}
	console.log("la cantidad de vueltas son"+contador);
	console.log("la cantidad de 1 es:" + contador1*contador/100 +"%");
	console.log("la cantidad de 2 es:" + contador2*contador/100 +"%");
	console.log("la cantidad de 3 es:" + contador3*contador/100 +"%");
	console.log("la cantidad de 4 es:" + contador4*contador/100 +"%");
	console.log("la cantidad de 5 es:" + contador5*contador/100 +"%");
	console.log("la cantidad de 6 es:" + contador6*contador/100 +"%");
	console.log("la cantidad de 7 es:" + contador7*contador/100 +"%");
	console.log("la cantidad de 8 es:" + contador8*contador/100 +"%");
	console.log("la cantidad de 9 es:" + contador9*contador/100 +"%");
	console.log("la cantidad de 10 es:" + contador10*contador/100 +"%");

}