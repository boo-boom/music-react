import React, { Component } from 'react';
import './style.scss';

class PageLoad extends Component {
    render() {
        return (
            <div className="page-load-container">
                <p className="load-text">加载中...</p>
            </div>
        )
    }
}

export default PageLoad;