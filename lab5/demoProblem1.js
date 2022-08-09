const checkUpperCase = text => {
	if (text[0] == text[0].toUpperCase()) {
		console.log(`${text} has the first character as uppercase`);
	} else {
		console.log(`${text} does not have the first character as uppercase`);
	}
};

checkUpperCase("Kku");
checkUpperCase("kku");