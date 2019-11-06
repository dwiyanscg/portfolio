// Event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    // Pindahkan Scroll

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});

// Perallax

// About
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // Jumbotron
    $('.jumbotron img').css({

        'transform': 'translate(0px, ' + wScroll / 4 + '%)'

    });
    $('.jumbotron h1').css({

        'transform': 'translate(0px, ' + wScroll / 2 + '%)'

    });
    $('.jumbotron p').css({

        'transform': 'translate(0px, ' + wScroll / 1.25 + '%)'

    });


    // Portfolio
    if (wScroll > $('.portfolio').offset().top - 270) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
               $('.portfolio .thumbnail').eq(i).addClass('muncul');

            }, 300 * (i+1));


        });

        
    }

});