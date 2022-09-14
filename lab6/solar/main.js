const earth = document.createElement("div");
const moon = document.createElement("div");

// initiliaze the earth and moon
earth.className = "planet";
earth.style.backgroundColor = "grey";
moon.className = "moon";
moon.style.backgroundColor = "yellow";
moon.style.zIndex = 1;

console.log(earth);
console.log(moon);

// append it to the body
document.body.append(moon);
document.body.append(earth);
