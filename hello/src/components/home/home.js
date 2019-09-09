import React, { Component } from 'react';
import Header from "./header";
import Nav from "./nav";
import Content from "./content";
class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <Nav />
                    <Content />
            </div>
        );
    }
}

export default Home;