window.addEventListener("load", function(){
    //initializing score
    var score = 0; 
    var button = document.getElementsByClassName("boundary");
    var startBtn = document.getElementById("start");
    var endBtn = document.getElementById("end");
    var textBox = document.getElementById("status");
    var toggle = true;

    function changeText(string, change){
        //changing text
        document.getElementById(string).innerHTML = change;
    }

    startBtn.addEventListener("click", function(){

        console.log(score);
        for (var i = 0; i < button.length; i++) {   //changing the color on touching the borders
            button[i].addEventListener("mouseover", function(){
                for (var j = 0; j < button.length; j++) {
                    button[j].style.background = "#ff8888";
                }
                changeText("status", "You Lost");
                toggle = false;
                console.log(toggle)
                score += -10;
                console.log(score);
            });
        };

        start.addEventListener("mouseover", function(){    //resetting the color on touching the start button
            changeText("status", "Again");
            for (var j = 0; j < button.length; j++) {
                button[j].style.background = "#eeeeee";
            }
            toggle = true;
            console.log(toggle)
            });

        
        endBtn.addEventListener("mouseover", function(){   //finishing the maze
            if (toggle == true){
            changeText("status", "You Won");
            console.log(toggle)
            score += 5;
            console.log(score);
            }
        })            
    })
    
})