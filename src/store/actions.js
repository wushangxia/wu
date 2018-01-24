import * by types from './mutation-types'
import {playMode} from 'common/js/config'

export const selectPlay = function({commit,state},{list,index}){
	commit(types.SET_SEQUENCE_LIST,list);
	if (state.mode === playMode.random){

	}else{

	}
	commit(types.SET_CURRENT_INDEX,index);
	commit(types.SET_FULL_SCREEN,true);
	commit(types.SET_PLAYING_STATE,true);
}

export const randomPlay = function({commit,state},{list}){
	commit(types.SET_PLAY_MODE,playMode.random);
	commit(types.SET_SEQUENCE_LIST,list)
}