let h1= document.createElement("h1");
h1.setAttribute('id',"ageindays");

document.getElementById('days').onclick = function(){
    let ages= prompt("your age ");

    let tod = new Date;
   
    let num = tod.getFullYear() -ages;
    var days = num *365;

    let textansw=document.createTextNode("your "+days +" days old");
   h1.appendChild(textansw);
   document.getElementById("da").appendChild(h1);

    console.log(days);


}

document.getElementById("reset").onclick= function(){
    document.getElementById("ageindays").innerHTML="";

}

document.getElementById('cat').onclick=function(){
    let images=document.createElement('img');
    images.src=" https://api.thecatapi.com/api/images/get?fformat=src&type=gif&size=small";

    document.getElementById('flex-box').appendChild(images);
}

document.getElementById('rock').onclick=  function(){
    rspGame(this);
}
document.getElementById('paper').onclick=  function(){
    rspGame(this);
}

document.getElementById('scissors').onclick=  function(){
    rspGame(this);
}

var  message;
function rspGame(yourChoice){ 


    var humanChoice,botChoice;
    botChoice= numberToChoice(randToRpsInt());
    console.log("the computer choice is "+ botChoice);
    humanChoice=yourChoice.id;
    console.log('human choice '+ humanChoice);
    result=decideWinner(humanChoice,botChoice);
    console.log(result);
    message=finalMassage(result);
    var color =message.color;
    console.log(message.message);
    updatingScores(result);
    rpsFontend(yourChoice.id,botChoice);
}

 function randToRpsInt(){
     var num=Math.floor(Math.random()*3);
     

     return num
 }
 function numberToChoice(number){
   return['rock','paper','scissors'][number]; }



function decideWinner(yourChoice,botChoice){
   var rpsDatabase ={
       'rock':{'scissors':1, 'rock':0.5, 'paper':0},
       'paper':{'rock':1, 'paper':0.5, 'scissors':0},
       'scissors':{'paper':1, 'scissors':0.5, 'rock':0}
   }

   var yourScores=rpsDatabase[yourChoice][botChoice];
   var computerChoice =rpsDatabase[botChoice][yourChoice];

   return[yourScores,computerChoice];
}


function finalMassage(result){
    var message;
    if(result[0]>result[1]){
        return {'message':"you won",'color':"green"}
    }
    else if(result[1]>result[0]){
        return {'message':"you lost",'color':"red"}

    }
    else{
        return {'message':"you tie",'color':"yellow"}

    }
}


function rpsFontend(humanChoiceImage, botChoiceImage){
     var imageDatabase = {
   'rock':document.getElementById('rock').src,
   'paper':document.getElementById('paper').src,
   'scissors':document.getElementById('scissors').src
     }

   //  document.getElementById('rock').remove();
   //  document.getElementById('paper').remove();
   //  document.getElementById('scissors').remove();

   var img1=  document.createElement('img');
   var img2=  document.createElement('img');
   var div =document.createElement('h2');
  var obj = message;
    div.style.color=obj.color;
    div.innerHTML= obj.message;
    div.style.font="50px";
    div.style.fontSize="50px";
    div.style.lineHeight="100px";
   img1.src=imageDatabase[humanChoiceImage];
   img2.src=imageDatabase[botChoiceImage]
   var flexBox = document.getElementById('inner');
   flexBox.appendChild(img1);
   flexBox.appendChild(div);;
   flexBox.appendChild(img2);
/*  setInterval(function(){
  flexBox.remove();
   

   
 },5000) */
 flexBox.append();
 setInterval(function(){
     location.reload();
 },5000)
}


 function reloadImage(){
var img1 = document.getElementById('rock')
 var img2= document.getElementById('paper')
 var img3= document.getElementById('scissors')

 for(let i =1; i<3; i++){
    document.getElementById('flex-box-rps').appendChild("img"+i);

 }
 }


 function updatingScores([yourScores,computerScores]){
     var you =0,com=0;
   
      if(yourScores< computerScores){
         
        document.getElementById('computer').innerHTML +=+1;
        console.log(computerScores);


     }
     else if (yourScores===computerScores){
        document.getElementById('yours').textContent += +1;
        document.getElementById('computer').textContent+= +1;


     }
     else{
        document.getElementById('yours').innerHTML += +1;

     }
 }

 document.getElementById('background').onchange = function(){
 buttonColorChange(this);
 }

 var all_button= document.getElementsByTagName("button");

  let copeButton =[];
for(let i =0; i<all_button.length; i++){
 copeButton.push(all_button[i].classList[1]);
}
 
function buttonColorChange(buttonColor){
    if(buttonColor.value ==='red'){
        buttonsRed()
    }
    else if(buttonColor.value ==='green'){
        buttonGreen();
    }
    else if(buttonColor.value ==='reset'){
        buttonReset();
    }
    else if (buttonColor.value ==='random'){
        buttonRandom();
    }
}



 function buttonsRed(){
     for(let i =0; i< all_button.length; i++){
         all_button[i].classList.remove(all_button[i].classList[1]);
         all_button[i].classList.add("btn-danger")
     }
 }



 function buttonGreen(){
    for(let i =0; i< all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add("btn-success")
    }
 }


 function buttonReset(){
    for(let i =0; i< all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copeButton[i]);
    }
 }


 function buttonRandom(){
     let color =['btn-primary','btn-success', 'btn-danger', 'btn-warning'];

   for(let i =0; i< all_button.length; i++){
    let rand =  Math.floor(Math.random()*4);
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add(color[rand]);
}
 }

// challenge 5

 let blackjackGame={
     'you':{'scoreSpan':'#your-blackjack-score','div':'#your-box','score':0},
     'dealer':{'scoreSpan':'#dealer-blackjack-score','div':'#dealer-box','score':0}

 }

 const YOU =blackjackGame['you'];
const DEALER = blackjackGame['dealer']
 const hitSound= new Audio('/game/sounds/swish.m4a')

 document.getElementById("blackjack-hit-button").onclick=function(){
 blackjackHit();
 }



 function randomGenerator(){
     let rand;
    rand= 1+ Math.floor(Math.random()*11);

   return rand;
 }


 function blackjackHit(){
   showCard(YOU);
 }


 function showCard(activePlayer){
    let cardImage= document.createElement('img');
    cardImage.src="/game/images/A.png";
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
 }