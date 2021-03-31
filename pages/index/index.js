// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showIcon: true,
    swiperList: [],
    course: []
  },
  onLoad(){
    wx.request({
      url: 'https://www.fastmock.site/mock/2d5d21a7be5236e088689ab6ce04b921/weixin/api/getData',
      success: (res) => {
        const {data:{data}} = res;
        const{ swiperList, course } = data;
        // console.log(data);
        this.setData({
          swiperList,
          course
        })
      }
    })
  },
  handleInputChange(e){
    const value = e.detail.value;
    this.setData({showIcon: value?false:true})
    // if(value){
    //   this.setData({showIcon: false})
    // }else{
    //   this.setData({showIcon: true})
    // }
  },
  

})