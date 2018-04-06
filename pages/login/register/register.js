Page({
  data: {
    username: "",
    password: "",
    passwordconfirm: ""

  },
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  usernameinput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  passwordinput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  passwordconfirminput: function (e) {
    this.setData({
      passwordconfirm: e.detail.value
    })
  },


  signin: function () {
    var that = this;
    
    wx.request({
      url: 'test.php', //仅为示例，并非真实的接口地址
      data: {
        username: 'that.data.username',
        password: 'that.data.password'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.name == username) {
          wx.showModal({
            title: "信息提示",
            content: "该用户名已被注册"
          })
        } else {
          wx.showModal({
            title: "信息提示",
            content: "注册成功，请等待审核通过"
          }),
          wx.switchTab({
      url:"../../myself/myself"
    })
            
        }
      }
    })

    if (that.data.username == "") {
      wx.showModal({
        title: "信息提示",
        content: "用户名不能为空!"
      })
    } else if (that.data.password == "") {
      wx.showModal({
        title: "信息提示",
        content: "请输入密码!"
      })
    } else if (that.data.passwordconfirm == "") {
      wx.showModal({
        title: "信息提示",
        content: "请确认密码!"
      })
    } else if (that.data.passwordconfirm != that.data.password) {
      wx.showModal({
        title: "信息提示",
        content: "两次密码输入不一致!"
      })
    }
    
  }

})		