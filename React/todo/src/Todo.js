import React from 'react'

const Todo = ({ todo, deleteTodo }) => {
    const todoList = todo.length ? (
        todo.map(todo => {
            return (
                <div key={todo.id}>
                    <span onClick={() => { deleteTodo(todo.id) }}>{todo.content}</span>
                </div>
            )
        })
    ) : (
            <p>You have no Todo list</p>
        )
    return (
        <div>
            {todoList}
        </div>
    )
}
export default Todo