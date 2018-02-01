import * as types from './mutation-types'
const mutations = {
    [types.SET_SINGER](state, singer) {
	    state.singer = singer
	},
	[types.SET_PLAYING_STATE](state,flag){
		this.playing = flag;
	},
	[types.SET_PLAYLIST](state,playlist){
		state.playlist = playlist;
	},
	[types.SET_FULL_SCREEN](state,flag){
		state.fullScreen =flag;
	},
	[types.SET_PLAY_MODE](state,mode){
		state.mode = mode;
	},
	[types.SET_CURRENT_INDEX](state,index){
		state.currentIndex =index;
	},
	[types.SET_SEQUENCE_LIST](state,index){
		state.sequenceList = index;
	},
	[types.SET_PLAY_HISTORY](state,history){
		state.playHistory =history;
	}
}
export default mutations