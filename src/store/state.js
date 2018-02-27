import {playMode} from 'common/js/config'
import { loadPlay,loadFavorite,loadSearch} from 'common/js/cache'
const state = {
    singer:{},
    playing:false,
    fullScreen:false,
    playlist:[],
    sequenceList:[],
    mode:playMode.sequence,
    playHistory :loadPlay(),
    currentIndex:0,
    topList:[],
    disc:{},
    searchHistory:loadSearch(),
    favoriteList:loadFavorite()
}
export default state