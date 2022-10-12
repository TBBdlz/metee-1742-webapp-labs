import express from "express";
import fs from "fs";
import { AddressInfo } from 'net'

const app = express();
const user = {
	user4: {
		name: "mohit",
		profession: "teacher",
		hobbies: "jogging",
		id: 4,
	},
};

app.post("/add-user", (req, res) => {
	fs.readFile("users.json", "utf-8", (err, data) => {
		let parseData = JSON.parse(data);
		parseData["user4"] = user["user4"];
		res.set("Content-type", "application/json");
		res.end(JSON.stringify(parseData));
		fs.writeFile("users.json", JSON.stringify(parseData), (err) => {
			if (err) {
				throw err;
			}
		});
	});
});

app.get("/list-users", (req, res) => {
	fs.readFile("users.json", "utf-8", (err, data) => {
		console.log(data);
		res.set("Content-Type", "application/json");
		res.end(data);
	});
});

app.listen({ port: process.env.PORT })
const { port } = app.address() as AddressInfo;