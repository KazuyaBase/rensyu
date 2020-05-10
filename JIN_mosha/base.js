$(function() {

    /* ページトップに戻るボタン*/
    $('#js-top').click(function () {
        $('body,html').animate({scrollTop: 0}, 1000);
    });

    /* 途中からボタン出現*/
    let topBtn = $('#js-top');    
    topBtn.hide();
    //スクロールが900に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 900) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    /*ハンバーガーメニュー*/
    var $nav   = $('.nav');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
        if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
        } else {
        $nav.removeClass( open );
        }
    });
    // mask close
    $mask.on('click', function() {
        $nav.removeClass( open );
    });

});