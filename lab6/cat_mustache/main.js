const catPic = document.getElementById("cat-pic");
const onCatClick = (e) => {
	const stashePic = document.getElementById("mustache-pic");
	// adjust for the offset of the cat mustache
	stashePic.style.top = "140px";
	stashePic.style.left = "115px";
};

catPic.addEventListener("click", onCatClick);
