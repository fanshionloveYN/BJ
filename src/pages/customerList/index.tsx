import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import search from '../../images/search.png'
import toDetail from '../../images/toDetail.png'
import listViewBg from '../../images/listViewBg.png'
import { get } from '../../utils/request'
import './index.less'

export default class Index extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dataJson:[],
      total:0
    }
  }
	
  componentWillMount () { 
	this.getData()
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goToDetail () {
    Taro.navigateTo({ url: `/pages/customerDetail/index` })
  }

  getData() {
    get('/admin-api/builder/data/page/reis_customer?customer_name.like=', {
      page:1,
      limit:20,
      token: JSON.parse(localStorage.getItem('userInfo')).data.token
    }).then(res => {
	console.log(res.data.list)
	this.setState({ dataJson: res.data.list,total:res.data.total})
    })
  }

  render () {
    const { dataJson , total} = this.state
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
            dataJson.length > 0 && dataJson.map((item, index) => {
              return (
                <View className='itemView' key={index}>
                  <View className='itemLeft'>
                    <Text className='title'>名称：{item.customer_name}</Text>
                    <Text className='text'>编号：{item.customer_code}</Text>
                    <Text className='text'>证件号码：{item.certificate_number}</Text>
                    <Text className='text'>评级：{item.star}</Text>
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
