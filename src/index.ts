import express from "express";
import { regulate } from "./lib/index";
const app = express();
app.get("/", (req, res) => {
    res.send("hello")
})
app.get("/test", () => { }, (req, res) => {
    res.send("test")
})
app.post("/test", () => { }, (req, res) => {
    res.send("test")
})
regulate(app);