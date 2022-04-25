import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import SearchBooks from './MyReadProject/SearchBooks';
import ListBooks from './MyReadProject/ListBooks';



class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false,
        AllBooks:[]
    }

    


    handleButtonToggle = () => {
        if (this.state.showSearchPage == true) {
            this.setState({ showSearchPage: false });
        }
        else
        {
            this.setState({ showSearchPage: true });
        }
    };



    handelUpdateBookStatus = (selectedOption , book) =>
    {


        let UpdateBookStatus = selectedOption.target.value
        BooksAPI.update(book, UpdateBookStatus).then(booksIDs =>
        {
           
            let booksToBeUpdated = this.state.AllBooks;


            booksToBeUpdated = this.state.AllBooks.map(book =>
            {
                if (booksIDs.read.includes(book.id)) {
                    return { ...book, shelf: 'read' };
                }
                else if (booksIDs.wantToRead.includes(book.id))
                {
                   return { ...book, shelf: 'wantToRead' };
                }
                else

                {
                    return { ...book, shelf: 'currentlyReading' };
              }


                return book;
            });


            //console.log("books intial:"+ booksToBeUpdated);
            //booksToBeUpdated = booksToBeUpdated.map(s => s.shelf = "read");
            //console.log("books Updated:" +booksToBeUpdated);



            this.setState({
                AllBooks: booksToBeUpdated,
            
            });

        }
        );


    }

    handleSearch = event =>
    {

        console.log("search is called")

        //let filteredBooks = this.state.AllBooks.filter(s =>
        //    s.title.toLowerCase().includes(event.target.value.toLowerCase()));


        let filteredBooks = this.state.AllBooks;

        let query = event.target.value.toLowerCase();

        BooksAPI.search(query).then(books =>
        {
            console.log(books)
            this.setState(prevState => ({
                AllBooks: books
                    
            }));
        });



        this.handleButtonToggle();




        //this.setState(prevState => ({
        //    AllBooks:
        //        (event.target.value == " " ?

        //            this.state.AllBooks : filteredBooks


        //        )
        //}));



    };


    ///////////////////////
    componentDidMount()
    {
        BooksAPI.getAll().then(books => this.setState({ AllBooks: books }))
        console.log(this.state.AllBooks)
    }
    ////////////////////////////////////////////////////////////////////////////////
    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ?
                    (
                        <SearchBooks handleButtonToggle={this.handleButtonToggle} handleSearch={this.handleSearch} />
                ) : (
                        <ListBooks AllBooks={this.state.AllBooks} handleButtonToggle={this.handleButtonToggle} handelUpdateBookStatus={this.handelUpdateBookStatus}  />
                    )}
            </div>
        )
    }
}

export default BooksApp
