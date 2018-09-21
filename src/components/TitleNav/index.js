import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

class TitleNav extends Component {
    goBack() {
        this.props.history.goBack();
    }
    render() {
        const { title, color, bordercolor } = this.props;
        return (
            <div className="title-nav-container" style={{color:`${color}`,borderBottom:`1px solid ${bordercolor}`}}>
                <div className="nav-left" onClick={()=>{this.goBack()}}>
                    <span className="iconfont icon-back"></span>
                </div>
                <div className="nav-middle">
                    <p className="title">{title}</p>
                </div>
                <div className="nav-right">
                    <span className="iconfont icon-more"></span>
                    <span className="iconfont icon-pinghengqi"></span>
                </div>
            </div>
        )
    }
}

TitleNav.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    bordercolor: PropTypes.string,
}

TitleNav.defaultProps = {
    color: '#333',
    bordercolor: '#ddd',
}

export default withRouter(TitleNav);