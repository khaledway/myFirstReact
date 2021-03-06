import React, { Component } from "react";
import * as BooksAPI from '../BooksAPI'

class ListBooksSearch extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        console.log("AllBooksOfSearch in search");
        let testsearchBook = this.props.AllBooksOfSearch;
        console.log(testsearchBook);

        return <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Book Result.......</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    (this.props.AllBooksOfSearch.length > 0 ? this.props.AllBooksOfSearch.map(book => {

                                        let img = (book.imageLinks ? book.imageLinks.thumbnail : "");
                                        console.log(this.props.AllBooks)

                                        

                                        let currentShelf = this.props.AllBooks.filter(s => s.id == book.id);
                                        let currentShelfValue = "";

                                        if (currentShelf.length>0)
                                        {
                                            currentShelfValue = currentShelf[0].shelf;
                                        }

                                        return (
                                            <li key={book.id}>
                                                <div className="book">
                                                    <div className="book-top">
                                                        <div className="book-cover" style={{
                                                            width: 128, height: 193, backgroundImage: 'url(' + img +


                                                                ')'
                                                        }}></div>
                                                        <div className="book-shelf-changer">

                                                            <select value={currentShelfValue} onChange={(selectedOption) => this.props.handelUpdateBookStatus(selectedOption, book)}>
                                                                <option value="move" disabled>Move to...</option>
                                                                <option value="none">None</option>
                                                                <option value="currentlyReading">Currently Reading</option>
                                                                <option value="wantToRead" >Want to Read</option>
                                                                <option value="read">Read</option>
                                                                
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="book-title">{book.title}</div>
                                                    <div className="book-authors">{book.authors}</div>
                                                </div>
                                            </li>)
                                    }):<div>Not Result</div>)
                                }


                            </ol>
                        </div>
                    </div>

                    


                    


                </div>
            </div>
        </div>

    }
}

export default ListBooksSearch;
