import React, { Component } from "react";
import * as BooksAPI from '../BooksAPI'

class ListBooks extends Component {

    constructor(props) {
        super(props);
    }
 

    //componentDidMount() {
    //    fetch(
    //        "https://jsonplaceholder.typicode.com/users")
    //        .then((res) => res.json())
    //        .then((json) => {
    //            this.setState({
    //                items: json,
    //                DataisLoaded: true
    //            });
    //        })
    //}

    render() {



        return <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    this.props.AllBooks.filter(s => s.shelf=="currentlyReading").map(book =>
                                    {
                                        console.log(book);


                                        return (
                                            <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                        <div className="book-cover" style={{
                                                            width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')'     
                                                        }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select>
                                                            <option value="move" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                    <div className="book-title">{ book.title}</div>
                                                    <div className="book-authors">{book.authors}</div>
                                            </div>
                                        </li>)
                                    })
                                }


                            </ol>
                        </div>
                    </div>

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    this.props.AllBooks.filter(s => s.shelf == "wantToRead").map(book => {
                                        console.log(book);


                                        return (
                                            <li key={book.id}>
                                                <div className="book">
                                                    <div className="book-top">
                                                        <div className="book-cover" style={{
                                                            width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')'
                                                        }}></div>
                                                        <div className="book-shelf-changer">
                                                            <select>
                                                                <option value="move" disabled>Move to...</option>
                                                                <option value="currentlyReading">Currently Reading</option>
                                                                <option value="wantToRead">Want to Read</option>
                                                                <option value="read">Read</option>
                                                                <option value="none">None</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="book-title">{book.title}</div>
                                                    <div className="book-authors">{book.authors}</div>
                                                </div>
                                            </li>)
                                    })
                                }
                            </ol>
                        </div>
                    </div>


                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    this.props.AllBooks.filter(s => s.shelf == "read").map(book => {
                                        console.log(book);


                                        return (
                                            <li key={book.id}>
                                                <div className="book">
                                                    <div className="book-top">
                                                        <div className="book-cover" style={{
                                                            width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')'
                                                        }}></div>
                                                        <div className="book-shelf-changer">
                                                            <select>
                                                                <option value="move" disabled>Move to...</option>
                                                                <option value="currentlyReading">Currently Reading</option>
                                                                <option value="wantToRead">Want to Read</option>
                                                                <option value="read">Read</option>
                                                                <option value="none">None</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="book-title">{book.title}</div>
                                                    <div className="book-authors">{book.authors}</div>
                                                </div>
                                            </li>)
                                    })
                                }
                            </ol>
                        </div>
                    </div>


                </div>
            </div>
            <div className="open-search">


                <button onClick={this.props.handleButtonToggle}>Add a book</button>
            </div>
        </div>

    }
}

export default ListBooks;
