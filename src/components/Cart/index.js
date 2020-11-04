import React from 'react'

export default function Cart(props) {
    return (
        <div>
            <h4>Cart</h4>
            <ul className="list-group">
                {
                    props.groceries.map(item => {
                        return (
                            <li className="list-group-item">{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}