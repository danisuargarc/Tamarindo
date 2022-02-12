import React from "react";

class Art extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            source: "",
            title: "Loading image...",
            description: "Loading image...",
            artist: "Loading image...",
            link: "https://www.artic.edu/"
        };
    }

    componentDidMount() {
        const encodedURI = encodeURI("https://api.artic.edu/api/v1/artworks/234972")
        fetch(encodedURI)
            .then((data) => data.json())
            .then((result) => {
                this.setState(() => (
                    {
                        source: result.config.iiif_url + "/" + result.data.image_id + "/full/843,/0/default.jpg",
                        link: "https://www.artic.edu/artworks/" + result.data.id,
                        title: result.data.title,
                        description: result.data.thumbnail.alt_text,
                        artist: result.data.artist_title
                    }));
            })
            .catch((error) => {
                this.setState(() => (
                    {
                        title: "Error retrieving image.",
                        description: "Error retrieving image.",
                        artist: "Error retrieving image."
                    }));
                console.warn(error);
            });
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <p>{this.state.title} by {this.state.artist}</p>
                <p>{this.state.description}</p>
                <a target="_blank" rel="noopener noreferrer" href={this.state.link}><img src={this.state.source} alt={this.state.title}></img></a>
            </div>
        );
    }
}

export default Art;
