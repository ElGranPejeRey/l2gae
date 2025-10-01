document.addEventListener('DOMContentLoaded', function () {
      const gallery = document.querySelector('.galeria');
      if (!gallery) return;

      const lightbox = document.getElementById('lightbox');
      const lightboxImage = document.getElementById('lightboxImage');
      const lightboxCaption = document.getElementById('lightboxCaption');
      const btnClose = document.getElementById('lightboxClose');

      // Abrir imagen
      gallery.addEventListener('click', function (e) {
        const img = e.target.closest('img');
        if (!img) return;

        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt || 'Imagen ampliada';
        lightboxCaption.textContent = img.alt || '';

        openLightbox();
      });

      function openLightbox() {
        lightbox.classList.remove('lightbox-hidden');
        lightbox.setAttribute('aria-hidden', 'false');
        setTimeout(() => lightbox.focus(), 50);
        document.documentElement.style.overflow = 'hidden';
      }

      function closeLightbox() {
        lightbox.classList.add('lightbox-hidden');
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImage.src = '';
        document.documentElement.style.overflow = '';
      }

      // Cerrar con click fuera o botón
      lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox || e.target === btnClose) closeLightbox();
      });

      // Cerrar con ESC
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !lightbox.classList.contains('lightbox-hidden')) {
          closeLightbox();
        }
      });
    });