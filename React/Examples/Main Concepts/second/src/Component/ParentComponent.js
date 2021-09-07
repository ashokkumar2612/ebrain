import React,{PureComponent} from 'react'
import PureComp from './PureComponent'
import RegularComp from './RegularComponent'


class ParentComp extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
            name: 'Ashok'
        } 
    }

    componentDidMount(){
        setInterval(() => {
        this.setState({
            name: 'Ashok'

        })
    },2000)
    }

    render(){
         console.log('Parent component rendering')
        return (
            <div>
            <h1>Parent Component</h1>
            <RegularComp name={this.state.name}></RegularComp>
            <PureComp name={this.state.name}></PureComp>
            </div>
        )

    }
}
export default ParentComp