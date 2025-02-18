function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
      } else {
        menuMobile.classList.add('open');
        
    }
}



const messageButtons = document.querySelectorAll('.message-button');

messageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const hiddenMessage = button.nextElementSibling;
    const card = button.closest('.card-item'); // Supondo que o card tenha a classe 'card-item'

    // visibilidade da mensagem
    if (hiddenMessage.style.display === 'block') {
      hiddenMessage.style.display = 'none';
      // Reduz o tamanho do card de forma suave
      card.style.height = 'auto'; // Ou o valor inicial que você deseja
    } else {
      hiddenMessage.style.display = 'block';
      // Aumenta o tamanho do card de forma suave
      card.style.height = '500px'; // Ajuste conforme necessário para mostrar o conteúdo
    }
  });
});




const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  effect: 'coverflow',
  coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
  },
  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

/*Carrousel */

document.addEventListener('DOMContentLoaded', function () {
  // Inicializando o Tiny Slider
  const slider = tns({
    container: '.my-slider .container-cards',
    items: 3,
    slideBy: 'page',
    SliderToScroll: 1,
    controls: false, // Se você quiser os controles (setas) de navegação
    nav: true, // Se você quiser a navegação de pontos
    mouseDrag: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      }
    }
  });
});



function toggleDetails(element) {
  const detailBox = element.querySelector(".details-box");
  detailBox.classList.toggle("active");
}


function startCountdown() {
  const timers = document.querySelectorAll(".offer-timer");
  let totalTime = 2 * 60 * 60 + 38 * 60 + 26; // 2 horas, 38 minutos, 26 segundos

  setInterval(() => {
    if (totalTime <= 0) {
      clearInterval();
      return;
    }

    totalTime--;
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    const seconds = totalTime % 60;

    timers.forEach(timer => {
  timer.innerHTML = `
    <div>${hours.toString().padStart(2, "0")} Horas</div>
    <div>${minutes.toString().padStart(2, "0")} Minutos</div>
    <div>${seconds.toString().padStart(2, "0")} Segundos</div>
  `;
    });
  }, 1000);
}

startCountdown();

