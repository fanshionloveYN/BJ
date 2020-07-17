import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import customerDetailIcon from '../../images/customerDetailIcon.png'
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
      <View className='customerDetailPage'>
        <View className='spaceLine'></View>
        <View className='detailHeader'>
          <View className='customerInfo'>
            <View className='name'>名称：上海樱雅咖啡有限公司</View>
            <View className='info'>编号：3601-103.2层</View>
            <View className='info'>证件号码：310109198601163019</View>
            <View className='info'>评级：</View>
          </View>
          <Image src={customerDetailIcon} className='customerDetailIcon'></Image>
        </View>
        <View className='spaceLine'></View>
        <View className=''>
          
        </View>
      </View>
    )
  }
}
