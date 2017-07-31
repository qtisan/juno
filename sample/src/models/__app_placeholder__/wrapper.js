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
        subs: []
      },
      {
        name: '页面示例',
        key: 'sample',
        subs: [
          {
            name: '测试工具',
            key: 'fetch',
            subs: [
              { name: '工具 1', key: 'fetch_1', default: true },
              { name: '工具 2', key: 'fetch_2' }
            ]
          },
          {
            name: '随机数据生成',
            key: 'random_data_generator',
            subs: []
          }
        ]
      }
    ],
    loading: false
  }
}
