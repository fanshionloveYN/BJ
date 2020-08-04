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

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () {
	
  }

  componentDidHide () { }


  getData() {
    get('/admin-api/builder/data/page/reis_house?page=undefined&longitude.ge=121.50249194165039&longitude.le=121.54197405834961&latitude.ge=31.27878811611185&latitude.le=31.33276215359025',
    {
	limit: 100,
	token: JSON.parse(localStorage.getItem('userInfo')).data.token
    }).then(res => {
	this.setState({ dataJson: res.data.list,total:res.data.total})
	this.init()
    })
  }

init() {
	const { dataJson , total} = this.state
        console.log('dataJson',dataJson)
	var center = new qq.maps.LatLng(31.27878811611185,121.50249194165039);

	var map = new qq.maps.Map(document.getElementById("container_mine"), {
		// 地图的中心地理坐标。
		center: center,
		zoom:12,
		draggable: true,
		disableDefaultUI: true 
	});
	for(var i=0;i<dataJson.length;i++){
		var address = dataJson[i].address;
		var vpoint = new qq.maps.LatLng(dataJson[i].latitude,dataJson[i].longitude);
		var marker = new qq.maps.Marker({
			position: vpoint,
			map: map
		});
		/**
		//添加到提示窗
		var info = new qq.maps.InfoWindow({
			map: map
		});
		//获取标记的点击事件
		qq.maps.event.addListener(marker, 'click', function() {
			info.open(); 
			info.setContent('<div style="text-align:center;white-space:nowrap;'+
			'margin:10px;">'+address+'</div>');
			info.setPosition(marker); 
		});
		**/
	}
}

  render () {
    return (
      <View id='container_mine' className='map'></View>
    )
  }
}
