import React, { Component } from "react";
import UserList from "./UserListMe";

class Dashboard extends Component {
    render()
    {
        /*
        Destructuring via ES6. We're getting the profiles, users, and movies properties
        off of the pros passed into this presentational component. If you need a refresher on this syntax, check
        out this course: https://www.udacity.com/course/es6-javascript-improved--ud356
        */
        const { MoviePerUsersList} = this.props;

        const BodyMoviePerUsersList = MoviePerUsersList.map(item =>
        {
            var currentMovieID = item.MovieID;
            var currentMovieName = item.MovieName;

            var exist = item.UserModel.length > 0;
            return <li key={currentMovieID}> <h2> {currentMovieName}</h2>


                <UserList UserModelList={ item.UserModel} />


                {/*{exist*/}
                {/*    ?*/}
                {/*    <div>*/}
                {/*        <p>Liked By:</p>*/}
                {/*        <ul>*/}

                {/*            {item.UserModel.map(user =>*/}
                {/*            {*/}
                {/*                return (<li key={user.UserID}>  {user.UserName} </li>)*/}
                {/*            })*/}
                {/*            }*/}
                {/*                    </ul> </div>*/}
                {/*    : <p>None of the current users liked this movie</p>*/}
                {/*}*/}




            </li>
        });
        return <div> <ul>{BodyMoviePerUsersList} </ul> </div>;

    }
}

export default Dashboard;
