const btn = document.getElementById("button");

function changeColor(){
    let value = "0123456789ABCDEF";
    let concate = "#";
    for(let i=0;i<6;i++){
        concate = concate + value[Math.floor(Math.random()*16)];
    }
    return concate;
};
//console.log(changeColor());
function randomColor(){
   const div = document.getElementById("canvas");
    div.style.backgroundColor = changeColor();
}
btn.addEventListener("click",randomColor);