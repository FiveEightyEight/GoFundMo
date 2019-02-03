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

      raised: 2500,

    };

  }

  /*
    <ul class="col-4 list-unstyled recent-donations">
                <h5 class='my-4'>Recent Donations</h5>
                {(this.state.donations.length > 0) ? this.state.donations.map((obj, i) => {
                  return <Donations name={obj.name} amount={obj.amount} caption={obj.caption} key={i} />
                }) : <h3> No Donations</h3>}
              </ul>
  */

  render() {


    return (
      <>
        <Headers name={this.state.name} description={this.state.description} />

        <div class='container'>
          <div class='row'>

            <DonationsList donations={this.state.donations} />

            <div class='col-8'>
              <Progress raised={this.state.raised} reach={this.state.reach}/>
            
              <hr />

              <Form />

            </div>


          </div>
        </div>

      </>
    );
  }
}

export default App;
