import { Router } from "express";
import { getMovies,getMoviesById, getMoviesDetail } from "../controllers/movies.controller";
const moviesRouter = Router();

moviesRouter.get("/list", getMovies);

moviesRouter.get("/byId/:id", getMoviesById);

moviesRouter.post("/detail", getMoviesDetail);
// moviesRouter.get("/search", searchMovies);

export default moviesRouter;
