function CalcularRango()
{
	// Creación de variable edad
	var edad,
	    res,
	    numeroEdad;

	res = document.getElementById('resultado');
	edad = document.getElementById('edadActual');
	numeroEdad = parseInt(edad.innerHTML);
	if((numeroEdad>=0) && (numeroEdad<=12))
		res.innerHTML = "En la infancia";
	else 
	  if ((numeroEdad>=13) && (numeroEdad<=17))
		res.innerHTML = "En la adolescencia";
}
