import { GameDocumentInterface, Videogame } from "./Videogame.js";
import { Request, Response } from "express"

export async function createVideogame(req: Request, res: Response) {
    const myVideogame = new Videogame(req.body)
    try {
        await myVideogame.save()
        return res.status(201).send(myVideogame)

    } catch (error) {
        return res.status(500).send({ msg: "Error server or game already stored", error });
    }
}

export async function getById(req: Request, res: Response) {
    try {
        const myVideogame= await Videogame.findById(req.body)

        return res.status(200).send(myVideogame)
    } catch (error) {
        return res.status(404).send({ msg: "Videogame not found", error })
    }
}

export async function deleteById(req: Request, res: Response) {
    try {
        await Videogame.findByIdAndDelete(req.body)
        return res.status(200).send({msg: "Videogame deleted succesfully"})
    } catch (error) {
        return res.status(404).send({ msg: "Videogame not found", error })
    }
}