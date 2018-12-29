import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getBanner } from './reducer';
import { $axios } from './../../axios';
import SearchNav from './../../components/SearchNav';
import Swiper from './../../components/Swiper';
import CateNav from './../../components/CateNav';
import ListTitle from './../../components/ListTitle';
import SongList from './../../components/SongList';
import NavBlank from './../../components/NavBlank';
import './style.scss';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playlists: [],
            newlists: [],
        }
    }
    componentWillMount() {
        if(this.props.location.pathname === '/') {
            this.props.history.push('/home');
        }
        // 使用redux存储数据
        this.props.getBanner()
        // 使用state存储数据
        this.getPlaylist()
        this.getNewlist()
    }
    getPlaylist() {
        $axios({
            method: 'get',
            url: '/top/playlist/highquality',
            params: {
                limit: 6
            }
        }).then(res => {
            this.setState(prevState => ({
                playlists: res.playlists
            }))
        })
    }
    getNewlist() {
        $axios({
            method: 'get',
            url: '/top/playlist',
            params: {
                limit: 6,
                order: 'new'
            }
        }).then(res => {
            this.setState(prevState => ({
                newlists: res.playlists
            }))
        })
    }
    goPlayDetail(id) {
        console.log(id)
    }
    render() {
        const { banners } = this.props;
        const { playlists, newlists } = this.state;
        return (
            <div className="home-container">
                <SearchNav/>
                <div className="home-wrapper">
                    <Swiper banners={banners}/>
                    <CateNav/>
                    <ListTitle title="推荐歌单"/>
                    <SongList playlists={playlists} playDetail={this.goPlayDetail}/>
                    <ListTitle title="最新音乐"/>
                    <SongList playlists={newlists} playDetail={this.goPlayDetail}/>
                </div>
                <NavBlank/>
            </div>
        )
    }
};

Home = connect(
    state => ({
        banners: state.home.banners
    }),
    { getBanner }
)(Home);

export default withRouter(Home);