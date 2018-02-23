<template>
    <transition name="slide">
        <music-list :title='title' :songs='songs' :bg-image='bgImage' ></music-list>
    </transition>
</template>

<script type="text/ecmascript-6">
    import MusicList from 'components/music-list/music-list'
    import {mapGetters} from 'vuex'
    import {ERR_OK} from 'api/config'
    import {createSong} from 'common/js/song'
    import {getSingerDetail} from 'api/singer'

    export default {
        computed:{
            bgImage(){
                return this.singer.avatar
            },
            title(){
                return this.singer.name
            },
            ...mapGetters(['singer'])
        },
        components:{
            MusicList
        },
        created(){
            this._getDetail();
        },
        data(){
            return{
                songs:[]
            }
        },
        methods:{
            _getDetail(){
                if(this.singer.id){
                    getSingerDetail(this.singer.id).then((res)=>{
                        if(res.code == ERR_OK){
                            this.songs =this._normalizeSongs(res.data.list);
                        }
                    }).catch( ()=>{

                    })
                }else{
                    this.$router.push('/singer');
                }
            },
            _normalizeSongs(list){
                let ret = [];
                list.forEach((item)=>{
                    let {musicData} = item;
                    if(musicData.songid && musicData.albummid){
                        ret.push( createSong(musicData) )
                    }
                });
                return ret;
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">


  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>