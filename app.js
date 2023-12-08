const boxes = document.querySelectorAll(".box");
let playerX = true;
let h3 = document.querySelector("h3");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector(".new");

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

resetBtn.addEventListener("click", ()=>{
    for(box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
});

newBtn.addEventListener("click", ()=>{
    for(box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
    newBtn.style.display = "none";
    h3.style.display = "none";
    resetBtn.style.display = "inline";
});

function checkWinner(){
    for(pattern of winningPatterns){
        let cond1 = boxes[pattern[0]].innerText;
        let cond2 = boxes[pattern[1]].innerText;
        let cond3 = boxes[pattern[2]].innerText;

        if(cond1!="" && cond2!="" && cond3!="" && cond1 === cond2 && cond2 === cond3){
            console.log("Winner");
            h3.style.display = "inline";
            h3.innerText = `Congratulations! Winner is ${cond1}`;
            boxes.forEach((box)=>{box.disabled = true});
            resetBtn.style.display = "none";
            newBtn.style.display = "inline";
        }
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(playerX){
            box.innerText = "X";
            playerX = false;
        }else{
            box.innerText = "O";
            playerX = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

