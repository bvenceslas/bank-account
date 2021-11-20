const express = require('express');
const empRouter = express.Router();

const empCtrl =  require('../controllers/emp-controller');

empRouter.get('/', empCtrl.getAll);
empRouter.get('/:id', empCtrl.getOne);
empRouter.post('/', empCtrl.create);
empRouter.put('/:id', empCtrl.update);
empRouter.delete('/:id', empCtrl.remove);

module.exports = empRouter;