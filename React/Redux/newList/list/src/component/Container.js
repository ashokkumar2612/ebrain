import React,{Component} from 'react'

const initialState = {
    card:{
        name:'',
        age:'',
        title:''
    }
}
class Container extends Component {
    state = initialState

    changeHandler = e => {
        const card = {...this.state.card}
        card[e.target.name] = e.target.value
        this.setState({
            card
        });
    }
    submitHandler = (e)=> {
        e.preventDefault();
        this.props.onSave && this.props.onSave(this.state.card)
        this.props.onReady && this.props.onReady(this.state.card)
        this.props.onList && this.props.onList(this.state.card)
        console.log(this.state)
        this.setState({
            initialState
        })
    }
    render(){
    const {name, age, title} = this.state.card
    return (
        <div>
            <form>
                <input type='text' name='name' value={name}
                onChange={this.changeHandler}/>
                <input type='number' name='age' value={age}
                onChange={this.changeHandler}/>
                <input type='text' name='title' value={title}
                onChange={this.changeHandler}/>
                <button onClick={this.submitHandler}>submit</button>
                <button onClick={this.props.onSave}>cancel</button>
            </form>
        </div>
    )
}
}
export default Container
