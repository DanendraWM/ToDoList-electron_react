import express from "express";
import { addList, deleteList, editList, getListById, getLists } from "../controllers/ListController.js";

const router = express.Router();
router.get('/lists', getLists);
router.get('/list/:id', getListById);
router.post('/list/add', addList);
router.patch('/list/:id', editList);
router.delete('/list/delete/:id', deleteList);

export default router;