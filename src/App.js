import React from 'react';
import logo from './logo.svg';
import './App.css';

import ItemList from './Exercise8/ItemList';
import AddItem from './Exercise8/AddItem';



class App extends React.Component {
    state = {
        value: '',
        items: [],
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    addItem = event => {
        event.preventDefault();
        this.setState(oldState => ({
            items: [...oldState.items, this.state.value],
        }));
    };

    deleteLastItem = event => {
        this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
    };

 

    render()
    {
        return (
            <div className="App">
                <header >
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <h2>Shopping List</h2>




                <AddItem addItem={this.addItem} value={this.state.value} handleChange={this.handleChange}



                    deleteLastItem={this.deleteLastItem} items={this.state.items}


                />

                <ItemList   items={this.state.items} />

            </div>
        );
    }
}

export default App;
