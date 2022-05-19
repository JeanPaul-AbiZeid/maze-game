window.addEventListener("load", function(){
    //initializing score
    var score = 0; 
    var button = document.getElementsByClassName("boundary");
    var startBtn = document.getElementById("start");
    var endBtn = document.getElementById("end");

    startBtn.addEventListener("click", function(){
        for (var i = 0; i < button.length; i++) {
            button[i].addEventListener("mouseover", function(){
                for (var j = 0; j < button.length; j++) {
                    button[j].style.background = "red";
                }
                score += -10;
            });
        };
        endBtn.addEventListener("mouseover", function(){
            score += 5;
        })
    })
    

    
})