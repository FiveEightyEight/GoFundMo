import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            amount: 5,
            caption: '',
        }
    }

     nameValidation = () => {

    }


    render() {
        return (
            <form>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" id="nameInput" placeholder="Name" value={this.state.name} onChange={this.nameValidation}/>
                </div>
                <div class="form-group">
                    <label>Caption</label>
                    <input type="text" class="form-control" id="captionInput" placeholder="..." value={this.state.caption}/>
                </div>
                <div class="form-group">
                    <label>Amount to Donate</label>
                    <input type="range" class="custom-range" id="amountInput" min="5" max="1000" value={this.state.value} />
                    <blockquote class="blockquote text-right">
                        <p class="h3 mb-0">$ {this.state.value}</p>
                        <button type="button" class="btn btn-lg btn-success my-4">Donate</button>
                    </blockquote>
                </div>
            </form>
        )
    }

}

export default Form;