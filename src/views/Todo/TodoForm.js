import React, { Component } from 'react'

class TodoForm extends Component {
  state = { id: 0, task: '', empty: true }

  handleChange = e => {
    let empty = e.target.value !== '' ? false : true

    this.setState({
      [e.target.id]: e.target.value,
      empty
    })
  }

  handleSubmit = async e => {
    e.preventDefault()

    if (this.state.task === '') return

    await this.props.addTodo(this.state)
    this.setState({
      id: 0,
      task: '',
      empty: true
    })
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">New Task</span>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="task">Task:</label>
            <input
              value={this.state.task}
              onChange={this.handleChange}
              type="text"
              id="task"
            />
          </form>
        </div>
        <div className="card-action center-align">
          <a
            href="#!"
            onClick={this.handleSubmit}
            className="btn center-align white-text"
            disabled={this.state.empty}
          >
            Add
          </a>
        </div>
      </div>
    )
  }
}

export default TodoForm
