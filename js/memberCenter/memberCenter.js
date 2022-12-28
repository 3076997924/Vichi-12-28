$(function () {
    let memberNav = false;
    let memberNum = 0
    $('.logout').click(function () {
        window.location.href = 'index.html'
    })
    // 切换导航栏
    $('.center_aside-nav li').each(function(index,dom){
        $(dom).attr('data-index',index);
    })
    $('.center_aside-nav li').click(function(){
        let index = $(this).data('index')
        $(this).addClass('current').siblings('li').removeClass('current');
        $('.center-body-item').eq(index).show().siblings('div').hide()
        memberNum = index
        $('.member-item').eq(memberNum).addClass('current').siblings().removeClass('current')
    })


    $('.center-score').click(function(){
        $('.center-body-item').hide()
        $('.center-score').show()
        $('.center_aside-nav li').removeClass('current')
    })

    // 会员中心按钮
    $('.membercenterBtn').click(function(){
        if(!memberNav){
            $('.member_nav').slideDown()
            memberNav = true
        }else{
            $('.member_nav').slideUp()
            memberNav = false
        }
    })
    $('.member-item').each(function(index,dom){
        $(dom).attr('data-index',index)
    })
    $('.member-item').on('click',function(){
        $(this).addClass('current').siblings().removeClass('current')
        memberNum = $(this).data('index')
        $('.center-body > div').eq(memberNum).show().siblings('div').hide()
        $('.center_aside-nav > li').eq(memberNum).addClass('current').siblings().removeClass('current')
    })



    // 切换订单栏目
    $('.order-nav li').each(function(index,dom){
        $(dom).attr('data-index',index)
    })

    $('.order-nav li').click(function(){
        let index = $(this).data('index');
        $(this).addClass('current').siblings().removeClass('current');
        $('.order-content > div').eq(index).show().siblings('div').hide()
    })

    // 切换标签屑样式
    $('.order-bars span').each(function(index,dom){
        $(dom).click(function(){
            $(this).addClass('current').siblings('span').removeClass('current')
        })
    })


    // 此处点击需要判断状态
    $('.order-trip-item:eq(0) .mask').click(function () {
        window.location.href = 'order_pay.html'
    })
    $('.order-trip-item:eq(1) .mask').click(function () {
        window.location.href = "order_wait.html"
    })
    $('.order-trip-item:eq(2) .mask').click(function () {
        window.location.href = 'order_comment.html'
    })
    $('.order-trip-item:eq(3) .mask').click(function () {
        window.location.href = 'order_cancel.html'
    })
    $('.order-trip-item:eq(4) .mask').click(function () {
        window.location.href = 'order_detail.html'
    })
    // 付款按钮
    $('.order-pay').click(function () {
        window.location.href = 'journey_reserve.html'
    })

    // 订单详情
    $('.order-trip-item:eq(0) .order-detail').click(function () {
        window.location.href = 'order_pay.html'
    })
    $('.order-trip-item:eq(1) .order-detail').click(function () {
        window.location.href = "order_wait.html"
    })
    $('.order-trip-item:eq(2) .order-evaluate').click(function () {
        window.location.href = 'comment.html'
    })
    $('.order-trip-item:eq(2) .order-detail').click(function () {
        window.location.href = 'order_comment.html'
    })
    $('.order-trip-item:eq(3) .order-detail').click(function () {
        window.location.href = 'order_cancel.html'
    })
    $('.order-trip-item:eq(4) .order-detail').click(function () {
        window.location.href = 'order_detail.html'
    })










    $('.order-hotel-item:eq(0) .mask').click(function () {
        window.location.href = 'order_hotel_unpay.html'
    })
    $('.order-hotel-item:eq(1) .mask').click(function () {
        window.location.href = 'order_hotel_cost.html'
    })
    $('.order-hotel-item:eq(2) .mask').click(function () {
        window.location.href = 'order_hotel_comment.html'
    })
    $('.order-hotel-item:eq(3) .mask').click(function () {
        window.location.href = 'order_hotel_cancel.html'
    })
    $('.order-hotel-item:eq(4) .mask').click(function () {
        window.location.href = 'order_hotel_commented.html'
    })

    $('.order-hotel-pay').click(function () {
        window.location.href = 'hotel_reserve.html'
    })
    $('.order-hotel-item:eq(0) .order-hotel-detail').click(function () {
        window.location.href = 'order_hotel_unpay.html'
    })
    $('.order-hotel-item:eq(1) .order-hotel-detail').click(function () {
        window.location.href = 'order_hotel_cost.html'
    })
    $('.order-hotel-item:eq(2) .order-hotel-detail').click(function () {
        window.location.href = 'order_hotel_comment.html'
    })
    $('.order-hotel-item:eq(3) .order-hotel-detail').click(function () {
        window.location.href = 'order_hotel_cancel.html'
    })
    $('.order-hotel-item:eq(4) .order-hotel-detail').click(function () {
        window.location.href = 'order_hotel_commented.html'
    })

    $('.order-hotel-evaluate').click(function(){
        window.location.href = 'comment_hotel.html'
    })


    // 我的预定单
    $('.order-preview-item').eq(0).click(function(){
        window.location.href = 'order_preview_contact.html'
    })
    $('.order-preview-item').eq(1).click(function(){
        window.location.href = 'order_preview_complete.html'
    })
    $('.order-preview-item').eq(2).click(function(){
        window.location.href = 'order_preview_complete.html'
    })


    
    $('.myPreview').click(function(){
        $('#order-hotel-bd').hide().siblings('#order-preview-bd').show()
    })
    $('.myPreview').siblings('span').click(function(){
        $('#order-preview-bd').hide().siblings('#order-hotel-bd').show()
    })



    // 机票区域跳转
    $('.plane_contact1').click(function(){
        window.location.href = 'order_plane_contact1.html'
    })
    $('.plane_contact2').click(function(){
        window.location.href = 'order_plane_contact2.html'
    })
    $('.plane_complete').click(function(){
        window.location.href = 'order_plane_complete.html'
    })



    // 定制订单
    $('.custom_contact').click(function(){
        window.location.href = 'order_custom_contact.html'
    })
    $('.custom_complete1').click(function(){
        window.location.href = 'order_custom_complete1.html'
    })
    $('.custom_complete2').click(function(){
        window.location.href = 'order_custom_complete2.html'
    })




    // 优惠券区域
    $('.coupon-list ul li').click(function(){
        $(this).addClass('current').siblings().removeClass('current')
    })
    // 内容切换
    $('.coupon-get').click(function(){
        $(this).hide().siblings('.coupon-back').show();
        $('#coupon-display').hide().siblings('#coupon-receive').show()
    })
    $('.coupon-back').click(function(){
        $(this).hide().siblings('.coupon-get').show();
        $('#coupon-receive').hide().siblings('#coupon-display').show()
    })



    // 内容代理区域
    $('.agent-table button').click(function(e){
        e.preventDefault();
        $('.agent-suc').show();
        $('.order-mask').show();
    })

    $('.agent-ok').click(function(){
        $('.agent-suc').hide();
        $('.order-mask').hide();
        $('.agent-table button').hide();
        $('.agent-submitted').show();
    })



    
    // 我的收藏区域
    $('.star-item').each(function(index,dom){
        $(dom).attr('data-index',index)
    })
    $('.star-item').click(function(){
        let index = $(this).data('index');
        $(this).addClass('current').siblings().removeClass('current')
        $('.star-cons').eq(index).show().siblings('.star-cons').hide()
    })

    $('.star-route-item .mask').click(function(){
        window.location.href = 'journey_detail.html'
    })
    $('.star-hotel-item .mask').click(function(){
        window.location.href = 'hotel_detail.html'
    })
    $('.star-travel-item .mask').click(function(){
        window.location.href = 'strategy_detail.html'
    })




    // 我的点评删除
    $('.myComment-delete').click(function(){
        $('.myComment-dt').show();
        $('.order-mask').show();
    })
    // 返回
    $('.myComment-dt-back').click(function(){
        $('.myComment-dt').hide();
        $('.order-mask').hide();
    })
    // 确认
    $('.myComment-dt-sure').click(function(){
        $('.myComment-dt').hide();
        $('.order-mask').hide();
    })


    // 编辑
    $('.myComment-trip-edit').click(function(){
        window.location.href = 'trip_comment.html'
    })
    $('.myComment-hotel-edit').click(function(){
        window.location.href = 'jiudian_comment.html'
    })



    // 新手上路
    $('.novice-item').click(function(){
        $('.novice-con1').hide().siblings('.novice-con2').show()
    })
    $('.novice-back').click(function(){
        $('.novice-con2').hide().siblings('.novice-con1').show()
    })





    // 关于我们
    $('#trip-rule').click(function(){
        $('.about').hide()
        $('#trip-detail').show()
    })
    $('#trip-rule-back').click(function(){
        $('.about').show()
        $('#trip-detail').hide()
    })

    $('#privacy-rule').click(function(){
        $('.about').hide()
        $('#privacy-detail').show()
    })
    $('#privacy-rule-back').click(function(){
        $('.about').show()
        $('#privacy-detail').hide()
    })
    
    $('#plane-rule').click(function(){
        $('.about').hide()
        $('#plane-detail').show()
    })
    $('#plane-rule-back').click(function(){
        $('.about').show()
        $('#plane-detail').hide()
    })



    var tipSure = ''
    $('.cancel-pay').click(function () {
        tipSure = 'trip'
        $('.cancel_order-tip').show()
        $('.order-mask').show()
    })
    $('.cancel-hotel-pay').click(function () {
        tipSure = 'hotel'
        $('.cancel_order-tip').show()
        $('.order-mask').show()
    })
    $('.cancel-tip-back').click(function () {
        $('.cancel_order-tip').hide()
        $('.order-mask').hide()
    })
    $('.cancel-tip-sure').click(function () {
        $('.cancel_order-tip').hide()
        $('.order-mask').hide()
        if (tipSure == 'trip') {
            window.location.href = 'order_cancel.html'
        }
        if (tipSure == 'hotel') {
            window.location.href = "order_hotel_cancel.html"
        }
    })
})