// Первичная инициализация всех функций объектов, после полной загрузки страницы. 
window.onload = function(){
     
 

};




/* page ---------------------------------------*/

var page = {
     x: 0,
     screen_md: 992,
     screen_sm: 768
};

page.init = function(){
     page.events();

     $(window).resize(function(){
          page.events();
     });
};

// События.
page.events = function(){
     this.x = window.innerWidth;

     if(this.x >= this.screen_md){
         
     }
};


/*
    $('body').on('click', '...', function(event){

    });
*/
