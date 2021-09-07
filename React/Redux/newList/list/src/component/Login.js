import React,{useState} from 'react'

const initialState = {
    login:{
        name:'',
        password:''
    }
}
export default function Login() {
    const [state, setstate] = useState(initialState)
    const [submittedForms, setSubmitForms] = useState([])
    
    const changeHandler = (e) =>{
        const login = {...state.login}
        login[e.target.name] = e.target.value
        setstate({
            login
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const {name, password} = state.login
        setSubmitForms([...submittedForms, {name, password}])
        console.log(name, password)
    }
    const {name, password} = state.login
    return (
        <div>
         <form onSubmit={submitHandler}>
            <input type='text' name='name' value={name} onChange={changeHandler}/>
            <input type='text' name='password' value={password} onChange={changeHandler}/>
            <button>Submit</button>
            </form>
            <ul>
            {submittedForms.map(({name, password}) => <li>{[name, password]}</li>)}
            </ul>
        </div>
    )
}