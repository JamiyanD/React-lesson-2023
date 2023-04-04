import TheaterModel from "../models/theaters.model";
import { Request,Response } from "express";

export const getTheaters = async (req: Request, res : Response) => {
    const page : number = Number(req.query.page)
    const moviesPerPage : number = Number(req.query.moviesPerPage)
    try{
        const theaters = await TheaterModel.find()
        .limit(moviesPerPage)
        .skip(moviesPerPage * page)
        res.status(200).json(theaters)
    } catch(error){
        res.status(404).json({data : []})
    }
}

export const getTheaterById = async (req : Request, res : Response) => {
    try{
        console.log(req.params.id)
        const theater = await TheaterModel.find({theaterId : Number(req.params.id)})
        res.status(200).json(theater)
    } catch(error){
        res.status(404).json({data : []})
    }

}

export const  searchTheaters = async (req: Request, res : Response) => {
    console.log(String(req.query.keyword))
    const keyword: string = String(req.query.keyword)
    try{
        const theathers = await TheaterModel.find({
            $or : [
                {"location.address.street1" : keyword},
                {"location.address.city": keyword},
                {"location.address.state": keyword},
                {"location.address.zipcode": keyword}
            ]
        })
        res.status(200).json(theathers)
    }catch(error){
        res.status(404).json({data : []})
    }
}