import Aux from '../hoc/Aux'
import React, { Component } from 'react';
import axios from '../../axiosBook';
import Book from '../BookList/Book/Book'
import { connect } from 'react-redux';
import classes from './BookList.css'
class BookList extends Component {
  state = {
    bookDetails: [],
    updateBook:[],
    selectedbookId: null,
    error: false
  }
  componentDidMount() {
    // axios.get('volumes?q=isbn')
    //   .then(response => {
    //     // this.setState({bookDetails:[response.data.items] });
    //     // console.log(this.state.bookDetails)
    //     // this.setState({books:this.state.bookDetails})
    //     const posts = response.data.items;
    //     const updatedPosts = posts.map(post => {
    //       return {
    //         ...post
    //       }
    //     });
    //     this.setState({ bookDetails: updatedPosts });
    //   })
    //   .catch(error => {
    //     console.log('eror ' + error)
    //     this.setState({ error: true })
    //   });
    axios.get('/book')
      .then(response => {
        const posts = response.data.book;
        const updatedPosts = posts.map(post => {
          return {
            ...post
          }
        });
        this.setState({ bookDetails: updatedPosts,updateBook:updatedPosts });
      })
      .catch(error => {
        console.log('eror ' + error)
        this.setState({ error: true })
      });
  }
  filterbychkboxHandler = (event,category) => {
    console.log('category',event.target.value)
    let selectedCategory=[]
    let arrayFilter=[...this.state.bookDetails];
    if(event.target.checked)
    {
      // selectedCategory.push(category);
      // console.log(selectedCategory)
      arrayFilter.map(book=>{
        if(book.category===event.target.value)
        {
          this.setState({updateBook:[book]})
        }
      })
    } else 
    // if (!event.target.checked) 
    {
      // const index = selectedCategory.indexOf(category);
      // console.log('index')
      // console.log(index)
      // selectedCategory.splice(index, 1);
      // console.log(selectedCategory)
      this.setState({updateBook:arrayFilter})
    }
    // if(selectedCategory.length == 0) {
      
    // }
    //  else {
      
    //  }
    // console.log(event.target.checked)
  }
  render() {
    let bookqwer = "";
    if (this.state.updateBook) {
      bookqwer = this.state.updateBook.map(book => {
       //console.log(book)
        let imagepic='',isbn='';
        // if(book.volumeInfo.imageLinks!='undefined' && book.volumeInfo.imageLinks!=null)
        // {
        //   imagepic = book.volumeInfo.imageLinks.smallThumbnail
        // }
        // else{
        //   imagepic=null
        // }
        //console.log('isbn',book.volumeInfo.industryIdentifiers)
        // if(book.volumeInfo.industryIdentifiers!='undefined' && book.volumeInfo.industryIdentifiers!=null)
        // {

        //    console.log('isbn',book.volumeInfo.industryIdentifiers)
        //   //isbn = book.volumeInfo.industryIdentifiers[1]['identifier']
        //   isbn=9788129135513;
        // }
        // else{
        //   isbn=null
        // }
        // { console.log(book.volumeInfo.industryIdentifiers[1]['identifier']) };
        // { console.log(book.volumeInfo.averageRating) };
        // { console.log(book.volumeInfo.description) };
        // return <Book author={book[0].volumeInfo.authors[0]} title={book[0].volumeInfo.title}
        // rating={book[0].volumeInfo.averageRating} description={book[0].volumeInfo.description}
        // image={book[0].volumeInfo.imageLinks.thumbnail}>
        // </Book>
        return <Book title={book.title} isbn={book.isbn} author={book.author}
          averageRating="4.5" description={book.desc}
          image={book.picUrl}>
        </Book>
      })
    }
    let categories = "";
    if (this.state.bookDetails) {
      categories = this.state.bookDetails.map(book => {
        let category='';
        // if(book.volumeInfo.categories!='undefined' && book.volumeInfo.categories!=null)
        // {
        //   category = book.volumeInfo.categories[0]
        // }
        // else{
        //   category=null
        // }
        // { console.log('category',category) };
        // { console.log('categories ') };
        category=book.category
        return <div class="list-group">
          <a href="#" class="list-group-item">
          <input type="checkbox" value={category} id="checkboxOneInput"
           name="checkboxOneInput" onChange={(event)=>this.filterbychkboxHandler(event,category)}/>
          {book.category}</a>
          </div>
      })
      }

    return (

      <div class="container">
      
        <div class="row">

          <div class="col-lg-3">
            <h5 class="my-4">Filter by Category</h5>
            {/* <div class="list-group"> */}
            {categories}
              {/* <a href="#" class="list-group-item">Action and Adventure</a>
              <a href="#" class="list-group-item">Romance</a>
              <a href="#" class="list-group-item">Mystery</a> */}
            {/* </div> */}

          </div>

          <div className="col-lg-9">

            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
              {/* <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol> */}
              {/* <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img className="d-block img-fluid" src="http://indiafacts.org/wp-content/uploads/2015/07/CBT.png" alt="" />
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide" />
                </div>
              </div> */}
              {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a> */}
            </div>
            <div className="row">
              {/* <Book/> */}
              {bookqwer}
            </div>
          </div>
        </div>
      </div>
    );
  };
}
const mapStateToProps = state => {
  return {
      name: state.user.name,
      role: state.user.role
  }
};

export default connect(mapStateToProps, null)(BookList);