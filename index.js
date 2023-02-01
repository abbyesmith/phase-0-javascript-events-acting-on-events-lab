// Your code here

//moves dodger to the left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

    if (left>0){
        dodger.style.left = `${left-1}px`}
}

document.addEventListener("keydown", function(e){
    if(e.key ==="ArrowLeft"){
        moveDodgerLeft();
    }
})

//moves dodger to the right
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

    if (left<360){
        dodger.style.left = `${left+1}px`}
}

document.addEventListener("keydown", function(e){
    if(e.key ==="ArrowRight"){
        moveDodgerRight();
    }
})