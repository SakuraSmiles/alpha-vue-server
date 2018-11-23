module.exports = {
  proxyList: {
    '/rest': {
      // local dev
      target: 'http://localhost:8081',  // 接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/rest': ''   //需要rewrite重写的,
      }
    }
  }
}
