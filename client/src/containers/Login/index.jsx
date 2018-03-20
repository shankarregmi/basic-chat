import React, { PureComponent } from 'react';
import LoginForm from '../../components/LoginForm';
import { login } from '../../utils/auth';
import './login.css'

class Login extends PureComponent {
   state = {
       username: ''
   }

    handleChange = ( {target: { value }}) => {
        const username = value;
        this.setState({
            username
        })
    }
    login = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            login();
            this.props.history.push('/');
            this.setState({
                username: ''
            });
          }
    }

    render() {
        return(
            <div className="login-container">
                <LoginForm onEnter={this.login} handleChange={this.handleChange} username={this.state.username} />
            </div>
        )
    }
}

export default Login;