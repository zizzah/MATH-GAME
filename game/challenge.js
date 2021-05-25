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
