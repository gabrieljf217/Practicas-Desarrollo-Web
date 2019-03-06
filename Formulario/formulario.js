(function(){
    var formulario =   document.getElementById('formulario'),
    nombre = formulario.nombre,
    correo = formulario.correo,
    sexo = formulario.sexo,
    terminos = formulario.terminos,
    error = document.getElementById('error')

    function validarNombre(e){
        if(nombre.value == '' || nombre.value == null){
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>Por favor completa el nombre</li>'
            e.preventDefault();
        }else{
            error.style.display = 'none';
        }
    }

    function validarcorreo(e){
        if(correo.value == '' || correo.value == null){
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>Por favor completa el correo</li>'
            e.preventDefault();
        }else{
            error.style.display = 'none';
        }
    }

    function validarsexo(e){
        if(sexo.value == '' || sexo.value == null){
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>Por favor completa el sexo</li>'
            e.preventDefault();
        }else{
            error.style.display = 'none';
        }
    }

    function validarterminos(e){
        if(terminos.checked == '' || terminos.checked == null){
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>Por favor completa el terminos</li>'
            e.preventDefault();
        }
    }

    function validarformulario(e){
        error.innerHTML = '';
        validarNombre(e);
        validarcorreo(e);
        validarsexo(e);
        validarterminos(e);
    }

    formulario.addEventListener('submit',validarformulario);

}())