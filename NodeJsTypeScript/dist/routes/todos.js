"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodos = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodos);
    res.status(200).json(newTodos);
});
router.delete('/delete/:todoId', (req, res, next) => {
    const params = req.params;
    const id = params.todoId;
    const newTodo = todos.filter(item => item.id !== id);
    todos = newTodo;
    res.status(200).json({ message: "Item deleted sucessfully", todos: todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const body = req.body;
    const id = params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === id);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        res.status(200).json(todos[todoIndex]);
    }
    else {
        res.status(404).json({ message: "Not able to find todo with this id" });
    }
});
exports.default = router;
