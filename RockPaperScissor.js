let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
    //rock,paper,scissors


}

const drawGame = () => {
    console.log("game was draw");
}
const showWinner=(userWin)=>{
    if(userWin){
        console.log("you win");
    }else{
        console.log("you lost");
    }

}

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    //Generate computer choice
    const compChoice= genCompChoice();
    console.log("comp choice =",compChoice);

    if(compChoice===userChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor,paper
           userWin = compChoice==="paper" ? false:true;
        }else if(userChoice==="paper"){
            //rock ,scissor
            userWin=compChoice==="scissor"?false:true;
        } else {
            //rock ,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
};




choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice;
        playGame(userChoice);
    })
})
