import React, { Component } from 'react'

export class ToDoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: '',
            listArray: []
        }
    }
    changeHandler = (e) => {
        this.setState({
            list: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        let lists = [...this.state.listArray, this.state.list]
        this.setState({
            listArray: lists
        })
        this.setState({ list: '' })
    }
    deleteHandler = index => e => {
        e.preventDefault()
        const listArray = { ...this.state.listArray }
        let del = [...listArray.slice(0, index), ...listArray.slice(index + 1)]
        this.setState({ listArray: del })
    }
    render() {
        const { list, listArray } = this.state
        console.log(listArray)
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type='text' name='list' value={list} onChange={this.changeHandler} />
                    <button type='submit'>Submit</button>
                </form>
                {listArray && listArray.map(list, index =>
                    <p onClick={this.deleteHandler(index)}>{list}</p>)}
            </div>
        )
    }
}

export default ToDoList
