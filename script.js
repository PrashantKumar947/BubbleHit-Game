var timer = 60;
var score = -10;
var hitrn=0;

function makeBubble() {
    var Clutter = "";

    for (i = 1; i <= 160; i++) {
        var rn = Math.floor(Math.random() * 10);
        Clutter += `<div class="cir">${rn} </div>`;
    }

    document.querySelector("#pbtm").innerHTML = Clutter;
}

function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;

        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML =`<h1>GAME OVER</h1>`
        }
    }, 1000);

}

function getNewHit() {
     hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if(clickednum==hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});
makeBubble();
runtimer();
getNewHit();
increaseScore();