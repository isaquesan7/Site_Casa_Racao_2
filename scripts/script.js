$('.img-top-slider').slick({
  dots: true,
  arrows:false,
  speed:1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover:false,
});

$('.img-mid-slider').slick({
  dots: false,
  arrows:false,
  accessibility: true,
  speed:1000,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover:false,
                      responsive: [
                        {
                          breakpoint: 768,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                          }
                        }],
});

$('.container-slider').slick({
    dots: true,
    arrows:false,
    speed:1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:false,
                        responsive: [
                          {
                            breakpoint: 768,
                            settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                            }
                          }],
});

var contatoBtn = document.getElementById('cta-btn');
contatoBtn.addEventListener('click',() => {
    Swal.fire({
      title: 'Ops!',
      text: 'Desculpe, mas no momento nosso chat esta desabilitado!',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  });

var contatoBtn = document.getElementById('btn-wpp');
contatoBtn.addEventListener('click',() => {
    Swal.fire({
      title: 'Ops!',
      text: 'Desculpe, mas no momento nosso chat esta desabilitado!',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  });
