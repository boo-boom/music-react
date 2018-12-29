import { $axiosAll } from './../../axios';

const stateDeafult = {
    playerData: [],
    playing: false,
    curIndex: 0,
    songReady: false,
}

export function player(state=stateDeafult, action) {
    switch(action.type) {
        case 'get_cur_player_info':
            return {...state, playerData: action.playerData}
        case 'set_playing':
            return {...state, playing: action.playing}
        case 'set_song_ready':
            return {...state, songReady: action.songReady}
        case 'set_play_all':
            return {...state, playerData: action.playerData}
        case 'set_play_add':
            return {...state, playerData: action.playerData}
        case 'set_cur_index':
            return {...state, curIndex: action.curIndex}
        case 'prev_song':
            return {...state, curIndex: action.curIndex}
        case 'next_song':
            return {...state, curIndex: action.curIndex}
        default:
            return state;
    }
}

export function setCurIndex(index) {
    return dispatch => {
        dispatch({
            type: 'set_cur_index',
            curIndex: index
        })
    }
}

export function setPlaying(playing) {
    return dispatch => {
        dispatch({
            type: 'set_playing',
            playing: playing
        })
    }
}

export function setSongReady(songReady) {
    return dispatch => {
        dispatch({
            type: 'set_song_ready',
            songReady: songReady
        })
    }
}

export function getCurPlayerInfo(songId) {
    return (dispatch, getState) => {
        const { playerData, curIndex } = getState().player
        const newPlayerData = playerData.slice()
        if(songId === undefined) return
        if(songId) {
            $axiosAll([
                {
                    url: '/song/url',
                    params: { id: songId }
                },
                {
                    url: '/song/detail',
                    params: { ids: songId }
                }
            ]).then(res => {
                const _res1 = res[0].data[0]
                const _res2 = res[1].songs[0]
                newPlayerData[curIndex] = {}
                newPlayerData[curIndex]['id'] = _res1.id
                newPlayerData[curIndex]['url'] = _res1.url
                newPlayerData[curIndex]['type'] = _res1.type
                newPlayerData[curIndex]['size'] = _res1.size
                newPlayerData[curIndex]['name'] = _res2.name
                newPlayerData[curIndex]['pic'] = _res2.al.picUrl
                dispatch({
                    type: 'get_cur_player_info',
                    playerData: newPlayerData,
                })
            });
        }
    }
}

export function prevSong(curIndex) {
    console.log(curIndex)
    getCurPlayerInfo()
    return dispatch => {
        dispatch({
            type: 'prev_song',
            curIndex: curIndex
        })
    }
}

export function nextSong(curIndex) {
    console.log(curIndex)
    return dispatch => {
        dispatch({
            type: 'next_song',
            curIndex: curIndex
        })
    }
}
