$(function(){
    $('.ability-item').click(function(){
        $(this).addClass('current').siblings().removeClass('current')
    })
    $('.ticketItem').click(function(){
        window.location.href = "planeReserve.html"
    })

    $('.ability-search').click(function(){
        $('.ticketPrice-section').hide()
        $('.noPlane-section').show()
    })
    $('.noPlane-contact').click(function(){
        window.location.href = 'plane_demand.html'
    })
})