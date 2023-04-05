import mongoose, {Date, Schema} from "mongoose";

interface IComments {
    name : string,
    email : string,
    movie_id: {type: mongoose.Schema.Types.ObjectId},
    text : string,
    date: Date
}

const CommentsSchema: Schema = new Schema({})

const CommentsModel = mongoose.model<IComments>("Comments" ,CommentsSchema)

export default CommentsModel