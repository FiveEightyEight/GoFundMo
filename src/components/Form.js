import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            amount: 5,
            caption: ''
        }
    }

    resetForm = () => {
        this.setState ({
            name: '',
            amount: 5,
            caption: ''
        });
    };

    nameValidation = (e) => {
        this.setState({ name: e.target.value });
    }

    captionValidation = (e) => {
        this.setState({ caption: e.target.value });
    }

    amountValidation = (e) => {
        this.setState({ amount: parseInt(e.target.value) });
    }

    donateClick = (e) => {
        const { name, amount, caption } = this.state;

        if (!name) {
            alert('Donations require a name')
            return;
        }
        this.props.addDonation(name, amount, caption);
        this.resetForm();
    }



    render() {
        console.log(this.state);
        return (
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Name" value={this.state.name} onChange={this.nameValidation} />
                </div>
                <div className="form-group">
                    <label>Caption</label>
                    <input type="text" className="form-control" id="captionInput" placeholder="..." value={this.state.caption} onChange={this.captionValidation} />
                </div>
                <div className="form-group">
                    <label>Amount to Donate</label>
                    <input type="range" className="custom-range" id="amountInput" min="5" max="1000" value={this.state.amount} onChange={this.amountValidation} />
                    <blockquote className="blockquote text-right">
                        <p className="h3 mb-0">$ {this.state.amount}</p>
                        <button type="button" className="btn btn-lg btn-success my-4" onClick={this.donateClick}>Donate</button>
                    </blockquote>
                </div>
            </form>
        )
    }

}

export default Form;