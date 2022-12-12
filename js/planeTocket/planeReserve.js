$(function(){
    var personNum = $('#personNum').text();
    $('#personDec').click(function(){
        if(personNum > 1){
            personNum--;
        }else{
            personNum =1
        }
        $('#personNum').text(personNum)
    })
    $('#personAdd').click(function(){
        personNum++;
        $('#personNum').text(personNum)
    })
})