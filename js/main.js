var tnum = 'en';

$(document).ready(function(){
	
	   // Start Preloader
	  $(window).on('load', function() {
	  $(".loading-preloader").fadeOut();
	   });

            //  Star Language Switcher 
            $(".cuntry-lang").on("click", function(e){
                e.preventDefault();
                $(".more-lang").toggleClass("ul lang-open");
            });
    
            $(".more-lang").each(function(){
                $(this).on("click", function(){
                    var logoSrc = $(this).children(".cuntry-flag").children("img").attr("src");
                    var flagText = $(this).children("a").text() + '<span><i class="fas fa-angle-down"></i></span>'; 
                    $(".cuntry-lang > .cuntry-flag img").attr("src", logoSrc);
                    $(".cuntry-lang > a").html(flagText);
                });
            });

        // Mobile Menu
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1200"
        });
        });

        // Start Testimonial
        $(".all-testmonial-content").slick({
            slidesToShow: 3, 
            autoplay: true, 
            dots: true, 
            arrows: false, 
            responsive: [
              {
                breakpoint: 1000, 
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 767, 
                settings: {
                  slidesToShow: 1,
                }
              }
            ]
          }); 


    // Start Navigation
        

    (() =>{
 
    const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 1199;
  
    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);
  
    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }
  
    navMenu.addEventListener("click", (event) =>{
        if(event.target.hasAttribute("data-toggle") && 
            window.innerWidth <= mediaSize){
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
          // if menuItemHasChildren is already expanded, collapse it
          if(menuItemHasChildren.classList.contains("active")){
              collapseSubMenu();
          }
          else{
            // collapse existing expanded menuItemHasChildren
            if(navMenu.querySelector(".menu-item-has-children.active")){
              collapseSubMenu();
            }
            // expand new menuItemHasChildren
            menuItemHasChildren.classList.add("active");
            const subMenu = menuItemHasChildren.querySelector(".sub-menu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
          }
        }
    });
    function collapseSubMenu(){
        navMenu.querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }
    function resizeFix(){
         // if navMenu is open ,close it
         if(navMenu.classList.contains("open")){
             toggleNav();
         }
         // if menuItemHasChildren is expanded , collapse it
         if(navMenu.querySelector(".menu-item-has-children.active")){
              collapseSubMenu();
       }
    }
  
    window.addEventListener("resize", function(){
       if(this.innerWidth > mediaSize){
           resizeFix();
       }
    });
  
  })

  ();
  
        // Start Hero SLider

        function mainSlider() {
            var BasicSlider = $('.slider-active');
            BasicSlider.on('init', function (e, slick) {
                var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
                doAnimations($firstAnimatingElements);
            });
            BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
                var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
                doAnimations($animatingElements);
            });
            BasicSlider.slick({
                autoplay: true,
                autoplaySpeed: 10000,
                dots: true,
                fade: true,
                arrows: false,
                responsive: [
                    { breakpoint: 992, settings: { dots: false, arrows: false } }
                ]
            });
        
            function doAnimations(elements) {
                var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                elements.each(function () {
                    var $this = $(this);
                    var $animationDelay = $this.data('delay');
                    var $animationType = 'animated ' + $this.data('animation');
                    $this.css({
                        'animation-delay': $animationDelay,
                        '-webkit-animation-delay': $animationDelay
                    });
                    $this.addClass($animationType).one(animationEndEvents, function () {
                        $this.removeClass($animationType);
                    });
                });
            }
        }
        mainSlider();

        // Start Wow  Animitian
        new WOW().init();

        // Start Top To Scroll Button
        let calcScrollValue = () => {
            let scrollProgress = document.getElementById("progress");
            let progressValue = document.getElementById("progress-value");
            let pos = document.documentElement.scrollTop;
            let calcHeight =
              document.documentElement.scrollHeight -
              document.documentElement.clientHeight;
            let scrollValue = Math.round((pos * 100) / calcHeight);
            if (pos > 100) {
              scrollProgress.style.display = "grid";
            } else {
              scrollProgress.style.display = "none";
            }
            scrollProgress.addEventListener("click", () => {
              document.documentElement.scrollTop = 0;
            });
            scrollProgress.style.background = `conic-gradient(#6930c3 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
          };
          
          window.onscroll = calcScrollValue;
          window.onload = calcScrollValue;
          
        //   Start Sticky Menu
        
        $(window).on("scroll", function(){
					var ScrollBarPostion = $(window).scrollTop(); 
					if (ScrollBarPostion > 150 ) {
						$(".header-menu").addClass("header-sticky"); 
					} else {
						$(".header-menu").removeClass("header-sticky");
					}
				})

            // Start Counter js
            $('.counter').counterUp({
                time: 1000
            });

