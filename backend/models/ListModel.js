import mongoose from "mongoose";

const List = mongoose.Schema({
    value: {
        type: String,
        required: true
    },

})
export default mongoose.model('Lists', List)