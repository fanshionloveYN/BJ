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

  constructor(props) {
    super(props)

    this.state = {
      userInfo: {}
    }
  }

  componentWillMount () { 
    this.getLoginStatus()
  }

  componentDidMount () { 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getLoginStatus () {
    if (localStorage.getItem('userInfo')) {
      this.setState({ userInfo: localStorage.getItem('userInfo')})
    }
  }

  toLogin(path) {
    if (this.state.userInfo.length < 1) {
      Taro.navigateTo({ url: `/pages/${path}/index` })
    }
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
    const { userInfo } = this.state
    const userName = userInfo.length > 0 ? JSON.parse(userInfo).data.realName : '您好，请登录'
    return (
      <View className='myPage'>
        <View className='header'>
          <Image src={myPageBg1} className='myPageBg1'></Image>
          <View className='userInfoView' onClick={()=> this.toLogin('login')}>
            <Image src={avatar} className='avatar'></Image>
            <View className='toLogin'>{userName}</View>
            <Image src={arrow_right2} className='arrow_right2'></Image>
          </View>
        </View>
        <View className='mainContent'>
        {
            json.length > 0 && json.map((item, index) => {
              return (
                <View className='optionsView' key={index} onClick={()=> this.toLogin(item.router)}>
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
