window.onload=()=>{
var x=250;
var y=150;
var score=0;
var earned=0,price=3;
var year=new Date().getFullYear();
var aim=15;
let dir=0;
let remain;
let foodx=Math.floor(Math.random()*(600-50));
let foody=Math.floor(Math.random()*(400-50));

document.getElementById("year").innerHTML=year;
let cancel=()=>{
    document.getElementById("withdrawal").style.display="none";
}

let show=()=>{
   document.getElementById("withdrawal").style.display="block"; 
}
document.getElementById("Cancel").onclick=cancel;
document.getElementById("withdraw").onclick=show;

  let ele=document.getElementById("canvas");
   let board=ele.getContext("2d");
    board.beginPath();
    board.rect(x,y,100,100);
    board.fillStyle="red";
    board.fill();

let up=document.getElementById("up").ontouchstart=()=>{ dir=1;};
let down=document.getElementById("down").ontouchstart=()=>{ dir=2;};
let left=document.getElementById("left").ontouchstart=()=>{ dir=3;};

let right=document.getElementById("right").ontouchstart=()=>{ dir=4;};

document.getElementById("up").ontouchend=()=>{ dir=0;};
document.getElementById("down").ontouchend=()=>{ dir=0;};
document.getElementById("left").ontouchend=()=>{ dir=0;};
document.getElementById("right").ontouchend=()=>{ dir=0;};

let detectClick=0;
let promo=()=>{
if(detectClick <1){
   earned+=10;
  detectClick++; document.getElementById("link").innerHTML="Click and share <br/> on whatsapp";
 } 
}
document.getElementById("link").onclick=promo;
let draw=()=>{

  board.clearRect(0,0,600,400);
    board.beginPath();
    board.rect(x,y,100,100);
    board.fillStyle="red";
    board.fill();
    
    board.beginPath();
    board.rect(foodx,foody,50,50);
    board.fillStyle="yellow";
    board.fill();
    
    if(dir==1){
       if(y!=0){
        y-=2.5;
        }
    }
    if(dir==2){
      if(y!=300)
        y+=2.5;
    }
    if(dir==3){
       if(x>=0){
        x-=2.5;
        }
    }
    if(dir==4){
       if(x<=500){
        x+=2.5;
        }
    }
    
    if(foody <=y+100 && y<=foody+50 && x<=foodx+50&&foodx<=x+100){
       score++;
    document.getElementById('score').innerHTML=`Score:${score}`;
 foodx=Math.floor(Math.random()*(600-50)); foody=Math.floor(Math.random()*(400-50));
    }
    
    if(score==aim){
      
        earned+=price;
        aim+=10;
        price+=2;
       } document.getElementById("Aim").innerHTML=`Score ${aim} points to get  $${price}`;
     document.getElementById("money").innerHTML=`Earned:$${earned}`;  
    
    
    
document.getElementById("stat1").innerHTML=`Money earned:$${earned}`;

remain=100-earned;

document.getElementById("stat3").innerHTML=`Earn $${remain} more so you can withdraw`;
if(earned >=100){
    document.getElementById("stat3").style.display="none";
 document.getElementById("price").style.display="block";  
}
    
  window.requestAnimationFrame(draw);
}
    
    draw();
    
    
    
}