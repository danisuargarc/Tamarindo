import React from "react";

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

export default Clock;
