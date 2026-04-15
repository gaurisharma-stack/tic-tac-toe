let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")

let turno = true ; //playerx, palyerO
const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

boxes.forEach((box)=>{;
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turno){
            box.innerText = "O";
            turno = false;
        } else {
        box.innerText = "x";
        turno = true;
        }
        box.disabled = true

        checkwinner();
    });
});

const checkwinner = ()=>{
    for( let pattern of winpatterns){
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "" && pos1val == pos2val && pos2val == pos3val){
            alert(pos1val + " is the winner");
            resetgame();
            return;
        }
    }
    // check for tie: if all boxes are filled and no winner
    let isTie = true;
    boxes.forEach((box)=>{
        if(box.innerText == ""){
            isTie = false;
        }
    });

    if(isTie){
        alert("It's a tie");
        resetgame();
        return;
    }
}

const resetgame = ()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    });
    turno = true;
};

// wire reset button to existing resetgame function
resetbtn.addEventListener("click", ()=>{
    resetgame();
});