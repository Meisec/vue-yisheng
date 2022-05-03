const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '/api':{
        target: 'http://apis.juhe.cn',  //聚合接口地址
        changeOrigin:true,
        pathRewrite:{   // 重定向路径
          "^/api": ""
        }
      },
      
    },
    proxy:{
      '/foo':{
        target: 'https://bang.360.cn',  //360接口地址
        changeOrigin:true,
        pathRewrite:{   // 重定向路径
          "^/foo": ""
        }
      }
    }
  }
})
