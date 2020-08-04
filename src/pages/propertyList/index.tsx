import React, { Component } from 'react'
import { View, Text, Image, Input, ScrollView } from '@tarojs/components'
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
      pagenum:1,
      hasNextPage:true,
      startX:'',
      startY:''
    }
  }

  componentWillMount () { 
	if(localStorage.getItem('userInfo') == null){
	    Taro.navigateTo({
                url: '/pages/login/index'
            })
	}else{
	try{
	    JSON.parse(localStorage.getItem('userInfo')).data.token
	}catch{
	    Taro.navigateTo({
                url: '/pages/login/index'
            })
	}
	    this.getData()
	}
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
  getNextPageData() {
    let { dataJson, pagenum, hasNextPage} = this.state;
    get('/admin-api/builder/data/page/reis_house?address.like='+this.state.searchValue, {
      page:pagenum+1,
      limit:20,
      token: JSON.parse(localStorage.getItem('userInfo')).data.token
    }).then(res => {
	dataJson = dataJson.concat(res.data.list)
	if(res.data.total/20<=pagenum+1){
	  hasNextPage = false
	}
	this.setState({ dataJson: dataJson,total:res.data.total,pagenum:pagenum+1,hasNextPage:hasNextPage})
    })
  }
  onRefresh(){
    const { hasNextPage } = this.state;
    const scrollTop = -document.getElementsByClassName('scvw')[0].getBoundingClientRect().top;
    const scrollHeight = document.getElementsByClassName('scvw')[0].scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if(hasNextPage && scrollHeight - clientHeight - scrollTop < 100){
      console.log('触底，加载下一页')
      this.getNextPageData()
    }
  }
  touchStart(e) {
    this.setState({
      startX: e.touches[0].pageX,
      startY: e.touches[0].pageY,
    });
  }
  touchEnd(e) {
    if (this.state.dargState === 1) {
      this.down()
    } else if (this.state.dargState === -1) {
      this.pull()
    }
    const { startX, startY } = this.state;
    let endX = e.changedTouches[0].pageX;
    let endY = e.changedTouches[0].pageY;
    let direction = this.getDirection(startX, startY, endX, endY);
    switch (direction) {
      case 0:
        //console.log('未滑动！');
        break;
      case 1:
        //console.log('向上！');
	this.onRefresh();
        break;
      case 2:
        //console.log('向下！');
        break;
      case 3:
        //console.log('向左！');
        break;
      case 4:
        //console.log('向右！');
        break;
      default:
    }
  }

  // 触摸点和离开点连线与[x轴角度][3]
  getAngle = (angX, angY) => (Math.atan2(angY, angX) * 180) / Math.PI;

  // 根据接触和离开判断方向 1向上 2向下 3向左 4向右 0未发生滑动（[Math.abs][4]）
  getDirection = (startX, startY, endX, endY) => {
    const angX = endX - startX;
    const angY = endY - startY;
    let result = 0;
    // 如果滑动距离太短
    if (Math.abs(angX) < 2 && Math.abs(angY) < 2) {
      return result;
    }
    const angle = this.getAngle(angX, angY);
    if (angle >= -135 && angle <= -45) {
      result = 1;
    } else if (angle > 45 && angle < 135) {
      result = 2;
    } else if (
      (angle >= 135 && angle <= 180) ||
      (angle >= -180 && angle < -135)
    ) {
      result = 3;
    } else if (angle >= -45 && angle <= 45) {
      result = 4;
    }

    return result;
  };
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
	<ScrollView className='scvw' onTouchEnd={this.touchEnd.bind(this)}
                    onTouchStart={this.touchStart.bind(this)}
                    scrollWithAnimation>
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
	</ScrollView>
      </View>
    )
  }
}
