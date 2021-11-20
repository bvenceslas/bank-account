const { model, Schema } = require('mongoose');

const EmployeeSchema = Schema({
    name: {type: String, required: true},
    position: {type: String, required: true},
    level: {type: String, required: true}
});

module.exports = model('employee', EmployeeSchema);