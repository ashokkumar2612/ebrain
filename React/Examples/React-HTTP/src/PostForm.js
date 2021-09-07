import React, { Component } from 'react'
import axios from 'axios'
 class PostForm extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userId:'',
              title:'',
              body:''
         }
     }
     changeHandler = (e) => {
         this.setState({
             [e.target.name] : e.target.value
         })
     }
     submitHandler = e => {
         e.preventDefault()
         console.log(this.state)
         axios.post('https://5e3bf5b5f2cb3000143918b4.mockapi.io/hello', this.state)
         .then(Response => {
             console.log(Response)
         })
         .catch(error => {
             console.error(error);
         })
     }
     
    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type='text' name = 'userId' value={userId} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type='text' name = 'title' value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type='text' name = 'body' value={body} onChange={this.changeHandler}/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
