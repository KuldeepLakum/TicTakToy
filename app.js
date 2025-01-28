let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true; // playerX , playerO
let count = 0;

const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=> {
        // console.log("btn was clicked");
        // box.innerHTML = "X";
        if(turnO){
            box.innerHTML = "O"
            turnO = false;
        } else{
            box.innerHTML = "X"
            turnO = true;
        }
        box.disabled = true;
        count++;
       let isWinner = checkWinner();

       if(count === 9 && !isWinner){
        gameDraw();
       }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw📍.`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
  };

const disabledBoxes = () =>{
    for (box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations✌🏻🎉🎊🍾, Winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disabledBoxes(); 
}

const checkWinner = () => {
      for(pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);