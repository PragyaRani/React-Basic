import React, { Component } from 'react';
import Aux from '../hoc/Aux'
import EditBook from '../Admin/CrudBook.js/EditBook'
import AddBook from '../Admin/CrudBook.js/addBook'
import axios from '../../axiosBook';
import classes from '../User/User.css'
import style from './Admin.css'
class Admin extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          userDetails:[],
          selectedRadio: 'Add',
          sortBy: '',
          direction: 'asc'
        };
      }

      componentDidMount() {
        axios.get('user/getalldetails')
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
      handleRadioChange=(event) => {
        this.setState({
          selectedRadio: event.currentTarget.value
        })
      };
      sorttitleHandler=(data)=>{
        var months =[...this.state.userDetails];
        if(data=='title')
        {
            months.sort(function(a, b){
            console.log(a)
            var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase();
            if (nameA < nameB) //sort string ascending
             return -1;
            if (nameA > nameB)
             return 1;
            return 0; //default return value (no sorting)
           });
           console.log('title');
           console.log(months);
        }
        else if(data=='author')
        {
          months.sort(function(a, b){
            console.log(a)
            var nameA=a.author.toLowerCase(), nameB=b.author.toLowerCase();
            if (nameA < nameB) //sort string ascending
             return -1;
            if (nameA > nameB)
             return 1;
            return 0; //default return value (no sorting)
           });
        }
        else if(data=='username')
        {
            months.sort(function(a, b){
            console.log(a)
            var nameA=a.username.toLowerCase(), nameB=b.username.toLowerCase();
            if (nameA < nameB) //sort string ascending
             return -1;
            if (nameA > nameB)
             return 1;
            return 0; //default return value (no sorting)
           });
           console.log('username')
           console.log(months);
        }
        else if(data=='issuedate')
        {
            months.sort(function(a, b){
            console.log(a)
            var nameA=new Date(a.issuedate), nameB=new Date(b.issuedate);
            if (nameA < nameB) //sort string ascending
             return -1;
            if (nameA > nameB)
             return 1;
            return 0; //default return value (no sorting)
           });
           console.log('username')
           console.log(months);
        }
        this.setState({userDetails:months})
      }
    //   showComponent=()=>{
    //      if(this.state.selectedRadio=='Add')
    //      {
    //          alert('add');
    //          <AddBook/>
    //      }else  if(this.state.selectedRadio=='Search'){
    //         alert('edit');
           
    //      }
    //   }
    render() {
        let userDetails=this.state.userDetails.map(user=>{
            return <tbody>
            <tr>
              <td><strong>{user.title}</strong></td>
              <td>{user.author}</td>
              <td>{user.username}</td>
              <td>{user.issuedate}</td>
            </tr>
          </tbody>
        })
        let showComponent=this.state.selectedRadio=='Add'? <AddBook/>: <EditBook/>
        return(
            <Aux>
              <div class="container">
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#home">See All Details</a></li>
    <li><a data-toggle="tab" href="#menu1">Add Book</a></li>
    <li><a data-toggle="tab" href="#menu2">Search Book</a></li>
    {/* <li><a data-toggle="tab" href="#menu3">Menu 3</a></li> */}
  </ul>

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <table>
                    <thead>
                    <tr>
                        <th onClick={()=>this.sorttitleHandler('title')}>Title</th>
                        <th onClick={()=>this.sorttitleHandler('author')}>Author</th>
                        <th onClick={()=>this.sorttitleHandler('username')}>UserName </th>
                        <th onClick={()=>this.sorttitleHandler('issuedate')}>Issued Date</th>
                    </tr>
                    </thead>
                {userDetails}
                </table>
    </div>
        <div id="menu1" class="tab-pane fade">
          <AddBook/>
        </div>
        <div id="menu2" class="tab-pane fade">
        <EditBook/>
        </div>
        <div id="menu3" class="tab-pane fade">
          <h3>Menu 3</h3>
        </div>
  </div>
</div>
                 <form>
                <div class="radio">
                {/* <label class="radio-inline">
                <input type="radio" name="addradio" value="Add" id="addradio" defaultChecked onChange={this.handleRadioChange} />Add Book
                </label> */}
                {/* <label class="radio-inline">
                <input type="radio" name="addradio" value="Search" id="addradio1" onChange={this.handleRadioChange}/>Maupulate Book Details
                </label> */}
                    {/* <div class="radio disabled">
                    <label><input type="radio" name="optradio" disabled/>Option 3</label>
                   */}
                    </div> 
                </form>
                
                {/* {showComponent} */}
            </Aux>
        );
    };
}

export default Admin;