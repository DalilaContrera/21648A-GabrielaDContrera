const mostrarPosteos = (posteos, elementoHtml) => {

    let secciones = "";
    posteos.forEach( (pub) => {
        secciones += `
            <section class="d-flex gap-2 pb-3">
                <img src="${pub.url_imagen}" class="rounded" height="200" width="200" alt="${pub.titulo}" >
                <div class="d-flex flex-column justify-content-between">
                    <h4>${pub.titulo}</h4>
                    <p>${pub.descripcion}</p>
                    <p>${pub.fecha}</p>
                    <h4>${pub.autor}</h4>

                </div>
                

            </section>

        `
    })

    elementoHtml.innerHTML = secciones;
    
}

const obtenerPosteos = async () => {
    const response = await fetch('/posteos')
    const data = await response.json()
    return data;
}





document.addEventListener('DOMContentLoaded', async () => {
    
    const posteos = await obtenerPosteos()
    const main = document.querySelector('#lista-posteos')
    mostrarPosteos(posteos, main)
})