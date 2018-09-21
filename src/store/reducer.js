import { combineReducers } from 'redux';
import { home } from './../views/home/reducer';
import { playDetail } from './../views/playDeteil/reducer';
import { player } from './../views/player/reducer';

export default combineReducers({home, playDetail, player});