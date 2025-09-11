import express from "express";
import { regulate } from "./lib/index";
const app = express();
app.use(express.json())
app.use(express.static("public/dist"))
app.get("/", (req, res) => {
    res.send("<h1>test</h1>")
})
app.get("/test", (req, res) => {
    console.log('test');
    res.send("test")
})
app.get("/json", (req, res) => {
    console.log('json');
    const data = {
        test: "test",
        test2: "test2"
    }
    res.send(data)
})
regulate(app);

app.listen(3020,()=>{
    console.log(`listening on port 3020`)
});