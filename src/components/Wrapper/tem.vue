<template lang="jade">
transition(name='nf')
  .com-notice.d-f-c(v-show='isShow')
    article
      h4.d-f-c
        span {{title}}
        img.c-p(src='./icon_close.png' v-if='isCloseIcon' @click='$emit("close")')
      main
        slot
      footer.d-f-c(v-if='isFooter')
        a(href='javascript:void(0);' @click='cb') {{action}}     
        a.cancel(href='javascript:void(0);' @click='$emit("close")') {{cancel}}     
</template>
<script>
export default {
  props:{
    isCloseIcon:{
      type:Boolean,
      default:false,
    },
    isShow:{
      type:Boolean,
      default:false,
    },
    isFooter:{
      type:Boolean,
      default:true,
    },
    title:{
      type:String
    },
    action:{
      type:String,
      default:'确定'
    },
    cancel:{
      type:String,
      default:'取消'
    },
    cb:{
      type:Function,
      default:function(){
        // console.log('hello')
      }
    }
    // color:{
    //   type:String,
    //   default:
    // }
  },
  methods:{
    close(){

    }
  }
}
</script>

<style lang="stylus">
*
  all ease 0.3s
.nf-enter,.nf-leave-to
  // .com-notice-alt
  background rgba(0,0,0,0)
  article
    transform scaleY(0)
.d-f-c
  display flex
  justify-content center
  align-items center
.com-notice
  position fixed
  height 100%
  width 100%
  top 0
  left 0
  background rgba(0,0,0,.5)
  z-index 380
  display flex 
  justify-content center
  align-items center
  article
    width 25.4*20px
    background #fff
  footer
    padding 50px 0
    a
      margin 0 .5*20px
      height 2*20px
      width 8*20px
      text-align center
      line-height @height
      font-size .7*20px
      color #fff
      background-image linear-gradient(-180deg, #9C92FF 0%, #5455F7 100%)
      box-shadow 0 2px 6px 0 rgba(144,136,254,0.60)
      border-radius 6px
      &:hover
        opacity .7
      &.cancel
        background #BBBBBB
        box-shadow 0 2px 6px 0 rgba(153,153,153,0.50)
  h4
    box-shadow inset 0 -1px 1px 0 rgba(216,216,216,0.50)
    height 2.9*20px
    justify-content space-between
    padding-left 1.5*20px
    padding-right 1*20px
    img
      height .8*20px
      &:hover
        transform rotate(90deg)
    span
      font-size .8*20px
  
</style>

