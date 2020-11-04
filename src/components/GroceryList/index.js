import React from 'react'

export default function GroceryList(props) {
    return (
        <div>
            <h4>Groceries to Buy</h4>
            <ul className="list-group">
                {
                    props.groceries.map((item, index) => {
                        return (
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col">
                                        {item.name}
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-primary" id={item.name} onClick={props.addToCart}>Add to Cart</button>
                                    </div>
                                </div>

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
