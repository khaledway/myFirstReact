import React, { Component } from "react";

class ItemList extends Component {
    render() {

        const { items } = this.props;
        console.log({ items });



        return <div  >
            <p className="items">Items</p>
            <ol className="item-list">

                {items.map((item, index) => <li key={index}>{item.value}  {item.FirstName}  {item.LastName}  {item.UserName}
                    <div><b> number of games they've played: {item.NumberOfGames}  </b></div>
                </li>)}
            </ol>
        </div>

    }
}
export default ItemList;
