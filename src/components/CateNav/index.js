import React, { Component } from 'react';
import './style.scss';

class CateNav extends Component {
    render() {
        return (
            <div className="cate-nav-container">
                <ul className="cate-nav">
                    <li className="cate-item">
                        <span className="iconfont icon-syj"></span>
                        <span className="item-title">私人FM</span>
                    </li>
                    <li className="cate-item">
                        <span className="iconfont icon-jrtj"></span>
                        <span className="item-title">今日推荐</span>
                    </li>
                    <li className="cate-item">
                        <span className="iconfont icon-music"></span>
                        <span className="item-title">歌单</span>
                    </li>
                    <li className="cate-item">
                        <span className="iconfont icon-phb"></span>
                        <span className="item-title">排行榜</span>
                    </li>
                </ul>
            </div>
        )
    }
};

export default CateNav;