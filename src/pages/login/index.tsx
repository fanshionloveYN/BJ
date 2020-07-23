import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import loginNameIcon from '../../images/loginNameIcon.png'
import loginPasswordIcon from '../../images/loginPasswordIcon.png'
import { post } from '../../utils/request'
import './index.less'

export default class Index extends Component {

  componentWillMount () { 
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  appLogin () {
    post('/admin-api/applogin', {
      username: 'app001',
      password: '123456',
      _t: Date.parse(new Date())
    }).then(res => {
      console.log(res)
    })


    // Taro.request({
    //   url: 'http://180.168.137.3:8081/admin-api/applogin',
    //   method: 'POST',
    //   data: {
        
    //   },
    //   dataType: 'json',
    //   header: {
    //     'content-type': 'application/json'
    //   }    
    // }).then(function (res) {
    //   console.log(res)
    // })
  }

  render () {
    return (
      <View className='loginPage'>
        <View className='loginView'>
          <View className='loginName'>
            <Image src={loginNameIcon} className='loginIcon'></Image>
            <View>账号：</View>
            <Input className='loginInp'></Input>
          </View>
          <View className='loginpwd'>
            <Image src={loginPasswordIcon} className='loginIcon'></Image>
            <View>密码：</View>
            <Input className='loginInp' ></Input>
          </View>
        </View>
        <View className='loginBtn' onClick={()=> this.appLogin()}>立即登录</View>
      </View>
    )
  }
}
