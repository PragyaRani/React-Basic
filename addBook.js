import React,{Component} from 'react'
import Aux from '../../hoc/Aux'
import axios from 'axios'
import axiosInstance from '../../../axiosBook';
class AddBook extends Component{
    state = {
        BookIsbn : '',
        form: false
    };
    saveBookhandler =(event) =>{
        var totalPageInt = parseInt(event.target.page.value,10);
        var quantityInt = parseInt(event.target.quantity.value,10);
        var dataObject = {isbn:event.target.isbn.value, title:event.target.title.value ,
                          author:event.target.author.value ,desc:event.target.desc.value ,
                          publishDate:event.target.publishDate.value ,
                          publisher:event.target.publisher.value,picUrl:event.target.imageurl.value ,
                          totalPage:totalPageInt ,category:event.target.category.value, quantity:quantityInt};
                          console.log(dataObject) 
        axios.post('http://localhost:3001/librarian/addBook',dataObject)
        .then((response)=>{
            alert(response.data.message);
            document.getElementById("addBookForm").reset();
        })
        .catch((err)=>{alert(err.response.data.message);});
        event.preventDefault();
    }

    searcbookusingIsbnhHandler = () => {
       
        var ISBN = document.getElementById("isbn").value;
       
        if (ISBN === "") {
            alert("Please enter valid ISBN");
        }
        else {
            axiosInstance.get("volumes?q=isbn:" + ISBN)
                .then((response) => {       
                    // this.setState({
                    //     form : true,
                    //     BookIsbn : ISBN
                    // })
                    console.log(response.data.items);
                    
                    if(response.data.items!=='undefined' && response.data.items!=null){
                    document.getElementById("author").value = response.data.items[0].volumeInfo.authors[0]; 
                    document.getElementById("title").value = response.data.items[0].volumeInfo.title;
                    document.getElementById("desc").value = response.data.items[0].volumeInfo.description;
                    document.getElementById("publishDate").value = response.data.items[0].volumeInfo.publishedDate;
                    document.getElementById("publisher").value = response.data.items[0].volumeInfo.publisher;
                    document.getElementById("imageurl").value = response.data.items[0].volumeInfo.imageLinks.smallThumbnail;
                    document.getElementById("page").value = response.data.items[0].volumeInfo.pageCount;
                    document.getElementById("category").value = response.data.items[0].volumeInfo.categories[0];
                    
                }
                    else{
                        alert('Sorry Book not available')
                        document.getElementById("addBookForm").reset();
                    }
                    this.setState({
                        form : true
                    })   
                    console.log('form value '+this.state.form)
                    // alert('form value '+this.state.form)
                })
                .catch((err) => {
                    alert(err);
                });
        }
    }

    render(){
       
        let block = (<Aux>
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
                                    <option value="Kids">Fiction</option>
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
                                    <button type="submit" className="btn btn-primary btn-lg btn-block login-button">Add Book</button>
                                </div>
                                </Aux>)
                let showUI=this.state.form?block:null;
                console.log(showUI)
        return <Aux>
            <div className="container">
        <form className="mx-auto" id="addBookForm" onSubmit={this.saveBookhandler}>
                    <div>
                        <div className="main-login main-center">

                                <div className="form-group">
                                    <label for="name" className="cols-sm-2 control-label">Book ISBN:</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <input type="text" className="form-control" name="isbn" id="isbn"  placeholder="Enter ISBN"/>
                                        </div><button type="submit" className="btn btn-primary btn-lg" onClick={this.searcbookusingIsbnhHandler}>Add Book using Isbn</button>
                                    </div>
                                </div>
                                {block}
                                {/* {showUI} */}
                                </div>
                    </div>
                    </form>
                </div>
            
        </Aux>
    }
}
export default AddBook;