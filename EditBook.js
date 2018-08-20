import React,{Component} from 'react'
import Aux from '../../hoc/Aux'
import axios from 'axios'
class EditBook extends Component{
    state = {
        BookIsbn : '',
        form: false
    };
    searchHandler = () => {
        var ISBN = document.getElementById("isbnInput").value;
        if (ISBN === "") {
            alert("Please enter valid ISBN");
        }
        else {
            axios.get("http://localhost:3001/book/" + ISBN)
                .then((response) => {       
                    this.setState({
                        form : true,
                        BookIsbn : ISBN
                    })
                    document.getElementById("author").value = response.data.book[0].author; 
                    document.getElementById("title").value = response.data.book[0].title;
                    document.getElementById("desc").value = response.data.book[0].desc;
                    document.getElementById("publishDate").value = response.data.book[0].publishedDate;
                    document.getElementById("publisher").value = response.data.book[0].publisher;
                    document.getElementById("imageurl").value = response.data.book[0].picUrl;
                    document.getElementById("page").value = response.data.book[0].totalPage;
                    document.getElementById("category").value = response.data.book[0].category;
                    document.getElementById("quantity").value = response.data.book[0].quantity;
                    
                    alert(response.data.message);
                    

                    
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        }
    }
    updateBookhandler =(event) =>{
        console.log(this.state.BookIsbn)
        alert('in searchbook')
        console.log('response.data')
        var totalPageInt = parseInt(event.target.page.value,10);
        var quantityInt = parseInt(event.target.quantity.value,10);
        var dataObject = {isbn:this.state.BookIsbn, title:event.target.title.value ,
                          author:event.target.author.value ,desc:event.target.desc.value ,
                          publishDate:event.target.publishDate.value ,
                          publisher:event.target.publisher.value,picUrl:event.target.imageurl.value ,
                          totalPage:totalPageInt ,category:event.target.category.value, quantity:quantityInt};
                          console.log(dataObject)
        // alert('isbn:'+this.state.BookIsbn ,'title:'+event.target.title.value ,
        //     'author:'+event.target.author.value ,'publishDate:'+event.target.publishDate.value ,
        //     'publisher:'+event.target.publisher.value,'picUrl:'+event.target.imageurl.value ,
        //     'totalPage:'+totalPageInt ,'category:'+event.target.category.value, 'quantity:'+quantityInt)
          
        axios.post('http://localhost:3001/book/updateBook',dataObject)
        .then((response)=>{
            alert(response.data.message);
            console.log(dataObject)
            document.getElementById("updateBookForm").reset();
        })
        .catch((err)=>{alert(err.response.data.message);});
        event.preventDefault();
    }

    render(){
        let block = (<div className="container">
        <form className="mx-auto" id="updateBookForm" onSubmit={this.updateBookhandler}>
                    <div>
                        <div>
                        </div> 
                        <div className="main-login main-center">
                                <div className="form-group">
                                    <label for="name" className="cols-sm-2 control-label">Book Title:</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <input type="text" className="form-control" name="title" id="title"  placeholder="Enter Title"/>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="form-group">
                                    <label for="email" className="cols-sm-2 control-label">Author</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <input type="text" className="form-control" name="author" id="author"  placeholder="Enter Author"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="email" className="cols-sm-2 control-label">Decsription</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <input type="text" className="form-control" name="desc" id="desc"  placeholder="Enter Description"/>
                                        </div>
                                    </div>
                                </div>
        
                                
                                <div className="form-group">
                                    <label for="password" className="cols-sm-2 control-label">Number of pages</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <input type="text" className="form-control" name="page" id="page"  placeholder="Enter Number of pages:"/>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="form-group">
                                    <label for="confirm" className="cols-sm-2 control-label">Published Date</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <input type="text" className="form-control" name="publishDate" id="publishDate"  placeholder="Enter Publish Date:"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="confirm" className="cols-sm-2 control-label">Publisher</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <input type="text" className="form-control" name="publisher:" id="publisher"  placeholder="Enter Published Date:"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="confirm" className="cols-sm-2 control-label">Book Image URL</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <input type="text" className="form-control" name="imageurl" id="imageurl"  placeholder="Enter Image Url"/>
                                        </div>
                                    </div>
                                </div>
        
                                 <div className="form-group">
                                    <label for="confirm" className="cols-sm-2 control-label">Book category</label>
                                    <div className="cols-sm-10">
                                    <div className="input-group">
                                    <select name="category" className="form-control" id="category" required>
                                    <option value=""> -- Select a Category -- </option>
                                    <option value="Text Book">Text Book</option>
                                    <option value="Computer and Tech">Computer and Tech</option>
                                    <option value="Science">Science</option>
                                    <option value="Bussiness">Bussiness</option>
                                    <option value="Biographies">Biographies</option>
                                    <option value="History">History</option>
                                    <option value="Arts and Music">Arts and Music</option>
                                    <option value="Kids">Kids</option>
                                    <option value="Comics">Comics</option>
                                    <option value="Health and fitness">Health and fitness</option>
                                    <option value="Romance">Romance</option>
                                </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="confirm" className="cols-sm-2 control-label">Total Quantity</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <input type="text" className="form-control" name="quantity" id="quantity"  placeholder="Enter No of copies"/>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="form-group ">
                                    <button type="submit" className="btn btn-primary btn-lg btn-block login-button">Update Book</button>
                                </div>
                                
                            
                        </div>
                    </div>
                    </form>
                </div>)
                let showDiv=this.state.form?block:null
        return <Aux>
        
          <div className="conatiner">
                <br />
                <div className="row ">
                    <div className="col-md-6 mx-auto">
                        <h4 align="center">Enter ISBN of the Book to Edit it</h4>
                        <div id="custom-search-input">
                            <div className="form-group">
							<div className="cols-sm-10">
								<div className="input-group">
									<input type="text" className="form-control" name="isbnInput" id="isbnInput"  placeholder="Enter ISBN of Book"/>
                                    <button type="submit" className="btn btn-primary btn-lg" onClick={this.searchHandler}>Search Book</button>
                                </div>
							</div>
						</div>

                        </div>
                    </div>
                </div>
                <br />
               
            </div>
            {showDiv}
        </Aux>
    }
}
export default EditBook;