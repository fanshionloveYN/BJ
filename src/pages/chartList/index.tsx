import React, { Component } from 'react'
import { View, Text, Image, Input, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import charListImg1 from '../../images/charListImg1.png'
import charListImg2 from '../../images/charListImg2.png'
import charListImg3 from '../../images/charListImg3.png'
import charListImg4 from '../../images/charListImg4.png'
import charListImg5 from '../../images/charListImg5.png'
import './index.less'

export default class Index extends Component {

  componentWillMount () { 
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
      <View className='chartPage'>
        <View className="card">
          <Button size='mini' type='default' className='btn'>资产</Button>
          <View className="cardInner">
            <View className="innerItem" onClick={()=> this.toPage('chartDetail')}>
              <Image src={charListImg1} className="innerIcon"></Image>
              行政区域
            </View>
            <View className="innerItem">
              <Image src={charListImg2} className="innerIcon"></Image>
              房屋用途
            </View>
            <View className="innerItem">
              <Image src={charListImg3} className="innerIcon"></Image>
              权属性质
            </View>
          </View>
        </View>
        <View className="card">
          <Button size='mini' type='default' className='btn'>经营</Button>
          <View className="cardInner">
            <View className="innerItem">
              <Image src={charListImg4} className="innerIcon"></Image>
              租赁合同
            </View>
            <View className="innerItem"> 
              <Image src={charListImg5} className="innerIcon"></Image>
              租金合同
            </View>
          </View>
        </View>
      </View>
    )
  }
}
