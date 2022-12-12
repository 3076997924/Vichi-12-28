$(function () {
    $('.keywords-theme i').on('click', function () {
        $(this).addClass('current').siblings('i').removeClass('current')
    })
    $('.keywords-city i').on('click', function () {
        $(this).addClass('current').siblings('i').removeClass('current')
    })
    $('.kewords-type i').on('click', function () {
        $(this).addClass('current').siblings('i').removeClass('current')
    })
    $('.keywords-price i').on('click', function () {
        $(this).addClass('current').siblings('i').removeClass('current')
    })

    $('.result-package-reserve').click(function () {
        window.location.href = 'hotel_reserve.html'
    })
    $('.result-house-reserve').click(function () {
        window.location.href = 'hotel_reserve.html'
    })
    $('.result-title').click(function () {
        window.location.href = 'hotel_detail.html'
    })


    // 轮播图事件
    $('.cityImg:last').click(function () {
        if (document.body.clientWidth >= 991) {
            $('.cityImgsSwiper').show()
        }else{
            $('.mobileSwiper').show()
        }
        $('.city-mask').show()
    })
    // 轮播图关闭
    $('.citySwiperClose').click(function () {
        $('.cityImgsSwiper').hide()
        $('.city-mask').hide()
    })

    $('.city-swipers img').each(function (index, dom) {
        $(dom).attr('data-index', index)
    })
    var currentIndex = $('.city-swipers .current').data('index')
    var imgsLength = $('.city-swipers img').length - 1;
    $('.lf').click(function () {
        if (currentIndex > 0) {
            $('.city-swipers img').eq(currentIndex).hide().removeClass('current');
            $('.city-swiper-item').eq(currentIndex).removeClass('current');
            $('.city-swipers img').eq(--currentIndex).fadeIn().addClass('current')
            $('.city-swiper-item').eq(currentIndex).addClass('current');
        } else {
            $('.city-swipers img').eq(currentIndex).hide().removeClass('current');
            $('.city-swiper-item').eq(currentIndex).removeClass('current');
            currentIndex = imgsLength;
            $('.city-swipers img').eq(currentIndex).fadeIn().addClass('current');
            $('.city-swiper-item').eq(currentIndex).addClass('current');
        }
        let moveX = currentIndex * $('.city-swiper-item').innerWidth()
            if(currentIndex >= 4){
                $('.city-swiper-items').animate({
                    scrollLeft:moveX
                })
            }else{
                $('.city-swiper-items').animate({
                    scrollLeft:-moveX
                })
            }
    })
    $('.lr').click(function () {
        if (currentIndex < imgsLength) {
            $('.city-swipers img').eq(currentIndex).hide().removeClass('current');
            $('.city-swiper-item').eq(currentIndex).removeClass('current');
            $('.city-swipers img').eq(++currentIndex).fadeIn().addClass('current');
            $('.city-swiper-item').eq(currentIndex).addClass('current');
        } else {
            $('.city-swipers img').eq(currentIndex).hide().removeClass('current');
            $('.city-swiper-item').eq(currentIndex).removeClass('current');
            currentIndex = 0;
            $('.city-swipers img').eq(currentIndex).fadeIn().addClass('current');
            $('.city-swiper-item').eq(currentIndex).addClass('current');
        }
        let moveX = currentIndex * $('.city-swiper-item').innerWidth()
            if(currentIndex >= 4){
                $('.city-swiper-items').animate({
                    scrollLeft:moveX
                })
            }else{
                $('.city-swiper-items').animate({
                    scrollLeft:-moveX
                })
            }
    })

    //列表点击图 
    $('.city-swiper-item').each(function (index, dom) {
        $(dom).attr('data-index', index)
        $(dom).click(function () {
            var index = $(this).data('index')
            $('.city-swipers img').eq(currentIndex).removeClass('current').hide()
            $('.city-swiper-item').eq(currentIndex).removeClass('current')
            $('.city-swipers img').eq(index).removeClass('current').fadeIn()
            $('.city-swiper-item').eq(index).addClass('current')
            currentIndex = index
            let moveX = currentIndex * $('.city-swiper-item').innerWidth()
            if(currentIndex >= 4){
                $('.city-swiper-items').animate({
                    scrollLeft:moveX
                })
            }else{
                $('.city-swiper-items').animate({
                    scrollLeft:-moveX
                })
            }
        })
    })
})