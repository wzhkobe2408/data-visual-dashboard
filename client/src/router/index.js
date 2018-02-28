import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
//import xxx from  '@/components/xxx' 中的@表示src
// 因为webpack.base.conf中别名这样写了==> alias: {'@': resolve('src')}
import Hello1 from '@/components/Hello1' //引入Hello1组件
import Hello2 from '@/components/Hello2' //引入Hello2组件
import notFind from '@/components/notFind' //引入notFind组件
Vue.use(Router) //这句别忘记了
export default new Router({
  mode:'history',  //使用history防止url中出现#
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
    ,{
      path: '/hello1',
      name: 'Hello1',
      component: Hello1
    }
    ,{
      path: '/hello2',
      name: 'Hello2',
      component: Hello2
    }
    ,{
      path: '*',
      name: 'notFind',
      component: notFind
    }

  ]
})