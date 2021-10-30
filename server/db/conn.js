require('dotenv').config();
const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.ATLAS_URI, {})
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error({message: err}));

