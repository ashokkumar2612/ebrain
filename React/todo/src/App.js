import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';
import AddTodo from './AddTodo';
class App extends Component {
  state = {
    todo: [
      { id: 1, content: 'Morning Exercise' },
      { id: 2, content: 'Morning Breakfast' },
      { id: 3, content: 'Go to Shopping' }
    ]
  }
  deleteTodo = (id) => {
    //  console.log(id)
    const todo = this.state.todo.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todo
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todo, todo]
    this.setState({
      todo: todos
    })
  }
  render() {
    return (
      <div className="App">
        <h2>Todo</h2>
        <AddTodo addTodo={this.addTodo} />
        <Todo todo={this.state.todo} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
