import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const GITHUB_KEY = process.env.GITHUB_KEY;

console.log(GITHUB_KEY);

axios
	.get("https://api.github.com/user", {
		headers: {
			Authorization: `token ${GITHUB_KEY}`,
			"Content-type": "application/json",
		},
	})
	.then((res) => {
		console.log(
			`GitHub username is ${res.data.name} who lives in ${res.data.location}`
		);
	})
	.catch((err) => {
		console.log(err);
	});
