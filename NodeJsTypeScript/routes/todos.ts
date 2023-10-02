import {Router} from 'express';

import {Todo} from '../models/todo';
import { todo } from 'node:test';
import { message } from 'antd';

const router = Router();

let todos: Todo[]  = [];
router.get('/', (req, res, next)=>{
    res.status(200).json({todos: todos});
})

router.post('/todo', (req, res, next) => {
    const newTodos: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    }

    todos.push(newTodos);
    res.status(200).json(newTodos);
})

router.delete('/delete/:todoId', (req, res, next)=> {
    const id = req.params.todoId;
    const newTodo = todos.filter(item => item.id !== id);
    todos  = newTodo;
    res.status(200).json({message: "Item deleted sucessfully", todos: todos})
    
})

router.put('/todo/:todoId', (req, res, next) => {
    const id = req.params.todoId;
    const todoIndex= todos.findIndex(todoItem => todoItem.id === id);
    if(todoIndex >= 0){
        todos[todoIndex] = {id: todos[todoIndex].id, text: req.body.text};
        res.status(200).json(todos[todoIndex]);
    }
    else{
        res.status(404).json({message: "Not able to find todo with this id"})
    }
})

export default router;