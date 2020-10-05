const formmateria = document.querySelector('#materia');

eventListeners();

function eventListeners(){
    formmateria.addEventListener('submit', leerFormulario);
}

function leerFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value,
    opciones = document.querySelector('#opciones').value,
    cantidad = document.querySelector('#cantidad').value,
    costo = document.querySelector('#costo').value,
    total = document.querySelector('#total').value;
    if(nombre === '' || opciones === '' || cantidad === '' || costo === ''){
        mostraralerta("Todos los campos son obligatorios", 'error');
    }else{
        console.log("llenos");
        cantidades();
    }
}

function mostraralerta(mensaje,clase){
    const notificacion = document.createElement('div');
    notificacion.classList.add(clase,'notificacion','sombra');
    notificacion.textContent = mensaje;

    formmateria.insertBefore(notificacion, document.querySelector('form Legend'));

    setTimeout(() => {
        notificacion.classList.add('visible');
        setTimeout(() => {
            notificacion.classList.remove('visible');
            notificacion.remove();
        },3000);
    },100);
}


function cantidades(){
    var a = parseFloat(document.getElementById("costo").value);
    var b = parseInt(document.getElementById('cantidad').value);
     var t = a*b;
    document.getElementById("total").value = t;
}