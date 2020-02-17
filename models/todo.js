const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    user: String,
    todo: String,
    createdOn: Date
});

const Todo = mongoose.Model('Todo', todoSchema);

module.exports = Todo;