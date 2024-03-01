require('dotenv').config();
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Función para crear un nuevo usuario en la base de datos.
const createUser = async (req, res) => {
    const { name } = req.body;
    try {
        const existingUser = await User.findOne({ where: { name } });
        if (existingUser) {
            return res.status(400).json({ message: 'Name already exists' });
        }
        const user = await User.create({ name });
        return res.status(201).json({ message: 'User created', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Función para realizar una jugada en una máquina tragamonedas.
const tirarPalanca = async (req, res) => {
    const { name } = req.body;

    const number1 = Math.floor(Math.random() * 9) + 1;
    const number2 = Math.floor(Math.random() * 9) + 1;
    const number3 = Math.floor(Math.random() * 9) + 1;

    let numbers = 'Los números son: ' + number1 + ', ' + number2 + ', ' + number3 + '. ';
    let message = '';

    try {
        const user = await User.findOne({ where: { name } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.numberOfPlays += 1;

        if (number1 === number2 && number2 === number3) {
            user.amount += 10;
            user.numberOfWins += 1;
            message = '¡Felicidades! Ganaste el premio mayor.';
        } else if (number1 === number2 || number1 === number3 || number2 === number3) {
            user.amount += 1;
            user.numberOfWins += 1;
            message = '¡Felicidades! Ganaste un premio menor.';
        } else {
            message = '¡Lo siento! No ganaste nada.';
        }

        await user.save();

        res.status(200).json({ message, numbers, amount: user.amount });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Función para realizar una jugada en una máquina tragamonedas.
const winAverage = async (req, res) => {
    const { name } = req.params;
    try {
        const user = await User.findOne({ where: { name } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const winAverage = user.numberOfWins / user.numberOfPlays;
        return res.status(200).json({ winAverage });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Función para obtener la información de un usuario.
const getInfo = async (req, res) => {
    const { name } = req.params;
    try {
        const user = await User.findOne({ where: { name } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createUser,
    tirarPalanca,
    winAverage,
    getInfo
};