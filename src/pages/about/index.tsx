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
          <View className='companyName'>上海杨浦城市建设投资集团</View>
          <View className='projectName'>房地产管理系统</View>
          <View className='splitLine'></View>
          <View className='version'>版本：2.0</View>
        </View>
        <View className='spaceView'></View>
        <View className='spaceView2'></View>
      </View>
    )
  }
}
