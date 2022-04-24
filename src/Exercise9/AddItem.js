              





import React, { Component } from "react";

class AddItem extends Component {

    constructor(props) {
        super(props);
    }

    inputIsEmpty = () =>
    {
        return this.props.value === '';
    };

    noItemsFound = () => {
        return this.props.items.length === 0;
    };



    render() {

       



       


        return <div>
            <form onSubmit={this.props.addItem}>
                

                <input
                    type="text"
                    placeholder="Enter First Name..."
                    value={this.props.FirstName}
                    onChange={this.props.handleChangeFirstName}
                />

                <input
                    type="text"
                    placeholder="Enter Last Name..."
                    value={this.props.LastName}
                    onChange={this.props.handleChangeLastName}
                />
                <input
                    type="text"
                    placeholder="Enter User Name..."
                    value={this.props.UserName}
                    onChange={this.props.handleChangeUserName}
                />
                
                <button disabled={this.inputIsEmpty()}>Add</button>

            </form>

            <button onClick={this.props.deleteLastItem} disabled={this.noItemsFound()}>
                Delete Last Item
            </button>

           
        </div>

    }
}





export default AddItem;
