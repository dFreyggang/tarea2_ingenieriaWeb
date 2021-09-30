//import { event } from 'jquery';
import jquery=require('jquery');

const $:JQueryStatic=jquery;



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event:any) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })   
  })()

  



let formulario:any=document.getElementById("formulario");
let nombreCompleto:any=document.getElementById("nombreCompleto");
let rut:any=document.getElementById("rut");
let email:any=document.getElementById("email");
let telefono:any=document.getElementById("telefono");
let lenguajesDeInteres:any=document.getElementById("lenguajesDeInteres")?.children;
  
let opinion:any=document.getElementById("opinion");



      
formulario.addEventListener("submit",function(event:any) {
  let mensajeFinal:any=document.getElementById("mensaje");
  if(nombreCompleto.value===''||rut.value===''||email.value===''||validarTelefono(telefono)||opinion.value===''||validarLenguajesDeInteres(lenguajesDeInteres)||validarNivelGeneral()){
    window.alert("Por favor, rellene los campos solicitados")
  }else{
    formulario.style.display="none";
    mensajeFinal.style.display="block";
    mensajeFinal.innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
    mensajeFinal.style.color="green";
    event.preventDefault()
  }

  function validarLenguajesDeInteres(lenguajesDeInteres:any){
    let alMenosUnLenguajeDeInteres=false;
    let i=0;
    let event:any;
    while(i<lenguajesDeInteres.length){
      if(lenguajesDeInteres[i].tagName=='INPUT'&&lenguajesDeInteres[i].type=='checkbox'){
        if (lenguajesDeInteres[i].checked) {
          alMenosUnLenguajeDeInteres = true;
        }
      }
      i++;
    }
      
    if(!alMenosUnLenguajeDeInteres) {
      window.alert('Seleccione al menos un lenguaje que sea de su interes');
      if (event.preventDefault()) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    }
  }


  function validarTelefono(telefono:any) {
    let event:any;
    if (telefono.value.length!=9||telefono.value === '') {
        window.alert("Por favor ingrese su telefono en el formato adecuado");
        if (event.preventDefault()) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}


  function validarNivelGeneral(){
    let nivelGeneral1:any = document.getElementById('nivelGeneral1')
    let nivelGeneral2:any = document.getElementById('nivelGeneral2')
    let nivelGeneral3:any = document.getElementById('nivelGeneral3')
    if(!nivelGeneral1.checked||!nivelGeneral2.checked||!nivelGeneral3.checked){
      window.alert("Por favor ingrese su nivel de experiencia en general en programacion")
    }
  }

},false);