window.addEventListener("load", function(){
    //initializing score
    var score = 0; 
    var button = document.getElementsByClassName("boundary");
    var startBtn = document.getElementById("start");
    var endBtn = document.getElementById("end");
    var textBox = document.getElementById("status");

    function changeText(){
        //changing text
    }
    startBtn.addEventListener("click", function(){
        for (var i = 0; i < button.length; i++) {
            button[i].addEventListener("mouseover", function(){
                for (var j = 0; j < button.length; j++) {
                    button[j].style.background = "#ff8888";
                }
                changeText();
                score += -10;
            });
        };

        start.addEventListener("mouseover", function(){
            for (var j = 0; j < button.length; j++) {
                button[j].style.background = "#eeeeee";
            }
            });       

        endBtn.addEventListener("mouseover", function(){
            changeText();
            score += 5;
        })
    })
    
})