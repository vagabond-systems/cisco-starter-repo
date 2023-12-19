import React, { Component } from 'react';

const client = new WebSocket('ws://localhost:55455');

class Packet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latency: null
        };
    }

    componentDidMount() {
        client.onmessage = (message) => {
            this.setState({
                latency: new Date().getTime() - message.data
            })
        };
    }

    render() {
        return (
            <span className="Packet">
                {this.state.latency}
            </span>
        );
    }
}

export default Packet;