const clicker__counter = 0;
const image = document.getElementById("cookie");
const button = document.getElementById('cookie');
const clicker__counterDisplay = document.getElementById('clicker__counter');
button.addEventListener('click', (function(clicker__counter) {
	return function() {
		clicker__counter++;
		clicker__counterDisplay.innerHTML = clicker__counter;
		if (clicker__counter % 2 === 0) {
			cookie.width = 150;
		} else {
			cookie.width = 200;
		}
	}
})(clicker__counter));
