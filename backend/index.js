import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import router from './routes/ListRoute.js';
const app = express();
mongoose.connect('mongodb://localhost:27017/todolist_electron', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error))
db.on('open', () => console.log("database connected"))

app.use(cors());
app.use(express.json());
app.use(router)
app.listen(5000, () => {
    console.log("server up ...");
})