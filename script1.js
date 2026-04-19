let gameSeq = [];
let userSeq = [];



let h2 = document.querySelector("h2");

let btns = ["red","yellow","green","blue"];

let started = false;
let level = 0;
let presentScore = 0;
let highscore = document.querySelector(".score");
let score = document.createElement("p");
score.innerText = "High Score : 0";
score.classList.add("higher");

highscore.appendChild(score);


document.addEventListener("keypress",function(){
    if(started == false){
        
        started = true;

         levelUp();
    }

   
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    
    gameFlash(randBtn);
}

function checkAns(idx){
   

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
        
    }else{
        h2.innerHTML = `Game over your score is <b>${level}</b> <br>Press any key to Restart!`;
        document.querySelector("body").style.backgroundImage = "url('https://wallpapercave.com/wp/wp5316915.jpg')";
         document.querySelector("body").style.backgroundSize = "cover";
        setTimeout(function(){
            document.querySelector("body").style.backgroundImage = "url('https://foolishdeveloper.com/wp-content/uploads/2024/01/image-113.png')";
            document.querySelector("body").style.backgroundSize = "cover";
        },350);
        highScore();
        reset();
    }
}

function btnPress(){
    
    let btn = this;
     userFlash(btn);

     userColor = btn.getAttribute("id");
     userSeq.push(userColor);
     

     checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    
}
 
 function highScore(){

    
    if(presentScore < level){
        presentScore = level;
    score.innerText = `High Score : ${presentScore}`;
    }
 }

 let but = document.querySelector("#but");
 but.addEventListener("click",function(){
    let overlay = document.querySelector(".overlay").style.display = "flex";
 });
 function closePopup() {
    document.getElementById("overlay").style.display = "none";
  }