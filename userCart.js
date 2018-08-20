import React, { Component } from 'react';
import classes from './User.css'
import Aux from '../hoc/Aux'
import axios from '../../axiosBook';
class cartDetails extends Component {
    state = {
        cartDetails: [],
        error: false
      }
    componentDidMount() {
        var name=localStorage.getItem('username')
        console.log('name'+name)
        axios.post('librarian/getBookCart',{email:name})
        .then(response => {
          
          const posts = response.data.book;
         
          const updatedPosts = posts.map(post => {
            return {
              ...post
            }
          });
          this.setState({ cartDetails: updatedPosts });
          console.log(this.state.cartDetails[0].issuedate)
        //   var issuedate=this.state.cartDetails[0].issuedate
        //   issuedate=new Date(issuedate)
        //         console.log(issuedate)
        //         var date = new Date();
        //         console.log(date)
        //         var timeDiff = Math.abs(date.getTime() - issuedate.getTime());
        //         var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        //         if(diffDays<31)
        //         {
        //             console.log(diffDays)
        //             document.getElementById("renew").disabled = false;
        //             document.getElementById("return").disabled = true;
        //         } 
        //         else{
        //             document.getElementById("renew").disabled = true;
        //             document.getElementById("return").disabled = false;
        //         }
          
        })
        .catch(error => {
          console.log('eror ' + error)
          this.setState({ error: true })
        });
    }
    onrenewHandler=(isbn)=>{
        alert(isbn)
        var renew=[]
        renew=[...this.state.cartDetails]
        renew[0].issuedate=new Date()
        this.setState({cartDetails:renew})
        // console.log(renew[0].issuedate)
    }
    render() {
        var date = new Date();
        let cart=this.state.cartDetails.map(cart=>{
            // var newDate = new Date(date.setTime( date.get() + days * 86400000 ));
            // issuedate.setDate(issuedate.getDate() + 30);
            var issuedate=cart.issuedate
            let returnDisable,renewDesable
            issuedate=new Date(issuedate)
            console.log('issuedate')
                console.log(issuedate)
                console.log(date)
                var timeDiff = Math.abs(date.getTime() - issuedate.getTime());
                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                console.log(diffDays)
                if(diffDays<31)
                {
                    
                    returnDisable = true;
                    renewDesable= false;
                    console.log('renewDesable',renewDesable)
                } 
                else{
                    renewDesable = true;
                    returnDisable = false;
                    console.log('renewDesable',returnDisable)
                }
            return <div class="item">
                <div class="buttons">
                {/* <span class="delete-btn"></span> */}
                <span class="like-btn"></span>
                </div>
     
            <div class="image">
            <img class="image1" src={cart.picUrl} alt="" />
            </div>
        
            <div class="description">
            <span>{cart.title}</span>
            <span>{cart.author}</span>
            </div>
            <div>{cart.issuedate}</div>
            <div class="quantity">
            <input type="text" name="name" value={cart.quantity}/>
            <button class="renew-btn" type="button" name="renew" id="renew" onClick={()=>this.onrenewHandler(cart.isbn)} disabled={renewDesable}>Renew
                {/* <img src="../../assets/images/plus.svg" alt="" /> */}
            </button>
            
            <button class="return-btn" type="button" name="return" id="return" disabled={returnDisable}>Return
                {/* <img src="../../assets/images/minus.svg" alt="" /> */}
            </button>
            </div>
     
            {/* <div class="total-price">{cart.issuedate}</div> */}
           
            </div>
        })
        return(<Aux> 
            <div class="shopping-cart">
            <div class="title">
                Book Cart Bag
            </div> {cart} </div>
             </Aux>
);
    };
}
export default cartDetails