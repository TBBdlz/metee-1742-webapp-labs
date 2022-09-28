const githubProfile = document.getElementById(
	"github-profile"
) as HTMLImageElement;
const fullname = document.getElementById("fullname") as HTMLHeadingElement;

fetch("https://api.github.com/users/TBBdlz")
	.then((response) => response.json())
	.then((data) => {
		githubProfile.src = data.avatar_url;
		githubProfile.style.borderRadius = "50%";
		githubProfile.style.border = "5px solid blue";
		fullname.innerHTML = `<a href="${data.html_url}" target="_blank">${data.name}</a>`;
	});
