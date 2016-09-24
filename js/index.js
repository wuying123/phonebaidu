$(function(){
//    1.
    $('.my-nav .icon').click(function () {
        $('.my-nav .more').toggleClass('active');
    })
    $('.baidu-hot #duo').click(function () {
        $('.baidu-hot .more').toggleClass('active');
    })
    $('.baidu-recommend #duo1').click(function () {
        $('.baidu-recommend .more').toggleClass('active');
    })
    $('.life-serve #duo2').click(function () {
        $('.life-serve .more').toggleClass('active');
    })
    $('.shopping #duo3').click(function () {
        $('.shopping .more').toggleClass('active');
    })
//    2.
    var num=0;
    var item=$('.baidu-hot .mid-list');
    item.eq(0).css('display','block');
    item.eq(1).css('display','none');
    item.eq(2).css('display','none');
    $('.baidu-hot .huan').click(function () {
        num++;
        if(num==3){
            num=0;
        }
        var value=$('.baidu-hot .out .mid-list').eq(num);
        value.css('display','block');
        $('.baidu-hot .out .mid-list').not(value).css('display','none');
    })
    //3.
    var num1=0;
    var i=10;
    $('.baidu-recommend .top .huan').click(function () {
        $('.baidu-recommend .mid-list').eq(num1).css('zIndex',i++);
        num1++;
        if(num1==3){
            num1=0;
        }
    });


























})
