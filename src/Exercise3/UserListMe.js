import React, { Component } from "react";

class UserList extends Component

{
    render() {
        /*
        Destructuring via ES6. We're getting the profiles, users, and movies properties
        off of the pros passed into this presentational component. If you need a refresher on this syntax, check
        out this course: https://www.udacity.com/course/es6-javascript-improved--ud356
        */
        const {UserModelList} = this.props;
        var exist = UserModelList.length > 0;

        return (
           UserModelList.length > 0?
           <div> 
                <p>Liked By:</p> 
                    <ul>
                          { 
                            UserModelList.map(user =>
                            {
                                console.log(user);
                                return (<li key={user.id}>  {user.name} </li>)
                            })
                          }
                    </ul>
                </div>
            : <p>None of the current users liked this movie</p> 
            )
    }
}

export default UserList;
