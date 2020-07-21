import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
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
      <View className='aboutPage'>
        <View className='aboutView'>
          <View className='companyName'>您好，admin</View>
          <View className='projectName'>您当前是登录状态</View>
          <View className='splitLine'></View>
          <View className='signOut'>退出</View>
        </View> 
        <View className='spaceView'></View>
        <View className='spaceView2'></View>
      </View>
    )
  }
}
