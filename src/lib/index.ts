import { Application } from "express"

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
                method: middleware.route.stack[0].method
            })
        }
    })
    return (routes);
}