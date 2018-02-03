<template>
    <div class="progress-bar" ref="progressBar" @click="progressClick">
        <div class="bar-inner">
            <div class="progress" ref="progress"></div>
            <div  class="progress-btn-wrapper" ref="progressBtn"
                @touchstart='progressTouchStart'
                @touchmove.prevent='progressTouchMove'
                @touchend.prevent='progressTouchEnd'></div>
            <div class="progress-btn"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import {prefixStyle} from 'common/js/dom'

const progressBtnWidth = 16
const transform = prefixStyle('transform')

export default{
    watch:{
        percent(newPercent){
            if(newPercent >=0 && !this.touch.initiated ){
                const barWidth = this.$refs.progressBar.clientWidth- progressBtnWidth;
                const offsetWidth =  newPercent * barWidth;
                this.$refs.progress.style.width = `${offsetWidth}px`;
            }
        }
    },
    props:{
        percent:{
            type:Number,
            default:0
        }
    },
    created(){
        this.touch = {};
    },
    methods:{
        progressClick(e){
            const rest = this.$refs.progressBar.getBoundingClientRect();
            let  offsetWidth = e.touches[0].pageX - rest.x;
            this._offset(offsetWidth);
            this._triggerPercent();           
        },
        progressTouchStart(e){
            this.touch.initiated = {};
            this.touch.startX =  e.touches[0].pageX;
            this.touch.left = this.$refs.progress.clientWidth;
        },
        progressTouchMove(e){
            if(!this.initiated){
                return;
            }
            const deltaX = this.touches[0].pageX - this.touch.startX;
            const clientWidth = Math.min(this.$refs.progressBar.clientWidth- progressBtnWidth,Math.max(0,this.touch.left+deltaX));
            this._offset(clientWidth);
        },
        progressTouchEnd(e){
            this.initiated = true;
            this._triggerPercent();
        },
        _triggerPercent(){
            const barWidth = this.$refs.progressBar.clientWidth -progressBtnWidth;
            const percent = this.$refs.progress.clientWidth / barWidth;
            this.$emit('percentChange',percent);
        },
        _offset(clientWidth){
            this.$refs.progress.style.width = `${clientWidth}px`;
            this.$refs.progressBar.style[transform] = `translate3d(${clientWidth}px,0,0)`
        }
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .progress-bar
    height: 30px
    .bar-inner
      position: relative
      top: 13px
      height: 4px
      background: rgba(0, 0, 0, 0.3)
      .progress
        position: absolute
        height: 100%
        background: $color-theme
      .progress-btn-wrapper
        position: absolute
        left: -8px
        top: -13px
        width: 30px
        height: 30px
        .progress-btn
          position: relative
          top: 7px
          left: 7px
          box-sizing: border-box
          width: 16px
          height: 16px
          border: 3px solid $color-text
          border-radius: 50%
          background: $color-theme
</style>