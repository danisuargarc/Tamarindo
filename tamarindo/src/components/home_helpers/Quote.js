import React from "react";

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "I don't know what I'm doing.",
            author: "Daniel"
        };
    }

    componentDidMount() {
        const encodedURI = encodeURI("https://game-of-thrones-quotes.herokuapp.com/v1/random")
        fetch(encodedURI)
            .then((data) => data.json())
            .then((result) => {
                this.setState(() => (
                    {
                        quote: result.sentence,
                        author: result.character.name
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
                <p>"{this.state.quote}" - {this.state.author}</p>
            </div>
        );
    }
}

export default Quote;
