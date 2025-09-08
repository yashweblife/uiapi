import express from "express";
import { regulate } from "./lib/index";
const app = express();
app.
app.use(express.json())
app.use(express.static("public/dist"))
app.get("/", () => { }, (req, res) => {
    res.send("<h1>test</h1>")
})
app.post("/test", () => { }, (req, res) => {
    res.send("test")
})
regulate(app);

app.listen(3020,()=>{
    console.log(`listening on port 3020`)
});