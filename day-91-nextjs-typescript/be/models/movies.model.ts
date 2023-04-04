import mongoose, {Schema} from "mongoose";
interface IViewer{
    rating : number,
    numReviews : number,
    meter : number
}
interface ITomatoes{
    viewer : IViewer,
    dvd : Date,
    lastUpdated : Date
}
interface ICountries{
    type : [string],
    required : true
}
interface IImbd{
   rating : number,
   votes : number,
    id: number
}
interface IAwards{
   wins : number,
   nominations: number,
   text : string
}

interface IDirectors{
    type : [string],
    required : true
}
interface ILanguages{
    type : [string],
    required : true
}

interface ICast{
    type : [string],
    required : true
}

interface IGenres{
    type : [string],
    required : true
}

interface IMovies {
    plot : string,
    genres : IGenres,
    runtime : number,
    cast : ICast,
    num_mflix_comments : number,
    poster : string,
    title : string,
    lastupdated : string,
    languages : ILanguages,
    released : Date,
    directors : IDirectors,
    rated : string,
    awards : IAwards,
    year : number,
    imbd : IImbd,
    countries : ICountries,
    type : string,
    tomatoes : ITomatoes

}

const MoviesSchema: Schema = new Schema({})

const MoviesModel = mongoose.model<IMovies>("Movies" ,MoviesSchema)

export default MoviesModel