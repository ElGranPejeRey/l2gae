let indiceActual = 0;
let imagenes = [];

document.addEventListener("DOMContentLoaded", () => {
    // Cargamos todas las imágenes de la galería
    imagenes = Array.from(document.querySelectorAll(".galeria img"));
});

function openLightbox(index) {
    indiceActual = index;

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("caption");

    if (imagenes.length > 0) {
        lightbox.style.display = "block";
        lightboxImg.src = imagenes[indiceActual].src;
        caption.textContent = imagenes[indiceActual].alt;
    }
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function cambiarImagen(direccion) {
    indiceActual += direccion;

    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1; // vuelve a la última
    } else if (indiceActual >= imagenes.length) {
        indiceActual = 0; // vuelve a la primera
    }

    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("caption");

    lightboxImg.src = imagenes[indiceActual].src;
    caption.textContent = imagenes[indiceActual].alt;
}

// Cerrar con tecla ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    } else if (e.key === "ArrowRight") {
        cambiarImagen(1);
    } else if (e.key === "ArrowLeft") {
        cambiarImagen(-1);
    }
});
