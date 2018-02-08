import * as types from './mutation-types'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'
import {savePlay,deleteFavorite,saveFavorite} from 'common/js/cache'

function findIndex(list,song){
	let index = list.findIndex((item)=>{
		return item.id == song.id
	})

	return index;
}
export const selectPlay = function({commit,state},{list,index}){
	commit(types.SET_SEQUENCE_LIST,list);
	if (state.mode === playMode.random){
		let randomList = shuffle(list);
		commit(types.SET_PLAYLIST,randomList);
		index  = findIndex(randomList,list[index])
	}else{
		commit(types.SET_PLAYLIST,list)
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
	let songs = deleteFavorite(song);
	console.log(37,songs)
	commit(types.SET_FAVORITE_LIST,songs);
}

export const saveSearchHistory = function({commit,state},song){
	commit(types.SET_FAVORITE_LIST,saveFavorite(song))
}