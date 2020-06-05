function showMoreAreas() {
  $('#business-areas .item-list').removeClass('visually-hidden');
  $('#showMoreAreas').hide()
}

$(function () {
  $('.third-container').before("<div id='btn-scroll-top'></div>");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#btn-scroll-top').fadeIn();
    } else {
      $('#btn-scroll-top').fadeOut();
    }
  });

  $('#btn-scroll-top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 800);
    return false;
  });

});
