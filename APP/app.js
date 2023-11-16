const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const score = document.querySelector('#score');
const timeLeft = document.querySelector('#time');


let hitPosition;
let result = 0;
let timeId = null;
let currenTime = 60;

function randomSquare() {
	squares.forEach(square => {
		square.classList.remove('mole');
	});
	
	let randomSquare = squares[Math.floor(Math.random()*9)];
	randomSquare.classList.add('mole');
	
	hitPosition = randomSquare.id;
}

squares.forEach(square => {
	square.addEventListener('mousedown', () => {
		if(square.id == hitPosition) {
			result ++;
			score.textContent = result;
			hitPosition = null;
		}
	})
})

function moveMole() {
	timeId = setInterval(randomSquare, 500);
}
moveMole();

function countDown() {
	currenTime --;
	timeLeft.textContent = currenTime;
	
	if(currenTime == 0) {
		clearInterval(timeId);
		clearInterval(setcountDownTimerId);
		alert('game over! your final score is' + result);
	}
}

let setcountDownTimerId = setInterval(countDown, 1000);