import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginForm from '../../components/LoginForm';
import { login } from '../../actions/authActions';
import './login.css'

class Login extends PureComponent {
   state = {
       username: ''
   }

    handleChange = ( {target: { value }}) => {
        const username = value;
        this.setState({
            username
        });
    }
    login = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.props.actions.login(this.state.username);
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

const mapStateToProps = (state) => {
  return { data: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      login,
    }, dispatch),
  };
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Login);