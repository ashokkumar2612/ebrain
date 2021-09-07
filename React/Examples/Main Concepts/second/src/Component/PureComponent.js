import React,{PureComponent} from 'react'

class PureComp extends PureComponent {


    render(){

        console.log('Pure component rendering')
        return (
            <div>
                <h1>PureComponent {this.props.name}</h1>
            </div>
        )
    }

}
export default PureComp