import './banner.css';
import React, { Component } from "react";


class Banner extends Component{
    render(){
    return (
        <div className="banner">
            <h1>{this.props.bannerContent}</h1>
        </div>
    );
    }
}

export default Banner;