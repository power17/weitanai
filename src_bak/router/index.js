import Vue from 'vue'
import Router from 'vue-router'
import start from '@/pages/start'
import end from '@/pages/end'
import introduce from '@/pages/introduce'
import game from '@/pages/game'
import gameBack from '@/pages/game_back'
import price1 from '@/pages/price_1'
import price2 from '@/pages/price_2'
import pricebb from '@/pages/price_bb'
import pricemilk from '@/pages/price_milk'
import submitinfo from '@/pages/submitinfo'
import card1 from '@/pages/card1'
import card2 from '@/pages/card2'
import cardmilk from '@/pages/cardmilk'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: start
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: introduce
    },
    {
      path: '/end',
      name: 'end',
      component: end
    },
    {
      path: '/game',
      name: 'game',
      component: game
    }, {
      path: '/game_back',
      name: 'game_back',
      component: gameBack
    }, {
      path: '/price1',
      name: 'price1',
      component: price1
    }, {
      path: '/price2',
      name: 'price2',
      component: price2
    },
    {
      path: '/pricebb',
      name: 'pricebb',
      component: pricebb
    },
    {
      path: '/pricemilk',
      name: 'pricemilk',
      component: pricemilk
    }, {
      path: '/submitinfo',
      name: 'submitinfo',
      component: submitinfo
    },
    {
      path: '/card1',
      name: 'card1',
      component: card1
    },
    {
      path: '/card2',
      name: 'card2',
      component: card2
    },
    {
      path: '/cardmilk',
      name: 'cardmilk',
      component: cardmilk
    }
  ]
})
