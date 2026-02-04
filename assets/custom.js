document.addEventListener('scroll', function () {
  const header = document.querySelector('.header--transparent');
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});

$(document).ready(function(){
  if($(window).width() < 750){
    let elapsed = 0;
    const interval = setInterval(function () {
      elapsed += 100;
      $('.doubly-wrapper').appendTo('.header--multi-currency');
      if (elapsed >= 1000) {
        clearInterval(interval);
      }
    }, 100);
  }
});

$(window).resize(function(){
  if($(window).width() < 750){
    $('.doubly-wrapper').appendTo('.header--multi-currency');
  }else{
    $('.doubly-wrapper').appendTo('.header__icons');
  }
});