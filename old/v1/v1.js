
// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
const vw = window.innerWidth
const redCircle = document.getElementById("red-circle")
const greenCircle = document.getElementById("green-circle")
alignShapes()

function alignShapes(){
    const centerLine = vw/2

    redCircle.setAttribute("cx", centerLine+205)
    greenCircle.setAttribute("cx", centerLine-205)
}



// keeps shapes locked on desktop
function handleResize(){
    if (vw > 600){
        location.reload();
    }
}

window.onresize = handleResize