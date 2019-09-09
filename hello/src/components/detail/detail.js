import React, { Component } from 'react';
import Header from "../home/header";
import { request_id} from "../../store/action/action"
import {connect} from "react-redux";
class Detail extends Component {
    constructor(){
        super()
        this.state={
            flag:true
        }
    }
   
    render() {
        const list =this.props.location.item;
    //   const ind=this.props.location.index
        const {handClick} =this.props;
        return (
            <div className="detail">
                <Header/>
                <dl className="dl">
                    <dt><img src={list.img} alt='' /></dt>
                    <dd>
                        <li>简介：{list.name}</li>
                        <li>浏览量：{list.pic}次</li>
                        {/* <span onClick={()=>{handClick(list) }}>收藏</span> */}
                        {this.state.flag ? <span onClick={() => {handClick(list)}}>收藏</span> : <span onClick={() => { this.setState({ flag: !this.state.flag }) }}>已收藏</span>}
                    </dd>

                </dl>
            </div>
        );
    }
}
function aa(state){
    return{

    }
}
function bb(dispatch){
    return{
       handClick:(list)=>{
           
            dispatch(request_id(list))
       }
    }
}
export default connect(aa,bb)(Detail);