import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import Simple from '../../components/charts/Simple.jsx';
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
      <View className='chartDetailPage'>
        <View className='chartView'>
            <View className='chartTitle'>分地区房屋面积统计(平方米)</View>
            <Simple />
        </View>
      </View>
    )
  }
}