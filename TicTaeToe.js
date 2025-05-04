let boxes=document.querySelectorAll(".box");
let resetb=document.querySelector(".reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let turnO= true;//playerO,playerX
const resetGame = () => {
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        // console.log("box was clicked");
        if(turnO){//playerO
            box.innerText="O";
            turnO=false;

        }else{//playerX
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        
        checkWinner();
    })
});
const disableBoxes = () {

    for(let box of boxes) {
        box.disabled=true;
    }
};
const enableBoxes = () {

    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner = (winner) => {
    msg.innerText='Congratulations,winner is ${winner}';
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(let patterns of winPatterns){
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(boxes[patterns[0]].innerText,
        //             boxes[patterns[1]].innerText,
        //             boxes[patterns[2]].innerText);
    
    let pos1Val=boxes[patterns[0]].innerText;
    let pos2Val=boxes[patterns[1]].innerText;
    let pos3Val=boxes[patterns[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner",pos1Val);
            showWinner(pos1Val);
        }
    }
}
};
newGamebtn.addEventListener("click",resetGame);
resetb.addEventListener("click",resetGame);