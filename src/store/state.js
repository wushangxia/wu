import {playMode} from 'common/js/config'
import { loadPlay,loadFavorite} from 'common/js/cache'
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
    favoriteList:loadFavorite()
}
export default state