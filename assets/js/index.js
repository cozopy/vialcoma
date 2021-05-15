// GLOBAL VARS
var windowH, windowW;
var fontSize, ratio, responsiveFontSize;
var currentSection, language, lan;
var clientsInterval, directionRight;

// PRODUCT VARS
var productCategory;

$(document).ready(function() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  windowW = $(window).width();
  windowH = $(window).height();

  fontSize = 20;
  if (windowW > 767) {
    ratio = windowW/1920;
  } else {
    ratio = windowW/767;
  }
  responsiveFontSize = fontSize*ratio;
  $("body").css('font-size', responsiveFontSize);
});

$(window).on('load', function() {
  currentSection = $(".nav-item.active").attr('id');
  switch (currentSection) {
    case 'home':
      directionRight = true;
      clientsInterval = window.setInterval(function() {
        if ($("#homeClients").scrollLeft() + windowW >= $("#homeClients .container").width() && directionRight == true) {
            directionRight = false;
        } else if ($("#homeClients").scrollLeft() == 0 && directionRight == false) {
            directionRight = true;
        }

        var newPos;
        if (directionRight) {
            newPos = $("#homeClients").scrollLeft() + 1;
        } else {
            newPos = $("#homeClients").scrollLeft() - 1;
        }
        $('#homeClients').scrollLeft(newPos);
      }, 20);

      $("#popUp").fadeIn(600, function() {
        $("html, body").css('overflow', 'hidden');

        document.getElementById("popUpVideo").play(); 
      });
      break;
    case 'about':
      if (windowW < 768) {
        // 767 x 320 bg size
        var bgRatio = windowW/767;
        var bgHeight = 320*bgRatio;
        $("#aboutDescription").css({'padding-top': bgHeight});
      }
      break;
    case 'services':
      if (windowW < 768) {
        $("#servicesCarousel .carousel-indicators").css({'top': $("#servicesCarousel .carousel-item img").height()});
      }
      break;
    case 'contact':
      if (windowW > 767) {
        $("#contactSection iframe").height(windowH - $("#contactSection main").height() - 82);
      }
      break;
    default:
      break;
  }
  
  // lan = sessionStorage.getItem('language');
  // if (lan) {
  //   updatePageWithLan();
  // } else {
  //   lan = "ES";
  //   $("#loading").fadeOut();
  // }
  lan = "ES";
  $("#loading").fadeOut();
});
$(window).on('resize', function (e) {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  windowW = $(window).width();
  windowH = $(window).height();

  if (windowW > 767) {
    ratio = windowW/1920;
  } else {
    ratio = windowW/767;
  }
  responsiveFontSize = fontSize*ratio;
  $("body").css('font-size', responsiveFontSize);
});

$("#lan").on('click', function(e) {
  e.preventDefault();

  if (lan == "EN") {
    lan = "ES";
  } else {
    lan = "EN";
  }

  updatePageWithLan();
  sessionStorage.setItem('language', lan);
});
function updatePageWithLan() {
  $("#loading").fadeIn(function(){
    if (lan == 'EN') {
      $("#lan").html('ES');
      $("#suppliers").html('<img src="https://www.vialcoma.com.mx/assets/media/suppliers.png"> Access to suppliers');
      $("#home .nav-link, #homeSM").html('Home');
      $("#about .nav-link, #aboutSM").html('About');
      $("#products .nav-link, #productsSM").html('Products');
      $("#services .nav-link, #servicesSM").html('Services');
      $("#history .nav-link, #historySM").html('History');
      $("#contact .nav-link, #contactSM").html('Contact');
      $("#products .dropdown-menu a:nth-child(1), #packagingSM").html('Flexible packaging');
      $("#products .dropdown-menu a:nth-child(2), #bagsSM").html('Paper bags');
      $("#products .dropdown-menu a:nth-child(3), #envelopesSM").html('Packaging');
      $("#products .dropdown-menu a:nth-child(4), #templatesSM").html('Templates');
      $("#designSM").html('Design');
      $("#plateSM").html('Direct to plate');
      $("#prepressSM").html('Prepress');
      $("#distributionSM").html('Distribution');
      $("#privacySM").html('Privacy policy');

      var script1 = document.getElementById("siteTag1");
      script1.src = "https://www.googletagmanager.com/gtag/js?id=UA-106834190-2";

      var script2 = document.getElementById("siteTag2");
      script2.innerHTML = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)};gtag('js', new Date());gtag('config', 'UA-106834190-2');";

      $("#zopy").html("Created by <b>Zopy</b>");
    } else {
      $("#lan").html('EN');
      $("#suppliers").html('<img src="https://www.vialcoma.com.mx/assets/media/suppliers.png"> Acceso a proveedores');
      $("#home .nav-link, #homeSM").html('Inicio');
      $("#about .nav-link, #aboutSM").html('Quiénes somos');
      $("#products .nav-link, #productsSM").html('Productos');
      $("#services .nav-link, #servicesSM").html('Servicios');
      $("#history .nav-link, #historySM").html('Historia');
      $("#contact .nav-link, #contactoSM").html('Contacto');
      $("#products .dropdown-menu a:nth-child(1), #packagingSM").html('Empaques flexibles');
      $("#products .dropdown-menu a:nth-child(2), #bagsSM").html('Bolsas de papel');
      $("#products .dropdown-menu a:nth-child(3), #envelopesSM").html('Sobres');
      $("#products .dropdown-menu a:nth-child(4), #templatesSM").html('Formas');
      $("#designSM").html('Diseño');
      $("#plateSM").html('Directo a placa');
      $("#prepressSM").html('Preprensa');
      $("#distributionSM").html('Distribución');
      $("#privacySM").html('Aviso de privacidad');

      var script1 = document.getElementById("siteTag1");
      script1.src = "https://www.googletagmanager.com/gtag/js?id=UA-106834190-1";

      var script2 = document.getElementById("siteTag2");
      script2.innerHTML = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)};gtag('js', new Date());gtag('config', 'UA-106834190-1');";

      $("#zopy").html("Desarrollado por <b>Zopy</b>");
    }

    var data = language[lan];
    switch (currentSection) {
      case 'home':
        var home = data['home'];
        var contact = data['contact'];
        $("#homeCarousel1 header").html(home['carousel1'].title);
        $("#homeCarousel1 a").html(home['carousel1'].btn);
        $("#homeCarousel2 header").html(home['carousel2'].title);
        $("#homeCarousel3 h1").html(home['carousel3'].title);
        $("#homeCarousel3 h2").html(home['carousel3'].text);
        $("#homeCarousel3 a").html(home['carousel3'].btn);
        $("#homeCarousel4 h1").html(home['carousel4'].title);
        $("#homeCarousel4 h2").html(home['carousel4'].text);
        $("#homeCarousel4 a").html(home['carousel4'].btn);
        $("#homeCarousel5 h1").html(home['carousel5'].title);
        $("#homeCarousel5 h2").html(home['carousel5'].text);
        $("#homeCarousel5 a").html(home['carousel5'].btn);
        $("#homeCarousel6 h1").html(home['carousel6'].title);
        $("#homeCarousel6 a").html(home['carousel6'].btn);
        $("#homeAbout>img").attr('src', home.years);
        $("#homeAbout div span p").html(home.about);
        $("#homeAbout div span a").html(home.about_btn);
        $("#homeServices h3").html(home.services);
        $("#homeServices img:nth-of-type(1)").attr('src', home.services_1);
        $("#homeServices img:nth-of-type(2)").attr('src', home.services_2);
        $("#homeServices img:nth-of-type(3)").attr('src', home.services_3);
        $("#homeServices img:nth-of-type(4)").attr('src', home.services_4);
        $("#homeServices a").html(home.services_btn);
        $("#homeClientsTitle").html(home.customers);
        $("#homeSection main>img:last-of-type").attr('src', home['banner-src']);
        $("#homeSection main>img:last-of-type").attr('srcset', home['banner-srcset']);
        $("#homeContact>div h2").html(home.contact);
        $("#nameGroup label").html(contact.name);
        $("#emailGroup label").html(contact.email);
        $("#phoneGroup label").html(contact.phone);
        $("#companyGroup label").html(contact.company);
        $("#messageGroup label").html(contact.message);
        $("#homeContact form button").html(contact.send);
        break;
      case 'about':
        var about = data['about'];
        $("#aboutDescription header").html(about.title);
        $("#aboutDescription p").html(about.text);
        $("#mission h1").html(about['mission'].title);
        $("#mission p").html(about['mission'].text);
        $("#vision h1").html(about['vision'].title);
        $("#vision p").html(about['vision'].text);
        $("#values h1").html(about['values'].title);
        $("#values p").html(about['values'].text);
        $("#clients h1").html(about['clients']);
        break;
      case 'products':
        var products = data['products'];
        if ($('section').attr('id') == "productsSection") {
          $("#prod header").html(products.title);
          $("#prod p").html(products.text);
          $("#sobr h1").html(products['sobres'].title);
          $("#sobr p").html(products['sobres'].intro);
          $("#empa h1").html(products['empaques'].title);
          $("#empa p").html(products['empaques'].intro);
          $("#form h1").html(products['formas'].title);
          $("#form p").html(products['formas'].intro);
          $(".preview .description a").html(products.button);
        } else {
          var main = products[$('main').attr('id')];
          $("#productIntro span h1").html(main.title);
          $("#productIntro span p").html(main.intro);

          var categories = main['categories'];
          switch ($('main').attr('id')) {
            case "empaques":
              $('#productContainer div a[data-target="antigraso"] span').html(categories['antigraso'].title);
              $('#productContainer div a[data-target="encerados"] span').html(categories['encerados'].title);
              $('#productContainer div a[data-target="superficies" span]').html(categories['superficies'].title);
              break;
            case "bolsas":
              $('#productContainer div a[data-target="rapida"] span').html(categories['rapida'].title);
              $('#productContainer div a[data-target="panaderia"] span').html(categories['panaderia'].title);
              break;
            case "sobres":
              $('#productContainer div a[data-target="cartera"] span').html(categories['cartera'].title);
              $('#productContainer div a[data-target="bolsa"] span').html(categories['bolsa'].title);
              $('#productContainer div a[data-target="radiografia"] span').html(categories['radiografia'].title);
              $('#productContainer div a[data-target="fotografia"] span').html(categories['fotografia'].title);
              break;
            case "formas":
              $('#productContainer div a[data-target="continuas"] span').html(categories['continuas'].title);
              $('#productContainer div a[data-target="planas"] span').html(categories['planas'].title);
              $('#productContainer div a[data-target="juego"] span').html(categories['juego'].title);
              break;
            default:
              break;
          }

          if (!productCategory) {
            productCategory = $("#productContainer div a.active").data('target');
          }
          $("#productContainer div:nth-of-type(2) img").attr('src', categories[productCategory].image);
          $("#productContainer div h2").html(categories[productCategory].title);
          $("#productContainer div p").html(categories[productCategory].description);
        }
        break;
      case 'services': 
        var services = data['services'];
        $("#servicesSection main header").html(services.title);
        var carousel = services['carousel'];
        $("#diseno img").attr('src', "https://www.vialcoma.com.mx/assets/media/services/diseno_" + lan.toLowerCase() + ".png");
        $("#diseno p").html(carousel['diseno'].text);
        $("#preprensa img").attr('src', "https://www.vialcoma.com.mx/assets/media/services/preprensa_" + lan.toLowerCase() + ".png");
        $("#preprensa p").html(carousel['preprensa'].text);
        $("#distribucion img").attr('src', "https://www.vialcoma.com.mx/assets/media/services/distribucion_" + lan.toLowerCase() + ".png");
        $("#distribucion p").html(carousel['distribucion'].text);
        $("#placa img").attr('src', "https://www.vialcoma.com.mx/assets/media/services/placa_" + lan.toLowerCase() + ".png");
        $("#placa p").html(carousel['placa'].text);
        break;
      case 'history':
        var history = data['history'];
        $("#historySection main>header").html(history.title);
        $("#y1980 h3").html(history['1980'].title);
        $("#y1980 p").html(history['1980'].text);
        $("#y1987 h3").html(history['1987'].title);
        $("#y1987 p").html(history['1987'].text);
        $("#y1992 h3").html(history['1992'].title);
        $("#y1992 p").html(history['1992'].text);
        $("#y1995 h3").html(history['1995'].title);
        $("#y1995 p").html(history['1995'].text);
        $("#y1997 h3").html(history['1997'].title);
        $("#y1997 p").html(history['1997'].text);
        $("#y2000 h3").html(history['2000'].title);
        $("#y2000 p").html(history['2000'].text);
        $("#y2005 h3").html(history['2005'].title);
        $("#y2005 p").html(history['2005'].text);
        $("#y2007 h3").html(history['2007'].title);
        $("#y2007 p").html(history['2007'].text);
        $("#y2009 h3").html(history['2009'].title);
        $("#y2009 p").html(history['2009'].text);
        $("#y2012 h3").html(history['2012'].title);
        $("#y2012 p").html(history['2012'].text);
        $("#y2013 h3").html(history['2013'].title);
        $("#y2013 p").html(history['2013'].text);
        $("#y2016 h3").html(history['2016'].title);
        $("#y2016 p").html(history['2016'].text);
        $("#y2020 h3").html(history['2020'].title);
        $("#y2020 p").html(history['2020'].text);
        $("#y2020-2 h3").html(history['2020-2'].title);
        $("#y2020-2 p").html(history['2020-2'].text);
        break;
      case 'contact':
        var contact = data['contact'];
        $("#contactForm h2").html(contact.title);
        $("#nameGroup label").html(contact.name);
        $("#emailGroup label").html(contact.email);
        $("#phoneGroup label").html(contact.phone);
        $("#companyGroup label").html(contact.company);
        $("#messageGroup label").html(contact.message);
        $("#contactForm button").html(contact.send);
        $("#contactInfo h4:nth-of-type(1)").html(contact.address);
        $("#contactInfo h4:nth-of-type(2)").html(contact.phone);
        break;
      default:
        break;
    }

    $("#loading").fadeOut();
  });
}
$(".nav-link").on('click', function (e) {
  if ($(this).hasClass('dropdown-toggle') && $(this).attr('aria-expanded') == 'true') {
    e.preventDefault();

    window.open($(this).attr('href'), '_self', false);
  }
});


// HOME
$("#popUp span>img, #popUp").on('click', function() {
  $("#popUp").fadeOut(300, function() {
    $("html, body").css('overflow', 'initial');
  });
});

// PRODUCT
$("#productContainer div a").on('click', function(e) {
  e.preventDefault();

  productCategory = $(this).data('target');
  $("#productContainer div a.active").removeClass('active');
  $(this).addClass('active');

  $("#productContainer div:nth-of-type(2) img, #productContainer div h2, #productContainer div p").fadeOut(600, function() {
    var data = language[lan];
    var products = data['products'];
    var main = products[$('main').attr('id')];
    var categories = main['categories'];

    $("#productContainer div:nth-of-type(2) img").attr('src', categories[productCategory].image);
    $("#productContainer div h2").html(categories[productCategory].title);
    $("#productContainer div p").html(categories[productCategory].description); 

    $("#productContainer div:nth-of-type(2) img, #productContainer div h2, #productContainer div p").fadeIn(600);
  });
});


// HISTORY
var currentNumber = 1;
$("#historyMenu a").mouseenter(function() {
  var number = $(this).data('number');
  $('#historyMenu .small[data-number="' + (number-1) + '"').addClass('medium');
  $('#historyMenu .small[data-number="' + (number+1) + '"').addClass('medium');

  $(this).addClass('large');
}).mouseleave(function() {
  var number = $(this).data('number');
  if (currentNumber != number) {
    $('#historyMenu .small[data-number="' + (number-1) + '"').removeClass('medium');
    $('#historyMenu .small[data-number="' + (number+1) + '"').removeClass('medium');

    $(this).removeClass('large');
  }
});

$("#historyMenu a").on('click', function(e) {
  if (windowW < 768) {
    $("#historyMenu .large").removeClass();
    $(this).addClass('large');

    var target = $(this).data('target');
    $(".year.active").stop().fadeOut(function() {
      $(this).removeClass('active');
    });
    $("#y" + target).stop().fadeIn(function() {
      $(this).addClass('active');
    });
  } else {
    $('#historyMenu a[data-number="' + (currentNumber-1) + '"').removeClass('medium').addClass('small');
    $('#historyMenu a[data-number="' + currentNumber + '"').removeClass('large active').addClass('small');
    $('#historyMenu a[data-number="' + (currentNumber+1) + '"').removeClass('medium').addClass('small');

    var number = $(this).data('number');
    $('#historyMenu a[data-number="' + (number-1) + '"').removeClass('small').addClass('medium');
    $('#historyMenu a[data-number="' + (number+1) + '"').removeClass('small').addClass('medium');

    $(this).removeClass().addClass('large active');
    currentNumber = number;

    var target = $(this).data('target');
    $(".year.active").removeClass('active').fadeOut('slow');
    $("#y" + target).addClass('active').fadeIn('slow');
  }
});


// CONTACT
$("#contactForm").on('submit', function(e){
  e.preventDefault();
  submitForm();
});
function submitForm(){
  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var company = $("#company").val();
  var message = $("#message").val();

  $.ajax({
    type: "POST",
    url: "https://www.vialcoma.com.mx/assets/php/form-process.php",
    data: "name=" + name + "&email=" + email + "&phone=" + phone + "&company=" + company + "&message=" + message,
    success : function(text){
      if (text == "success"){
        formSuccess();
      } else {
        formError();
      }
    }
  });
}
function formSuccess() {
  var form = document.getElementById("contactForm");
  form.reset();

  $("#contactModal .modal-title").html("¡MENSAJE ENVIADO!");
  $("#contactModal .modal-body").html("Gracias por tu mensaje.<br>En breve nos pondremos en contacto contigo.");

  $('#contactModal').modal('toggle');
}
function formError() {
  var form = document.getElementById("contactForm");
  form.reset();

  $("#contactModal .modal-title").html("TU MENSAJE NO SE PUDO ENVIAR");
  $("#contactModal .modal-body").html("Hubo un problema para enviar tu mensaje.<br>Inténtalo de nuevo.");

  $('#contactModal').modal('toggle');
}


// POLL
$('#pollSection input[type="radio"]').on('click change', function(e) {
  var radioID = $(this).attr('id');
  if (!$("#" + radioID + " + .custom-radio").hasClass('unchecked')) {
    $("#" + radioID + " + .custom-radio").addClass('unchecked');
  }
});

