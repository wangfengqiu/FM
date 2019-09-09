import React, { Component } from 'react';
import { request_list } from "../../store/action/action";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
class Liebiao extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    componentDidMount() {
        this.props.isata()
    }
    render() {
        const {list,isLoading} =this.props;
        const index =this.props.match.params.id
        return (
            <div className="lie">
                <div className="lie-item">
                    {
                      isLoading?<div className="isLoading">正在加载...</div>: list[index] && list[index].c_1_content.map((item,index)=>{
                          return (
                              <Link key={index} to={{ pathname: '/detail', item,index }}>
                                  <dl className="dl">
                                      <dt><img src={item.c_2_pic} alt='' /></dt>
                                      <dd>
                                          <li>简介：{item.tit}</li>
                                          <li>浏览量：{item.pic}次</li>
                                          <li>评论：{item.titla}</li>
                                      </dd>

                                  </dl>
                              </Link>
                          )
                        })
                    }
                </div>
            </div>
        );
    }
}
function aa(state) { 
    return {
        list: state.list,
        isLoading:state.isLoading
    }
}
function bb(dispatch) {
    return {
        isata() {
            dispatch(request_list())
        }
    }
}
export default connect(aa, bb)(Liebiao);
