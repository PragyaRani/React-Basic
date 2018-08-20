import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import style from './BookId.css'
import axios from '../../../axiosBook'
class BookById extends Component {
  constructor(props) {
    super(props);
   this.state = {
    bookDetails: [],
    username:'',
    error: false
    }
  }
    componentDidMount() {

        console.log('localstpre value')
        var name=localStorage.getItem('username')
        console.log(name)
        if(name!='')
        {
            this.setState({username:name})
            console.log('statename '+this.state.username)
        }
        axios.get('/book/'+this.props.match.params.isbn)
          .then(response => {
            const posts = response.data.book;
            const updatedPosts = posts.map(post => {
              return {
                ...post
              }
            });
            this.setState({ bookDetails: updatedPosts });
            
          })
          .catch(error => {
            console.log('eror ' + error)
            this.setState({ error: true })
          });
      }

      clickHandeler=(id)=>{
       console.log(id)
        if(this.state.username===''){
            alert("Please Login !");
        }else{

            let cartData={
                email:this.state.username,
                isbn :id.data,
                quantity:1
            }
            axios.post('/librarian/addbookwithuser',cartData)
            .then((response) =>{
            alert(response.data.message);
            })
            .catch((err)=>{
                alert("error");
            });
        }
        console.log(this.props)
    }
    render() {
let bookbyiddetails=this.state.bookDetails.map(book=>{
    return <div class="product">
  <div class="header">
    <div class="back"></div>
    <div class="main">
     <h1>{book.title}</h1>
    <div class="left">
      {/* <h3>$320.00</h3> */}
      <img src={book.picUrl} alt="" />
      <h2>Written by</h2><h3>{book.author}</h3>
    </div>
    <div class="right">
      <p>Description :{' '+book.desc}</p>
      {/* <p>In stock. <a href="">Buy Extended Warranty</a></p> */}
      <p>
        <span class="fa fa-star yellow"></span>
        <span class="fa fa-star yellow"></span>
        <span class="fa fa-star yellow"></span>
        <span class="fa fa-star yellow"></span>
        <span class="fa fa-star"></span>
        <span>(4.67 - 172 reviews)</span>
      </p>
      <p class="quantity">QUANTITY <span class="fa fa-angle-left angle"></span><span id="qt">{book.quantity}</span><span class="fa fa-angle-right angle"></span></p>
    </div>
  </div>
  </div>
  <div class="footer">
    {/* <div class="left">
      <p id="price">$960.00</p>
    </div> */}
    <div class="right">
      {/* <p>Checkout</p> */}
      <button class="checkout" onClick={()=>this.clickHandeler({data:book.isbn})}>Checkout</button>
    </div>
  </div>
</div>
})
        return(
            <Aux>
    {bookbyiddetails}
  
            </Aux>
        )
       
    }
}

export default BookById;