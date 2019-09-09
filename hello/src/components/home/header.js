import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header1">想听FM</div>
                <div className="header2">
                    <input placeholder="抖音"></input>
                </div>
            </div>
        );
    }
}

export default Header;