$(function(){
    
    //-------------------------Menu Dropdown -----------------------//
  
    var isOpen = false;
    
    $('#menu-button').on('click', function(e){
        e.preventDefault();
        
        
        if(isOpen == false){
        
            $('#menu').addClass('menu-opened');
            
            isOpen = true;
        
        } else {
        
            $('#menu').removeClass('menu-opened');
            
            isOpen = false;
        
        }
    
    });
    
    
    
});
    
    
    
    
    
    
//    $('#menubutton').on('click', function(){
//    
//        if(isOpen == false){
//            
//            $(this).next.removeClass("hidden");
//            
//            $(this).next.slideDown(300, function(){
//                
//                $('#this>i').removeClass("fa fa-bars")
//                            .addClass("fa-times");
//            });
//            
//            isOpen = true;
//        
//        } else {
//        
//            $(this).next.slideToggle(300, function(){
//                
//                $('#this>i').removeClass("fa-times")
//                            .addClass("fa fa-bars");
//            });
//            
//            isOpen = false;
//        
//        }
//        
//    
//    });


//});