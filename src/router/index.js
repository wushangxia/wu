import Vue from 'vue'
import Router from 'vue-router'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import Recommend from 'components/recommend/recommend'
import SingerDetail from 'components/singer-detail/singer-detail'

Vue.use(Router)

export default new Router({
    routes:[
    {
        path:'/',
        redirect:'/redirect'
    },{
        path: '/singer',
        component: Singer,
        children: [{
          path: ':id',
          component: SingerDetail
        }]
    },{
        'path':'/recommend',
        'component':Recommend
    },{
        path: '/search',
        'component':Search
    },{
        'path':'/rank',
        'component':Rank
    }]
})

