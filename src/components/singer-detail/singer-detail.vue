<template>
    <transition name="slide">
        <div class="singer-detail"></div>
    </transition>
</template>

<script type="text/ecmascript-6">
    import {mapGetters} from 'vuex'
    import {getSingerDetail} from 'api/singer'

    export default {
        computed:{
            ...mapGetters(['singer'])
        },
        created(){
            this._getDetail();
        },
        methods:{
            _getDetail(){
                if(this.singer.id){
                    getSingerDetail(this.singer.id).then((res)=>{
                        console.log(19,res)
                    }).catch( ()=>{

                    })
                }else{
                    this.$router.push('/singer');
                }
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.singer-detail
    position:fixed
    left:0
    bottom:0
    right:0
    top:0
    background:#fff;
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>