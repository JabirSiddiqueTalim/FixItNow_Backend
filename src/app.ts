import express, { Application } from "express";

const app : Application = express();

app.get("/",(req, res) => {
    res.json({
        message: "FitItNow",
        author: "Jabir Siddique Talim"
    })
})


export default app