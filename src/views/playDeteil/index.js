import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getPlayDetail, playAll, playAdd } from './reducer';
import TitleNav from './../../components/TitleNav';
import './style.scss';

class PlayDetail extends Component {
    componentWillMount() {
        this.props.getPlayDetail(this.props.match.params.id)
    }
    goPlayer(songId) {
        this.props.history.push('/detail');
    }
    render() {
        const { playDetail, playAll, playAdd } = this.props;
        return (
            playDetail && playDetail.playlist ?
            <div className="play-detail-container">
                <TitleNav title="歌单"/>
                <div className="play-detail-wrapper">
                    <div className="play-detail-info">
                        <div className="bg-mark" style={{backgroundImage:`url(${playDetail.playlist.coverImgUrl})`}}></div>
                        <div className="horizontal">
                            <div className="left">
                                <div className="img">
                                    <img src={playDetail.playlist.coverImgUrl} alt=""/>
                                </div>
                            </div>
                            <div className="right">
                                <p className="title">{playDetail.playlist.name}</p>
                                <div className="user">
                                    <div className="img">
                                        <img src={playDetail.playlist.creator.avatarUrl} alt=""/>
                                    </div>
                                    <p className="name">{playDetail.playlist.creator.nickname}</p>
                                    <p className="iconfont icon-arrow-down"></p>
                                </div>
                            </div>
                        </div>
                        <div className="btns-group">
                            <div className="btn">
                                <span className="iconfont icon-xiaoxi"></span>
                                <span className="title">{playDetail.playlist.commentCount}</span>
                            </div>
                            <div className="btn">
                                <span className="iconfont icon-share"></span>
                                <span className="title">{playDetail.playlist.shareCount}</span>
                            </div>
                            <div className="btn">
                                <span className="iconfont icon-xiazai"></span>
                                <span className="title">下载</span>
                            </div>
                            <div className="btn">
                                <span className="iconfont icon-duoxuan"></span>
                                <span className="title">多选</span>
                            </div>
                        </div>
                        <div className="play-btns">
                            <div className="left">
                                <span className="iconfont icon-play"></span>
                                <Link to={`/player/${playDetail.playlist.tracks[0].id}`} className="text" onClick={playAll}>
                                    <span className="txt">播放全部</span>
                                    <span className="num">(共{playDetail.playlist.tracks.length}首)</span>
                                </Link>
                            </div>
                            <div className="right">
                                <span className="iconfont icon-add"></span>
                                <span className="text">收藏（{playDetail.playlist.subscribedCount}）</span>
                            </div>
                        </div>
                    </div>
                    <div className="play-detail-list">
                        {
                            playDetail.playlist.tracks.map((item, index) => {
                                return (
                                    <Link to={`/player/${item.id}`} className="list-item" key={item.id} onClick={()=>playAdd(item)}>
                                        <div className="left">{index+1}</div>
                                        <div className="middle">
                                            <div className="left">
                                                <p className="name">{item.name}</p>
                                                <p className="desc">
                                                    {item.st ? <span className="iconfont icon-sq"></span> : null}
                                                    <span className="txt">{item.ar[0].name}-{item.al.name}</span>
                                                </p>
                                            </div>
                                            <div className="right">
                                                {item.mv ? <span className="iconfont icon-video"></span> : null}
                                                <span className="iconfont icon-more"></span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            : null
        )
    }
};

PlayDetail = connect(
    state => ({
        playDetail: state.playDetail.detail,
    }),
    { getPlayDetail, playAll, playAdd }
)(PlayDetail)

// 包了一层组件，所以使用withRouter让当前包的组件也获取到PlayDetail上面的值
export default withRouter(PlayDetail);