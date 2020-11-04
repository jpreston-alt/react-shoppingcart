import React, { Component } from 'react'

export default class InputForm extends Component {
    state = {
        item: "",
        amount: ""
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        // console.log(value /, name);
        this.setState({
            [name]: value
        })
        console.log(this.state);
    };

    submitForm = (event) => {
        event.preventDefault();
        this.props.addGrocery(this.state.item, this.state.amount);
        this.setState({ item: "", amount: "" })
    }

    render() {
        return (
            <form>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Item"
                        name="item"
                        value={this.state.item}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Amount"
                        name="amount"
                        value={this.state.amount}
                        onChange={this.handleInputChange}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit" onClick={this.submitForm}>Button</button>
                    </div>
                </div>
            </form>
        )
    }
}
