
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    // ドロワーメニュー
    // let pos;
    $('.js-hamburger, .js-sp-nav a').on('click', function () {
        if ($('.js-hamburger').hasClass('is-active')) {
            $('.js-hamburger').removeClass('is-active');
            $('.js-sp-nav').fadeOut();
            $('body').removeClass('no-scroll');
            // window.scrollTo(0, pos);
            // $('.js-sp-nav').removeClass('is-active');
        } else {
            $('.js-hamburger').addClass('is-active');
            $('.js-sp-nav').fadeIn();
            $('body').addClass('no-scroll');
            // pos = $(window).scrollTop();
            // $('.js-sp-nav').addClass('is-active');
        }
    });

    // メインビュー画像スライダー
    const mvSwiper = new Swiper(".js-mv-swiper", {
        // loop: true,
        effect: 'fade',
        speed: 1500,
        autoplay: {
            delay: 3000,
        }
    });

    // キャンペーン画像スライダー
    const campaignSwiper = new Swiper(".js-campaign-swiper", {
        loop: true,
        speed: 1000,
        navigation: {
          nextEl: ".slider-button-next",
          prevEl: ".slider-button-prev",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          375: {
            slidesPerView: 1.25,
            spaceBetween: 19,
          },
          768: {
            slidesPerView: 2.7,
            spaceBetween: 35,
          },
          1440: {
            slidesPerView: 3.47,
            spaceBetween: 40,
          }
        },
      });

    // 画像のinview
    let box = $(".js-colorbox"),
        speed = 700;

    //.colorboxの付いた全ての要素に対して下記の処理を行う
    box.each(function () {
        $(this).append('<div class="color"></div>');
        var color = $(this).find($(".color")),
            image = $(this).find("img");
        var counter = 0;

        image.css("opacity", "0");
        color.css("width", "0%");
        //inviewを使って背景色が画面に現れたら処理をする
        color.on("inview", function () {
            if (counter == 0) {
                $(this)
                    .delay(200)
                    .animate({ width: "100%" }, speed, function () {
                        image.css("opacity", "1");
                        $(this).css({ left: "0", right: "auto" });
                        $(this).animate({ width: "0%" }, speed);
                    });
                counter = 1;
            }
        });
    });

  //トップへ戻るボタン
  var topBtn = $(".js-totop");
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();
    var windowHeight = $(this).height();
    var bodyHeight = $(document).height();

    // フッターの高さを取得
    var footerHeight = $(".footer").outerHeight() + 16;

    if (scrollPosition > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }

    // フッター手前でボタンを止める
    if (bodyHeight - scrollPosition <= windowHeight + footerHeight) {
      topBtn.css({ position: "absolute", bottom: footerHeight + "px" });
    } else {
      topBtn.css({ position: "fixed", bottom: "0px" });
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

});
