import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
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
	  <div class='window'>
		<div class='overlay'></div>
		<div class='content'>
		  <div class='welcome'>Hello There!</div>
		  <div class='subtitle'>To have full access to our services please log in </div>
      <div class='input-fields'>

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
      
	
		  </div>
		  <div class='spacing'>or please  <a href="/signup" class='highlight'>create your account</a></div>
		  <div><button type="submit" class='ghost-round full-width'>Log In</button></div>
		</div>
	  </div>
	</div>
</form>
      
     
    </div>
  );
};

export default Login;
