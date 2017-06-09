const train = document.getElementById('train');
const stopBtn = document.getElementById('stopTrain');
const gameContainer = document.getElementById('game-container');
const trainExplode = document.querySelectorAll('.train-explode');
console.log(trainExplode);
const speed = 25;
let trainInterval;
let AllTrainIntervals = [];

const containerWidth = parseInt(getComputedStyle(gameContainer).width);
const trainWidth = parseInt(getComputedStyle(train).width);
const maxDistance = containerWidth - trainWidth;


function handleTrainSpeed() {
	let actualPosition = parseInt(getComputedStyle(train).left);

	// if touch the right border GAME OVER
	if (actualPosition === maxDistance) {
		trainExplode.forEach(function (explode) {
			explode.classList.add('run-explode-animation');
		});
		AllTrainIntervals.forEach(clearInterval);
		setTimeout(() => {
			alert('Game over');
			train.style.left = "0px";
			trainExplode.forEach(function (explode) {
				explode.classList.remove('run-explode-animation');
			});
		}, 1500);
	}
	else {
		train.style.left = `${parseInt(actualPosition) + 1}px`;
	}
}

function handleTrainStop() {
	AllTrainIntervals.forEach(clearInterval);
	alert('Well done !');
}

train.addEventListener('click', () => {
	trainInterval = window.setInterval(handleTrainSpeed, speed);

	AllTrainIntervals.push(trainInterval);
});

stopBtn.addEventListener('click', handleTrainStop)