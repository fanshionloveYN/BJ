import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'
import Taro from '@tarojs/taro'
import search from '../../images/search.png'
import listViewBg from '../../images/listViewBg.png'
import toDetail from '../../images/toDetail.png'
import { get } from '../../utils/request'
import './index.less'

export default class Index extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dataJson:[],
      total:0,
      searchValue: '',
      dargStyle: {//下拉框的样式
                top: 0 + 'px'
            },
            downDragStyle: {//下拉图标的样式
                height: 0 + 'px'
            },
            downText: '下拉刷新',
            upDragStyle: {//上拉图标样式
                height: 0 + 'px'
            },
            pullText: '上拉加载更多',
            start_p: {},
            scrollY:true,
            dargState: 0//刷新状态 0不做操作 1刷新 -1加载更多
    }
  }

  componentWillMount () { 
	this.getData()
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
	
  }

  componentDidHide () { }

  goToDetail (obj) {
    let tmsg = {'id':obj}
    Taro.setStorageSync('tmsg', tmsg)
    Taro.navigateTo({ url: `/pages/propertyDetail/index`})
  }

  getData() {
    console.log(this.state.searchValue)
    get('/admin-api/builder/data/page/reis_house?address.like='+this.state.searchValue, {
      page:1,
      limit:20,
      token: JSON.parse(localStorage.getItem('userInfo')).data.token
    }).then(res => {
	console.log(res.data.list)
	this.setState({ dataJson: res.data.list,total:res.data.total})
    })
  }
  setSearchValue(e) {
    this.setState({
      searchValue: e.detail.value
    })
    this.getData()
  }
  

    config: {
        enablePullDownRefresh: true,
        onReachBottomDistance: 50
    }
    
    onPullDownRefresh() {
        console.log('下拉刷新')
        setTimeout(() => {
            // 停止下拉刷新
            Taro.stopPullDownRefresh()
        }, 1000)
    }
 
    onReachBottom() {
        console.log('触底事件，做上拉加载')
    }

  render () {
    const { dataJson , total, searchValue} = this.state
    
    return (                
      <View className='propertyListPage'>
        <View className='searchView'>
          <View className='searchInput'>
            <Input placeholder='请输入资产名称' className='searchInputControl' placeholder-class="place-holder" value={searchValue} onChange={(e) => this.setSearchValue(e)}></Input>
            <Image src={search} className='searchImg'></Image>
          </View>
        </View>
        <View className='listView'>
          {
            dataJson.length > 0 && dataJson.map((item, index) => {
              return (
                <View className='itemView' key={index}>
                  <View className='itemLeft'>
                    <Text className='title'>地址：{item.address}</Text>
                    <Text className='text'>编号：{item.house_code}</Text>
                    <Text className='text'>面积：{item.acreage}平方米</Text>
                  </View>
                  <View className='itemRight'>
                    <Image src={toDetail} className='toDetail' onClick={()=> this.goToDetail(item.id)}></Image>
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