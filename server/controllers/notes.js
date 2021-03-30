import express from 'express';
import mongoose from 'mongoose';

import PostNote from '../models/postNote.js';

const router = express.Router();

export const getNotes = async (req, res) => { 
    try {
        const postNotes = await PostNote.find();
        res.status(200).json(postNotes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getNote = async (req, res) => { 
    const { id } = req.params;

    try {
        const note = await PostNote.findById(id);
        res.status(200).json(note);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createNote = async (req, res) => {
    const { note, encryption } = req.body;
    const newNote = new PostNote({ note, encryption })

    try {
        await newNote.save();
        res.status(201).json(newNote );
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error });
    }
}

export const updateNote = async (req, res) => {
    const { id } = req.params;
    const { note, encryption } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Note with id: ${id}`);

    const updatedNote = { note, encryption , _id: id };

    await PostNote.findByIdAndUpdate(id, updatedNote, { new: true });

    res.json(updatedNote);
}

export const deleteNote = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Note with id: ${id}`);

    await PostNote.findByIdAndRemove(id);

    res.json({ message: "Note deleted successfully." });
}

export default router;