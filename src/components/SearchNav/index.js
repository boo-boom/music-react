import React, { Component } from 'react';
import './style.scss';

class SearchNav extends Component {
    render() {
        return (
            <div className="search-nav-container">
                <div className="search-nav-left">
                    <span className="iconfont icon-huatong"></span>
                </div>
                <div className="search-nav-input">
                    <p className="span-main">
                        <span className="iconfont icon-chaxun"></span>
                        <span className="text">卫兰 · 最近很火爆</span>
                    </p>
                </div>
                <div className="search-nav-right">
                    <span className="iconfont icon-pinghengqi"></span>
                </div>
            </div>
        )
    }
};

export default SearchNav;