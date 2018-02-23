import * as types from './mutation-types'
console.log(2,types.SET_TOP_LIST)
const mutations = {
    [types.SET_SINGER](state, singer) {
        state.singer = singer
    },
    [types.SET_PLAYING_STATE](state,flag){
        state.playing = flag;
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
    },
    [types.SET_FAVORITE_LIST](state,favoriteList){
        state.favoriteList = favoriteList;
    },
    [types.SET_TOP_LIST](state, topList) {
        state.topList = topList;
     }
}
export default mutations