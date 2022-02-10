import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h3>Home</h3>
        <Clock />
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      day: new Date().toLocaleString("en-US", { weekday: "long" }),
      date: new Date().toLocaleString("en-US", { dateStyle: "long" })
    };
  }

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.setState(() => (
        {
          time: new Date().toLocaleTimeString()
        }));
    }, 500)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>{this.state.day}</p>
        <p>{this.state.date}</p>
        <p>{this.state.time}</p>
      </div>
    );
  }
}

export default Home;
