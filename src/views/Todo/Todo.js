import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

class Todo extends Component {
  state = {
    todos: []
  }

  componentDidMount = () => {
    let todos = JSON.parse(localStorage.getItem('todos')) || [
      { id: 1, task: 'pray my wonderfull God' },
      { id: 2, task: 'fast 1 day at leat' },
      { id: 3, task: 'read biblie every day' }
    ]
    this.setState({ todos })
  }

  deleteTodo = async id => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    await this.setState({ todos })
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  addTodo = async todo => {
    todo.id = new Date().getTime()
    let todos = [...this.state.todos, todo]
    await this.setState({ todos })
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  render() {
    return (
      <div className="row">
        <div className="col s4">
          <TodoForm addTodo={this.addTodo} />
        </div>
        <div className="col s8">
          <TodoList deleteTodo={this.deleteTodo} todos={this.state.todos} />
        </div>
      </div>
    )
  }
}

export default Todo
