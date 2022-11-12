$(function () {
  let locationShowMore = false;
  let brandsShowMore = false;
  $("#header").load("../fragments/header.html");
  $("#footer").load("../fragments/footer.html");
  $("#mobile-bottom-bar").load('../fragments/mainPage/mobileBottomBar.html');
  $("#categories").load("../fragments/mainPage/categories.html");
  $(".market-page-items").load("../fragments/mainPage/product.html");
  $(".view-all-location .view-all-btn").click(function () {
    !locationShowMore
      ? $(".market-filter .filter-checkboxes-location").css({
          height: "200px",
          overflow: "auto",
        })
      : $(".filter-checkboxes-location").css({
          height: "80px",
          overflow: "hidden",
        });
    if(!locationShowMore) {
        $(".view-all-location .view-all-btn").text("Show less")
    }else{
        $(".view-all-location .view-all-btn").text("Show more")
    }
    locationShowMore = !locationShowMore;
  });
  $(".view-all-brands .view-all-btn").click(function () {
    !brandsShowMore
      ? $(".market-filter .filter-checkboxes-brands").css({
          height: "200px",
          overflow: "auto",
        })
      : $(".filter-checkboxes-brands").css({
          height: "80px",
          overflow: "hidden",
        });
    if(!brandsShowMore) {
        $(".view-all-brands .view-all-btn").text("Show less")
    }else{
        $(".view-all-brands .view-all-btn").text("Show more")
    }
    brandsShowMore = !brandsShowMore;
  });

  setTimeout(() => {
    $(".mobile-header-market object").attr(
      "data",
      "../image/svg/menu/market1.svg"
    );
    $(".mobile-header-market .header-mobile-items-block").addClass(
      "active-mobile-header-items"
    );
    $(".mobile-header-market .header-mobile-item-title").addClass(
      "active-mobile-header-title"
    );
  }, 500);
});
