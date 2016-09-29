var boton = document.getElementById("boton");

boton.onclick=function(){
var dia = (document.getElementById("dias").value).toLowerCase();

if (dia=="lunes" || dia=="martes" || dia=="miercoles"|| dia=="jueves"|| dia=="viernes")  {
		alert(dia+" es un día hábil");
	}else if(dia=="sabado"|| dia=="domingo") {
		alert(dia+" no es un día hábil");
	}else {
		alert("no ha ingresado un día válido");
	}
}
