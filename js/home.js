$(function(){
    //imports
    $('#header').load('../fragments/header.html');
    $("#categories").load('../fragments/mainPage/categories.html');
    $('#slider').load('../fragments/mainPage/slider.html');
    $(".top-offer-product").load('../fragments/mainPage/product.html');
    $("#mobile-bottom-bar").load('../fragments/mainPage/mobileBottomBar.html');
    $("#social-programs-content").load('../fragments/mainPage/socialPrograms.html');
    $('#mobile-slider').load('../fragments/mainPage/slider.html');
    $(".sales-item-content").load('../fragments/mainPage/product.html');
    $('#organizations-content').load('../fragments/mainPage/organizations.html');
    $('#news-container').load('../fragments/mainPage/news.html');
    $('#shops-continer').load('../fragments/mainPage/shops.html');
    $('#footer').load('../fragments/footer.html');
    setTimeout(() => {
        $('.mobile-header-home object').attr('data', '../image/svg/menu/home1.svg');
        $('.mobile-header-home .header-mobile-items-block').addClass('active-mobile-header-items');
        $('.mobile-header-home .header-mobile-item-title').addClass('active-mobile-header-title');
    }, 500);
})