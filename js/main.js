const select = document.querySelector('#select'),
    opciones = document.querySelector('#opciones'),
    contenidoSelect = document.querySelector('#select .contenido-select'),
    hiddenInput = document.querySelector('#inputSelect');


document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.currentTarget.innerHTML);
        contenidoSelect.innerHTML = e.currentTarget.innerHTML;
        select.classList.toggle('active');

        opciones.classList.toggle('active');

        hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
    })
})


select.addEventListener('click', () => {

    console.log('me tocaste we');
    select.classList.toggle('active');
    opciones.classList.toggle('active');
})
