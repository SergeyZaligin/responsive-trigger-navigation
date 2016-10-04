$(document).ready(function () {
  $('.b-main-navigation__trigger').click(function () {
    $('.b-main-navigation .b-main-navigation__list').slideToggle(500);
  });
  $(window).resize(function () {
    if ($(window).width() > 500) {
      $('.b-main-navigation .b-main-navigation__list').removeAttr('style');
    }
  });
});
