import express, { Application } from "express";
import path from "path";
export function regulate(app: Application) {
    const __dirname = path.resolve();
    const publicPath = path.join(__dirname, "/src/public");
    console.log("test", publicPath)
    const routes: {
        path: string
        method: string
    }[] = []
    app.router.stack.forEach((middleware: any) => {
        if (middleware.route) {
            routes.push({
                path: middleware.route.path,
                method: middleware.route.stack[0].method
            })
        }
    })
    app.use(express.static("public/dist"))
    app.get("/dest", (req, res) => {
        res.sendFile(path.join(publicPath, "index.html"))
    })
    app.get("/dest/routes", (req, res) => {
        res.send(routes)
    })
    return (routes);
}