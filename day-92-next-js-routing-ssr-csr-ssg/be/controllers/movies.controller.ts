import MoviesModel from "../models/movies.model";
import { Request,Response } from "express";

export const getMovies = async (req: Request, res : Response) => {
    const page : number = Number(req.query.page)
    
    const moviesPerPage : number = Number(req.query.moviesPerPage)
    try{
      
        const Movies = await MoviesModel.find()
        .limit(20)
        .skip(moviesPerPage * page)
        res.status(200).json(Movies)
    } catch(error){
        res.status(404).json({status : "error",data : []})
    }
}

export const getMoviesById = async (req : Request, res : Response) => {
    try{
        // console.log(req.params.id)
        const theater = await MoviesModel.findById( req.params.id)
        res.status(200).json(theater)
    } catch(error){
        res.status(404).json({data : []})
    }

}
interface movieId{
    type : string,
    id: { type : string}
}
export const getMoviesDetail = async (req : Request, res : Response) => {
    const movieId : any = req.body
    console.log("be",movieId.id)
 
    try{
        const movie = await MoviesModel.findById(movieId.id)
        res.status(200).json(movie)
    } catch(error){
        res.status(404).json({data : []})
    }

}

