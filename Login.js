import React, { Component } from 'react';
import { Route, Switch,NavLink,Redirect } from 'react-router-dom';
import classes from './Login.css'
import Register from '../Register/Register'
import Aux from '../hoc/Aux'
import axios from 'axios'
import { connect } from 'react-redux';
import * as actionTypes from '../../actions';
class Login extends Component {
	constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password:''
        };
        this.loginHandler = this.loginHandler.bind(this);
    }
	loginHandler = (event)=> {
        if(event.target.email.value)
        {
            let role=''
            if(event.target.password.value != ''&& event.target.password.value != null){
                this.setState({
                    userId: event.target.email.value,
                    password : event.target.password.value
                },()=>{
                        axios.post('http://localhost:3001/user/login', this.state)
                        .then(response => {
                            alert(response.data.message);
                            role=response.data.user.role
                            localStorage.setItem("username",response.data.user.email)
                            localStorage.setItem("role",response.data.user.role)
                            this.props.history.push('/user')
                        }).then(data=>this.props.onStoreResult(this.state.userId)).then(data=>this.props.onStoreRole(role)).catch((err)=>{ 
                            alert(err.response.data.message); 
                        //   <Redirect to='/user'  /> 
                        })
                });
               
            }
            else
                alert("Please enter Password");
                event.preventDefault();
        }
        else{
            alert("Please enter Email ID");
        }
    }
    render() {
        return(
            <Aux>
            <body>
			<form id="loginform" onSubmit={this.loginHandler}>
            <div className="container">
			<div className="row main">
				<div className="main-login main-center">
						<div className="form-group">
							<label for="email" className="cols-sm-2 control-label">Email</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="email" id="email"  placeholder="Enter your Email"/>
								</div>
							</div>
						</div>

						
						<div className="form-group">
							<label for="password" className="cols-sm-2 control-label">Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password"/>
								</div>
                                {/* {'name'+this.state.userId} */}
							</div>
						</div>

						<div className="form-group ">
                            <button type="submit" 
                            className="btn btn-primary btn-lg btn-block login-button" 
                            >Login</button>
						</div>
						<div className="login-register">
                        <NavLink
                                className="nav-link"
                                to={'/register'}
                                activeStyle={{
                                    color: '#fa923f'
                                }}>Register
                        </NavLink>
                      
				         </div>
                         <Route exact path="/register" component={Register} />
				</div>
			</div>
		</div>
		</form></body>
            </Aux>
        );
    };
}
const mapStateToProps = state => {
    return {
        name: state.user.name,
        role: state.user.role
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onStoreResult: (username) => dispatch({type: actionTypes.setName, name:username}),
        onStoreRole: (role) => dispatch({type: actionTypes.setRole, role:role})
    }
};

export default connect(null, mapDispatchToProps)(Login);