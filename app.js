// 创建一个小程序
App({
  // 生命周期函数指的是某一时刻会自动执行的函数
  // 在小程序启动的时候，自动执行的函数
  onLaunch(options) {
    console.log(options);
    // {path: "pages/index/index", query: {…}, scene: 1001, shareTicket: undefined, referrerInfo: {…}}
    // path: "pages/index/index"
    // query: {}
    // referrerInfo: {}
    // scene: 1001
    // shareTicket: undefined
    // __proto__: Object
  }
})
