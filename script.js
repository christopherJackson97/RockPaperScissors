function getRandomNumber(){
    return Math.floor(Math.random() * 3);
}

function compChoice(){
    let choice;
    switch(getRandomNumber()){
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
        default:
            alert("Something Is Terribly Wrong!");
            break;
    }
    
    return choice;

}

function rock(){
    const p = document.querySelector("#playerChoice");
    p.textContent = "Rock";
    play("Rock");
}

function paper(){
    const p = document.querySelector("#playerChoice");
    p.textContent = "Paper";
    play("Paper");
}
function scissors(){
    const p = document.querySelector("#playerChoice");
    p.textContent = "Scissors";
    play("Scissors");
}

function play(pChoice){
    let cChoice = compChoice();
    const p = document.querySelector("#compChoice");
    p.textContent = cChoice.toString();

    const pScore = document.querySelector("#playerScore");
    const cScore = document.querySelector("#compScore");


    if((pChoice == "Rock" && cChoice == "Scissors") || (pChoice == "Scissors" && cChoice == "Paper") || (pChoice == "Paper" && cChoice == "Rock")){
        pScore.textContent = Number(pScore.textContent) + 1;
    }
    else{
        if(pChoice == cChoice){
            alert("Tie Game");
        }
        else{
            cScore.textContent = Number(cScore.textContent) + 1;
        }
    }
}