$(document).ready(function() {
  $(window).scroll(function() {
    if(this.scrollY > 20){
      $('.max-width').addClass('sticky')
    }
    else(
      $(".max-width").removeClass("sticky")
    )
  });

  $('.menu-btn').click(function() {
    $('.max-width .links').toggleClass('active');

  });

  $('a').click(function() {
    $('.max-width .links').toggleClass('active');

  });

});

var typed = new Typed('.element', {
  strings: ['You-tuber', 'Web-Developer','You-tuber', 'Free-Lancer', 'Web-designer'],
  typeSpeed: 60,
  backSpeed: 50,
  backDelay: 2700,
  loop: true
  

});
var typed = new Typed('.elementt', {
  strings: ['You-tuber', 'Web-Developer','You-tuber', 'Free-Lancer', 'Web-designer'],
  typeSpeed: 60,
  backSpeed: 50,
  backDelay: 2700,
  loop: true
  

});