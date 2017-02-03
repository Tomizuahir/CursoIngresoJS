/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
 var numero1;
 var numer2;
 var resulto;
 numero1=document.getElementById('numeroUno').value;
 numero2=document.getElementById('numeroDos').value;
 numero1=parseInt(numero1);
 numero2=parseInt(numero2);
 resulto=numero1+numero2

 alert(resulto);
}

