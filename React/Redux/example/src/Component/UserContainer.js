import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux/user/userAction'

function UserContainer({ userData,fetchUsers }) {
    useEffect(()=> {
        fetchUsers()
    },[fetchUsers])
    return userData.loading ? (
                <h2>loading</h2>
            ) : userData.error ? (
            <h2>{userData.error}</h2>
            ) : (
                <div>
                    <h2>userlist</h2>
                    <div>
                        {userData &&
                        userData.user &&
                        userData.user.map(user => <p>{user.name}</p>)}
                    </div>
                </div>
            )
}
const mapStateToProps = state => {
    console.log(state)
    return {
        userData: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (UserContainer)