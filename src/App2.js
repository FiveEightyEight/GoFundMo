import React, { Component } from 'react';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      color: 0,
    };

  }

  handleAddClick = () => {
    let newCount = this.state.count + 1;
    let newColor = (this.state.color + 1) % 3;

    this.setState({
      count: newCount,
      color: newColor,

    })
  }

  reset = () => {
    let newCount = 0;
    this.setState({
      count: newCount,
    })
  }

  colorMe = (num) => {
    if (num % 2 === 0) {
      return (
        <h3 className='display-4 col-12 text-danger text-center p-5'> Counter: {this.state.count} </h3>
      )
    } else {
      return (
        <h3 className='display-4 col-12 text-success text-center p-5'> Counter: {this.state.count} </h3>
      )
    }
  }

  cycle = (color) => {
    // const colors = ['danger', 'primary', 'success'];

    switch (color) {

      case 0:
        return <h3 className='display-4 col-12 text-danger text-center p-5'> Counter: {this.state.count} </h3>

      case 1:
        return <h3 className='display-4 col-12 text-primary text-center p-5'> Counter: {this.state.count} </h3>

      case 2:
        return <h3 className='display-4 col-12 text-success text-center p-5'> Counter: {this.state.count} </h3>

      default:
        break;
    }
  }

  count100 = () => {

    const clickIt = () => {
      this.handleAddClick();

        count += 1;



        if(count > 99) {

          clearInterval(myVar)
        }

    }

    let myVar = setInterval(clickIt, 50);
    let count  = 0;



  }

  render() {

    


    return (
      <>
        <div className='bg-dark container'>

          <div className='row p-5'>

            {this.cycle(this.state.color)}
            <button className='col-12 btn-warning btn-lg' onClick={this.handleAddClick}> Add </button>

            <button className='col-12 btn-danger btn-lg' onClick={this.reset}> Reset </button>
            <button className='col-12 btn-secondary btn-lg' onClick={this.count100}> + <em>100</em> </button>

          </div>


        </div>

      </>
    );
  }
}

export default App;
