import React, { Component } from 'react'
import Container from './Container'
import Body from './Body'
import {connect} from 'react-redux'
import {fetchCardPost,fetchCardGet} from '../redux/card/cardAction'

export class NavButton extends Component {
    state ={
        isShow: false
    }
    Handler = () => {
        this.setState({
            isShow:false
        })
    }
    componentDidMount(){
        this.props.fetchCardGet()
    }
    render() {
       const isShow =  this.state.isShow
      const data = this.props.data
        return (
            <div>
                <button onClick={()=>this.setState({isShow:true})}>
                    ADD
                </button>
                {isShow && <Container 
                onList={this.props.fetchCardGet} onReady={this.props.fetchCardPost} onSave={this.Handler}/>}
                <Body>
                {data.loading ?
            <h3>Loading...</h3> : data.error ? <h3>{data.error}</h3> :
            (
                <div>
                    <h2>Card list</h2>
                    <div>
                        {data &&
                        data.card &&
                        data.card.map((user,id) =>
                        <>
                        <p>Name:{user.name}</p>
                        <p>Age:{user.age}</p>
                        <p>Title:{user.title}</p>
                        </>
                        )}
                    </div>
                </div>
            )
            }     
                </Body>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.card)
    return{
    data: state
}}
const mapDispatchToProps = dispatch => {
    // console.log(request)
    return {
        fetchCardPost: (card)=>dispatch(fetchCardPost(card)),
        fetchCardGet: ()=>dispatch(fetchCardGet())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NavButton)