import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class ListTitle extends Component {
    render() {
        return (
            <div className="list-title-container">
                <span className="title">{this.props.title}</span>
                <span className="iconfont icon-arrow-down"></span>
            </div>
        )
    }
};

ListTitle.propTypes = {
    title: PropTypes.string
}

ListTitle.defaultProps = {
    title: '推荐歌单',
}

export default ListTitle;