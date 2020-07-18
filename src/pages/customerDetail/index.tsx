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
        <View className='customerDetail'>
          <View className='customerDetailView'>
            <View className='customerDetailHeader'>租赁合同</View>
            <View className='customerInfo'>
              <View className='name' style="border:0;margin-left:0.2rem;">编号：LHZC-2019-18</View>
              <View className='info'>客户：上海樱雅咖啡有限公司</View>
              <View className='info'>面积：103.45平方米</View>
              <View className='info'>年租金：116200元</View>
              <View className='info'>开始时间：2019-12-10</View>
              <View className='info'>结束时间：2020-12-09</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
