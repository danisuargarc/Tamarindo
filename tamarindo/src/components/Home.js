import React from "react";
import Clock from "./home_helpers/Clock";
import Art from "./home_helpers/Art";
import Quote from "./home_helpers/Quote";
import Fact from "./home_helpers/Fact";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artSource: "https://truelovewords.com/wp-content/uploads/2018/12/please-forgive-me-Im-sorry-messages-for-boyfriend.jpg",
      artTitle: "Error retrieving image.",
      artDesc: "Error retrieving image.",
      artArtist: "Error retrieving image.",
      artWebLink: "https://www.artic.edu/"
    };
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
        <Quote />
        <Fact />
        <Art />
      </div>
    );
  }
}

export default Home;
