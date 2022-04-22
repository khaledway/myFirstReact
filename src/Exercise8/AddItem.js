              





import React, { Component } from "react";

class AddItem extends Component {

    constructor(props) {
        super(props);
    }


      //{ addItem, value, handleChange, deleteLastItem,

      // } = this.props;



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
                    placeholder="Enter New Item"
                    value={this.props.value}
                    onChange={this.props.handleChange}
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
