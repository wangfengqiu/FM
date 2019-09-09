import React, { Component } from 'react';
import { connect } from "react-redux";
import { request_list } from "../../store/action/action";
class Cang extends Component {
    componentDidMount() {
        this.props.isata()
    }
    render() {
        const {list} =this.props;
        console.log(list)
        return (
            <div className="cang">
                收藏页  
                {list}
            </div>
        );
    }
}
function aa(state) {
    return {
        list: state.shoucang,
    }
}
function bb(dispatch) {
    return {
        isata() {
            dispatch(request_list())
        }
    }
}
export default connect(aa, bb)(Cang);
