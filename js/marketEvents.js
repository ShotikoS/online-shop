$(function () {
  const filterIsOpened = false;
  setTimeout(() => {
    $(".show-filter-mobile-view-btn").click(function () {
      $(".market-filter-on-mobile").attr("style", "display: block");
    });
    $(".close-filter").click(function () {
      $(".market-filter-on-mobile").attr("style", "display: none");
    });
  }, 1500);
});
