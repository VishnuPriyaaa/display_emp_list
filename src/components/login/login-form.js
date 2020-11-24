import React , {useState} from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './login.css';


function LoginForm() {

    const [details,setDetails] = useState({username:"",password:""});
    const [error,setError] = useState({error:""});
    const creds = useSelector(state => state.creds);
    const history = useHistory();
    const submitHandler = e => {
      e.preventDefault();
      if((details.username = creds.username) && (details.password == creds.password)) {
        history.push('/empList');
      } else {
         alert("Invalid Details");
         setDetails({
             username: "",
             password: ""
         })
      }
    }
    return (
       <div class="login">
           
          <form onSubmit={submitHandler}>
           <div className="form-inner">
               <h2>Login</h2>
               <div className="form-group">
                   <label htmlFor="username">UserName</label>
                   <input type="text" placeholder="username" name="username" id="username"  value = {details.username} onChange = {e => setDetails({...details,username:e.target.value})} required/>
               </div>
               <div className="form-group">
                   <label htmlFor="password">Password</label>
                   <input type="password" placeholder="password" name="password" id="password" value={details.password} onChange= {e=> setDetails({...details,password:e.target.value})} required/>
               </div>
               <input type="submit" value="LOGIN" />
           </div>
       </form>
       </div>
       
    )
}

export default LoginForm;