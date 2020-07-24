import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import search from '../../images/search.png'
import toDetail from '../../images/toDetail.png'
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

  componentDidMount () { this.init() }

  componentWillUnmount () { }

  componentDidShow () {
	
  }

  componentDidHide () { }

  getData() {
    get('/admin-api/builder/data/page/reis_house?page=undefined&longitude.ge=121.50249194165039&longitude.le=121.54197405834961&latitude.ge=31.27878811611185&latitude.le=31.33276215359025',
    {
	limit: 50,
	token: JSON.parse(localStorage.getItem('userInfo')).data.token
    }).then(res => {
	this.setState({ dataJson: res.data.list,total:res.data.total})
    })
  }

init() {
	var center = new qq.maps.LatLng(31.27878811611185,121.50249194165039);

	var map = new qq.maps.Map(document.getElementById("container"), {
		// 地图的中心地理坐标。
		center: center,
		zoom:12,
		draggable: true,
		disableDefaultUI: true 
	});
	
	var marker = new qq.maps.Marker({
		position: center,
		map: map
	});
}

  render () {
	const { dataJson , total} = this.state
        console.log('dataJson',dataJson)

    return (
      <View id='container' className='map'></View>
    )
  }
}
