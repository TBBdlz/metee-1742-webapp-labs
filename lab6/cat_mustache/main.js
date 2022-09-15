const catPic = document.getElementById("cat-pic");
let isClick = false;
const onCatClick = (event) => {
	const stashePic = document.getElementById("mustache-pic");
	// adjust for the offset of the cat mustache
	if (isClick !== true) {
		const x = event.offsetX - stashePic.width / 2;
		const y = event.offsetY - stashePic.height / 2;
		stashePic.style.top = `${y}px`;
		stashePic.style.left = `${x}px`;
		isClick = true;
	}
};

catPic.addEventListener("click", onCatClick);
