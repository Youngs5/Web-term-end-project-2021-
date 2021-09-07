// ESC 게임 이미지 스프라이트
$(document).ready(function () {
    $('.box').css({
        margin: 10,
        width: 130, height: 130,
        overflow: 'hidden',
        background:"url(이미지.jpg)"
    });

    var xPos = -50;

    var p = -1;
    for (var q = 0; q < 8; q ++){
        p ++;
        var xPos1 = xPos - (200*p);
        $("#food" + [q]).css({
            'background-position-x': xPos1,
            'background-position-y': '-30px'
        });
    }

    var p = -1;
    for (var q = 0; q < 8; q ++){
        p ++;
        var xPos1 = xPos - (200*p);
        $("#food" + [8+q]).css({
            'background-position-x': xPos1,
            'background-position-y': '-230px'
        });
    }

    var p = -1;
    for (var q = 0; q < 8; q ++){
        p ++;
        var xPos1 = xPos - (200*p);
        $("#food" + [16+q]).css({
            'background-position-x': xPos1,
            'background-position-y': '-430px'
        });
    }
    
    var p = -1;
    for (var q = 0; q < 8; q ++){
        p ++;
        var xPos1 = xPos - (200*p);
        $("#food" + [24+q]).css({
            'background-position-x': xPos1,
            'background-position-y': '-630px'
        });
    }
});
// 메뉴 월드컵 이미지 스프라이트
$(document).ready(function () {
    $('.box1').css({
        margin: 10,
        width: 130, height: 130,
        overflow: 'hidden',
        background:"url(이미지.jpg)"
    });

    var xPos = -50;

    var p = -1;
    for (var q = 0; q < 8; q ++){
        p ++;
        var xPos1 = xPos - (200*p);
        $("#ffood" + [q]).css({
            'background-position-x': xPos1,
            'background-position-y': '-30px'
        });
    }

    var p = -1;
    for (var q = 0; q < 8; q ++){
        p ++;
        var xPos1 = xPos - (200*p);
        $("#ffood" + [8+q]).css({
            'background-position-x': xPos1,
            'background-position-y': '-230px'
        });
    }

    var p = -1;
    for (var q = 0; q < 8; q ++){
        p ++;
        var xPos1 = xPos - (200*p);
        $("#ffood" + [16+q]).css({
            'background-position-x': xPos1,
            'background-position-y': '-430px'
        });
    }
    
    var p = -1;
    for (var q = 0; q < 8; q ++){
        p ++;
        var xPos1 = xPos - (200*p);
        $("#ffood" + [24+q]).css({
            'background-position-x': xPos1,
            'background-position-y': '-630px'
        });
    }
});
// 게임 로직 부분
var selectFood = [];
var food2;
var k = 0;

$( document ).ready( function() {
    // ESC 게임
    $( '.button' ).click( function() {
        $(this).hide();
        $('.replay').show();
        var count = 0;
        var image = document.querySelectorAll('.box');
        var interval = setInterval(function (){
            $('#Esc').html(image[count % image.length]);
            count = count + 1;
        }, 1000 / 40);
        window.onkeydown = function(event) {
            if (event.keyCode == 27){
                clearInterval (interval);
                $('.result').show();
            };
        };
    });
    // 메뉴 월드컵
    $( '.button1' ).click( function() {
        var food = document.querySelectorAll('.box1');
        $('.replay1').show();
        for(var i = 0; i < 2; i++) {
            $('#World' + [i]).html(food[i]);
        }
        $(this).hide();
    });

    for (var j=0; j < 2; j++){
        $( '#World' + [j] ).click( function() {
            var food = document.querySelectorAll('.box1');
            var food2 = $(this).children(); 
            for (var i = 0; i < 2; i++ ){
                $('#World' + [i]).html(food[i + 2]);
            }
            selectFood.push(food2[0]);

            if (selectFood.length >= 16 && selectFood.length < 31){
                for (var i = 0; i < 2; i++){
                    $('#World' + [i]).html(selectFood[k]);
                    k ++;
                                
                }
            }
            else if (selectFood.length == 31) {
                for (var i=0; i<2; i++){
                    $('#World' + [i]).hide();
                    $('.result1').show();
                    $('.result2').html(selectFood[k]);
                }
            }
        });
    }

    // 다시하기 버튼
    $('.replay').click( function() {
        var GameReplay = confirm('다시 시작하겠습니까?');
        if (GameReplay){
            location.reload();
        } else {
        }
    });
    $('.replay1').click( function() {
        var GameReplay = confirm('다시 시작하겠습니까?');
        if (GameReplay){
            location.reload();
        } else {
        }
    });
});

// navigation 메뉴
$(document).hover(function () {
    $('.outer-menu-item').hover(function (){
        $(this).find('.inner-menu').show();
    }, function () {
        $(this).find('.inner-menu').hide();
    });
    $('#ChungCheong').hover(function () {
        $(this).find('.inner-menu-item-item').show();
    }, function () {
        $(this).find('.inner-menu-item-item').hide();
    });
    $('#GyeongSang').hover(function () {
        $(this).find('.inner-menu-item-item1').show();
    }, function () {
        $(this).find('.inner-menu-item-item1').hide();
    });
    $('#JeonRa').hover(function () {
        $(this).find('.inner-menu-item-item2').show();
    }, function () {
        $(this).find('.inner-menu-item-item2').hide();
    });
    
});
