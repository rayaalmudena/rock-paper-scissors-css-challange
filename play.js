let userPick="";
let random="";
const serverPickArray=["rock","paper","scissors"];

document.querySelector("#rock-option").addEventListener("click", saveElection);
document.querySelector("#paper-option").addEventListener("click", saveElection);
document.querySelector("#scissors-option").addEventListener("click", saveElection);


function saveElection(event) {
    userPick=event.currentTarget.getAttribute("data-option");   
    document.querySelector(".choose-option").style.display="none"; 
    document.querySelector("#end-of-game").style.display="flex";
    document.querySelector("#your-pick").src="./images/icon-"+userPick+".svg";      
    document.querySelector("#your-pick").parentNode.classList.add(userPick);
}


document.querySelector(".house-pick").addEventListener("click", showelectionhouse);

function showelectionhouse(){
    random = serverPickArray[Math.floor(Math.random()*serverPickArray.length)];
    document.querySelector("#random-bot-pick").src="./images/icon-"+random+".svg";
    document.querySelector("#random-bot-pick").style.display="block";
    document.querySelector("#random-bot-pick").parentNode.classList.add(random);
    document.querySelector("#random-bot-pick").parentNode.classList.add("rotate");
    winlose(random);    
    document.querySelector(".house-pick").removeEventListener("click", showelectionhouse);

}

function winlose(){
    if(userPick==random){
        console.log("Empate");
        document.querySelector(".text-draw").style.display="flex";
    }
    else if((userPick=="paper" && random=="scissors")||(userPick=="scissors" && random=="rock")||(userPick=="rock" && random =="paper")){
        console.log("Has perdido");
        changeScore(false);  
        document.querySelector(".text-you-lose").style.display="flex";
    }
    else{
        console.log("Has ganado")
        changeScore(true);      
        document.querySelector(".text-you-win").style.display="flex";
    }
    document.querySelector(".result-end-game").style.display="flex";
    
}

function changeScore(e){
    let score = +document.querySelector("#score").innerHTML;
    if(e==true){        
        document.querySelector("#score").innerHTML=score+1;  
        console.log(score);
        }
    else{
        document.querySelector("#score").innerHTML=score-1;  
        console.log(score);
    }
}

document.querySelector(".btn-play-again").addEventListener("click",playAgain);

function playAgain() {

    document.querySelector(".choose-option").style.display="grid"; 
    document.querySelector("#end-of-game").style.display="none";

    document.querySelector(".text-draw").style.display="none";
    document.querySelector(".text-you-lose").style.display="none";
    document.querySelector(".result-end-game").style.display="none";
    document.querySelector(".text-you-win").style.display="none";

    document.querySelector("#random-bot-pick").parentNode.classList.remove(random);
    document.querySelector("#random-bot-pick").parentNode.classList.remove("rotate");
    document.querySelector("#your-pick").parentNode.classList.remove(userPick);
    
    document.querySelector("#random-bot-pick").style.display="none";
    document.querySelector(".house-pick").addEventListener("click", showelectionhouse);
}