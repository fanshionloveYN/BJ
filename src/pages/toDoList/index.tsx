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

  goToDetail (taskId,processInstanceId) {
    let tmsg = {'taskId':taskId,'processInstanceId':processInstanceId}
    Taro.setStorageSync('tmsg', tmsg)
    Taro.navigateTo({ url: `/pages/toDoDetail/index`})
  }

  getData() {
    get('/admin-api/act/task/myToDoTaskPage', {
      page:1,
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

    return (
      <View className='indexPage'>
        <View className='searchView'>
          <View className='searchInput'>
            <Input placeholder='请输入待办名称' className='searchInputControl' placeholder-class="place-holder"></Input>
            <Image src={search} className='searchImg'></Image>
          </View>
        </View>
        <View className='listView'>
          {
            dataJson.length > 0 && dataJson.map((item, index) => {
              return (
                <View className='itemView' key={index}>
                  <View className='itemLeft'>
                    <Text className='title'>类型：{item.processDefinitionName}</Text>
                    <Text className='text'>标题：{item.bpm_title}</Text>
                    <Text className='text'>创建时间：{item.createTime}</Text>
                    <Text className='text'>当前步骤：{item.taskName}</Text>
                    <Text className='text'>开始时间：{item.startTime}</Text>
                  </View>
                  <View className='itemRight'>
                    <Image src={toDetail} className='toDetail' onClick={()=> this.goToDetail(item.taskId,item.processInstanceId)}></Image>
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
