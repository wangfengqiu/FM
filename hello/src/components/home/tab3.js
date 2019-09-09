import React, { Component } from 'react';
import { request_list,add} from "../../store/action/action";
import { NavLink, Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import Liebiao from "./liebiao";
class Tab3 extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    componentDidMount(){
        this.props.isata()
    }
    render() {
        const {list} =this.props;
        return(
            <div className="tab3">
               <div className="nav-1">
                   {
                      list&& list.map((item,index)=>{
                            return(
                                <NavLink key={index} to={`/home/feng/bottom/${index}`}>{item.c_1_title}</NavLink>
                            )
                       })
                   }
               </div>
                <div className="bottom">
                    <Route path="/home/feng/bottom/:id" component={Liebiao}></Route>
                    <Redirect to="/home/feng/bottom/0"></Redirect>
                </div>
            </div>
        )
    }
}
function aa(state){
    return{
        list:state.list
    }
}
function bb(dispatch){
    return{
       isata(){
           dispatch(request_list())
       } 
    }
}
export default connect(aa,bb)(Tab3) ;

