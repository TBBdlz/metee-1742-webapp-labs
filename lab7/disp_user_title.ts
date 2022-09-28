const userTitleList = document.getElementById("user-title-list") as HTMLElement;

fetch("https://jsonplaceholder.typicode.com/posts")
	.then((response) => response.json())
	.then((data) => {
		for (let userData of data) {
			const li = document.createElement("li");
			li.innerText = `${userData.title}`;
			userTitleList.appendChild(li);
		}
	});
