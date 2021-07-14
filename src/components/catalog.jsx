import React, { Component } from 'react';
import Item from "./item";
import "./catalog.css";
import ItemService from "../services/itemService";

class Catalog extends Component {
    state = {
    items:[],
    categories:[],
    selectedCategory: "",
};

    // display elements on the screen
    render() {
        let itemsToDisplay = this.state.items;

        if (this.state.selectedCategory) {
            //filter your items array
            itemsToDisplay = itemsToDisplay.filter((item) => itemsToDisplay.category === this.state.selectedCategory);
        }

        return(
            <div className="catalog-page">
                <h3 className="catalog-header"> Browse through our catalog of Coca Coffee: {this.state.items.length} Seasonal and Year round items to choose from. </h3>

                <div className="filter-buttons">
                    this.state.categories.map((ground => (
                    <button onClick={() => this.filterItems("")} className="btn btn-info" key={ground}>
                        {ground}
                    </button>
                ))}
                </div>

                {this.state.items.map((prod) => (
                <Item key={prod._id} prod={prod}></Item>
                ))}
            </div>
        );
    }

    // called after the render function is executed
    componentDidMount() {
        console.log("Catalog did Mount");

        // call the service to get the list of items 
        var itemService = new ItemService();
        var items = itemService.getCatalog();
        console.log(items);
        this.setState({ items: items });

    }
}

export default Catalog;