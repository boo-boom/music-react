import { $axios } from './../../axios';

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
        $axios({
            method: 'get',
            url: '/banner'
        }).then(res => {
            dispatch({
                type: 'get_banner',
                banners: res.banners
            })
        })
    }
}

