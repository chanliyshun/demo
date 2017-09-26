<template>
  <div class="order">
    <scroll class="order-content">
      <div class="content">
        <el-row class="list">
          <el-col>
            <el-row class="grid-content">
              <el-col class="title" :span="8">1.预约时间</el-col>
              <el-col class="contain" :span="8">
                <el-radio class="radio" v-model="radio" label="1">两小时内跟进</el-radio>
              </el-col>
              <el-col class="contain" :span="8">
                <el-radio class="radio" v-model="radio" label="2">非常紧急</el-radio>
              </el-col>
            </el-row>
          </el-col>
          <el-col>
            <el-col class="grid-content title">2.导入图片</el-col>
            <el-upload
              class="upload-demo"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              v-for="item in orderList"
              :key="item.id"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="item.fileList"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-col>
        </el-row>
        <div class="distpicker">
          <span><p class="red">*</p>地址</span>
          <v-distpicker class="contain"></v-distpicker>
          <el-input class="input" v-model="input" placeholder="详细地址"></el-input>
        </div>
        <div class="car">
          <span><p class="red">*</p>选择车型</span>
          <el-select
            class="brand"
            v-for="item in orderList"
            :key="item.id"
            filterable
            allow-create
            clearable
            v-model="valueA"
            @change="changeA"
            placeholder="品牌">
            <el-option
              v-for="item in item.optionsA"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled">
            </el-option>
          </el-select>
          <el-select
            class="model"
            filterable
            allow-create
            clearable
            v-model="valueB"
            @change="changeB"
            placeholder="车系">
            <el-option
              v-for="item in optionsB"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled">
            </el-option>
          </el-select>
        </div>
        <div class="contact">
          <div class="contacts">
            <span><p class="red">*</p>联系人</span>
            <el-input class="input"></el-input>
          </div>
          <div class="address">
            <span><p class="red">*</p>联系电话</span>
            <el-input class="input"></el-input>
          </div>
        </div>
        <div class="button">
          <el-button
            type="primary"
            size="large"
            @click="submit"
          >提交
          </el-button>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import VDistpicker from 'v-distpicker'

  export default {
    data () {
      return {
        radio: '1',
        orderList: [],
        input: '',
        optionsA: [],
        optionsB: [],
        valueA: '',
        valueB: ''
      }
    },
    created () {
      this.$http.get('static/data.json').then((response) => {
        this.orderList = response.data.orderList
      })
    },
    methods: {
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      },
      changeA (label) {
        this.optionsB = []
        this.valueB = ''
        if (label === '奥迪') {
          this.optionsB.push({
            value: '奥迪Q3',
            label: '奥迪Q3'
          })
          this.optionsB.push({
            value: '奥迪Q5',
            label: '奥迪Q5'
          })
          this.optionsB.push({
            value: '奥迪Q7',
            label: '奥迪Q7'
          })
        }
        if (label === '宝马') {
          this.optionsB.push({
            value: '宝马3系',
            label: '宝马3系'
          })
          this.optionsB.push({
            value: '宝马5系',
            label: '宝马5系'
          })
          this.optionsB.push({
            value: '宝马7系',
            label: '宝马7系'
          })
        }
        if (label === '奔驰') {
          this.optionsB.push({
            value: 'AMG',
            label: 'AMG'
          })
        }
        console.log('changeA')
      },
      changeB () {
        console.log('changeB')
      },
      submit () {
        this.$confirm('确定提交？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '提交成功'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      }
    },
    components: {
      Scroll,
      VDistpicker
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'

  .order
    position: absolute
    width: 100%
    top: 0
    bottom: 0
    background-image: url("./bg-2.jpg")
    background-repeat repeat
    background-size: contain
    .order-content
      position: absolute
      width: 100%
      top: 44px
      bottom: 0
      overflow: hidden
      .content
        position: relative
        width: 100%
        overflow: hidden
        .list
          display: block
          margin: 80px 10% 0
          border-radius: 5px
          background-color: $color-text-l
          .title
            padding: 15px
          .upload-demo
            padding: 15px
          .contain
            padding-top: 45px
        .distpicker
          display: flex
          flex-direction: row
          margin: 50px 10% 0
          border-radius: 5px
          background-color: $color-text-l
          span
            flex: 0.5
            text-align center
            line-height: 30px
            padding: 15px
            .red
              display: inline-block
              color: red
          .contain
            flex: 1
            padding: 20px
          .input
            flex: 1
            line-height: 30px
            padding: 20px
        .car
          display: flex
          flex-direction: row
          margin: 0 10%
          border-radius: 5px
          background-color: $color-text-l
          span
            flex: 0.5
            text-align center
            line-height: 30px
            padding: 15px
            .red
              display: inline-block
              color: red
          .brand
            flex: 1
            padding: 20px
          .model
            flex: 1
            line-height: 30px
            padding: 20px
        .contact
          display: block
          margin: 0 10%
          .contacts
            display: flex
            flex-direction: row
            border-radius: 5px
            background-color: $color-text-l
            span
              flex: 0.5
              text-align center
              line-height: 30px
              padding: 15px
              .red
                display: inline-block
                color: red
            .input
              flex: 2
              line-height: 30px
              padding: 20px
          .address
            display: flex
            flex-direction: row
            border-radius: 5px
            background-color: $color-text-l
            span
              flex: 0.5
              text-align center
              line-height: 30px
              padding: 15px
              .red
                display: inline-block
                color: red
            .input
              flex: 2
              line-height: 30px
              padding: 20px
        .button
          margin: 50px auto
          text-align: center
</style>
