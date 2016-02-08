$(function(){
    $(document).on('scroll',function(){
    
        var scrollTop = $(document).scrollTop();
//        $('h1').css('transform','translateY(-'+scrollTop+'px)');
//        $('label').css('transform','translateY(-'+scrollTop*2+'px)');
//        
        $('[data-rate]').each(function(index,element){
            
            var rate = $(element).data('rate');
            $(element).css('transform','rotateY('+scrollTop*rate+'px)');
        
        
        });
    });

});