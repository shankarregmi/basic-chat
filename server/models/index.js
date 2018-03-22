'use strict';

const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');

const db = {};

const me = path.basename(module.filename);

fs.readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== me) && (file.slice(-3) === '.js'))
    .forEach(file => {
        require(path.join(__dirname, file));
    });

Object.keys(mongoose.models).forEach((modelName) => {
    db[modelName] = mongoose.model(modelName)
})
module.exports = db;