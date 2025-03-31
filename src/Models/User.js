import mongoose from "../DB/dbconfig.js";

const { Schema } =  mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    uf:  {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    ibge: {
        type: String,
        required: true
    },
    ddd: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", userSchema);
export default User;