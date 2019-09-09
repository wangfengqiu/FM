import React, { Component } from 'react';
import {NavLink,Redirect} from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <div className="nav">      
                    <NavLink to="/home/my">我的</NavLink>    
                    <NavLink to="/home/re">热门</NavLink>     
                    <NavLink to="/home/feng">分类</NavLink>
                    <NavLink to="/home/jing">精品</NavLink> 
                    <Redirect to="/home/my"></Redirect>        
            </div>
        );
    }
}

export default Nav;