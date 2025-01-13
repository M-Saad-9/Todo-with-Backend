import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Todo() {
  const API = "http://localhost:3000"

  const [todos,setTodos] = useState([])
  console.log("new todoss data", todos);
  const [textEdit,setTextEdit] = useState()

  const getTodos = async () => {
    const response = await axios(`${API}/api/todos`)
    const todoData = response?.data?.Data
    // console.log("todo",todoData);

    const newTodoData = todoData.map((todos) => {
      return { ...todos, isEditing: false}
    })
    setTodos(newTodoData)
    // console.log(response);
    
  }
  useEffect(() => {
    getTodos()
  }, [])

  const addTodos = async (event) => {

    try {
      event.preventDefault()

      const todoValue = event.target.children[0].value

      await axios.post(`${API}/api/todo`,
        {
          "data": todoValue
        }
      )
      getTodos()
      event.target.reset();
      
    } catch (err) {

    }
  }

  const editTodo = async (event, todoId) => {
    try {
      event.preventDefault();

      const todoValue = event.target.children[0].value;

      await axios.patch(`${API}/api/todo/${todoId}`, {
        todoDetail: todoValue,
      });
      getTodos();

      event.target.reset();
    } catch (err) {

    }
  };

  const deleteTodo = async (id) => {
    try {
        // console.log( id);
        const res = await axios.delete(`${API}/api/todo/${id}`);
        // console.log("Deleted successfully:", res);
        getTodos();
    } catch (error) {
        // console.error("Error deleting todo:", error.response?.data || error.message);
    }
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">To-Do App</h1>

      {/* Input and Add Button */}
      <form className="mb-6" onSubmit={addTodos}>
        <input
          type="text"
          placeholder="Enter task"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
         <button className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Add Task
        </button>
      </form>
     

      {/* Task List */}
      <ul className="space-y-4">
        {/* Example Task 1 */}
        {todos?.map((item,index)=>(
          <li 
          key={item.id}
          className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-md">
          {!item.isEditing ? <span className="text-gray-700">{item.todoDetail}</span>
          : 
          <form  onSubmit={(e) => editTodo(e, item.id)}>
             <input type="text" defaultValue={item.todoDetail}
          className='border border-gray-900 w-[60%]'/>
           <button
            onClick={() => {
              const newTodos = todos.map((todo, i) => {
                todo.isEditing = false;
                return todo;
              });
              setTodos([...newTodos]);
            }}
            type="button">Cancel</button>
       <button type="submit">Save</button>
          </form>
          }
          
          <div className="space-x-3">
            {/* yaha edit or save button ha */}
          {!item.isEditing ? <button 
            onClick={()=> {
              const newTodos = todos.map((todo,i) => {
                if (i === index) {
                  todo.isEditing = true;
                } else {
                  todo.isEditing = false;
                }
                return todo;
              });
             
              // todos[index].isEditing = true
              setTodos([...newTodos]);
            }}
            className="text-blue-500 hover:text-blue-700">Edit</button>
          : null}
            

            {/* yaha delete or cancel button ha */}
            {!item.isEditing ? <button
            onClick={()=> deleteTodo(item.id)}
            className="text-red-500 hover:text-red-700">Delete</button>
            :null}
          </div>
        </li>
        ))}
        

        
      </ul>
    </div>
  </div>
  )
}
