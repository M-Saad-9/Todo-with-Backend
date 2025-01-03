import React from 'react'

export default function Todo() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">To-Do App</h1>

      {/* Input and Add Button */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter task"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <button className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="space-y-4">
        {/* Example Task 1 */}
        <li className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-md">
          <span className="text-gray-700">Task 1</span>
          <div className="space-x-3">
            <button className="text-blue-500 hover:text-blue-700">Edit</button>
            <button className="text-red-500 hover:text-red-700">Delete</button>
          </div>
        </li>

        {/* Example Task 2 */}
        <li className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-md">
          <span className="text-gray-700">Task 2</span>
          <div className="space-x-3">
            <button className="text-blue-500 hover:text-blue-700">Edit</button>
            <button className="text-red-500 hover:text-red-700">Delete</button>
          </div>
        </li>

        {/* Example Task 3 */}
        <li className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-md">
          <span className="text-gray-700">Task 3</span>
          <div className="space-x-3">
            <button className="text-blue-500 hover:text-blue-700">Edit</button>
            <button className="text-red-500 hover:text-red-700">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
  )
}
