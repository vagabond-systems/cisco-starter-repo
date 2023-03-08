import React, { Component } from 'react';
import './Exhibit.css';

class Exhibit extends Component {
    render() {
        return (
            <div className="Exhibit">
                <h2 className="ExhibitHeading">{this.props.name}</h2>
                <div className="ExhibitContent">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Exhibit;
