//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    fee: [],
    p_name:null,
    p_desc:null,
    p_price:null,
    message:{ p_id: 1, p_id: 1, p_id: 1}
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('fee') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    // console.log("接收到的参数是str=" + str);  
  },
  req: function (e){
    // console.log("接收到的参数是" + e.detail.value.p_name + " ," + e.detail.value.p_desc +" ,"+ e.detail.value.p_price ); 
    console.log("收到了");
    var name = e.detail.value.p_name;
    var desc = e.detail.value.p_desc;
    var price = e.detail.value.p_price;
    console.log(name+desc+price)
    wx.request({
      url: 'http://localhost:8080/Project/project/insert.do',
      data: {
        p_name:name,
        p_desc:desc,
        p_price:price
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
         console.log("成功");
         wx.redirectTo({
           url: '../index/index',
         })
      },
      fail: function (res) {
        console.log('submit fail');
        
      },
      complete: function (res) {
        console.log('submit complete');
      }

    })  
  },
  feedetail:function(){
    wx.navigateTo({
      url:"feedetail/feedetail"
    })
  }
})
