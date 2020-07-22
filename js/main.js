"use strict";
$(document).ready(function () {
  //
  //ページトップへ戻るボタン
  const pagetop = $("#pageTop");

  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);

    return false;
  });

  //　スクロール距離に応じたstyle sectionまでの距離を取得
  $(function () {
    //使用する要素を定義
    const el = {
      main: $("#mainVisual"),
      style: $("#styleWrap"),
      footer: $("#footer"),
    };

    //　要素までの距離を定義
    const scrollTop = {
      style: el.style.offset().top,
      styleCenter: style + 500,
      footer: el.footer.offset().top,
    };

    $(window).on("scroll", function () {
      const scroll = $(window).scrollTop() + $(window).height();
      if (scroll >= scrollTop.style) {
        el.style.css({
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
        });
        console.log("スタイルセクションの固定");
      } else if (scroll >= scrollTop.footer) {
        el.style.css({
          position: "static",
        });
        console.log("固定解除のフッター表示");
      } else {
        el.style.css({
          position: "static",
        });
        console.log("固定解除");
      }
    });
  });
});
