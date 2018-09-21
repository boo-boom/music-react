import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { showTabBar } from './../../static/js/utils';
import './style.scss';

class TabBar extends Component {
    render() {
        return (
            showTabBar(this.props.history.location.pathname) ? 
            <div className="tab-bar-container">
                <NavLink to="/home" className="tab-bar-item" activeClassName="activeStyle">
                    <span className="iconfont icon-logo"></span>
                    <span className="title">发现</span>
                </NavLink>
                <NavLink to="/navVideo" className="tab-bar-item" activeClassName="activeStyle">
                    <span className="iconfont icon-shipin"></span>
                    <span className="title">视频</span>
                </NavLink>
                <NavLink to="/my" className="tab-bar-item" activeClassName="activeStyle">
                    <span className="iconfont icon-music"></span>
                    <span className="title">我的</span>
                </NavLink>
                <NavLink to="/friend" className="tab-bar-item" activeClassName="activeStyle">
                    <span className="iconfont icon-pengyou"></span>
                    <span className="title">朋友</span>
                </NavLink>
            </div>
            : null
        )
    }
}

export default withRouter(TabBar);