import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCurPlayerInfo, setPlaying, setSongReady, prevSong, nextSong } from './reducer';
import TitleNav from './../../components/TitleNav';
import disc from './../../static/img/disc.png';

import './style.scss';

class Player extends Component {
    componentWillMount() {
        const { match, getCurPlayerInfo } = this.props
        getCurPlayerInfo(match.params.id)
    }
    componentWillUnmount() {
        const { setPlaying, setSongReady } = this.props
        setPlaying(false)
        setSongReady(false)
        this.audio.pause()
    }
    changePlaying() {
        const { playing, songReady, setPlaying } = this.props;
        if(songReady) {
            setPlaying(!playing)
            if(playing) {
                this.audio.pause()
            } else {
                this.audio.play()
            }
        } 
    }
    ready() {
        const { setPlaying, setSongReady } = this.props
        setPlaying(true)
        setSongReady(true)
        this.audio.play()
    }
    playPrevSong() {
        let { playerData, prevSong, curIndex, getCurPlayerInfo } = this.props
        let newIndex = 0
        if(playerData.length > 1) {
            curIndex--
            if(curIndex < 0) {
                newIndex = playerData.length - 1
            } else {
                newIndex = curIndex
            }
            prevSong(newIndex)
            getCurPlayerInfo(playerData[newIndex].id)
        }
    }
    playNextSong() {
        let { playerData, nextSong, curIndex, getCurPlayerInfo } = this.props
        let newIndex = 0
        if(playerData.length > 1) {
            curIndex++
            if(curIndex === playerData.length) {
                newIndex = 0
            } else {
                newIndex = curIndex
            }
            nextSong(newIndex)
            getCurPlayerInfo(playerData[newIndex].id)
        }
    }
    render() {
        const { playerData, playing, curIndex } = this.props;
        return (
            playerData.length ? 
            <div className="player-container">
                <div className="full-player">
                    <TitleNav title={playerData[curIndex].name} color="#fff" bordercolor="transparent"/>
                    <div className="bg-mark" style={{backgroundImage:`url(${playerData[curIndex].pic})`}}></div>
                    <div className={`cd-rotate ${playing?'play':'play pause'}`}>
                        <div className="img">
                            <img src={playerData[curIndex].pic} alt=""/>
                        </div>
                        <div className="disc">
                            <img src={disc} alt=""/>
                        </div>
                    </div>
                    <div className="playbtn-group">
                        <div className="iconfont icon-danqu"></div>
                        <div className={`iconfont icon-shangyishou ${playerData.length>1?'':'disabled'}`} onClick={this.playPrevSong.bind(this)}></div>
                        <div className={`iconfont icon-${playing?'bofang':'zanting'}`} onClick={this.changePlaying.bind(this)}></div>
                        <div className={`iconfont icon-xiayishou ${playerData.length>1?'':'disabled'}`} onClick={this.playNextSong.bind(this)}></div>
                        <div className="iconfont icon-liebiao"></div>
                    </div>
                    <audio src={playerData[curIndex].url} ref={(audio)=>{this.audio=audio}} onCanPlay={this.ready.bind(this)}>您的浏览器不支持 audio 标签。</audio>
                </div>

                <div className="mini-player"></div>
            </div>
            : null
        )
    }
}

Player = connect(
    state => ({
        playerData: state.player.playerData,
        playing: state.player.playing,
        curIndex: state.player.curIndex,
        songReady: state.player.songReady,
    }),
    { getCurPlayerInfo, setPlaying, setSongReady, prevSong, nextSong }
)(Player)

export default withRouter(Player);


