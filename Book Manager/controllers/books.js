const Book = require('../models/Book.js');
const asyncWrapper = require('../middleware/async');
const getAllTasks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({ books })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
    res.send('workingg')
}


const createTask = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json({ book });

    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
const getTask = async (req, res) => {
    try {
        const { id: bookID } = req.params;
        const task = await Book.findOne({ _id: bookID });
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${bookID}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
const updateTask = async (req, res) => {
    try {
        const { id: bookID } = req.params;
        const book = await Book.findOneAndUpdate({ _id: bookID }, req.body, {
            new: true,
            runValidators: true,
        })
        if (!book) {
            return res.status(404).json({ msg: `No task with id : ${bookID}` })
        }
        res.status(200).json({ book })
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
const deleteTask = async (req, res) => {
    try {
        const { id: bookID } = req.params;
        const book = await Book.findOneAndDelete({ _id: bookID });
        if (!book) {
            return res.status(404).json({ msg: `No task with id : ${bookID}` })
        }
        res.status(200).json({ book })
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

module.exports = {
    // getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};