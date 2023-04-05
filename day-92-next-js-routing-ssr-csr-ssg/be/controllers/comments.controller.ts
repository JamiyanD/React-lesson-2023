import CommentsModel from "../models/comments.model";
import { Request,Response } from "express";

export const getComments = async (req: Request, res : Response) => {
    const page : number = Number(req.query.page)
    const moviesPerPage : number = Number(req.query.moviesPerPage)
    try{
        const Comments = await CommentsModel.find()
        .limit(moviesPerPage)
        .skip(moviesPerPage * page)
        res.status(200).json(Comments)
    } catch(error){
        res.status(404).json({data : []})
    }
}

export const getCommentsById = async (req : Request, res : Response) => {
    try{
        console.log(req.params.id)
        const theater = await CommentsModel.findById( req.params.id)
        res.status(200).json(theater)
    } catch(error){
        res.status(404).json({data : []})
    }

}

