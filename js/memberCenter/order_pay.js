$(function(){
    $('.unpay-hd-cancel').click(function(){
        $('.cancel_order-tip').show();
        $('.order-mask').show()
    })
    $('.cancel-tip-back').click(function(){
        $('.cancel_order-tip').hide();
        $('.order-mask').hide();
    })
    $('.cancel-tip-sure').click(function(){
        window.location.href = 'order_cancel.html'
    })
})