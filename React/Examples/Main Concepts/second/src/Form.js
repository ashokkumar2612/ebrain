import React, {Component} from 'react';

class Form extends Component{

   constructor(props) {
       super(props)
       this.state = {
           username: '',
           comment: '',
           topic: 'react'
   }
   }
   changeHandler=(event)=> {
         this.setState({
            username: event.target.value
         })
   }
   commentHandler = event => {
       this.setState({
           comment: event.target.value
       })
   }
   topicHandler = event => {
       this.setState({
           topic: event.target.value
       })
   }
   submitHandler = event => {
alert(`Hai ${this.state.username}, your ${this.state.comment} & ${this.state.topic} are successfully submitted`)
   }
   render(){
    return (

     <div>
         <form onSubmit={this.submitHandler}>
             <div>
             <label>username :</label>
         <input type='text' value={this.state.username} 
         onChange = {this.changeHandler} />
         </div>
         <div>
             <labele>comments :</labele>
             <textarea type="text" value={this.state.comment} 
             onChange={this.commentHandler}></textarea>
         </div>
         <div>
             <label>Choose</label>
             <select value={this.state.topic} 
             onChange={this.topicHandler}>
                 <option value="react">React</option>
                 <option value="angular">Angular</option>
                 <option value="vue">Vue</option>
             </select>
             <button type="submit">Submit</button>
         </div>
         </form>
     </div>

    )
   }
}
export default Form