import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
class Book extends Component {
    render() {
        console.log('isbn',this.props.isbn)
        let url="http://localhost:3000/booklist/"+this.props.isbn;
        console.log(url)
        return(
        <Aux>
        <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
        <a href={url}><img class="card-img-top" src={this.props.image} alt=""/></a>
        <div class="card-body">
        <p class="card-title">
          <a href="#">{this.props.title}</a>
        </p>
        {/* <p>$24.99</p> */}
        <p>{this.props.author}</p>
        </div>
        <div class="card-footer">
        {this.props.averageRating? <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>:null}
     
        </div>
        </div>
        </div>
        </Aux>
        )}
    }
export default Book;
