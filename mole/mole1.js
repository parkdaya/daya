const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const score = document.querySelector('#score');
const timeLeft = document.querySelector('#time');

let result = 0;
let hitPosition;
let currentime = 60
let timeId = null;

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
		if(square.id == hitPosition)
			result ++;
			score.textContent = result;
			hitPosition = null;
	})
})

function moveMole() {
	timeId = setInterval(randomSquare, 500);
}
moveMole();

function countDown() {
	currentime --;
	timeLeft.textContent = currentime;
	if(currentime == 0) {
		clearTimeout(timeId);
		clearTimeout(countDownTimerId);
		
		alert('GAME OVER! YOUR FINAL SCORE IS' + result);
	} 
}

let countDownTimerId = setInterval(countDown,1000);