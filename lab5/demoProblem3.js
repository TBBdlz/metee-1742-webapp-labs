const getUserInput = () => {
	let input_num;
	do {
		input_num = Number(prompt("Enter any integer:", "0"), 0);
	} while (input_num && Number.isInteger(input_num));
	return input_num;
};

const divideByTwo = n => n / 2;

let number = getUserInput();
alert(`${number} / 2 = ${divideByTwo(number)}`);
