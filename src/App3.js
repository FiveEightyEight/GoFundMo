import React, { Component } from 'react';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      banned: { trump: true, hitler:true},
    };

  }

  handleNameChange = (event) => {

    // if (event.keyCode === 13) {
    const currentName = event.target.value

    this.setState({
      name: currentName,
    },
      () => {
        // event.target.value = '';
      })
    // }

  }

  checkBanned = () => {
    const currentName = this.state.name.toLocaleLowerCase();
    if (this.state.banned[currentName]) {
      return <p className='col-12 text-center text-white display-3'>Fuck off {this.state.name}</p>
    } else {
      return <p className='col-12 text-center text-white display-3'>Welcome back {this.state.name}</p>
    }

  }

  render() {


      return (
        <>
          <div className='bg-dark container p-5'>

            <div className='row p-5'>

              <input className='col-12 display-1' type='text' onChange={this.handleNameChange} />
              {this.checkBanned()}

            </div>
          </div>

        </>
      );
  }
}

export default App;
