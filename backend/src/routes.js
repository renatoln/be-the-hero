const express = require('express');

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;



/**
    routes.post('/users', (request, response) => {
    //return response.send('Hello world');
    const query = request.query; //query params: parâmetros nomeados após ? (/users?name=renato
    const params = request.params; //route params: após a (/users/:id)
    const body = request.body; //Request Body: corpo da requisição (POST)

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack',
        aluno: 'Reanto Novais'
    });

});
 */