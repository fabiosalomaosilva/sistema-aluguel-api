import express, { Request, Response } from "express";

export const app = express();

app.use(express.json());

app.get("/", (req:Request, res:Response) => {
    res.status(201).json({name: "Fábio Salomão", age: "41", email: "fabio@arquivarnet.com.br"});
});
