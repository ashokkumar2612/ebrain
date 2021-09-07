import React, { Component } from 'react'
import Axios from 'axios';

class PostList extends Component {

constructor(props) {
    super(props)

    this.state = {
         posts: [],
         errorMsg: ''
    }
}
componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(Response =>{
      console.log(Response)
      this.setState({posts:Response.data})
    })
    .catch(error => {
      console.log(error)
      this.setState({
          errorMsg: 'Your data error'
      })
    })
  }

    render() {
        const {posts, errorMsg} = this.state
        return (
            <div>
                List of Post
                {
                    posts.length ?
                posts.map(post => <div key ={post.id}>{post.title}</div>) : null
                }
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default PostList
