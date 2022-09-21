const catEl = document.getElementById("cat");

const startTime = new Date().getTime();
const walkTheCat = function () {
	const currTime = new Date().getTime();
	const secondsElapsed = (currTime - startTime) / 1000;
	// move cat until it reach 1000px to the left and stop
	if (secondsElapsed < 10) {
		catEl.style.left = `${secondsElapsed * 100}px`;
	} else {
		catEl.style.left = "1000px";
	}
	requestAnimationFrame(walkTheCat);
};

walkTheCat();
