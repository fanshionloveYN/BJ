import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import search from '../../images/search.png'
import toDetail from '../../images/toDetail.png'
import listViewBg from '../../images/listViewBg.png'
import './index.less'

export default class Index extends Component {

  componentWillMount () { 
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const json = [
      {
        type: '租赁合同审批',
        title: '上海益丰大药房连锁有限公司@殷行路763号1楼',
        createDate: '2020-07-06 17:31:15',
        current: '桥升公司财务部',
        beginDate: '2020-05-06 15:31:30'
      },
      {
        type: '租赁合同审批',
        title: '上海益丰大药房连锁有限公司@殷行路763号1楼',
        createDate: '2020-07-06 17:31:15',
        current: '桥升公司财务部',
        beginDate: '2020-05-06 15:31:30'
      },
      {
        type: '租赁合同审批',
        title: '上海益丰大药房连锁有限公司@殷行路763号1楼',
        createDate: '2020-07-06 17:31:15',
        current: '桥升公司财务部',
        beginDate: '2020-05-06 15:31:30'
      }
    ]
    console.log(json)
    return (
      <View className='indexPage'>
        <View className='searchView'>
          <View className='searchInput'>
            <Input placeholder='请输入代办名称' className='searchInputControl' placeholder-class="place-holder"></Input>
            <Image src={search} className='searchImg'></Image>
          </View>
        </View>
        <View className='listView'>
          {
            json.length > 0 && json.map((item, index) => {
              return (
                <View className='itemView' key={index}>
                  <View className='itemLeft'>
                    <Text className='title'>类型：{item.type}</Text>
                    <Text className='text'>标题：{item.title}</Text>
                    <Text className='text'>创建时间：{item.createDate}</Text>
                    <Text className='text'>当前步骤：{item.current}</Text>
                    <Text className='text'>开始时间：{item.beginDate}</Text>
                  </View>
                  <View className='itemRight'>
                    <Image src={toDetail} className='toDetail'></Image>
                  </View>
                  <Image src={listViewBg} className='viewBgi'></Image>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}
