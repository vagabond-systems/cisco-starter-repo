import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <h1>{this.props.bannerText}</h1>
            </div>
        );
    }
}

export default Banner;
