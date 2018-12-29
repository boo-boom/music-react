import axios from 'axios';
import { Song } from '../../static/js/format';

const stateDefault = {
    detail: {}
}

export function playDetail(state=stateDefault, action) {
    switch(action.type) {
        case 'get_play_detail':
            return {...state, detail: action.detail}
        default:
            return state;
    }
}

export function getPlayDetail(id) {
    return dispatch => {
        axios.get(`/api/playlist/detail?id=${id}`).then(res => {
            if(res.data.code === 200) {
                dispatch({
                    type: 'get_play_detail',
                    detail: res.data
                })
            }
        })
    }
}

// playDetail的reducer操作player的reducer
// 只要action.type指定即可操作
// 此项目没有将type设置为变量，最好是设置为变量，变量出错则有错误警告
export function playAll() {
    return (dispatch, getState) => {
        let song = []
        const tracks = getState().playDetail.detail.playlist.tracks
        tracks.forEach(item => {
            song.push(new Song({
                id: item.id,
                // url: item.url,
                // type: item.type,
                // size: item.size,
                name: item.name,
                pic: item.al.picUrl,
            }))
        })
        dispatch({
            type: 'set_play_all',
            playerData: song,
        })
    }
}

export function playAdd(item) {
    return (dispatch,getState) => {
        const info = {
            id: item.id,
            // url: item.url,
            // type: item.type,
            // size: item.size,
            name: item.name,
            pic: item.al.picUrl,
        }
        const song = [...getState().player.playerData, new Song(info)]
        dispatch({
            type: 'set_play_add',
            playerData: song,
        })
    }
}
