const path = require('path')

const resolve = dir => path.join(__dirname,dir)

const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin' : '/'

module.exports = {
  lintOnSave: false,
  // 配置请求基本路径
  baseUrl: BASE_URL,

  // 配置项目路径别名
  chainWebpack: config => {
    config.resolve.alias
      .set('@',resolve('src'))
      // 设置别名，@ 就代表了项目目录下的src目录

      .set('_c',resolve('src/components'))
  },

  // 打包是不生成.map文件(减少打包体积)
  productionSourceMap: false,

  // 跨域设置
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
