let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let turn0 = true;
const resetGame = () => {
    turn0 = true;
    cnt=0;
    boxes.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
    });
};
const winner = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const showwinner = (win)=>{
    document.querySelector(".msg").innerHTML=`WINNER IS ${win}`;
    document.querySelector(".message").classList.remove("hide");
    disablebox();
}
const disablebox = ()=>{
    boxes.forEach(box => {
        box.disabled=true;
    });
}
let cnt=0;
const checkwinner = ()=>{
    cnt++;
    for (let index = 0; index < winner.length; index++) {
        const ele = winner[index];
        // boxes[ele[0]]
        let x=boxes[ele[0]].innerHTML;
        let y=boxes[ele[1]].innerHTML;
        let z=boxes[ele[2]].innerHTML;
        if(x!="" && y!="" && z!=""){
            if(x===y && y===z){
                console.log("winner");
                let win=boxes[ele[2]].innerHTML;
                showwinner(win);
            }
        }
    }
    if(cnt>=9) {showwinner("NO ONE IT'S A DRAW");cnt=0;}
}

boxes.forEach((box,index) => {
    box.addEventListener("click", () => {
        console.log("Box clicked:", index);
        if(turn0) {
            box.innerText = "O";
            turn0=false;
        }
        else{
            box.innerHTML="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
let newgame=document.querySelector("#reset");
console.log(newgame);
newgame.addEventListener("click",()=>{
    resetGame();
    document.querySelector(".message").classList.add("hide");
})
let afterend=document.querySelector(".newg");
afterend.addEventListener("click",()=>{
    resetGame();
    document.querySelector(".message").classList.add("hide");
})