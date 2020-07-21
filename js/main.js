"use strict";
$(document).ready(function () {
  //ページトップへ戻るボタン
  const pagetop = $("#pageTop");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);

    return false;
  });
});
