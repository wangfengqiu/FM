import React, { Component } from 'react';

class Tab1 extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    shoucang=()=>{
        this.props.history.push("/cang")
    }
    render() {
        return (
            <div className="tab1">
               <div><span>我的已购</span><span>&gt;</span></div>
                <div onClick={()=>{this.shoucang()}}><span>我的收藏</span><span>&gt;</span></div>
                <div><span>我的下载</span><span>&gt;</span></div>
                <div><span>最近收听</span><span>&gt;</span></div>
                <div className="last">问题反馈</div>
            </div>
        );
    }
}

export default Tab1;