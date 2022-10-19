import * as express from "express";
import * as fs from "fs";
import axios from "axios";
import { AddressInfo } from "net";

const user = {
	user4: {
		name: "mohit",
		profession: "teacher",
		hobbies: "jogging",
		id: 4,
	},
};

const app = express();

app.use((req, _res, next) => {
	console.log(`${req.method} ${req.url} - ${req.ip}`);
	next();
});

app.get("/", (_req, res) => {
	res.send("Hello World!");
});

app.post("/add-user", (_req, res) => {
	fs.readFile("users.json", "utf-8", (_err, data) => {
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
app.get("/list-users", (_req, res) => {
	fs.readFile("users.json", "utf-8", (_err, data) => {
		console.log(data);
		res.set("Content-Type", "application/json");
		res.end(data);
	});
});

app.get("/id/:id", (req, res) => {
	fs.readFile("users.json", "utf-8", (_err, data) => {
		let users = JSON.parse(data);
		let user = users["user" + req.params.id];
		console.log(user);
		res.set("Content-Type", "application/json");
		res.end(JSON.stringify(user));
	});
});

app.delete("/id/:id", (req, res) => {
	fs.readFile("users.json", "utf-8", (_err, data) => {
		let users = JSON.parse(data);
		delete users["user" + req.params.id];
		console.log(users);
		res.set("Content-Type", "application/json");
		res.end(JSON.stringify(user));
		fs.writeFile("users.json", JSON.stringify(users), (err) => {
			if (err) throw err;
		});
	});
});

app.get("/ip", (_req, res) => {
	axios
		.get("https://httpbin.org/ip")
		.then((response) => {
			res.json({ ip: response.data.origin });
		})
		.catch((error) => {
			res.send(error);
		});
});

let server = app.listen(8081, () => {
	let { port } = server.address() as AddressInfo;
	console.log(`Running on ${port}`);
});
