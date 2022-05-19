window.addEventListener("load", function(){
    //initializing score
    var score = 0; 
    var button = document.getElementsByClassName("boundary");
    console.log(button);

    function mouse_over(item){
    item.style.border= "1px red solid";
    };


    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("mouseover", function(){
            for (var j = 0; j < button.length; j++) {
                button[j].style.border= "1px red solid";
            }
        });
    };
})