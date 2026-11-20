$(document).ready(function () {
  // random color on pageLoad

  var colors = ["#bb9772", "#838127","#857D95" ,"darkgrey", "slategrey","#8D774E","#C49EA6","#014036"];
  var rand = Math.floor(Math.random() * colors.length);
  document.documentElement.style.setProperty('--highlite-color', colors[rand]);

  // random image and its description
  var images = [['9483','Man in suit smiling next to electronics and monitors.','http://flickr.com/photo.gne?id=2986591710_d76622fdf0_z.jpg','United Kingdom'],
  ['347693','A couple of windows sitting inside of a room.','https://www.flickr.com/photos/worldbank/3427794620/','Nepal'],
  ['367680','Cars, truck and carriages are traveling on the road.','https://www.flickr.com/photos/_mia/34251540/','Turkey'],
  ['511599','Several people are standing outside a large boat.','https://www.flickr.com/photos/triller/5057922539/','Laos'],

];
  var random = Math.floor(Math.random() * images.length);

  console.log(random);
  $('#gigo').css({ 'background-image': 'url(./assets/images/' + images[random][0] + '.png' + ' )' });
  $('.description').text( images[random][1] );
  $('.imageNum').text( images[random][0] );
  $('.imageUrl').prop( "href", images[random][2] );
  $('.imageLoc').text( images[random][3] );


});

//menu toggle
$(document).ready(function () {

  $(".section").click(function () {
    $(".section").removeClass("open");
    $(this).toggleClass("open");

    if (!$("#texts").hasClass("open")){
      $(".menu").hide();
    } else {
      $(".menu").show();
    }
    if ($("#about").hasClass("open")) {
      $("#texts").toggleClass("open");
      $(".menu").hide();
    }

    
    
  });


});

// Image toggle
$(document).ready(function () {
  $(".img2").click(function () {
    $(this).toggleClass("bigger");
  });
});

$(document).ready(function () {
  $('html, body').scrollLeft(0);
  $('html, body').scrollTop(0);
})


// menu scroll
$(document).ready(function () {
  var isHuge = true;
  var $header = $('.sitetitle');
  var $menu = $('.menu');

  $("a").click(function () {
    isHuge = false;
    $header.addClass('sitetitle-collapsed');
    $menu.addClass('menu-collapsed');
  });

  $(window).scroll(function () {
    if (!isHuge && window.scrollY <= 1) {
      isHuge = true;
      $header.removeClass('sitetitle-collapsed');
      $menu.removeClass('menu-collapsed');
    }
  });

  // $(window).scroll(function () {
  //   if (isHuge && window.scrollY > 10) {
  //     isHuge = false;
  //     $header.addClass('sitetitle-collapsed');
  //     $menu.addClass('menu-collapsed');
  //   }
  // });

});

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var TextFormat = function (el) {

  function footnotesInit(element, count) {
    var number = count + 1;
    $(element).prev().addBack().next().addBack().wrapAll('<p />');
    $(element).parent().find('p').contents().unwrap();
    $(element).prepend("<span class='innerFootnotesNumber'>" + number + ".</span>")
    $(element).wrapInner("<span class='footnotesText hidden'></span>");
    $(element).prepend("<span class='footnotesNumber'>" + '✹' + "</span>")
    $(element).replaceWith(function () {
      return $("<span />", { class: 'footnotes', html: $(this).html() });
    });
  }

  function footnotesClick(element) {
    var footnote = element;
    footnote.classList.contains('hidden') ? footnote.classList.remove('hidden') : footnote.classList.add('hidden');
  }


  function titleTop() {
    var title = el.querySelector('.text-title'),
      titleTop = title.getBoundingClientRect().top,
      titleHeight = title.getBoundingClientRect().height,
      topTitle = document.getElementById('top-title');
    if (topTitle != null) { titleTop + titleHeight < 30 ? topTitle.classList.remove('hidden') : topTitle.classList.add('hidden'); }
  }

  function scrollPosition() {
    var body = document.body,
      html = document.documentElement,
      documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
      scrollPosition = window.pageYOffset,
      pos = Math.round(scrollPosition / (documentHeight - window.innerHeight) * 100),
      textProgress = document.getElementById('text-progress');
    if (textProgress != null) { textProgress.innerHTML = pos < 10 ? '0' + pos + ' %' : pos + ' %'; }
    if (pos > 100) { textProgress.innerHTML = 100 + ' %' }
  }

  function borderHeader() {
    var header = document.querySelector('section.header'),
      scrollPosition = window.pageYOffset,
      headerHeight = header.getBoundingClientRect().height;
    scrollPosition + headerHeight > 110 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
  }
  return {
    footnotesInit: footnotesInit,
    footnotesClick: footnotesClick,
    titleTop: titleTop,
    scrollPosition: scrollPosition,
    borderHeader: borderHeader
  };

}


var fullText = document.querySelector('article.fulltext'),
  textFormat = new TextFormat(fullText),
  footnotes = fullText.querySelectorAll('h6');
for (let i = 0; i < footnotes.length; i++) {
  textFormat.footnotesInit(footnotes[i], i);
}

var footnotesNumber = fullText.querySelectorAll('span.footnotesNumber');
for (let i = 0; i < footnotesNumber.length; i++) {
  footnotesNumber[i].addEventListener('click', function (e) {
    textFormat.footnotesClick(this.nextElementSibling);
  })
}

var quoteNote = fullText.querySelectorAll('span.quote-note');
for (let i = 0; i < quoteNote.length; i++) {
  quoteNote[i].addEventListener('click', function (e) {
    textFormat.footnotesClick(this.querySelector('span.quote-inside'));
  })
}

document.addEventListener('scroll', function () {
  textFormat.borderHeader();
  textFormat.titleTop();
  textFormat.scrollPosition();
})

