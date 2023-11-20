import express from "express";
import { randomBytes } from "crypto";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = [];

app.get("/", (req, res) => {
    res.send("It is working!!!!!");
});

app.get("/posts", (req, res) => {
    res.send(posts);
});

app.post("/posts", (req, res) => {
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;
    const post = { id, title };
    posts.push(post);
    res.status(201).send(posts);
});

app.listen(4000, () => {
    console.log("server is running!!!!");
});
