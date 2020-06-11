
(function ($) {

  var milipolJS = {

    init: function () {
      this.animateFigures();

    },

    animateFigures: function () {

      /*
      jQuery animateNumber plugin v0.0.14
      (c) 2013, Alexandr Borisov.
      https://github.com/aishek/jquery-animateNumber
     */
      (function (d) {
        var r = function (b) { return b.split("").reverse().join("") }, m = { numberStep: function (b, a) { var e = Math.floor(b); d(a.elem).text(e) } }, g = function (b) { var a = b.elem; a.nodeType && a.parentNode && (a = a._animateNumberSetter, a || (a = m.numberStep), a(b.now, b)) }; d.Tween && d.Tween.propHooks ? d.Tween.propHooks.number = { set: g } : d.fx.step.number = g; d.animateNumber = {
          numberStepFactories: {
            append: function (b) { return function (a, e) { var f = Math.floor(a); d(e.elem).prop("number", a).text(f + b) } }, separator: function (b, a, e) {
              b = b || " ";
              a = a || 3; e = e || ""; return function (f, k) { var u = 0 > f, c = Math.floor((u ? -1 : 1) * f).toString(), n = d(k.elem); if (c.length > a) { for (var h = c, l = a, m = h.split("").reverse(), c = [], p, s, q, t = 0, g = Math.ceil(h.length / l); t < g; t++) { p = ""; for (q = 0; q < l; q++) { s = t * l + q; if (s === h.length) break; p += m[s] } c.push(p) } h = c.length - 1; l = r(c[h]); c[h] = r(parseInt(l, 10).toString()); c = c.join(b); c = r(c) } n.prop("number", f).text((u ? "-" : "") + c + e) }
            }
          }
        }; d.fn.animateNumber = function () {
          for (var b = arguments[0], a = d.extend({}, m, b), e = d(this), f = [a], k = 1, g = arguments.length; k < g; k++)f.push(arguments[k]);
          if (b.numberStep) { var c = this.each(function () { this._animateNumberSetter = b.numberStep }), n = a.complete; a.complete = function () { c.each(function () { delete this._animateNumberSetter }); n && n.apply(this, arguments) } } return e.animate.apply(e, f)
        }
      })(jQuery);


      //Animate key Number

      var $window = $(window);
      var $elem = $(".key-numbers")

      function isScrolledIntoView($elem, $window) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
      }

      $(document).on("scroll", function () {
        if ($elem.length > 0) {
          if (isScrolledIntoView($elem, $window)) {

            $('.exhibitors p').animateNumber({ number: 222, easing: 'easeOutQuart' }, 2000);

            $('.trade-visitors p').animateNumber({ number: 8765, easing: 'easeOutQuart' }, 2000);

            $('.official-delegates p').animateNumber({ number: 314, easing: 'easeOutQuart' }, 2000);

            $('.journalist p').animateNumber({ number: 352, easing: 'easeOutQuart' }, 2000);

            $(document).off('scroll');

          }
        }
      });
    }
  }

  //SLIDER TESTIMONIALS

  $('.slider').each(function () {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;

    function move(newIndex) {
      var animateLeft, slideLeft;

      advance();

      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }

      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');

      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }

      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function () {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }

    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }

    $('.next_btn').on('click', function () {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });

    $('.previous_btn').on('click', function () {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });

    $.each($slides, function (index) {
      var $button = $('<a class="slide_btn">&bull;</a>');

      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function () {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });

    advance();
  });

  //scroll top

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


  $('#showMoreAreas').on("click", function () {
    $('#business-areas .item-list').removeClass('visually-hidden');
    $('#showMoreAreas').hide()
  });

  // Dynamic counter

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const months = Math.floor(total / (1000 * 60 * 60 * 24) % 12);

    return {
      total,
      months,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const monthsSpan = clock.querySelector('.months p');
    const daysSpan = clock.querySelector('.days p');
    const hoursSpan = clock.querySelector('.hours p');
    // const minutesSpan = clock.querySelector('.minutes p');
    // const secondsSpan = clock.querySelector('.seconds p');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      monthsSpan.innerHTML = t.months;
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      // minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      // secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = 'October 26 2020';
  initializeClock('container-dates', deadline);



  // $(function () {
  //   var calcNewYear = setInterval(function () {
  //     date_future = new Date(new Date().getFullYear() + 1, 0, 1);
  //     date_now = new Date();

  //     seconds = Math.floor((date_future - (date_now)) / 1000);
  //     minutes = Math.floor(seconds / 60);
  //     hours = Math.floor(minutes / 60);
  //     days = Math.floor(hours / 24);
  //     months = Math.floor(days / 12);

  //     months = days * 31 * 12
  //     hours = hours - (days * 24);
  //     minutes = minutes - (days * 24 * 60) - (hours * 60);
  //     seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

  //     $("#container-dates").text("Time until new year:\nDays: " + days + " Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds);
  //   }, 1000);
  // });

  // add last item to contacts-list section

  $('.contacts-list .cl-content').append($("<a href='#' class='cl-item last-item'></div>").html('<p>See all speakers</p>'));

  milipolJS.init();

})(jQuery);

// var months;
// months = (d2.getFullYear() - d1.getFullYear()) * 12;
// months -= d1.getMonth();
// months += d2.getMonth();
// return months <= 0 ? 0 : months;
