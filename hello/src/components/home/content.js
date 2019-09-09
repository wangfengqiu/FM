import React, { Component } from 'react';
import Tab1 from "./tab1";
import Tab2 from "./tab2";
import Tab3 from "./tab3";
import Tab4 from "./tab4";
import {Switch,Route,Redirect} from "react-router-dom";
class Content extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route path="/home/my" component={Tab1}></Route>
                    <Route path="/home/re" component={Tab2}></Route>
                    <Route path="/home/feng" component={Tab3}></Route>
                    <Route path="/home/jing" component={Tab4}></Route>
                    <Redirect to="/home/my"></Redirect>
                </Switch>
            </div>
        );
    }
}

export default Content;