

const formNuevo = document.querySelector('#nuevo-posteo');

formNuevo.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        titulo: document.querySelector('#titulo').value,
        descripcion: document.querySelector('#descripcion').value,
        url_imagen: document.querySelector('#url_imagen').value,
        fecha: document.querySelector('#fecha').value,
        autor: document.querySelector('#autor').value,

    }


    // Enviar los datos al servidor para crear la nueva publicación
    const respuesta = await fetch('/posteo', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const datos = await respuesta.json()
    console.log(datos);

    alert(datos.msg)

    location.href = "/"

})