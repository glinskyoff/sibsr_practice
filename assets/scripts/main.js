$(document).ready(function () {
  $('[href^="#"]').on("click", function (event) {
    if ($(this).attr("hash") !== "") {
      event.preventDefault();
      let hash = $(this).prop("hash");
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 50,
        },
        800,
        function () {}
      );
    }
  });

  $(".more").click(function (e) {
    $(".menuBlock").toggleClass("active");
    $("body").toggleClass("overflow");
  });
  $(".menuBlockLi").click(function (e) {
    $(".menuBlock").removeClass("active");
    $("body").removeClass("overflow");
  });
});

// $(".more").toggle("slow", function () {
//   $(".menuBlock").css("display", "block");
// });

// $(".menu__item").on("click", function () {
//   $(".menu__box").css("left", "-100%");
// });
