import React,{Component} from "react"


class Footer extends Component {
//     render(){
//         return (
//         <div>
//         <h1>Hello {this.props.name} from {this.props.city}</h1>
//         </div>
//         )
//     }
// }

constructor(){
    super()
    this.state = {
        title: 'Hello users'
    }
}
changeMessage(){
    this.setState ({
        title: 'Thank you for subscribing'
    })
}

render(){
    return(
        <div>
            <h1>{this.state.title}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>
    )
}
}
export default Footer;