function Alert(){

    let nombre=document.getElementById("nombre").value;
    let edad=document.getElementById("edad").value;

    if (edad>18) {
        alert(nombre + " Eres mayor de edad");
    }
    else{
        alert(nombre + " Eres menor de edad");
    } 
}