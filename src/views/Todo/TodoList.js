import React from 'react'

const TodoList = ({ todos, deleteTodo }) => {
  let todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <div>
            {todo.task}
            <a href="#!" className="secondary-content">
              <i
                onClick={() => deleteTodo(todo.id)}
                className="material-icons red-text"
              >
                cancel
              </i>
            </a>
          </div>
        </div>
      )
    })
  ) : (
    <p className="center">You dont have task</p>
  )

  return <div className="todo-list collection">{todoList}</div>
}

export default TodoList
