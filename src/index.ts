import express, { Application } from "express"

export function regulate(app: Application) {
    console.log("Regulating")
    const routes: {
        path: string
        method: string
    }[] = []

    app.router.stack.forEach((middleware: any) => {
        if (middleware.route) {
            routes.push({
                path: middleware.route.path,
                method:middleware.route.stack[0].method
            })
        }
    })
    console.log(routes)
    return (routes);
}


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