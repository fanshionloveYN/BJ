import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import myPageBg1 from '../../images/myPageBg1.png'
import arrow_right2 from '../../images/arrow_right2.png'
import avatar from '../../images/avatar.png'
import aboutIcon from '../../images/aboutIcon.png'
import accountIcon from '../../images/accountIcon.png'
import arrow_right3 from '../../images/arrow_right3.png'
import './index.less'

export default class Index extends Component {

  componentWillMount () { 
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  toLogin(path) {
    Taro.navigateTo({ url: `/pages/${path}/index` })
  }



  render () {
    const json = [
      {
        icon: aboutIcon,
        name: '关于',
        router: 'about'
      },
      {
        icon: accountIcon,
        name: '账号管理',
        router: 'admin'
      }
    ]
    return (
      <View className='myPage'>
        <View className='header'>
          <Image src={myPageBg1} className='myPageBg1'></Image>
          <View className='userInfoView' onClick={()=> this.toLogin('login')}>
            <Image src={avatar} className='avatar'></Image>
            <View className='toLogin'>您好，请登录</View>
            <Image src={arrow_right2} className='arrow_right2'></Image>
          </View>
        </View>
        <View className='mainContent'>
        {
            json.length > 0 && json.map((item, index) => {
              return (
                <View className='optionsView' onClick={()=> this.toLogin(item.router)}>
                  <Image src={item.icon} className='icon'></Image>
                  <View className='name'>{item.name}</View>
                  <Image src={arrow_right3} className='arrow_right3'></Image>
                  {
                    index + 1 < json.length &&
                    <View className="splitLine"></View>
                  }
                </View>
              )
            })
        }
        </View>
      </View>
    )
  }
}
