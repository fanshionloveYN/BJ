import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import myPageBg1 from '../../images/myPageBg1.png'
import toDetail from '../../images/toDetail.png'
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
      <View className='indexPage'>
        <View className='header'>
          <Image src={myPageBg1} className='myPageBg1'></Image>
          <View className='userInfoView'></View>
        </View>
        <View className='mainContent'></View>
      </View>
    )
  }
}
