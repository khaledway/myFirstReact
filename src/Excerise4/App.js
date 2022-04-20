

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Excerise4/DashboardMe";






class App extends Component {
    /*
    The constructor is a "special method for creating and initializing an object."
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). The
    Component's constructor is the first thing that runs when the object is created.
    */
    constructor(props) {
        super(props);

        this.state = {
            profiles: [
                {
                    id: 1,
                    userID: "1",
                    favoriteMovieID: "1"
                },
                {
                    id: 2,
                    userID: "2",
                    favoriteMovieID: "1"
                },
                {
                    id: 3,
                    userID: "4",
                    favoriteMovieID: "5"
                },
                {
                    id: 4,
                    userID: "5",
                    favoriteMovieID: "2"
                },
                {
                    id: 5,
                    userID: "3",
                    favoriteMovieID: "5"
                },
                {
                    id: 6,
                    userID: "6",
                    favoriteMovieID: "4"
                }
            ],
            users: {
                1: {
                    id: 1,
                    name: "Jane Jones",
                    userName: "coder"
                },
                2: {
                    id: 2,
                    name: "Matthew Page",
                    userName: "mpage"
                },
                3: {
                    id: 3,
                    name: "Autumn Green",
                    userName: "user123"
                },
                4: {
                    id: 4,
                    name: "John Doe",
                    userName: "user123"
                },
                5: {
                    id: 5,
                    name: "Lauren Johnson",
                    userName: "user123"
                },
                6: {
                    id: 6,
                    name: "Nicholas Lain",
                    userName: "user123"
                }
            },
            movies: {
                1: {
                    id: 1,
                    name: "Planet Earth 1"
                },
                2: {
                    id: 2,
                    name: "Selma"
                },
                3: {
                    id: 3,
                    name: "Million Dollar Baby"
                },
                4: {
                    id: 4,
                    name: "Forrest Gump"
                },
                5: {
                    id: 5,
                    name: "Get Out"
                }
            },


        }


        this.MoviePerUsersListModified = [];
        var objItem;
        this.MoviePerUsersList = [];



        this.MoviePerUsersListModified = Object.values(this.state.movies).map(mo => {
            objItem = {};
            var newMovieID = mo.id;
            var newMovieName = mo.name;
            var userIdOfMovie = this.state.profiles.filter(s => s.favoriteMovieID == newMovieID).map(s => s.userID);
            /*            var UserNames = Object.values(users).filter(s => userIdOfMovie.includes(s.id.toString())).map(s => s.name);*/
            var UserModel = Object.values(this.state.users).filter(s => userIdOfMovie.includes(s.id.toString())).map(({ id, name }) => ({ id, name }));


            objItem.MovieID = newMovieID;
            objItem.MovieName = newMovieName;
            objItem.UserModel = UserModel;
            this.MoviePerUsersList.push(objItem)
        });




        //this.MoviePerUsersList =
        //    [
        //        {
        //            MovieID: 1,
        //            MovieName: "Planet Earth 1",
        //            UserModel:
        //                [
        //                    {
        //                        UserID: 1,
        //                        UserName: "Khaled",
        //                    },
        //                    {
        //                        UserID: 2,
        //                        UserName: "Ahmed",
        //                    },
        //                ],
        //        },
        //        {
        //            MovieID: 2,
        //            MovieName: "Million Dollar Baby",
        //            UserModel:
        //                [
        //                    {
        //                        UserID: 3,
        //                        UserName: "Kamel",
        //                    },
        //                    {
        //                        UserID: 4,
        //                        UserName: "Ayman",
        //                    },
        //                ],
        //    },
        //    {
        //        MovieID: 3,
        //        MovieName: "Get Out",
        //        UserModel: [],
        //    },
        //    ];





        //profiles.forEach(profile =>
        //{
        //    const movieID = profile.favoriteMovieID;

        //    if (this.usersByMovie[movieID])
        //    {
        //        this.usersByMovie[movieID].push(profile.userID);
        //    } else
        //    {
        //        this.usersByMovie[movieID] = [profile.userID];
        //    }
        //});
    }

    /*
    The render method gets called automatically every time the value of the
    component's props changes.
    */
    render() {
        return (
            <div>
                <header >
                    {/*   <img  className="App-logo" alt="logo" />*/}
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <h2>How Popular is Your Favorite Movie?</h2>

                <Dashboard MoviePerUsersList={this.MoviePerUsersList}
                />

            </div>
        );
    }
}

export default App;
