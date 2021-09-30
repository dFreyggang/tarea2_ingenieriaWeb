define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict';
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
    var formulario = document.getElementById("formulario");
    var nombreCompleto = document.getElementById("nombreCompleto");
    var rut = document.getElementById("rut");
    var email = document.getElementById("email");
    var telefono = document.getElementById("telefono");
    var lenguajesDeInteres = (_a = document.getElementById("lenguajesDeInteres")) === null || _a === void 0 ? void 0 : _a.children;
    var opinion = document.getElementById("opinion");
    formulario.addEventListener("submit", function (event) {
        var mensajeFinal = document.getElementById("mensaje");
        if (nombreCompleto.value === '' || rut.value === '' || email.value === '' || telefono.value === '' || opinion.value === '' || validarLenguajesDeInteres(lenguajesDeInteres)) {
            window.alert("Por favor, rellene los campos solicitados");
        }
        else {
            formulario.style.display = "none";
            mensajeFinal.style.display = "block";
            mensajeFinal.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
            mensajeFinal.style.color = "green";
            event.preventDefault();
        }
        function validarLenguajesDeInteres(lenguajesDeInteres) {
            var alMenosUnLenguajeDeInteres = false;
            var i = 0;
            var event;
            while (i < lenguajesDeInteres.length) {
                if (lenguajesDeInteres[i].tagName == 'INPUT' && lenguajesDeInteres[i].type == 'checkbox') {
                    if (lenguajesDeInteres[i].checked) {
                        alMenosUnLenguajeDeInteres = true;
                    }
                }
                i++;
            }
            if (!alMenosUnLenguajeDeInteres) {
                window.alert('Seleccione al menos un lenguaje que sea de su interes');
                if (event.preventDefault()) {
                    event.preventDefault();
                }
                else {
                    event.returnValue = false;
                }
            }
        }
    }, false);
});
