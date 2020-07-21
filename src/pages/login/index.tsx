import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import loginNameIcon from '../../images/loginNameIcon.png'
import loginPasswordIcon from '../../images/loginPasswordIcon.png'
import './index.less'

export default class Index extends Component {

  componentWillMount () { 
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

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
        <View className='loginBtn'>立即登录</View>
      </View>
    )
  }
}
