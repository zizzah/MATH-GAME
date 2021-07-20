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
     'dealer':{'scoreSpan':'#dealer-blackjack-score','div':'#dealer-box','score':0},
     'card':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
     'cardMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
     'win':0,
     'draw':0,
     'loses':0,
     'isStand':false,
     'turnOver':false,
     'deal':false

 }

 const YOU =blackjackGame['you'];
const DEALER = blackjackGame['dealer']
 const hitSound= new Audio('/game/sounds/swish.m4a')
 const youWon = new Audio('/game/sounds/cash.mp3');
 const youLost = new Audio('/game/sounds/aww.mp3');

 document.getElementById("blackjack-hit-button").onclick=function(){
 blackjackHit();
 }

 document.getElementById('blackjack-deal-button').onclick= function(){
     blackjackDeal();
 }

document.getElementById('blackjack-stand-button').onclick = function(){
 blackjackStand();
}


 function blackjackHit(){

    if(blackjackGame['isStand'] ===false){
    let card = pickCardRandom();

   showCard(card,YOU);
   updatingScores(card,YOU);
   blackjackGame['turnOver']=true;

   console.log(blackjackGame['isStand']);
 }
 blackjackGame['turnOver']= true;
 blackjackGame['deal']=true;

 }
// blackjackGame['isStand']=true;


 function sleep(ms){
     return new  Promise(resolve => setInterval(resolve,ms))
 }
 
  async function blackjackStand(){
      if(blackjackGame['turnOver']===true){
      while(DEALER['score']< 16){
      
    let card = pickCardRandom();
 
    showCard(card,DEALER);
    dealerUpdatingScores(card,DEALER);

        await sleep(1000);

    
    blackjackGame['deal']=false;


  }

  computeWinner();

} 

blackjackGame['isStand']=true;

if(YOU['score']===0 & DEALER['score']===0){
    blackjackGame['isStand']=false;
}

  }

  
 function computeWinner(){
    
     if(YOU['score'] <= 21 && DEALER['score']<=21){
     if(YOU['score'] > DEALER['score']){
         document.getElementById('blackjack-result').textContent="you won";
         win+=+  1;
         blackjackGame['win']++;
         console.log(blackjackGame['win']);


         document.getElementById('win').textContent = blackjackGame['win']
         youWon.play();

     }
     else if(YOU['score'] == DEALER['score']){
        document.getElementById('blackjack-result').textContent="you draw";
        document.getElementById('blackjack-result').style.color="yellow";
        draw+= +1;
        console.log(draw);
        blackjackGame['draw']++

        document.getElementById('draw').textContent = blackjackGame['draw'];
        youLost.play();


     }
     else{
        document.getElementById('blackjack-result').textContent="you lost";
        document.getElementById('blackjack-result').style.color="red";
        lose+=+1;
        blackjackGame['loses']++;
        console.log(lose);

        document.getElementById('lose').textContent = blackjackGame['loses'];
        youLost.play();


     }
     }

     else if(YOU['score']>21 && DEALER['score']>21 || YOU['score']==21&& DEALER['score']==21){
        document.getElementById('blackjack-result').textContent="you draw";
        draw +=+1;
        blackjackGame['draw']++;
        document.getElementById('draw').textContent = blackjackGame['draw'];
        console.log(draw);
        youLost.play();


        document.getElementById('blackjack-result').style.color="yellow";

     }

     else if(YOU['score']<= 21 && DEALER['score']>21){
        document.getElementById('blackjack-result').textContent="you won";
        win+=+1;
        blackjackGame['win']++
        console.log(win);
        youWon.play();

        document.getElementById('win').textContent = blackjackGame['win'];

     }
  else{
    document.getElementById('blackjack-result').textContent="you lost";
    lose+=+1;
    blackjackGame['loses']++
    document.getElementById('lose').textContent = blackjackGame['loses'];
  console.log(lose);
    document.getElementById('blackjack-result').style.color="red";
    youLost.play();
    


  }
     


 }

 function pickCardRandom(){
     
    
     let num= Math.floor(Math.random()*13);
   
    return blackjackGame['card'][num];
  }
 function showCard(card,activePlayer){
     if(activePlayer['score'] <=21){
    let cardImage= document.createElement('img');
    cardImage.src= `images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
     }
 }





 

 function blackjackDeal(){
     if(DEALER['score']>= 15){
     let yourImages = document.getElementById('your-box').querySelectorAll('img');
     for(let i =0 ;i <yourImages.length; i++){
         yourImages[i].remove();
     }

     let    dealerImages = document.getElementById('dealer-box').querySelectorAll('img');
     for(let i =0 ;i <dealerImages.length; i++){
         dealerImages[i].remove();
     }
   showScore(YOU);
   showScore(DEALER);
   document.getElementById('blackjack-result').textContent="let's play";
   document.getElementById('blackjack-result').style.color="white";

   blackjackGame['isStand']=false;
   blackjackGame['turnOver']=false;

    }

    else{
        blackjackGame['turnOver']=false;
    }
   
 }


 

function updatingScores(card, activePlayer){
 // let num=   activePlayer['score']+=blackjackGame['cardMap'][card];
 document.getElementById('your-blackjack-result').textContent = 0;

 if(card=='A'){
     if(activePlayer['score']+blackjackGame['cardMap'][card][1]<=21){
         activePlayer['score'] =+ blackjackGame['cardMap'][card][1];
     }
 
 else{
     activePlayer['score'] += blackjackGame['cardMap'][card][0];
 }
}
 else{
     let mun = activePlayer['score']+=blackjackGame['cardMap'][card];
     console.log('your scores is'+mun);
 }
     if(activePlayer['score']> 21){
        document.getElementById('your-blackjack-result').style.color='red';
        document.getElementById('your-blackjack-result').textContent='BUST'



     }
     else{
        document.getElementById('your-blackjack-result').textContent = activePlayer['score']
        document.getElementById('your-blackjack-result').style.color="white";


     }
}

function showScore(activePlayer){
   // document.querySelector(activePlayer['scoreSpan']).textContent=activePlayer['score']
  // console.log(activePlayer['score']);
activePlayer['score']=0;
  // document.querySelector(activePlayer['scoreSpan']).innerHTML = b;
  // console.log(activePlayer['scoreSpan'])
  document.getElementById('your-blackjack-result').style.color="white";
 document.getElementById('your-blackjack-result').innerHTML=0;

 document.getElementById('dealer-blackjack-result').style.color="white";
 document.getElementById('dealer-blackjack-result').innerHTML=0;

  
}




function  dealerUpdatingScores(card, activePlayer){
    // let num=   activePlayer['score']+=blackjackGame['cardMap'][card];
    document.getElementById('dealer-blackjack-result').textContent=0;
    if(card=='A'){
        if(activePlayer['score']+blackjackGame['cardMap'][card][1]<=21){
            activePlayer['score'] =+ blackjackGame['cardMap'][card][1];
        }
    
    else{
        activePlayer['score'] += blackjackGame['cardMap'][card][0];
    }
   }
    else{
        let mun = activePlayer['score']+=blackjackGame['cardMap'][card];
        console.log('your scores is'+mun);
    }
        if(activePlayer['score']> 21){
           document.getElementById('dealer-blackjack-result').style.color='red';
           document.getElementById('dealer-blackjack-result').textContent='BUST'
   
   
   
        }
        else{
           document.getElementById('dealer-blackjack-result').textContent = activePlayer['score']
           document.getElementById('dealer-blackjack-result').style.color="white";
   
   
        }
   }

   