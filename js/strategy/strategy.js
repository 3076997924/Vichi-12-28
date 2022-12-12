$(function(){
    $('.sec_nav li').click(function(){
        $(this).addClass('current').siblings().removeClass('current');
    })
})