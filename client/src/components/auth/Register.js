import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  return (
    <div className='form-container'>
    


      <form onSubmit={onSubmit}>
<div class='bold-line'></div>
	<div class='containerLogin'>
	  <div class='window' id="windowSignup" style={{height: ".01px"}}>
		<div class='overlay' style={{height: "650px"}}></div>
		<div class='content'>
              <div class='welcome' style={{ marginTop: " 20px;" }}>Hey!</div>
		  <div class='subtitle' style={{ fontWeight: "200", color:"blanchedalmond"}}> Spend a few minutes filling out the form, and many hours shopping with us </div>
		  <div class='input-fields'>
			
                
                <input  id='name'
            type='text'
            name='name'
            value={name}
                  onChange={onChange}
                  placeholder='First Name'
                  required class='input-line full-width'>
                  
            </input>
   
        
          
                <input
                  id='email'
                  name="email"
                  type='email'
                  placeholder='Email'
                  onChange={onChange}
                  class='input-line full-width'></input>
                

	        <input  id='password'
            type='password'
            name='password'
            value={password}
                  onChange={onChange}
                  placeholder='Password'
            required
                  minLength='6' class='input-line full-width'></input>
                	<input  id='password2'
            type='password'
                  name='password2'
                  
            value={password2}
                  onChange={onChange}
                  placeholder='Password'
            required
            minLength='6' class='input-line full-width'></input>
		  </div>
      <div class='spacing'> </div>
		  
              <div>
                <button type="submit" value='Register' class='ghost-round full-width yellow-text'>Create Your Account </button></div>
		</div>
	  </div>
	</div>

</form>




     
    </div>
  );
};

export default Register;
