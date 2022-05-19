window.addEventListener("load", function(){
    //initializing score
    var score = 0; 
    var button = document.getElementsByClassName("boundary");
    var startBtn = document.getElementById("start");
    var endBtn = document.getElementById("end");
    var textBox = document.getElementById("status");
    var scoreString = document.getElementsByClassName("example");
    var leave = document.getElementById("game");
    

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
            toggle = true;
    }

    function finish (){
        if (toggle == true){
            changeText("status", "You Won, go back to start to score more");
            score += 5;
            scoreString[0].innerHTML = "Your Score:" + score;  //displaying the score
            toggle = false;  //to increase the score once per path
            }
    }

    startBtn.addEventListener("click", function(){
        var toggle = true;

        scoreString[0].innerHTML = "Your Score:" + score; //displaying the score

        leave.addEventListener("mouseleave", alertFunction);    //penelty for leaving the border of th game
        
        for (var i = 0; i < button.length; i++) {   //changing the color on touching the borders
            button[i].addEventListener("mouseover", borderTouch)
        };

        start.addEventListener("mouseover", startAgain) ;   //resetting the color on touching the start button

        endBtn.addEventListener("mouseover", finish)   //finishing the maze  
    })
    
})