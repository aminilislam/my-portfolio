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

  var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
  })

  $('.image').waypoint(function(direction) {
    $('.image').addClass('animate__animated animate__rollIn')
  },{
    offset: '200px'
  })
  $('.about-text').waypoint(function(direction) {
    $('.about-text').addClass('animate__animated animate__fadeInRight')
  },{
    offset: '200px'
  })

  $('a').smoothScroll();

});




