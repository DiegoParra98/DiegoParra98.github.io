// Obtener el elemento del modal
var modal=document.getElementById('modal');

// abrir el boton
var modalBtn=document.getElementById('modalBtn');

// boton de cerrar
var cerrarBtn= document.getElementsByClassName('cerrarBtn')[0];

//escuchar el click de abrir
modalBtn.addEventListener('click', openModal);

//escuchar el click de abrir
cerrarBtn.addEventListener('click', cerrarModal);

//escucha para click fuera del modal
window.addEventListener('click', clickOutside);

//funcion para abrir el modal
function openModal(){
  modal.style.display = 'block';
}

//funcioj para cerrar el modalBtn
function cerrarModal(){
  modal.style.display = 'none';
}

//funcion para cerrar el modal clickeando fuera del modal
function clickOutside(e){
  if(e.target == modal){
  modal.style.display = 'none';
  }
}
