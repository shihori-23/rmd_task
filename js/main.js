"use strict";

$(document).ready(function () {
  /**
   *
   * @param {Object} windowSize・・・画面のサイズ
   * @param {Object} half・・・・・・画面のサイズ半分を取得
   * @param {Object} $el・・・・・・・使用する要素を定義
   * @param {Object} scrollTop・・・要素までの距離を定義
   * @param {Object} toggle・・・・・トップへ戻るの際に使用する真偽値
   *
   **/

  // 画面の縦横
  var windowSize = {
    height: $(window).height(),
    width: $(window).width(),
  };

  // 画面のサイズ半分を取得
  var half = {
    width: windowSize.width / 2,
    height: windowSize.height / 2,
  };

  //使用する要素を定義
  var $el = {
    menuWrap: $("#menuWrap"),
    menuNavOpen: $("#menuNavOpen"),
    menuNavClose: $("#menuNavClose"),
    overlay: $("#overlayBg"),
    main: $("#mainVisual"),
    about: $("#about"),
    product: $("#product"),
    style: $("#styleWrap"),
    footer: $("#footer"),
  };

  //　要素までの距離を定義
  var scrollTop = {
    startPos: 0,
    win: 0,
    startPosStyleWrap: 0,
    winStyleWrap: 0,
    main: $el.main.offset().top,
    about: $el.about.offset().top,
    product: $el.product.offset().top,
    style: $el.style.offset().top,
    styleCenter: style + windowSize + 200,
    styleWhite: $("#styleWhite").offset().top,
    styleBlack: $("#styleBlack").offset().top,
    footer: $el.footer.offset().top,
  };

  //　トップへ戻るの際に使用する真偽値
  var toggle = {
    pageTop: false,
  };

  //　【関数を定義】

  //　メニュータブを開く
  function openMenuNav() {
    $el.menuWrap.toggleClass("js-is-visible-menu");
    $el.menuNavOpen.toggleClass("js-hidden");
    $el.menuNavClose.toggleClass("js-hidden js-is-visible");
    $el.overlay.toggleClass("js-hidden-overlay");
  }

  //　メニュータブを閉じる
  function closeMenuNav() {
    $el.menuWrap.toggleClass("js-is-visible-menu");
    $el.menuNavOpen.toggleClass("js-hidden");
    $el.menuNavClose.toggleClass("js-hidden js-is-visible");
    $el.overlay.toggleClass("js-hidden-overlay");
  }

  //　sectionWrapを固定する関数
  function isFixedStyleWrap() {
    $el.style.css({
      position: "fixed",
      top: 0,
      right: 0,
    });
  }

  //　sectionWrapを固定を解除関数
  function staticStyleWrap() {
    $el.style.css({
      position: "static",
    });
  }

  //　指定の位置までスクロールする関数
  function scrollAnimation(el) {
    $("body,html").stop().animate({
      scrollTop: el,
    });
  }

  // メニューボタンがクリックされたらメニュー開く
  $el.menuNavOpen.click(function () {
    openMenuNav();
  });

  // メニューボタンが再度クリックされたら閉じる
  $el.menuNavClose.click(function () {
    closeMenuNav();
  });

  // オーバーレイがクリックされたらメニューなどを閉じる
  $el.overlay.click(function () {
    closeMenuNav();
  });
  // メニューのリンクがクリックされたらメニューなどを閉じる
  $("#menuWrap a").click(function () {
    closeMenuNav();
  });

  // style内でのスムーススクロール
  $('#style a[href^="#"]').click(function () {
    if ($(this).attr("data-box") != undefined) {
      var $box = $($(this).data("box"));
      var $target = $($(this).attr("href"));
      var dist = $target.position().top - $box.position().top;
      $box.stop().animate(
        {
          scrollTop: $box.scrollTop() + dist,
        },
        1000,
        "swing"
      );
    } else {
      $("body,html")
        .stop()
        .animate({
          scrollTop: $($(this).attr("href")).offset().top,
        });
    }
    return false;
  });

  //　スクロールの監視に使用する変数
  const styleWrapEl = document.getElementById("styleWrap");
  const clientHeight = styleWrapEl.clientHeight;
  const scrollHeight = styleWrapEl.scrollHeight;
  const sum = scrollTop.style + windowSize.height;
  const borderLine = sum + 10;

  //　StyleSectionの波線アニメーションのクラスを追加・削除の関数
  const addClassWavyLine = function (win) {
    if (win < clientHeight) {
      $(".wavy-line-svg").removeClass("is-active");
      $("#wavyLineSvgWhite").addClass("is-active");
    } else if (win >= clientHeight && win < clientHeight * 2) {
      $(".wavy-line-svg").removeClass("is-active");
      $("#wavyLineSvgMilkTea").addClass("is-active");
    } else if (win >= clientHeight * 2 && win < clientHeight * 3) {
      $(".wavy-line-svg").removeClass("is-active");
      $("#wavyLineSvgSage").addClass("is-active");
    } else if (win >= clientHeight * 3 && win < clientHeight * 4) {
      $(".wavy-line-svg").removeClass("is-active");
      $("#wavyLineSvgHeatherGray").addClass("is-active");
    } else if (win >= clientHeight * 4 && win < clientHeight * 5) {
      $(".wavy-line-svg").removeClass("is-active");
      $("#wavyLineSvgGray").addClass("is-active");
    } else if (win >= clientHeight * 5 && win < clientHeight * 6) {
      $(".wavy-line-svg").removeClass("is-active");
      $("#wavyLineSvgMarineBlue").addClass("is-active");
    } else if (win >= clientHeight * 6 && win < clientHeight * 7) {
      $(".wavy-line-svg").removeClass("is-active");
      $("#wavyLineSvgNavy").addClass("is-active");
    } else if (win >= clientHeight * 7 && win < clientHeight * 8) {
      $(".wavy-line-svg").removeClass("is-active");
      $("#wavyLineSvgOrange").addClass("is-active");
    } else if (win >= clientHeight * 7 && win < clientHeight * 9) {
      $(".wavy-line-svg").removeClass("is-active");
      $("#wavyLineSvgKhaki").addClass("is-active");
    } else if (win >= clientHeight * 9 && win < clientHeight * 10) {
      $(".wavy-line-svg").removeClass("is-active");
      $("#wavyLineSvgBlack").addClass("is-active");
    }
  };

  //　window全体のスクロールの監視
  $(window).on("scroll", function () {
    scrollTop.win = $(this).scrollTop();

    // 下スクロールと上スクロールの判定
    //　【下スクロールの場合】
    if (scrollTop.win > scrollTop.startPos) {
      if (
        scrollTop.win >= scrollTop.style + windowSize.height &&
        scrollTop.win < borderLine
      ) {
        isFixedStyleWrap();
      } else if (
        scrollTop.win >= scrollTop.style + windowSize.height &&
        scrollTop.win > borderLine
      ) {
        staticStyleWrap();
      }
      //　【上スクロールの場合】
    } else if (scrollTop.win < scrollTop.startPos) {
      if (scrollTop.win > scrollTop.style && toggle.pageTop == false) {
        isFixedStyleWrap();
      }
    }
    scrollTop.startPos = scrollTop.win;
  });

  //　sectionWrap内のスクロールの監視
  styleWrapEl.onscroll = function () {
    scrollTop.winStyleWrap = $(this).scrollTop();

    //　Styleセクション内波線の表示
    addClassWavyLine(scrollTop.winStyleWrap);
    // 下スクロールと上スクロールの判定
    //　【下スクロールの場合】
    if (scrollTop.winStyleWrap > scrollTop.startPosStyleWrap) {
      //　一番下までスクロールしたら postion:fixed; 解除
      if (scrollHeight - (clientHeight + this.scrollTop) == 0) {
        staticStyleWrap();
        scrollAnimation(scrollTop.footer);
      }
      //　【上スクロールの場合】
    } else if (scrollTop.winStyleWrap < scrollTop.startPosStyleWrap) {
      //　一番上までスクロールしたら postion:fixed; 解除
      if (this.scrollTop > windowSize.height) {
      } else if (this.scrollTop <= windowSize.height) {
        staticStyleWrap();
        scrollAnimation(scrollTop.about);
      }
    }
    scrollTop.startPosStyleWrap = scrollTop.winStyleWrap;
  };

  // ページトップへ戻るボタンを押した時の処理
  const pageTop = $("#pageTop");
  // ページを戻るボタンでスクロールする場合のバグを避けるための真偽値リセット関数
  const logResult = function () {
    toggle.pageTop = false;
  };
  pageTop.click(function () {
    toggle.pageTop = true;
    $("body, html").animate({ scrollTop: 0 }, 500);
    setTimeout(logResult, 1000);
    return false;
  });
});
