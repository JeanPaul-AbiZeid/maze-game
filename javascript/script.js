window.addEventListener("onload", function(){
    //initializing score
    var score = 0; 
    var button = document.getElementsByClassName("boundary");
    console.log(button);

    function mouse_over(item){
    item.style.border= "1px red solid";
    };


    for (var i = 0; i < button.length; i++) {
        console.log(button[i]);
        button[i].addEventListener("mouseover", function(){
            button[i].style.border= "1px red solid";
        });
        
    };
}