import React, { Component } from 'react';
import QuantityPicker from "./quantityPicker";
import "./item.css";
import thumb from "./img/cafeph.jpg";

class Item extends Component {
    state = {
        quantity: 1,
    };

    render() {
        return (
            <div className="item">
                <img src={thumb} alt="Coffee Beans"></img>

                <h6>{this.props.prod.title}</h6>

                <div className="prices">
                        <label className="info">Total </label>
                        <label className="info">Price </label>
                        <label className="total-value"> ${this.getTotal()}</label>
                        <label className="price-value"> ${this.props.prod.price.toFixed(2)}</label>
                </div>

                <div className="item-controls">
                    <p>Quantity: </p><QuantityPicker onValueChange = {this.handleQuantityChange}></QuantityPicker>
                </div>
            </div>
        );
    }

    getTotal =() => {
        let total = this.props.prod.price * this.state.quantity;
        return total.toFixed(2);
    }
    handleQuantityChange = () => {
        console.log("Quantity Changed");
    }
}

export default Item;