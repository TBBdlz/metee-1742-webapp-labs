import imquirer from "inquirer";

const questions = [
	{
		type: "input",
		name: "operation",
		message: "choose an operation (+, -, *, /)"
	},
];

imquirer.prompt(questions).then((answers) => {
	try {
		const operation = answers["operation"];
		console.log(
			`${process.argv.slice(2).join(` ${operation} `)} = ${eval(
				process.argv.slice(2).join(operation)
			)}`
		);
	} catch (e) {
		console.log("Unknown operation");
	}
});
