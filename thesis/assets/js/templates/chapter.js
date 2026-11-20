var TextFormat = function (el) {

  function footnotesInit(element, count) {
    var number = count + 1;
    $(element).prev().addBack().next().addBack().wrapAll('<p />');
    $(element).parent().find('p').contents().unwrap();
    $(element).prepend("<span class='innerFootnotesNumber'>" + number + ".</span></span>")
    $(element).wrapInner("<span class='footnotesText hidden'></span>");
    $(element).prepend("<span class='footnotesNumber'>" + '✴' + "</span></span>")
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

  // function borderHeader(){
  //   var header = document.querySelector('section.header'),
  //       scrollPosition = window.pageYOffset,
  //       headerHeight = header.getBoundingClientRect().height;
  //   scrollPosition + headerHeight > 110 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
  // }
  return {
    footnotesInit: footnotesInit,
    footnotesClick: footnotesClick,
    titleTop: titleTop,
    scrollPosition: scrollPosition,
    // borderHeader: borderHeader
  };

}
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

});


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
  // textFormat.borderHeader();
  textFormat.titleTop();
  textFormat.scrollPosition();
})