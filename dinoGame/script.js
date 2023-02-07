const dino = document.getElementById("dino");
const gameWorld = document.getElementById("gameWorld");
const cactus = document.getElementById("cactus");
const dinoDiv = document.getElementById("dinoID");
const cactusDiv = document.getElementById("cactusID");
const body = document.getElementById("body");

let counter = 0;

document.addEventListener('keypress', (event) => {
    if(event.key === " "){
        dinoDiv.className="animatedDino"
    }
});
const score = document.createElement("span");
score.className = "score";
body.appendChild(score);

setInterval(updateDino,100);

function updateDino(){
    
    dinoDiv.onanimationend = function resetDino(){
        dinoDiv.className="dino"
    }
    if(counter%2 === 0){
        dino.src="./assets/dinoWalk1.png"
    }
    else{
        dino.src="./assets/dinoWalk2.png"
    }
    if(overlaps(dinoDiv,cactusDiv)){
        alert("Game over");
        counter=0;
    }
    score.innerText ="Score: " + counter;
    counter++;
}

function overlaps(a,b){
    const katrori1 = a.getBoundingClientRect();
    const katrori2 = b.getBoundingClientRect();
    const horizontalisht = katrori1.x < katrori2.x + katrori2.width && katrori1.x + katrori1.width > katrori2.x;
    const vertikalisht = katrori1.y < katrori2.y + katrori2.height && katrori1.y + katrori1.height > katrori2.y;
    const takohen = horizontalisht && vertikalisht;
    return takohen;
}