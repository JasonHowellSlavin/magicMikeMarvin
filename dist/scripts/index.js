'use strict';

$(document).ready(function () {
    console.log($, 'jquery');

    var now = void 0;
    var end = void 0;
    var now2 = void 0;
    var end2 = void 0;

    console.log(window.innerHeight);
    var windowHeight = window.innerHeight;
    $('article').css('min-height', windowHeight + 'px');

    function phaseTwo() {
        console.log('we in');
        $('.stage-two').show();
        $('.stage-two').children('h2').eq(0).addClass('show-word-one');
        $('.stage-two').children('h2').eq(1).addClass('show-word-two');
        $('.stage-two').children('h2').eq(2).addClass('show-word-three');
        now2 = new Date().getTime();
        var secondInterval = setInterval(function () {
            console.log('here too');
            end2 = new Date().getTime();
            if (end2 >= now2 + 5000) {
                console.log('here?');
                //do some shit
                $('.stage-two').hide();
                $('.stage-three').show();
                $('.big-special').show();
                clearInterval(secondInterval);
            }
        }, 1000);
    }

    function showPhaseOne() {
        $('.reveal').show();
        $('.stage-one').children('h2').eq(0).addClass('show-word-one');
        $('.stage-one').children('h2').eq(1).addClass('show-word-two');
        $('.stage-one').children('h2').eq(2).addClass('show-word-three');

        now = new Date().getTime();

        var firstInterval = setInterval(function () {
            end = new Date().getTime();
            console.log('yup');
            if (end >= now + 5000) {
                clearInterval(firstInterval);
                console.log('geater');
                $('.stage-one').hide();
                phaseTwo();
            }
        }, 1000);
    }

    $('.big-special').on('click', function (event) {

        $('article').css('background-color', '#AF91B6');
        $('.first-section-animation').hide();
        $('.the-originals-presents').css('display', 'flex');
        $('.the-originals-presents').children('h2').eq(0).addClass('active');
        $('.the-originals-presents').children('h2').eq(1).addClass('active');
    });

    window.setTimeout(showPhaseOne(), 2000);
});