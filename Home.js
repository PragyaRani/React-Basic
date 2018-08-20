import React,{Component} from 'react'
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header'
import Login from '../Login/Login';
import Register from '../Register/Register';
import Admin from '../Admin/Admin';
import User from '../User/User';
import Search from '../Search/Search';
import Carousel from './Carousel/Slides'
class Home extends Component {
    render() {
      return (
        <div className="container">
        <br/>
        <Carousel />
        <div align="center"><h1> This is HomePage</h1></div>
    </div>
      );
    }
  }
  
  export default Home;