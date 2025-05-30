(function($) {
  "use strict";
  
    $.fn.andSelf = function() {
      return this.addBack.apply(this, arguments);
    }
  
      /* Loader Code Start */
      // $(window).on("load", function() { 
      //     $(".section-loader").fadeOut("slow");
          
      //     var $container = $('.portfolioContainer');
          
      //     $container.isotope({
      //         filter: '*',
      //         animationOptions: {
      //             queue: true
      //         }
      //     });
       
      //     $('.portfolio-nav li').click(function(){
      //         $('.portfolio-nav .current').removeClass('current');
      //         $(this).addClass('current');
       
      //         var selector = $(this).attr('data-filter');
      //         $container.isotope({
      //             filter: selector,
      //             animationOptions: {
      //                 queue: true
      //             }
      //          });
      //          return false;
      //     });
      //   });
      /* Loader Code End */


      // var height = $('.mh-service-item').height();
      // if($(window).width()){
      //   $('.mh-service-item').css('height', height);   
      //   $('.mh-service-item').css('height', height);   
      // }
  

      $(window).on('load', function() {
        $('#header-slider #animation-slide').owlCarousel({
               autoHeight: true,
               items: 1,
               loop: true,
               autoplay: true,
               dots: false,
               nav: false,
               autoplayTimeout: 3000,
               navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
               animateIn: "zoomIn",
               animateOut: "fadeOutDown",
               autoplayHoverPause: false,
               touchDrag: true,
               mouseDrag: true
           });
         $("#animation-slide").on("translate.owl.carousel", function () {
             $(this).find(".owl-item .slide-text > *").removeClass("fadeInUp animated").css("opacity","0");
             $(this).find(".owl-item .slide-img").removeClass("fadeInRight animated").css("opacity","0");
         });          
         $("#animation-slide").on("translated.owl.carousel", function () {
             $(this).find(".owl-item.active .slide-text > *").addClass("fadeInUp animated").css("opacity","1");
             $(this).find(".owl-item.active .slide-img").addClass("fadeInRight animated").css("opacity","1");
         });
     });
   
    /*
    |====================
    | Mobile NAv trigger
    |=====================
    */
    
    var trigger = $('.navbar-toggler'),
      overlay     = $('.overlay'),
      navc     = $('.navbar-collapse'),
      active      = false;
  

      $('.navbar-toggler, .navbar-nav li a, .overlay').on('click', function () {
          $('.navbar-toggler').toggleClass('active')
        //   $('#js-navbar-menu').toggleClass('active');
        //   $('.navbar-collapse').toggleClass('show');
          overlay.toggleClass('active');
          navc.toggleClass('active');
      });  
      
        
    /*
    |=================
    | Onepage Nav
    |================
    */
        
      $('#mh-header').onePageNav({
          currentClass: 'active', 
          changeHash: false,
          scrollSpeed: 750,
          scrollThreshold: 0.5,
      });
    
    /*
    |=================
    | fancybox
    |================
    */
 
      // $("[data-fancybox]").fancybox({});
      
      
    /*
    |===============
    | WOW ANIMATION
    |==================
    */
    	var wow = new WOW({
          mobile: false  // trigger animations on mobile devices (default is true)
      });
      wow.init();
      
      
    /*
    |=================
    | AOS
    |================
    */      
      
      //AOS.init();
  
    /*
    | ==========================
    | NAV FIXED ON SCROLL
    | ==========================
    */
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".nav-scroll").addClass("nav-strict");
        } else {
            $(".nav-scroll").removeClass("nav-strict");
        }
    });
    

    /*
    |=================
    | Progress bar
    |================
    */   
    $(".determinate").each(function(){
      var width = $(this).text();
      $(this).css("width", width)
        .empty()
        .append('<i class="fa fa-circle"></i>');                
    });
    
    /*
    |=================
    | Portfolio mixin
    |================
    */   
    $('#portfolio-item').mixItUp();
    
    /*
    |=================
    | Client review
    |================
    */   
     $('#mh-client-review').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        smartSpeed: 450,
        stopOnHover : true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1170: {
            items: 3,
          }
        }
    });  
    
    /*
    |=================
    | Project review slide
    |================
    */   
    $('.mh-project-testimonial').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 450,
        stopOnHover : false,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        pagination: false,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1170: {
            items: 1,
          }
        }
    });     
    
    /*
    |=================
    | Single Project review
    |================
    */   
    $('#single-project').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: false,
        smartSpeed: 450,
        stopOnHover : true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        pagination: false,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1170: {
            items: 1,
          }
        }
    });    
    
    /*
    |=================
    | Project review slide
    |================
    */   
    $('.mh-single-project-slide-by-side').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        autoplay: false,
        smartSpeed: 450,
        stopOnHover : true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        pagination: false,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1170: {
            items: 1,
          }
        }
    });     
    
    // 
    $('#mp-single-project').owlCarousel({
      loop: true,
        responsiveClass: false,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 450,
        stopOnHover : false,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        pagination: false,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1170: {
          items: 1,
        }
      }
  });  
    /*
    |=================
    | Single client review
    |================
    */   
    $('#mh-single-client-review').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        smartSpeed: 450,
        stopOnHover : true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1170: {
            items: 1,
          }
        }
    });   
    
    /*
    |=================
    | Clint review slide
    |================
    */   
    $('#mh-2-client-review').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        smartSpeed: 450,
        stopOnHover : true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1170: {
            items: 2,
          }
        }
    });
    
    
    // Smooth Scroll
        $(function() {
          $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
                }, 600);
                return false;
              }
            }
          });
        });
        
        
        
    /*
    |=================
    | CONTACT FORM
    |=================
    */
      // window.onload = function() {
      //   gapi.load('client', function() {
      //     console.log("acc")

      //     gapi.client.init({
      //       'apiKey': 'AIzaSyCKY7osv4qadk1gx2nE70o0sTq2Rhq8I7c',
      //       'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
      //     });
      //   });
      // };
      
      $("#contactForm").validator().on("submit", function (event) {
          if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
          } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
          }
       });
    
        function submitForm(){
          var name = $("#name").val();
          var email = $("#email").val();
          var messbody = $("#message").val();
          console.log('maintance');return;

          Email.send({
            SecureToken : "895e8905-0a2c-45ca-8163-e44dc3db9995",
            To : "tuanblaze23@gmail.com",
            From : email,
            Subject : name,
            Body : messbody
            }).then(
              message => alert(message)
            );

        //eadc24c3-2285-417d-955a-9a47cac98e22
          // 
          // gapi.client.init({
          //   'apiKey': 'AIzaSyCKY7osv4qadk1gx2nE70o0sTq2Rhq8I7c',
          //   'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
          // }).then(function() {
          //   console.log("-------------")
          //   var emailBody = 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message;
          //   return gapi.client.gmail.users.messages.send({
          //     'userId': 'me',
          //     'resource': {
          //       'raw': window.btoa("To: YOUR_EMAIL_ADDRESS_HERE\r\nSubject: New message from your website\r\n\r\n" + emailBody)
          //     }
          //   });
          // }).then(function(response) {
          //   console.log(response);
          //   alert('Your message has been sent.');
          // }, function(reason) {
          //   console.log('Error: ' + reason.result.error.message);
          //   alert('There was an error sending your message.');
          // });
          //

        }
        function formSuccess(){
            $("#contactForm")[0].reset();
            submitMSG(true, "Message Sent!")
        }
    	  function formError(){   
    	    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    	        $(this).removeClass();
    	    });
    	  }
        function submitMSG(valid, msg){
          if(valid){
            var msgClasses = "h3 text-center fadeInUp animated text-success";
          } else {
            var msgClasses = "h3 text-center shake animated text-danger";
          }
          $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
        }
    

    
}(jQuery));
