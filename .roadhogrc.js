/**
 * Created by qtisa on 2017/5/15.
 */

const path = require('path');

const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  path.resolve(__dirname, 'public/icons')  // 2. 自己私人的 svg 存放目录
];

const pxtorem = require('postcss-pxtorem');

export default {
  entry: [
    "src/pages/index.js",
    "src/pages/m/m.js",
    "src/pages/tc/tc.js"
  ],
  outputPath: "./dist",
  svgSpriteLoaderDirs: svgSpriteDirs,
  autoprefixer: {
    browsers: [
      "iOS >= 8", "Android >= 4"
    ]
  },
  extraBabelPlugins: [
    "transform-runtime",
    ["import", [{ libraryName: "antd-mobile", libraryDirectory: "lib", style: "css" }, { libraryName: "antd", libraryDirectory: "lib", style: "css" }]]
  ],
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 64, // 全局距离大小比例
      propWhiteList: []
    })
  ],
  env: {
    development: {
      extraBabelPlugins: [ "dva-hmr" ],
      proxy: {
        "/placeholder": {
          "target": "http://jsonplaceholder.typicode.com",
          "changeOrigin": true,
          "pathRewrite": { "^/placeholder" : "" }
        }
      }
    },
    production: {
      publicPath: "/middle/"
    }
  },
  theme: {
  }
}
