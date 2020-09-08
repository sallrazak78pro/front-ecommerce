import React,{Fragment} from 'react'
import {Link,withRouter} from 'react-router-dom'
import {signout, isAuthenticated} from '../auth'
const isActive= (history,path)=>{
    if(history.location.pathname === path){
        return{ color:"black"} 
    }else{
        return{color:"white"}
    }
}


const Menu = ({history})=>(
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link style={isActive(history,'/')} className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link style={isActive(history,'/shop')} className="nav-link" to="/shop">Shop</Link>
            </li>
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link style={isActive(history,'/user/dashboard')} className="nav-link" to="/user/dashboard">Dashboard</Link>
                </li>
            )}
             {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link style={isActive(history,'/admin/dashboard')} className="nav-link" to="/admin/dashboard">Dashboard</Link>
                </li>
            )}
            {!isAuthenticated()&&(
                <Fragment>
                    <li className="nav-item">
                        <Link style={isActive(history,'/signin')} className="nav-link" to="/signin">Signin</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={isActive(history,'/signup')} className="nav-link" to="/signup">Signup</Link>
                    </li>
                </Fragment>
            )}
            {isAuthenticated()&&(
                <Fragment>
                    <li className="nav-item">
                        <span style={{cursor:'pointer',color:'#ffffff'}} className="nav-link" onClick={()=>signout(()=>{history.push("/")})}>Signout</span>
                    </li>
                </Fragment>
            )}
        </ul>
    </div>
)
export default withRouter(Menu)