import MoviesModel from "../models/movies.model";
import { Request,Response } from "express";

export const getMovies = async (req: Request, res : Response) => {
    const page : number = Number(req.query.page)
    const moviesPerPage : number = Number(req.query.moviesPerPage)
    try{
        const Movies = await MoviesModel.find()
        .limit(6)
        .skip(moviesPerPage * page)
        res.status(200).json(Movies)
    } catch(error){
        res.status(404).json({data : []})
    }
}

export const getMoviesById = async (req : Request, res : Response) => {
    try{
        console.log(req.params.id)
        const theater = await MoviesModel.findById( req.params.id)
        res.status(200).json(theater)
    } catch(error){
        res.status(404).json({data : []})
    }

}

