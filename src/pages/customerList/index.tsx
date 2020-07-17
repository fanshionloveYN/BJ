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

  goToDetail () {
    Taro.navigateTo({ url: `/pages/customerDetail/index` })
  }

  render () {
    const json = [
      {
        name: '中信建投证券股份有限公司上海分公司',
        number: 'ZDGASDLJO',
        cardId: '20301020202012345670 ',
        grade: 'A',
      },
      {
        name: '中信建投证券股份有限公司上海分公司',
        number: 'ZDGASDLJO',
        cardId: '20301020202012345670 ',
        grade: 'A',
      },
      {
        name: '中信建投证券股份有限公司上海分公司',
        number: 'ZDGASDLJO',
        cardId: '20301020202012345670 ',
        grade: 'A',
      }
    ]
    return (
      <View className='customerListPage'>
        <View className='searchView'>
          <View className='searchInput'>
            <Input placeholder='请输入客户名称' className='searchInputControl' placeholder-class="place-holder"></Input>
            <Image src={search} className='searchImg'></Image>
          </View>
        </View>
        <View className='listView'>
          {
            json.length > 0 && json.map((item, index) => {
              return (
                <View className='itemView' key={index}>
                  <View className='itemLeft'>
                    <Text className='title'>名称：{item.name}</Text>
                    <Text className='text'>编号：{item.number}</Text>
                    <Text className='text'>证件号码：{item.cardId}</Text>
                    <Text className='text'>评级：{item.grade}</Text>
                  </View>
                  <View className='itemRight'>
                    <Image src={toDetail} className='toDetail' onClick={()=> this.goToDetail()}></Image>
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
