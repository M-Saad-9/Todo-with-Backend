import express from 'express'

const app = express()
const port = 3000

app.use(express.json());

const todos = []

//yaha all todo get hu rha hn
app.get('/get-todo', (req, res) => {
    res.send(todos)
})

//yaha add kr rha hn 
app.post('/add-todo', (req, res) => {
    todos.push({
        todoDetail: req.body.data,
        id: String(new Date().getTime())
    })
    res.send("add hu rha ha")
})

//yaha edit kr rha hn
app.patch('/edit-todo/:id', (req, res) => {
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
            response.status(201).send({
              data: { todoContent: request.body.todoContent, id: id },
              message: "updated successfully!",
            });
          } else {
            response.status(200).send({ data: null, message: "not found" });
          }
    }
})

//yaha delete kr rha hn
app.delete('/delete-todo/:id', (req, res) => {
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})