import express from 'express'
import cors from "cors";

const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(cors())

const todos = []

//yaha all todo get hu rha hn
app.get('/api/todos', (req, res) => {
    const message = !todos.length ? "todos empty" : "";
    res.send({ Data: todos, Message: message })
})

//yaha add kr rha hn 
app.post('/api/todo', (req, res) => {
    const obj = {
        todoDetail: req.body.data,
        id: String(new Date().getTime())
    };
    todos.push(obj)
    res.send({ Data: todos, Message: "todo add successfully!" })
})

//yaha edit kr rha hn
app.patch('/api/todo/:id', (req, res) => {
    const id = req.params.id
    // console.log(id);

    const isFound = false
    for (let i = 0; i < todos.length; i++) {

        if (todos[i].id === id) {
            todos[i].todoDetail = req.body.todoDetail
            isFound = true
            break
        }

        if (isFound) {
            res.status(201).send({
                data: { todoContent: request.body.todoContent, id: id },
                message: "Todo updated successfully!",
            });
        } else {
            res.status(200).send({ data: null, message: "not found" });
        }
    }
})

//yaha delete kr rha hn
app.delete('/api/todo/:id', (req, res) => {
    const id = req.params.id
    // console.log(id);

    let isFound = false
    for (let i = 0; i < todos.length; i++) {

        if (todos[i].id === id) {
            todos.splice(i, 1)
            isFound = true
            break
        }
    }
        if (isFound) {
            res.status(200).send({
                //   data: { todoContent: request.body.todoContent, id: id },
                message: "Todo delete successfully!",
            });
        } else {
            res.status(404).send({ data: null, message: "Todo not found" });
        }
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})