// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  itemClick: function () {
   wx.switchTab({
     url: '../home/home',
   })
  },

  // itemClick:function(){
  //   // var that = this;
  //   // let pages = getCurrentPages(); //页面栈
  //   // let currPage = pages[pages.length - 1]; //当前页面
  //   // that.setData({
  //   //   name: currPage.options.name //获取上上级页面传的参数
  //   // })

  //   //??? 为什么不返回上一级
  //   wx.navigateBack({
  //     delta: 1
  //   })

  // },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})