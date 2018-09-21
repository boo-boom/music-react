import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatPlayCount } from './../../static/js/utils';
import './style.scss';

class SongList extends Component {
    render() {
        const { playlists, playDetail } = this.props;
        return (
            <div className="song-list-container">
                <ul className="song-list">
                    {
                        playlists.map(item => {
                            return (
                                <li className="song-item" key={item.id} onClick={()=>playDetail(item.id)}>
                                    <Link to={`/playDeteil/${item.id}`}>
                                        <div className="img">
                                            <img src={item.coverImgUrl} alt=""/>
                                            <div className="play-num">
                                                <span className="iconfont icon-headset"></span>
                                                <span className="num">{formatPlayCount(item.playCount)}</span>
                                            </div>
                                        </div>
                                        <p className="title">{item.name}</p>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
};

SongList.propTypes = {
    playlists: PropTypes.array.isRequired
}

export default SongList;