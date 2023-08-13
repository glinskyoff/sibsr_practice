$(document).ready(function () {
  $('[href^="#"]').on("click", function (event) {
    if ($(this).attr("hash") !== "") {
      event.preventDefault();
      let hash = $(this).prop("hash");
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 50,
        },
        1500,
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
