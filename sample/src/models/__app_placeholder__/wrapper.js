/**
 * Created by qtisa on 2017/7/31.
 */

export default {
  namespace: 'wrapper',
  state: {
    title: 'Tools Collection',
    menus: [
      {
        name: '首页',
        key: 'index_page',
        icon: 'home',
        subs: []
      },
      {
        name: '页面示例',
        key: 'sample',
        icon: 'appstore-o',
        subs: [
          {
            name: '测试工具',
            key: 'fetch',
            icon: 'tool',
            subs: [
              { name: '工具 1', key: 'fetch_1', icon: 'tool' },
              { name: '工具 2', key: 'fetch_2', icon: 'tool' }
            ]
          },
          {
            name: '随机数据生成',
            key: 'random_data_generator',
            icon: 'database',
            subs: []
          }
        ]
      }
    ],
    loading: false
  }
}
