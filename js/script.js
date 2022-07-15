$(document).ready(function () {
  // 안내창 기능
  // 추가기능 : 스크롤바 없애기
  $('html').css('overflow', 'hidden');

  let modalWrap = $('.modal-wrap');
  let modalClose = $('.modal-close');
  modalClose.click(function () {
      modalWrap.stop().fadeOut(100);
      // 추가기능 : 스크롤바 살리기
      $('html').css('overflow', 'auto');
  });

  let modalMain = $('.modal-main');
  // 내용 배경 클릭
  modalMain.click(function (event) {
      // 클릭 정보 전달 막기
      event.stopPropagation();
  });
  // 전체 배경 클릭
  modalWrap.click(function () {
      modalWrap.stop().fadeOut(100);
      // 추가기능 : 스크롤바 살리기
      $('html').css('overflow', 'auto');
  });

});

$(document).ready(function () {
  let more_wrap = $('.more-wrap');

  let member_more = $('.member-more');
  member_more.click(function () {
    more_wrap.fadeIn(300);
  });
  let more_div_close = $('.more-div-close');
  more_div_close.click(function () {
    more_wrap.fadeOut(300);
  });

  more_wrap.click(function () {
    more_wrap.fadeOut(300);
  });

  $('.more-div').click(function (event) {
    event.stopPropagation();
  });



  // 모바일 메뉴 기능
  $('.mb-bt').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('mb-bt-open');
    $('.mb-dim').toggleClass('mb-dim-open');
    $('.mb-wrap').toggleClass('mb-wrap-open');
  });

  $(window).resize(function () {
    let temp = $(window).width();
    if (temp > 1000) {
      $('.mb-bt').removeClass('mb-bt-open');
      $('.mb-dim').removeClass('mb-dim-open');
      $('.mb-wrap').removeClass('mb-wrap-open');
      $('.mb-menu>li').height(60);
      $('.mb-mainmenu').removeClass('mb-mainmenu-open');
    }
  });


  let mb_mainmenu = $('.mb-mainmenu');
  let mb_submenu = $('.mb-submenu');
  let mb_submenu_high = [];


  $.each(mb_submenu, function (index) {
    let count = $(this).find('li').length;
    mb_submenu_high[index] = (56 * count);
  });


  let mb_li = $('.mb-menu > li');
  $.each(mb_mainmenu, function (index) {
    $(this).click(function (e) {

      e.preventDefault();

      $(this).toggleClass('mb-mainmenu-open');
      let active = $(this).hasClass('mb-mainmenu-open');
      if (active) {
        let temp = mb_submenu_high[index];
        mb_li.eq(index).height(temp + 60);
      } else {
        mb_li.eq(index).height(60);
      }

    });
  });
  let mb_dim = $('.mb-dim');
  mb_dim.click(function () {

    $('.mb-bt').removeClass('mb-bt-open');
    $('.mb-dim').removeClass('mb-dim-open');
    $('.mb-wrap').removeClass('mb-wrap-open');
    $('.mb-menu>li').height(60);
    $('.mb-mainmenu').removeClass('mb-mainmenu-open');
  });
});

window.onload = function () {

  // 비주얼 슬라이드
  let sw_visual = new Swiper('.sw-visual', {
    loop: true,
    speed: 1000,
    effect: "fade",
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-visual-pg",
      clickable: true,
    },
  });

  let slide_now = 'ing';

  $('.sw-visual-bt').click(function () {

    if (slide_now == 'ing') {
      slide_now = 'stop';
      sw_visual.autoplay.stop();
      $(this).find('span').text('play_arrow');

    } else {
      slide_now = 'ing';
      sw_visual.autoplay.start();
      $(this).find('span').text('pause');
    }

  });

  // 배너 슬라이드
  let sw_banner = new Swiper('.sw-banner', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      prevEl: '.sw-banner-prev',
      nextEl: '.sw-banner-next'
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1400: {
        slidesPerView: 6
      },
      1260: {
        slidesPerView: 5
      },
      1000: {
        slidesPerView: 4
      },
      860: {
        slidesPerView: 3
      }
    }
  });


  $('.sw-banner-pause').click(function () {
    let temp = $(this).find('span').text();
    if (temp == 'play_arrow') {
      $(this).find('span').text('pause');
      sw_banner.autoplay.stop();
    } else {
      $(this).find('span').text('play_arrow');
      sw_banner.autoplay.start();
    }
  });

  $('.gotop').click(function () {

    $('html').animate({
      scrollTop: 0
    }, 1000);

  });

}