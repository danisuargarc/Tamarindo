import React from "react";

class Fact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fact: "I don't know what I'm doing."
        };
    }

    componentDidMount() {
        const encodedURI = encodeURI("https://uselessfacts.jsph.pl/random.json?language=en")
        fetch(encodedURI)
            .then((data) => data.json())
            .then((result) => {
                this.setState(() => (
                    {
                        fact: result.text.replaceAll("`", "'")
                    }));
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <p>Fun Fact: {this.state.fact}</p>
            </div>
        );
    }
}

export default Fact;
