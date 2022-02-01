/*Muestra en consola si alguien está logeado o no*/
var user = localStorage.getItem('usuario');
if( user ){
    console.log("Ya hay un usuario existente");
}else{
    console.log("No hay usuario");
}