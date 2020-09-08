import React, {useState} from 'react'
import Layout from '../core/Layout'
import {Redirect} from 'react-router-dom'
import {signin,authenticate,isAuthenticated} from '../auth'

const Signin = () =>{
    const[values,setValues]=useState({
        email:'sallrazak78pro@gmail.com',password:'Abdoul07@',error:'',loading:false,redirectToreferrer:false,
    })
    const {email,password,loading,error,redirectToreferrer}=values
    const {user}=isAuthenticated()
    
    const handleChange = name => event =>{
        setValues({...values,error:false,[name]: event.target.value})
    }
    
    const showError=()=>(
        <div className="alert alert-danger" style={{display: error?'':'none'}}>
            {error}
        </div>
    )
    const showLoading=()=>
        loading && (
        <div className="alert alert-info">
            <h2>Loading...</h2>
        </div>)
        
        
    
    const redirectUser = () =>{
        if(redirectToreferrer){
            if(user && user.role === 1){
                return <Redirect to="/admin/dashboard" />
            }else{
                return <Redirect to="/user/dashboard" />
            }
        }
        if(isAuthenticated()){
            return <Redirect to="/" />
        }
    }
    const clickSubmit=(e)=>{
        e.preventDefault()
        setValues({...values,error:"",loading:true})
        signin({email,password})
        .then(data=>{
            if(data.err){
                setValues({...values, error : data.err,loading:false})
            }else{
                authenticate(data,()=>{
                    setValues({...values,redirectToreferrer:true})
                })
                
            }
        })
    }
    const signinForm=()=>(
        <form>
           
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
        <Layout title="Signin" description="Sigin to e-commerce app" className="container col-md-8 offset-md-2">
            {showLoading()}
            {showError()}
           {signinForm()}
           {redirectUser()}
        </Layout>
    )
}

export default Signin