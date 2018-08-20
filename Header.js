import React,{Component} from 'react'
import { Route, Switch,NavLink } from 'react-router-dom';
import logo from "../../assets/images/images.jpg";
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import BookList from '../BookList/BookList';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Admin from '../Admin/Admin';
import User from '../User/User';
import Search from '../Search/Search';
import BookById from '../BookList/BookById/BookById'
class Header extends Component{
        constructor(props) {
            super(props);
        
            this.state = {
                auth: false
            };
          }
        //   componentDidMount() {
        //       var authVal=localStorage.getItem('username')
        //       console.log('authVal',authVal)
        //       if(authVal!=null && authVal!='')
        //       {
        //         this.setState({auth:authVal})
        //         console.log(this.state.auth)
        //       }
        //   }
        logoutHandler()
        {
            localStorage.removeItem('username')
            localStorage.removeItem('role');
            this.props.history.push('/home')
        }
    render() {
        return (
           
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/"><img style={{ height: "60px" }} src={logo} alt="ALT" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to={'/home'}
                                activeStyle={{
                                    color: '#fa923f'
                                }}>Home
                        </NavLink>
                        </li>
                        {localStorage.getItem('role')=='admin' ?
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to={'/admin'}
                                activeStyle={{
                                    color: '#fa923f'
                                }}>Admin
                        </NavLink>
                        </li>:localStorage.getItem('role')=='user'?
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to={'/user'}
                                activeStyle={{
                                    color: '#fa923f'
                                }}>User
                        </NavLink>
                        </li>:null
                        }
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to={'/booklist'}
                                activeStyle={{
                                    color: '#fa923f'
                                }}>Books
                        </NavLink>
                        </li>

                    </ul>
                    <ul className="mx-auto form-inline">
                        {/* <form className="form-inline"> */}
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" ref={this.textInput} />
                            <button className="btn btn-secondary my-2 my-sm-0" type="button" onClick={this.handleSubmit} >Search</button>
                        {/* </form> */}
                    </ul>
                   
               {localStorage.getItem('username')==null?  <ul className="my-2 my-lg-0 navbar-nav">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to={'/login'}
                        activeStyle={{
                            color: '#fa923f'
                        }}>Login/SignUp
                </NavLink>
                </li>
            </ul>:  <ul className="my-2 my-lg-0 navbar-nav">
                        <li className="nav-item">
                            <NavLink onClick={this.logoutHandler}
                                className="nav-link"
                                to={'/logout'}
                                activeStyle={{
                                    color: '#fa923f'
                                }}>Logout
                        </NavLink>
                        </li>
                    </ul>
               }
                    {/* <Route path="/" component={Header} /> */}
                    {/* <Route exact path="/" component={Home} /> */}
                </div>
            </nav>
            <Switch>
           
            <Route exact path="/home" component={Home} />
            {
                // this.state.auth==true? <Route exact path="/login" component={Login} />: <Route exact path="/logout" component={Home}/>

            }
            <Route exact path="/login" component={Login}  />
            <Route exact path="/logout" component={Home}/>
            <Route exact path="/register" component={Register} />
            {localStorage.getItem('role')=='admin' ?<Route exact path="/admin" component={Admin} />:null}
           
            {localStorage.getItem('role')=='user' ?  <Route exact path="/user" component={User} /> : null}
            <Route exact path="/search" exact component={Search} />
            <Route exact path="/search/:searchtext" component={Search} />
            <Route exact path="/booklist" component={BookList}/>
            <Route exact path="/booklist/:isbn" component={BookById} />
            {/* <Route exact path="/register" component={Register} /> */}
            <Route exact path="/" component={Home} />
            {/* <Route path="/" component={ErrorPage} /> */}
        </Switch>
        <Footer/>
        </div>
        );
    }
}
export default Header;