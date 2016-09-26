import React from 'react';

class DigitalClicker extends React.Component {
  constructor(props){
    super()

    this.state = {
      timesClicked: 0
    }
    this.clickHandler = this.clickHandler.bind(this)

  }

  clickHandler (){
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
  return (
    <div>
      <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
    </div>
    );
  }
}

module.exports = DigitalClicker
