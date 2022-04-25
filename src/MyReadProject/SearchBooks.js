import React, { Component } from "react";
import * as BooksAPI from '../BooksAPI'
import ListBooksSearch from './ListBooksSearch';

class SearchBooks extends Component

{

    state = {
        AllBooksOfSearch: []
    }

    constructor(props)
    {
        super(props);
    }


/*    AllBooksOfSearch*/
    


    handleSearch = event => {

        debugger;
        console.log("search is called")

        //let filteredBooks = this.state.AllBooks.filter(s =>
        //    s.title.toLowerCase().includes(event.target.value.toLowerCase()));

        this.setState(prevState =>
        ({
            AllBooksOfSearch: []

        }));



        let query = event.target.value.toLowerCase();



        if (query.length > 0)
        {
            BooksAPI.search(query).then(books => {
            console.log(books)
            this.setState(prevState =>
            ({
                AllBooksOfSearch: books

            }));
            console.log("AllBooksOfSearch:")
            console.log(this.state.AllBooksOfSearch)

        });

        }


        

      //  this.handleButtonToggle();




        //this.setState(prevState => ({
        //    AllBooks:
        //        (event.target.value == " " ?

        //            this.state.AllBooks : filteredBooks


        //        )
        //}));



    };



    render() {
   
        return <div className="search-books">
            <div className="search-books-bar">
                <button className="close-search"  onClick={this.props.handleButtonToggle}>Close</button>
                <div className="search-books-input-wrapper">
                    {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                    <input type="text" placeholder="Search by title or author" onChange={this.handleSearch} />

                </div>
            </div>


            <ListBooksSearch AllBooks={this.props.AllBooks} AllBooksOfSearch={this.state.AllBooksOfSearch} handelUpdateBookStatus={this.props.handelUpdateBookStatus} />
           
        </div>;

    }
}

export default SearchBooks;
