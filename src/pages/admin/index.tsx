import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'

export default class Index extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userInfo: ''
    }
  }	

  componentWillMount () { 
	
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { 
	this.getLoginStatus()
  }

  componentDidHide () { }

  getLoginStatus () {
    if (localStorage.getItem('userInfo')) {
      this.setState({ userInfo: localStorage.getItem('userInfo')})
    }
  }
  logout(){
    if(confirm('是否确认退出?')){
      localStorage.removeItem('userInfo')
      Taro.navigateTo({ url: `/pages/my/index` })
    }
  }

  render () {
    const { userInfo } = this.state
    const userName = userInfo.length > 0 ? JSON.parse(userInfo).data.realName : '请登录'
    return (
      <View className='aboutPage'>
        <View className='aboutView'>
          <View className='companyName'>您好，{userName}</View>
          <View className='projectName'>您当前是登录状态</View>
          <View className='splitLine'></View>
          <View className='signOut' onClick={()=> this.logout()}>退出</View>
        </View> 
        <View className='spaceView'></View>
        <View className='spaceView2'></View>
      </View>
    )
  }
}
