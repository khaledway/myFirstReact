import React from 'react';
import logo from './logo.svg';
import './App.css';

import ItemList from './Exercise9/ItemList';
import AddItem from './Exercise9/AddItem';



class App extends React.Component {
    state =
        {
            FirstName: '',
            LastName: '',
            UserName: '',
            NumberOfGames: 0,


            itemStyleDisplay: 'block',
            searchStyleDisplay: 'none',

            currentMode:0,

            itemObj:
            {
                FirstName: '',
                LastName: '',
                UserName: '',
                NumberOfGames: 0,
            },
            items: [],


    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    handleChangeFirstName = event =>
    {
        this.setState({ FirstName: event.target.value });
    };
    handleChangeLastName = event => {
        this.setState({ LastName: event.target.value });
    };

    handleChangeUserName = event => {
        this.setState({ UserName: event.target.value });
    };



    

    handleSearch = event =>
    {
        this.setState(prevState => ({
            items:

                (event.target.value==" "?

                    this.state.items :
                    this.state.items.filter(s =>
                        s.FirstName.includes(event.target.value) ||
                        s.LastName.includes(event.target.value) ||
                        s.UserName.includes(event.target.value))

            )
        }));


        this.handleDisplayToggle();
    };


    handleDisplayToggle = () =>
    {
        if (this.state.currentMode == 0)
        {
            this.setState({ currentMode: 1 });
            this.setState({ itemStyleDisplay: 'none' });
            this.setState({ searchStyleDisplay: 'block' });


        }
        else
        {
            this.setState({ currentMode: 0 });
            this.setState({ itemStyleDisplay: 'block' });
            this.setState({ searchStyleDisplay: 'none' });
        }
      
    };




    addItem = event => {
        event.preventDefault();



        this.setState({
            itemObj: {
                FirstName: this.state.FirstName,
                LastName: this.state.LastName,
                UserName: this.state.UserName,
                NumberOfGames: this.state.NumberOfGames,
            }

        });
        this.setState(oldState => ({
            items: [...oldState.items, this.state.itemObj 
            ],
        }));
    };

    deleteLastItem = event => {
        this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
    };




   

    render() {
        return (

            <div className="App">
                <header >
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <h2>Shopping List</h2>


                <button onClick={this.handleDisplayToggle}> Search</button>



                <div style={{ display: this.state.searchStyleDisplay }}>
                    <input
                    type="text"
                        placeholder="Search............"
                        onBlur={this.handleSearch}
                />
                </div>

                <div style={{ display: this.state.itemStyleDisplay }}>

                 
                <AddItem addItem={this.addItem}
                    FirstName={this.state.FirstName}
                    LastName={this.state.LastName}
                    UserName={this.state.UserName}
                    handleChangeFirstName={this.handleChangeFirstName}
                    handleChangeLastName={this.handleChangeLastName}
                    handleChangeUserName={this.handleChangeUserName}
                    deleteLastItem={this.deleteLastItem} items={this.state.items}
                />
                <ItemList items={this.state.items} itemStyleDisplay={this.state.itemStyleDisplay} />
  


                </div>




            </div>
        );
    }
}

export default App;
