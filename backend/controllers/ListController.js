import List from '../models/ListModel.js';

export const getLists = async (req, res) => {
    try {
        const lists = await List.find();
        res.json(lists);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const addList = async (req, res) => {
    const list = new List(req.body);
    try {
        const insertList = await list.save();
        res.status(201).json(insertList);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteList = async (req, res) => {
    try {
        const deletelist = await List.deleteOne({ _id: req.params.id });
        res.status(200).json(deletelist);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getListById = async (req, res) => {
    try {
        const getlistbyid = await List.findOne({ _id: req.params.id });
        res.status(200).json(getlistbyid);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const editList = async (req, res) => {
    try {
        const editlist = await List.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(editlist);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}