import React, { Component } from 'react';
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
class Tab2 extends Component {
    componentDidMount(){
        new Swiper(".swiper-container",{
            autoplay:{
                delay:2000,
                disableOnInteraction:false
            },
            loop:true,
            pagination:{
                el:".swiper-pagination",
                clickable:true
            }
        })
    }
    render() {
        return (
            <div className="tab2">
                {/* swiper */}
                <div className="swiper">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"><img src="../a3.jpg" alt=""/></div>
                            <div className="swiper-slide"><img src="../a2.jpg" alt=""/></div>
                            <div className="swiper-slide"><img src="../b.jpg" alt=""/></div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                {/* 导航图标 */}
                <div className="icon">
                    <li>
                        <span><i className="fa fa-handshake-o" aria-hidden="true"></i></span>
                        
                        网络小说
                    </li>
                    <li>
                        <span className="aa"><i className="fa fa-video-camera" aria-hidden="true"></i></span>
                        情感
                    </li>
                    <li>
                        <span className="bb"><i className="fa fa-hand-peace-o" aria-hidden="true"></i></span>
                        财经
                    </li>
                    <li>
                        <span className="cc"><i className="fa fa-android" aria-hidden="true"></i></span>
                      相声
                    </li>
                    <li>
                        <span className="dd"><i className="fa fa-gratipay" aria-hidden="true"></i></span>
                       儿童
                    </li>
                </div>
                {/* 视频图 */}
                <div className="pin">
                    <div>资讯联播</div>
                    <div className="a1">轻松一刻</div>
                    <div className="a2">情感电台</div>
                    <div className="a3">哄娃入睡</div>
                    <div className="a4">放轻松音乐</div>
                    <div className="a5">戏曲过把瘾</div>
                </div>
            </div>
        );
    }
}


export default Tab2;
