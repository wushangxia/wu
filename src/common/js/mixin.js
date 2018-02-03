import {mapGetters,mapActions,mapMutations} from 'vuex'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'

export const playerMixin = {
    computed:{
        iconMode(){
        	return this.mode == playMode.sequence ? 'icon-sequence':this.mode === playMode.loop ?'icon-loop' : 'icon-random'
        },
        ...mapGetters([
        	'sequenceList',
      		'playlist',
      		'currentSong',
      		'mode',
      		'favoriteList'])
    },
    methods:{
    	changeMode(){
    		const mode = (this.mode +1) %3;
    		this.setPlayMode(mode);
    		let list = null;
    		if (mode === playMode.random) {
		        list = shuffle(this.sequenceList)
		     } else {
		        list = this.sequenceList
		     }
    		this.resetCurrentIndex(list);
    		this.setPlaylist(list)
    	},
    	resetCurrentIndex(list){
    		let index = list.findIndex((item) =>{
    			return item.id == this.currentSong.id
    		})
    		this.setCurrentIndex(index);
    	},
    	toggleFavorite(song){
    		if(this.isFavorite(song)){
    			this.deleteFavoriteList(song);
    		}else{
    			this.saveSearchHistory(song);
    		}
    	},
    	isFavorite(song){
    		let index = this.favoriteList.findIndex((item) =>{
    			return item.id == song.id
    		})
    		return song >-1
    	},
    	getFavoriteIcon(song){
    		if(this.isFavorite(song)){
    			return 'icon-favorite';
    		}
    		return 'icon-not-favorite';
    	},
    	...mapMutations({
	      setPlayMode: 'SET_PLAY_MODE',
	      setPlaylist: 'SET_PLAYLIST',
	      setCurrentIndex: 'SET_CURRENT_INDEX',
	      setPlayingState: 'SET_PLAYING_STATE'
	    }),
	    ...mapActions(['saveSearchHistory'])

    }
}