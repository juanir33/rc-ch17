//ingresar un dni y verificar que sea correcto
let dni = prompt('Ingresa tu DNI');


if((dni.length===8 || dni.length===7) && dni!=0 && !isNaN(Number(dni))){
  alert('Es correcto')

}else{
  alert('Ingrese DNI valido')
}
