import React from 'react';


class Clock extends React.Component{

  constructor(){
    super();
    this.state = {date: new Date()};
    this.tick = this.tick.bind(this);
  }

  getcleanMinSec(num){
    if(num < 10){
      return "0" + num;
    }
    else {
      return num;
    }
  }

  getcleanHours(num){
    if(num > 12){
      num = num % 12;
    }
    return num;
  }

  tick(){
    this.setState({date : new Date()});
  }

  componentDidMount(){
    this.timeId = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timeId);
  }

  render(){
    const hours = this.getcleanHours(this.state.date.getHours());
    const minutes = this.getcleanMinSec(this.state.date.getMinutes());
    const seconds = this.getcleanMinSec(this.state.date.getSeconds());

    return (
      <div>
      <p>Time:{hours}:{minutes}:{seconds}</p>
      <p>Date:</p>
      </div>);
  }

}

export default Clock;
