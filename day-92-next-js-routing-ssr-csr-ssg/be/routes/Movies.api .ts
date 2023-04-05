import { Router } from "express";
import { getMovies,getMoviesById } from "../controllers/movies.controller";
const moviesRouter = Router();

moviesRouter.get("/list", getMovies);

moviesRouter.get("/byId/:id", getMoviesById);

// moviesRouter.get("/search", searchmoviess);

export default moviesRouter;
