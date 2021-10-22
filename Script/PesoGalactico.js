function Calcular(){
	// declarar variables
	var N1,N2,Ca;
	//Recuperar las variables de las cajas de texto y asignarlos a las variables
	N1=parseFloat(document.getElementById("Num1").value);
	N2=parseFloat(document.getElementById("Num2").value);
	//Realizar las operaciones 
	Cal=N1*N2/9.8;
	//Mostrar el Resultado en la cja de texto.
	document.getElementById("Cal").value=Cal;
}
function Borrar(){
	document.getElementById("Num1").value="";
	document.getElementById("Num2").value="";
	document.getElementById("Cal").value="";
}