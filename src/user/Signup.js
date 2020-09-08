import React, {useState} from 'react'
import Layout from '../core/Layout'
import {Link} from 'react-router-dom'
import {signup} from '../auth'

const Signup = () =>{
    const[values,setValues]=useState({
        name:'',email:'',password:'',error:'',success:false
    })
    const {name,email,password,success,error}=values
    const handleChange = name => event =>{
        setValues({...values,error:false,[name]: event.target.value})
    }
    
    const showError=()=>(
        <div className="alert alert-danger" style={{display: error?'':'none'}}>
            {error}
        </div>
    )
    const showSuccess=()=>(
        <div className="alert alert-success" style={{display:success?'':'none'}}>
        New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    )
    const clickSubmit=(e)=>{
        e.preventDefault()
        setValues({...values,error:false})
        signup({name,email,password})
        .then(data=>{
            if(data.error){
                setValues({...values, error : data.error,success:false})
            }else{
                setValues({...values,name:'',email:'',password:'',success:true})
            }
        })
    }
    const signUpForm=()=>(
        <form>
            <div className="form-group">
                <label className="text-muted" htmlFor="name">Name</label>
                <input type="text" onChange={handleChange("name")} id="name" className="form-control" value={name}/>
            </div>
            <div className="form-group">
                <label className="text-muted" htmlFor="email">Email</label>
                <input type="email" onChange={handleChange("email")} id="email" value={email} className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted" htmlFor="password">Password</label>
                <input type="password" onChange={handleChange("password")} id="password" value={password} className="form-control"/>
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">submit</button>
        </form>
    )
    return(
        <Layout title="Signup" description="Sigup to e-commerce app" className="container col-md-8 offset-md-2">
            {showSuccess()}
            {showError()}
           {signUpForm()}
        </Layout>
    )
}

export default Signup