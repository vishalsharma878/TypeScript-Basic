import {Router} from 'express';

import {Todo} from '../models/todo';

const router = Router();

type ResquestBody = { text: string };
type ResquestParams = { todoId: string }

let todos: Todo[]  = [];
router.get('/', (req, res, next)=>{
    res.status(200).json({todos: todos});
})

router.post('/todo', (req, res, next) => {
    const body = req.body as ResquestBody;
    const newTodos: Todo = {
        id: new Date().toISOString(),
        text: body.text
    }

    todos.push(newTodos);
    res.status(200).json(newTodos);
})

router.delete('/delete/:todoId', (req, res, next)=> {
    const params = req.params as ResquestParams;
    const id = params.todoId;
    const newTodo = todos.filter(item => item.id !== id);
    todos  = newTodo;
    res.status(200).json({message: "Item deleted sucessfully", todos: todos})
    
})

router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params as ResquestParams;
    const body = req.body as ResquestBody;
    const id = params.todoId;
    const todoIndex= todos.findIndex(todoItem => todoItem.id === id);
    if(todoIndex >= 0){
        todos[todoIndex] = {id: todos[todoIndex].id, text: body.text};
        res.status(200).json(todos[todoIndex]);
    }
    else{
        res.status(404).json({message: "Not able to find todo with this id"})
    }
})

export default router;