const isFloat = n => {
    return Number(n) === n && n % 1 !== 0;
};

const getUserInput = () => {
	let number;
	do {
		number = prompt("Enter any integer:");
	} while (isNaN(number) || isFloat(Number(number)))
	return number;
};

const divideByTwo = n => n / 2;

let number = getUserInput();
alert(`${number} / 2 = ${divideByTwo(number)}`);
