import * as types from './mutation-types'
import {playMode} from 'common/js/config'
import {savePlay,deleteFavorite,saveFavorite} from 'common/js/cache'

export const selectPlay = function({commit,state},{list,index}){
	/*commit(types.SET_SEQUENCE_LIST,list);*/
	commit(types.SET_PLAYLIST,list);
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

export const savePlayHistory = function({commit,state},{song}){
	commit(types.SET_PLAY_HISTORY,savePlay(song));
}
export const deleteFavoriteList = function({commit,state},song){
	commit(types.SET_FAVORITE_LIST,deleteFavorite(song))
}

export const saveSearchHistory = function({commit,state},song){
	commit(types.SET_FAVORITE_LIST,saveFavorite(song))
}