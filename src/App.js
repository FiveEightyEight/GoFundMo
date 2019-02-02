import React, { Component } from 'react';

import Buttons from './components/Buttons';
import Headers from './components/Headers';
import Donations from './components/Donations';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      donations: [{ name: 'Robert', amount: 400, caption: 'takeover the world' },
      { name: 'Bill', amount: 30, caption: 'Cheat' }, 
      { name: 'Bob', amount: 50, caption: 'Sneeze' }
    ],

    };

  }

  render() {


    return (
      <>
        <Headers name={'Rob'} discription={'Help me take over the world'} />

        <div class='container'>
          <div class='row'>
            <ul class="col-4 list-unstyled recent-donations">
              <h5 class='my-4'>Recent Donations</h5>
              {this.state.donations.map((obj, index) => {
                return <Donations name={obj.name} amount={obj.amount} caption={obj.caption}/>
              })}
            </ul>
          </div>
        </div>

      </>
    );
  }
}

export default App;
