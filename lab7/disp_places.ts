const placeList = document.getElementById("place-list") as HTMLElement;

/* Fetching the data from the places.json file and then it is creating a list of places. */
fetch("places.json")
	.then((response) => response.json())
	.then((data) => {
		const places = data.results;
		for (let place of places) {
			const li = document.createElement("li");
			li.innerHTML = `<div style="color: blue">name = ${place.name}</div><div style="color: green">location = ${place.geometry.location.lat} ${place.geometry.location.lng}</div>`;
			placeList.appendChild(li);
		}
	});
