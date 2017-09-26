<template>
  <div class="login">
    <div class="container">
      <transition name="drop">
        <div class="login-container" v-show="showFlag" @click.stop="hideState">
          {{ msg }}
        </div>
      </transition>
      <div class="account-info">
        <span v-show="showLogout"><a class="logout" href="#" @click="logout">注销</a></span>
      </div>
      <div class="login-wrap" v-show="showLogin">
        <h3>登录</h3>
        <p v-show="showTips">{{tips}}</p>
        <input type="text" placeholder="请输入电子邮箱" v-model="loginModel.username">
        <input type="text" placeholder="请输入密码" v-model="loginModel.password">
        <!--此处button应触发@click="login"-->
        <button @click="toggle">登录</button>
        <h4 :class="{'show':isB, 'hide':!isB}">（静态布局，无服务端）</h4>
        <span @click="toRegister">没有账号？马上注册</span>
      </div>

      <div class="register-wrap" v-show="showRegister">
        <h3>注册</h3>
        <p class="tips" v-show="showTips">{{tips}}</p>
        <input placeholder="请输入电子邮箱" v-model="registerModel.email">
        <input placeholder="请输入密码" v-model="registerModel.password">
        <input placeholder="请确认密码" v-model="registerModel.confirmPassword">
        <!--此处button应触发@click="register"-->
        <button>注册</button>
        <span @click="toLogin">已有账号？马上登录</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import NProgress from 'nprogress'
  import 'nprogress/nprogress.css'

  export default({
    ready: function () {
      this.userName = sessionStorage.getItem('userName')
    },
    data () {
      return {
        isB: false,
        showLogin: true,
        showLogout: false,
        showRegister: false,
        showTips: false,
        showFlag: false,
        tips: '',
        show: false,
        registerUrl: 'api/Account/Register',
        loginUrl: 'token',
        logoutUrl: 'api/Account/Logout',
        apiUrl: 'api/Values',
        registerModel: {
          email: '',
          password: '',
          confirmPassword: ''
        },
        loginModel: {
          username: '',
          password: '',
          grant_type: 'password'
        },
        msg: '',
        userName: '',
        result: ''
      }
    },
    methods: {
      register: function () {
        this.$http.post(this.registerUrl, this.registerModel)
          .then((response) => {
            this.msg = '注册成功！'
          })
      },
      login: function () {
        NProgress.start()
        this.$http.post(this.loginUrl, this.loginModel)
          .then((response) => {
            let body = response.json()
            this.msg = '登录成功！'
            this.userName = body.userName
            this.showFlag = !this.showFlag
            this.showLogout = !this.showLogout
            this.showFlag = true
            clearTimeout(this.timer)
            this.hideState()
            this.$router.push({path: 'orderList'})
            NProgress.done()
          })
      },
      logout: function () {
        this.$http.post(this.logoutUrl)
          .then((response) => {
            this.msg = '注销成功！'
            this.result = ''
            this.userName = ''
            this.loginModel.username = ''
            this.loginModel.password = ''
            this.showLogout = !this.showLogout
          })
      },
      toRegister () {
        this.showRegister = true
        this.showLogin = false
      },
      toLogin () {
        this.showRegister = false
        this.showLogin = true
      },
      hideState () {
        this.showFlag = false
      },
      toggle: function () {
        this.isB = !this.isB
      }
    }
  })
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  @media screen and (min-width: 768px)
    .login
      position: absolute
      width: 100%
      height: 100%
      top: 0
      bottom: 0
      background-image: url("./bg-3.jpg")
      background-repeat no-repeat
      background-size: cover
      .container
        float: right
        margin: 10% 10% 0 0
        width: 35%
        background-color: $color-text-d
        border-radius: 12px
        .login-container
          position: fixed
          top: 22px
          right: 82px
        .account-info
          position: fixed
          top: 22px
          right: 22px
          .logout
            padding: 10px 15px
            background-color: $color-button-dangerous
            color: $color-text
        .login-wrap
        .register-wrap
          text-align: center
          input
            display: block
            width: 80%
            height: 40px
            line-height: 40px
            margin: 0 auto 10px
            outline: none
            border: 1px solid #888
            padding: 10px
            box-sizing: border-box
          h3
            padding: 20px 0
          .show
            color: #333
          .hide
            display: none
          p
            color: red
          button
            display: block
            width: 80%
            height: 40px
            line-height: 40px
            margin: 0 auto 5px
            border: none
            background-color: #41b883
            color: #fff
            font-size: 16px
          span
            display: block
            padding: 10px 0
            cursor: pointer
          span:hover
            color: #41b883

  @media screen and (max-width: 768px)
    .login
      position: absolute
      width: 100%
      height: 100%
      top: 0
      bottom: 0
      background-image: url("./bg-s.jpg")
      background-repeat no-repeat
      background-position: center -50px
      .container
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        width: 80%
        background-color: $color-text-d
        border-radius: 12px
        .login-container
          position: fixed
          top: 0
          width: 100%
          z-index: 500
          text-align: center
          background: $color-text-d
          border-top-left-radius: 12px
          border-top-right-radius: 12px
          &.drop-enter-active, &.drop-leave-active
            transition: all 0.3s
          &.drop-enter, &.drop-leave-to
            transform: translate3d(0, -100%, 0)
        .account-info
          position: fixed
          top: 20px
          right: 22px
        .login-wrap
        .register-wrap
          text-align: center
          input
            display: block
            width: 220px
            height: 40px
            line-height: 40px
            margin: 0 auto 10px
            outline: none
            border: 1px solid #888
            padding: 10px
            box-sizing: border-box
          h3
            padding: 20px 0
          .show
            color: #333
          .hide
            display: none
          p
            color: red
          button
            display: block
            width: 220px
            height: 40px
            line-height: 40px
            margin: 0 auto 5px
            border: none
            background-color: #41b883
            color: #fff
            font-size: 16px
          span
            display: block
            padding: 20px 0
            cursor: pointer
          span:hover
            color: #41b883
</style>
