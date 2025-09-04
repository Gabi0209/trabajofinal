/*Menu hamburguesa*/

let boton=document.getElementById("boton-menu");
let menu=document.getElementById("menu-hamburguesa");

boton.addEventListener("click",function(){
menu.classList.toggle("menu-hamburguesa");
menu.classList.toggle("quitar");

})



/* github
let boton=document.getElementById('boton-menu');
let menu=document.getElementById('menu');
let menuItem=document.getElementById('menu-item');
let submenu=document.getElementById('submenu');

boton.addEventListener('click',function(){
menu.classList.toggle('menu');
menu.classList.toggle('quitar');

})

*/


/*Modo oscuro*/

const cambiarFondo=document.getElementById('cambiarFondo');
const body=document.body;

body.classList.add('tema-claro');

cambiarFondo.addEventListener('click',function(){
const icono=cambiarFondo.querySelector('i');
if(body.classList.contains('tema-claro')){
body.classList.remove('tema-claro');
body.classList.add('tema-oscuro');
icono.className="bi bi-brightness-high-fill";
cambiarFondo.innerHTML='<i class="bi bi-brightness-high-fill"></i>';


}
else{
body.classList.remove('tema-oscuro');
body.classList.add('tema-claro');
icono.className="bi bi-moon-stars-fill";
cambiarFondo.innerHTML='<i class="bi bi-moon-stars-fill"></i>';


}
}
);

