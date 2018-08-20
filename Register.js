import React, { Component } from 'react';
import Aux from '../hoc/Aux'
import axios from 'axios'
class Register extends Component {
	constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password:'',
            role: ''
        };
        this.SignUpHandler = this.SignUpHandler.bind(this);
    }
	SignUpHandler = (event)=> {
		console.log('SignUpHandler')
        if(event.target.password.value === event.target.confirmpassword.value){
            this.setState({
                name: event.target.username.value,
                email: event.target.email.value,
                password : event.target.password.value,
                role : 'user'
            },()=>{
                if(this.state.role === 'user') {
                    axios.post('http://localhost:3001/user/registration', this.state)
                    .then(response => {
						alert(response.data.message);
						
                    }).catch((err)=>{ 
                      alert(err.response.data.message);  
					})
					event.target.email.value='',
						event.target.password.value='',
						event.target.confirmpassword.value='',
						event.target.username.value=''
                }
            });
        }
        else
            alert("Password did not match");
        event.preventDefault();
    }
    render() {
        return(
            <Aux>
	<form onSubmit={this.SignUpHandler}>
		<div className="container">
			<div>
				<div>
	               <div align="center">
	               		<h1 className="title">Register With Us</h1>
	               		<hr />
	               	</div>
	            </div> 
				<div className="main-login main-center">
						<div className="form-group">
							<label for="name" className="cols-sm-2 control-label">Your Name</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="username" id="name"  placeholder="Enter your Name"/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="email" className="cols-sm-2 control-label">Your Email</label>
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
							</div>
						</div>

						<div className="form-group">
							<label for="confirm" className="cols-sm-2 control-label">Confirm Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" className="form-control" name="confirmpassword" id="confirmpassword"  placeholder="Confirm your Password"/>
								</div>
							</div>
						</div>

						<div className="form-group ">
							<button type="submit" className="btn btn-primary btn-lg btn-block login-button">Register</button>
						</div>
						
					
				</div>
			</div>
		</div>
		</form>
            </Aux>
        );
    };
}

export default Register;