window.onload = function () {

  // PANEL RANGE SLİDER (FİYAT)///////////////////////

  var sliderSections = document.getElementsByClassName("range-slider");
  for (var x = 0; x < sliderSections.length; x++) {
    var sliders = sliderSections[x].getElementsByTagName("input");
    for (var y = 0; y < sliders.length; y++) {
      if (sliders[y].type === "range") {
        sliders[y].oninput = getVals;
        sliders[y].oninput();
      }
    }
  }

  function getVals() {
    var parent = this.parentNode;
    // console.log(parent)
    var slides = parent.getElementsByTagName("input")
    var slide1 = parseFloat(slides[0].value);
    var slide2 = parseFloat(slides[1].value);
    if (slide1 > slide2) {
      var tmp = slide2;
      slide2 = slide1;
      slide1 = tmp;
    }

    var displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = slide1 + " TL" + "  -  " + slide2 + " TL";
  }



  // ANASAYFA SLİDER/////////////////////////////////////////////////////,

  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 6,

    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })


  // HAMBURGER TOGGLE CLASS///////////////////////////////////

  $("#wrapper").on("click", function () {
    $(".icon").toggleClass("close");
    $(".nav3").slideToggle();
  })


  //MAİNPAGE PARALLAX EFFECT///////////////////////////

  document.addEventListener('mousemove', parallax);

  function parallax(e) {
    this.querySelectorAll('.parallax').forEach(layer => {
      var speed = layer.getAttribute('data-speed')
      var x = (window.innerWidth - e.pageX * speed) / 100
      var y = (window.innerWidth - e.pageY * speed) / 100
      layer.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.2) `
      layer.style.transition = `all 0.2s ease `
      // layer.style.transitionDelay = `.1s`

    })

  }

  // FORM GONDER BUTONU////////////////////////
  $("#hover").hover(
    function () {
      $("#hover a i").css({
        "opacity": "1",
        "transform": "translateX(15px) scale(1.7)"
      });
    },
    function () {
      $("#hover a i").css({
        "opacity": "0",
        "transform": "translateX(-15px) scale(1.1)"
      });
    }
  );

  // ARAMA PANELİ ACCORDİON SYSTEM////////////////////////////////////////////////////////////////////////////////

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      // $(this).addClass("active").fadeIn();
      $(this).children().children().css("transform", "rotate(90deg)")
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {

        $(this).children().children().css("transform", "rotate(0deg)")
        panel.style.display = "none";
        panel.style.transition = ".4s ease-in-out";
      } else {
        panel.style.display = "block";
        panel.style.transition = ".4s ease-in-out";

      }
    });
  }

  //RANGE SLİDER2 FİYAT PANELİ/////////////////////////////////////////////////////////////////

  var sliderSectionssecond = document.getElementsByClassName("range-slider2");
  for (var x = 0; x < sliderSectionssecond.length; x++) {
    var sliderssecond = sliderSectionssecond[x].getElementsByTagName("input");
    for (var y = 0; y < sliderssecond.length; y++) {
      if (sliderssecond[y].type === "range") {
        sliderssecond[y].oninput = getValssecond;
        sliderssecond[y].oninput();
      }
    }
  }

  function getValssecond() {
    var parentsec = this.parentNode;
    // console.log(parent)
    var slidessec = parentsec.getElementsByTagName("input")
    var slide1sec = parseFloat(slidessec[0].value);
    var slide2sec = parseFloat(slidessec[1].value);
    if (slide1sec > slide2sec) {
      var tmp2 = slide2sec;
      slide2sec = slide1sec;
      slide1sec = tmp2;
    }

    var displayElementsec = parentsec.getElementsByClassName("rangeValues2")[0];
    displayElementsec.innerHTML = slide1sec + " TL" + "  -  " + slide2sec + " TL";
  }



  //MOBİL VERSİYON FİLTER /////////////////////////////////////////////////////////////////////////////////////////////////////////

  $(".filter-icon a").on("click", function (e) {
    $(".cars-filter-left").toggleClass("toggleclass-filter");
    e.preventDefault();
    // e.pagination();
    // if($(".cars-filter-left").css("width","100%") == true){
    //   console.log("ali")
    // }

  })

  // //////////////////////SUGGESTİONS STAR BUTTON //////////////////////////////////////////////////////////////////

  $(".star2").on("click", function (e) {
    if ($(this).children().hasClass("far")) {
      $(this).children().addClass("fas").addClass("anime").removeClass("far")
      $(this).children().css({
        "color": "yellow",
        "transition": ".4s ease-in-out"
      })
    } else {
      $(this).children().addClass("far").removeClass("fas").removeClass("anime")
      $(this).children().css({
        "color": "white",
        "transition": ".2s ease-in-out"
      })
    }


    e.preventDefault();
  })
  // ////////////////////////////////////////////////////////////////PAGE BACK////////////////////////////////////


  var aa = document.querySelector(".prev-icon1")
  aa.addEventListener("click", function () {
    window.history.back();
  })


  // /////////////////////////////////////////////////// CAR DETAİL MOBİLE VERSİON TAB CONTENT //////////

  $('#tabs li a:not(:first)').addClass('inactive');
  $('.container2').hide();
  $('.container2:first').show();

  $('#tabs li a').click(function (e) {
    var t = $(this).attr('id');
    if ($(this).hasClass('inactive')) {
      $('#tabs li a').addClass('inactive');
      $(this).removeClass('inactive');

      $('.container2').hide();
      $('#' + t + 'C').fadeIn('slow');
    }
    e.preventDefault();
  });


  // CAR DETAİL PAGE BXSLİDER ///////////////////////////////////////////////////////////////////

  $('.bxslider').bxSlider({
    // pagerType: 'full',
    pager: true,
    controls: true,
    pagerCustom: '.bx-pager',
    adaptiveHeight: true,
    // captions: true,
    // mode: 'fade',
    auto: true,
    // easing: 'ease-in-out',
    adaptiveHeight: true,
    captions: true,
    // pagerCustom: 1
  });
  
}

