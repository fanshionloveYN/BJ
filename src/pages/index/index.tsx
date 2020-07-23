import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import bgImg_blue from '../../images/bgImg_blue.png'
import bgImg_green from '../../images/bgImg_green.png'
import bgImg_purple from '../../images/bgImg_purple.png'
import bgImg_yellow from '../../images/bgImg_yellow.png'
import circular_content from '../../images/circular_content.png'
import circular_house from '../../images/circular_house.png'
import circular_position from '../../images/circular_position.png'
import circular_user from '../../images/circular_user.png'
import arrow_right from '../../images/arrow_right.png'
import './index.less'

export default class Index extends Component {

  componentWillMount () { 
    Taro.showTabBar().then();
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  toPage(path) {
    Taro.navigateTo({ url: `/pages/${path}/index` })
  }

  render () {
    return (
      <View className='indexPage'>
        <View className='mainView'>
          <View className='layoutView' onClick={() => {this.toPage('propertyList')}}>
            <Image src={bgImg_blue} className='mainImg'></Image>
            <Image src={circular_house} className='leftImg'></Image>
            <Text className='mainText'>资产信息</Text>
            <Image src={arrow_right} className='arrow_right'></Image>
          </View>
          <View className='layoutView'>
            <Image src={bgImg_purple} className='mainImg'></Image>
            <Image src={circular_position} className='leftImg'></Image>
            <Text className='mainText'>房屋</Text>
            <Image src={arrow_right} className='arrow_right'></Image>
          </View>
          <View className='layoutView'>
            <Image src={bgImg_yellow} className='mainImg'></Image>
            <Image src={circular_content} className='leftImg'></Image>
            <Text className='mainText'>合同信息</Text>
            <Image src={arrow_right} className='arrow_right'></Image>
          </View>
          <View className='layoutView' onClick={() => {this.toPage('customerList')}}>
            <Image src={bgImg_green} className='mainImg'></Image>
            <Image src={circular_user} className='leftImg'></Image>
            <Text className='mainText'>客户信息</Text>
            <Image src={arrow_right} className='arrow_right'></Image>
          </View>
        </View>
      </View>
    )
  }
}
