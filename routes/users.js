const express = require('express');
const { createUser, tirarPalanca, winAverage, getInfo } = require('../controllers/users');

const routerUsers = express.Router();

const PREFIX = '/users';

routerUsers.use((req, res, next) => {
    // #swagger.tags = ['Users']
    next();
});

//Rutas de usuario
routerUsers.post(`${PREFIX}/create`, createUser);
routerUsers.post(`${PREFIX}/tirarPalanca`, tirarPalanca);
routerUsers.get(`${PREFIX}/winAverage/:name`, winAverage);
routerUsers.get(`${PREFIX}/info/:name`, getInfo);

module.exports = routerUsers;