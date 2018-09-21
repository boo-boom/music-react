import axios from 'axios';

const stateDefault = {
    banners: []
}

export function home(state=stateDefault, action) {
    switch(action.type) {
        case 'get_banner': 
            return {...state, banners: action.banners}
        default:
            return state;
    }
}

export function getBanner() {
    return dispatch => {
        axios.get('/banner').then(res => {
            if(res.data.code === 200) {
                dispatch({
                    type: 'get_banner',
                    banners: res.data.banners
                })
            }
        }).catch(err => {
            console.log(err)
        })
    }
}

