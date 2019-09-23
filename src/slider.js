$(document).ready(function(){
    
    //Init variables
    var img = ["https://physicsworld.com/wp-content/uploads/2019/05/NGC_2419-1024x532.jpg",
              "https://www.gannett-cdn.com/presto/2019/01/31/USAT/da32117d-62b0-497b-b40b-e36c8163e3da-universe.jpg?width=1080&quality=50",
              "https://wp-assets.futurism.com/2019/04/hubble-data-universe-expanding-faster-1200x630.png"];
    var titles = ["Caption Title",
                 "Caption Title 2",
                 "Caption Title 3"];
    var subtitles = ["Caption Body Test",
                    "Caption Body 2 Test",
                    "Caption Body 3 Test"];
    var time = 5000;
    
    
    
    //Append Indicators
    for(var i = 0 ; i < img.length ; i++){
        $('#slider-indication').append('<div class="slider-indicator"></div>');
    }
    
    
    
    //Start Slider
    var s = 0; //Current Slide
    var side = 0; //Left or Right - Used for captions
    
    
    function setIndicator(){
        var child = s + 1;
        
        $('#slider-indication .slider-indicator').css("background-color", "#ddd");
        $('#slider-indication .slider-indicator:nth-child('+child+')').css("background", "rgba(0,0,0,0.5)");
    }
    
    
    function nextSlide(fade){
        if(s >= img.length){
            s = 0;
        }
        
        $('#slider-captions').addClass('slide-fadeout');
        $('#slider-subtitles').addClass('slide-fadeout');
        
        var delay = 500;
        if(fade == false){
            delay = 0;
        }
        
        setTimeout(function(){
            $('#slider-captions').removeClass();
            $('#slider-subtitles').removeClass();
            if(side % 2 == 0){
                $('#slider-captions').addClass('slide-to-right');
                $('#slider-subtitles').addClass('slide-to-right--delayed');
            }
            else{
                $('#slider-captions').addClass('slide-to-left');
                $('#slider-subtitles').addClass('slide-to-left--delayed');
            }
            $('#slider-captions').html(titles[s]);
            $('#slider-subtitles').html(subtitles[s]);
            side++;

            if(fade){
                $('#slider').animate({
                    opacity: 0
                },500,function(){
                    $('#slider').css("background", "url("+img[s]+") no-repeat fixed");
                    $('#slider').css("background-size", "cover");
                    $('#slider').animate({
                        opacity: 1
                    },500);
                    setIndicator();
                    s++;
                });
            }
            else{
                $('#slider').css("background", "url("+img[s]+") no-repeat fixed");
                $('#slider').css("background-size", "cover");
                setIndicator();
                s++;
            }
        },delay);
        
    }
    
    
    
    //Launch
    nextSlide(false);
    setInterval(function(){
        nextSlide(true);
    },time);
    
});