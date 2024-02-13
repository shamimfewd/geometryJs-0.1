function makeRed() {
  document.body.style.backgroundColor = "red";
}

// =============================
const makeBlue = document.getElementById("make-blue");
makeBlue.onclick = makeBlueFunc;
function makeBlueFunc() {
  document.body.style.backgroundColor = "blue";
}

// =========================

const makePinkVari = document.getElementById("make-pink");

makePinkVari.addEventListener("click", makePinkFunc);

function makePinkFunc() {
  document.body.style.backgroundColor = "pink";
}



// =========================

const makeGreenVri = document.getElementById('make-green')
makeGreenVri.addEventListener('click', function makeGreenFunc(){
    document.body.style.backgroundColor = 'green'
})