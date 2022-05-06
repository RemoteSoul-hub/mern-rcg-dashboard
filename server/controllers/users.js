import userModel from '../models/userModel.js';

export const getUsers = async (req, res) => {
    try {
        const userModels = await userModel.find();

        console.log(userModels)

        res.status(200).json(userModels);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createUser = async (req, res) => {
    const body = req.body;

    const newUser = new userModel(user);

    try {
        await newUser.save();

        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}