$(function () {
  $("#nav-open").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#nav-content").removeClass("open").fadeOut(0);
    } else {
      $(this).addClass("active");
      $("#nav-content").fadeIn(300).addClass("open");
    }
  });
});

