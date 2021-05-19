 
 var playing= false;
 var score;
 var action;
 var timeRemaingg
 var correctAnswer;
 timeRemaingg = 60;


 var play=document.getElementById('startRest');

 play.onclick= function(){
     if(playing==true){
         location.reload();
     }
     else{ //if we are not playing
         score=0; // set the scores
         playing=true;
        // document.getElementById('scoresValue').innerHTML =score;
         changeInnerHtml('scoresValue',score);

         // show the count down
         show('timeRemaing');
         // setting our time remaing
         // document.getElementById('timeRemaingValue').innerHTML=timeRemaingg;
          changeInnerHtml('timeRemaingValue',timeRemaingg)
          hide('gameOver');

         // chage  the button to reset
        // document.getElementById('startRest').innerHTML='Reset Game';
         changeInnerHtml('startRest','Rest Game')


         // start the count down

         startCountdown();

         // generate a question and multiple answers

         generateQA();

     }

 }


  document.getElementById('box1').onclick= function(){
      if(playing==true){
          if(this.innerHTML==correctAnswer){
              score++
         changeInnerHtml('scoresValue',score);
         hide('wrong');
         show('correct');
         setInterval(function(){
            hide('correct');
         },1000)
         generateQA();
         timeRemaingg=60;
          } else{
            hide('correct');
            show('wrong');
            setInterval(function(){
               hide('wrong');
            },1000)
            generateQA();
            timeRemaingg=60;
          }
      }
  }

 for(let i=1; i<5; i++){
    document.getElementById('box'+i).onclick= function(){
        if(playing==true){
            if(this.innerHTML==correctAnswer){
                score++
           changeInnerHtml('scoresValue',score);
           hide('wrong');
           show('correct');
           setInterval(function(){
              hide('correct');
           },1000)
           generateQA();
           timeRemaingg=60;
            } else{
              hide('correct');
              show('wrong');
              setInterval(function(){
                 hide('wrong');
              },1000)
              generateQA();
              timeRemaingg=60;
            }
        }
    }  
 }
  





  



 // GAME LOGIC

 // IF WE ARE PLAYING
 // RELOAD THE PAGE
 // SET THE SCORE TO 0
 // SHOW THE COUNT DOWN
 // REDUCE THE COUNT BY 1 EVERY SEC IN A LOOP
 // // TIME LEFT ?
  // YES  ->COUNTINE
  // NO -> GAMEOVER
  // CHANGE BUTTON TO RESET
  // GENERATE Q &A 

  // IF WE CLICK ON ANSWER 
    // if we are playing
         // correct
            // Yes
                // increase the scores
                // show the the correct box for 1sc 
                // generate new Q & A
            // NO
                // show try again box 1 sec

 
                // functin start counter
 function startCountdown(){
     action = setInterval(function(){
 timeRemaingg -=1;
 //document.getElementById('timeRemaingValue').innerHTML=timeRemaingg;
 changeInnerHtml('timeRemaingValue',timeRemaingg)

        if(timeRemaingg==0){
            stopCountdown();
            show('gameOver');
            var value= "<p> game over</p>" + " <p>your score is "+ score + "</p>";

//id =   document.getElementById('gameOver').innerHTML= "<p> game over</p>" + " <p>your score is "+ score + "</p>";
            changeInnerHtml('gameOver',value)

            hide('timeRemaing');
            hide('correct');
            hide('wrong');
            playing=false;
            changeInnerHtml('startRest',"start game");

        }
     },1000)
 }

    // stop counter
    function stopCountdown(){
        clearInterval(action);
    }

    // hide element
    function hide(Id){
        document.getElementById(Id).style.display="none";

    }
        // show element
     function show(Id){
        document.getElementById(Id).style.display="block";

     }
       

         // change the inner value of html
     function changeInnerHtml(Id,value){
        document.getElementById(Id).innerHTML=value;

     }
 
     // generate question and answers
  function generateQA(){

    var x= 1+ Math.round(Math.random()*10);
    var y= 1+Math.round(Math.random()*10);
     correctAnswer= x*y;

    changeInnerHtml('question',x +" x "+y);

    var correctBoc= 1+Math.round(Math.random()*3);
    // filling one of the box with correct answer
    changeInnerHtml('box'+correctBoc,correctAnswer);

  // filling the wrong boxes

  var answer =[correctAnswer];
   for(i=1; i< 5 ; i++){
       
    if(i != correctBoc){
        var wrongAnswer;
      do{
        wrongAnswer  = (1+ Math.round(Math.random()*10))*(1+ Math.round(Math.random()*10));

      }
      while(answer.indexOf(wrongAnswer)> -1)
      changeInnerHtml('box'+i,wrongAnswer);
      answer.push(wrongAnswer);
    }
   }

  }