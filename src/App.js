import React, { Component } from 'react';

// import Buttons from './components/Buttons';
import Headers from './components/Headers';
import Progress from './components/Progress';
import Form from './components/Form';



import DonationsList from './containers/DonationList';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Go Fund Mo',
      description: 'Help me go on a vacation to a beach somewhere',
      reach: 5000,

      //  { name: 'Bob', amount: 50, caption: 'Sneeze' }
      donations: [],

      raised: 0,

    };

  }

  addDonation = (name, amount, caption) => {
    const arr = this.state.donations;
    arr.unshift({name, amount, caption})
    let newAmount = amount + this.state.raised;
    this.setState({
      donations: arr,
      raised: newAmount,
    })
  }



  render() {



    return (
      <>
        <Headers name={this.state.name} description={this.state.description} />
        <div className='container'>
          <div className='row'>
            <DonationsList donations={this.state.donations} />
            <div className='col-8'>
              <Progress raised={this.state.raised} reach={this.state.reach}/>
              <hr />
              <Form addDonation={this.addDonation}/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
