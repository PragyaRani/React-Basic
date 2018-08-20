import React, { Component } from 'react';
import Aux from '../hoc/Aux'
import Cart from './userCart'
import { connect } from 'react-redux';
import axios from '../../axiosBook';
import * as actionTypes from '../../actions';
import classes from './User.css'
class User extends Component {
    state = {
        userDetails: [],
        error: false
      }
    componentDidMount() {
        var name='';
        if(this.props.name)
        { 
            name=this.props.name
            console.log('props name'+name)
        }
        else{
            name=localStorage.getItem('username')
            console.log('local name'+name)
        }
        console.log('name'+name)
        if(name!=null && name!='')
        {
            axios.post('user/getuserdetals',{email:name})
            .then(response => {
              const posts = response.data.user;
              const updatedPosts = posts.map(post => {
                return {
                  ...post
                }
              });
              this.setState({ userDetails: updatedPosts });
              console.log(this.state.userDetails)
            })
            .catch(error => {
              console.log('eror ' + error)
              this.setState({ error: true })
            });
        }
        else{
            alert('Please Login')
        }
        
    }
    render() {
        let userDeatils=this.state.userDetails.map(user=>{
            return <div class="container">
            <div class="row">
                <div class="col-lg-12 col-sm-12">
                    <div class="card hovercard">
                        <div class="cardheader">
                        </div>
                        <div class="avatar">
                            <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZHn3Oxnwledh0lldnU5PxYYUNakqxVq7dzewOzYFkYlxvOax4Q"/>
                        </div>
                        <div class="info">
                            <div class="title">
                                <a target="_blank" href="">{user.name}</a>
                            </div>
                            <div class="desc">{user.email}</div>
                            <div class="desc">Role:{user.role}</div>
                            {/* <div class="desc">{user.name}</div> */}
                        </div>
                        <div class="bottom">
                        
                        </div>
                    </div>
                </div>

            </div>
            </div>
        })

        return(
            <Aux>
                <div className="container">
                <ul className="nav nav-pills">
                    <li className="active"><a data-toggle="pill" href="#home">See Profile</a></li>
                    <li><a data-toggle="pill" href="#menu1">Book Cart</a></li>
                    <li><a data-toggle="pill" href="#menu2"></a></li>
                    {/* <li><a data-toggle="pill" href="#menu3">Menu 3</a></li> */}
                </ul>
  
                <div className="tab-content">
                <div id="home" className="tab-pane fade in active">
                {userDeatils}
                </div>
                <div id="menu1" className="tab-pane fade">
                <Cart/>
                </div>
                <div id="menu2" className="tab-pane fade">
                </div>
                {/* <div id="menu3" class="tab-pane fade">
                </div> */}
    </div>
</div>
            {/* <p>{this.props.name}</p>
            <p>{this.props.role}</p> */}
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
// const mapDispatchToProps = dispatch => {
//     return {
//         onStoreResult: () => dispatch({type: actionTypes.setName, name: 'pragya@gmail.com',role:'user'})
//     }
// };

export default connect(mapStateToProps, null)(User);