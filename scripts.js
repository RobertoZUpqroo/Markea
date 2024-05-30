const slideContainer = document.querySelector('.cards__slide');
const cards = Array.from(document.querySelectorAll('.card_item_slide'));
const totalCards = cards.length;

cards.forEach(card => {
    const clone = card.cloneNode(true);
    slideContainer.appendChild(clone);
});

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);

function slide() {
    currentIndex++;
    if (currentIndex >= totalCards) {
        slideContainer.style.transition = 'none';
        slideContainer.style.transform = `translateX(0)`;
        currentIndex = 0;
        setTimeout(() => {
            slideContainer.style.transition = 'transform 3s linear';
            slide();
        }, 20);
    } else {
        slideContainer.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    }
}

setInterval(slide, 6000);


document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.proyecto__item');
    const videoContainer = document.querySelector('.main__video');

    items.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            videoContainer.setAttribute('src', videoSrc);
            videoContainer.play();

            
            items.forEach(i => i.classList.remove('active'));
            
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.pregunta__item');

    items.forEach(item => {
        item.addEventListener('click', function() {
            // Cerrar todas las respuestas abiertas
            items.forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                    i.querySelector('.respuesta').style.maxHeight = null;
                }
            });

            // Alternar la clase activa en el elemento clickeado
            item.classList.toggle('active');
            const respuesta = item.querySelector('.respuesta');
            if (item.classList.contains('active')) {
                respuesta.style.maxHeight = respuesta.scrollHeight + 'px';
            } else {
                respuesta.style.maxHeight = null;
            }
        });
    });
});


//mostrar formulario

$(document).ready(function() {
    $('.boton__contactar').click(function() {
      $('#form').fadeIn();
      $('#overlay').fadeIn(); 
    });

    $('#overlay').click(function() {
      $('#form').fadeOut();
      $(this).fadeOut(); 
    });
  });