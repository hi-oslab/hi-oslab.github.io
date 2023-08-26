$(function () {
  $(".m_menu").click(function () {
    $(".sub-menu").slideToggle();
  });
  $(".popup_exit").click(function () {
    $(".popup").slideUp(1000);
  });
});
