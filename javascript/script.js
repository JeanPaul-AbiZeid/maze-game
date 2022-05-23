window.addEventListener("load", function(){
    //initializing score
    var score = 0;
    var counter = 1;
    var button = document.getElementsByClassName("boundary");
    var startBtn = document.getElementById("start");
    var endBtn = document.getElementById("end");
    var textBox = document.getElementById("status");
    var scoreString = document.getElementsByClassName("example");
    var leave = document.getElementById("game");
    var last = document.getElementById("last");
    var best = document.getElementById("best");

    //stats variables
    var seconds = 00;
    var tens = 00;
    var outputSeconds = document.getElementById("seconds");
    var outputTens = document.getElementById("tens");
    var best_tens;
    var best_seconds;
    var Interval;

    function startTimer () {
        tens++; 
        
        if(tens <= 9){
          outputTens.innerHTML = "0" + tens;
        }
        
        if (tens > 9){
          outputTens.innerHTML = tens;
        } 
        
        if (tens > 99) {
          seconds++;
          outputSeconds.innerHTML = "0" + seconds;
          tens = 0;
          outputTens.innerHTML = "0" + 0;
        }
        
        if (seconds > 9){
          outputSeconds.innerHTML = seconds;
        }
      
    }

    function reset_timer (){
        clearInterval(Interval);
        tens = "00";  
        seconds = "00";
        outputTens.innerHTML = tens;
        outputSeconds.innerHTML = seconds;
    }

    function changeText(string, change){
        //changing text
        document.getElementById(string).innerHTML = change;
    }

    function alertFunction() {
        alert("Attempt of cheating, you will get -10 score.")
        score += -10;
        scoreString[0].innerHTML = "Your Score:" + score; //displaying the score
    };

    function borderTouch(){
        for (var j = 0; j < button.length; j++) {
            button[j].style.background = "#ff8888";
        }
        //resetting time
        reset_timer();

        changeText("status", "You Lost, go back to start to score more");
        toggle = false;
        score += -10;
        scoreString[0].innerHTML = "Your Score:" + score; //displaying the score
    };

    function startAgain (){
        changeText("status", "Again");
        for (var j = 0; j < button.length; j++) {
            button[j].style.background = "#eeeeee";
        }
        Interval = setInterval(startTimer, 10);
        counter++;
        toggle = true;
    }

    function finish (){
        if (toggle == true){
            changeText("status", "You Won, go back to start to score more");
            score += 5;
            scoreString[0].innerHTML = "Your Score:" + score;  //displaying the score
            toggle = false;  //to increase the score once per path
            if(counter == 1){
                best.innerHTML = seconds + ":" + tens;
                best_tens = tens;
                best_seconds = seconds;
                last.innerHTML = seconds + ":" + tens;
                reset_timer();
            }
            else{
                last.innerHTML = seconds + ":" + tens;
                if(best_seconds > seconds){
                    best.innerHTML = seconds + ":" + tens;
                    reset_timer();
                }
                else if(best_seconds == seconds){
                    if(best_tens > tens){
                        best.innerHTML = seconds + ":" + tens;
                        reset_timer();
                    }
                }
            }
        }
    }

    function start_button_click(){
        toggle = true;
        reset_timer();
        last.innerHTML ="00:00";
        best.innerHTML = "00:00";
        Interval = setInterval(startTimer, 10);
        score = 0;
        counter = 1;
        scoreString[0].innerHTML = "Your Score:" + score; //displaying the score

        leave.addEventListener("mouseleave", alertFunction);    //penelty for leaving the border of th game
        
        for (var i = 0; i < button.length; i++) {   //changing the color on touching the borders
            button[i].addEventListener("mouseover", borderTouch)
        };

        start.addEventListener("mouseover", startAgain) ;   //resetting the color on touching the start button

        endBtn.addEventListener("mouseover", finish)   //finishing the maze 
    }

    startBtn.addEventListener("click", start_button_click)
    
})