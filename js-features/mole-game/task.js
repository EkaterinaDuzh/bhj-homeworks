document.addEventListener('DOMContentLoaded', function() {
	let score = 0;
	let skip = 0;
	const deadDisplay = document.getElementById('dead');
	const lostDisplay = document.getElementById('lost');
	const holes = document.querySelectorAll('.hole');

	function getHole(index) {
		return document.getElementById(`hole${index}`);
	}

	function whackMole(e) {
		if (e.target.classList.contains('hole_has-mole')) {
			deadDisplay.textContent = ++score;
		} else {
			lostDisplay.textContent = ++skip;
		}

		if (score === 10) {
			endGame('Победа! Вы победили кротов!');
		} else if (skip === 5) {
			endGame('Игра окончена! Вы проиграли.');
		}
	}

	function endGame(message) {
		alert(message);
		score = 0;
		skip = 0;
		deadDisplay.textContent = score;
		lostDisplay.textContent = skip;
	}

	holes.forEach((hole, index) => {
		hole.addEventListener('click', whackMole);
	});
});