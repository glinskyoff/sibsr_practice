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
});
