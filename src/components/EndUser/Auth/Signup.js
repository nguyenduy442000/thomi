import React from 'react';
import '../../../../src/assets/Auth/signup.css'
function signup (){
    return(
        <form action="action_page.php">
        <div className="container">
          <h1>Sign Up</h1>
          
          
          <label><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required/>
      
          <label ><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>
      
          <label ><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
      
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
      
          <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>
      
          <div className="clearfix">
            <button type="button" className="cancelbtn">Cancel</button>
            <button type="submit" className="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>
    )
  
}
export default signup;