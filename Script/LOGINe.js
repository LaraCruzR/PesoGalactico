function Validar(){
   //declarar las variables
  var U,P;
   //recuperar los datos
   U=document.getElementById("Usu").value;
   P=document.getElementById("Pas").value; 
   //validar los datos
   
   if (U=="LaraCruz" && P=="Eduardo93") {
      alert("El Usuario y Contraseña son correctos");
      window.open("PesoGalacticoHE.html");
      document.getElementById("Usu").value="";
      document.getElementById("Pas").value=""; 
   }   
   else {
      alert("Usuario o Contraseña son Incorrectos");
      document.getElementById("Usu").value="";
      document.getElementById("Pas").value="";
   }
} 