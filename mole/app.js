const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const score = document.querySelector('#score');
const timeLeft = document.querySelector('#time');

let hitPosition;
let result = 0;
let currentime = 60;
let timerId = null;

function randomSquare() {
	squares.forEach(square => {
	square.classList.remove('mole');
	})
	let randomSquare = squares[Math.floor(Math.random()*9)];
 	randomSquare.classList.add('mole');
	
	hitPosition = randomSquare.id;
}

squares.forEach(square => {
	square.addEventListener('mousedown', () => {
		if(hitPosition == square.id);
		result ++;
		score.textContent = result;
		hitPosition = null;
	})
})

function moveMole() {
	timerId = setInterval(randomSquare, 500);
}
moveMole();

function countDown() {
	currentime --;
	timeLeft.textContent = currentime;
	if(currentime == 0) {
		clearTimeout(timerId);
		clearTimeout(countDownTimerId);
		alert('game over! your score is' + result);
		}
}

let countDownTimerId = setInterval(countDown, 1000);