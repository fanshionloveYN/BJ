import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import propertyDetailIcon from '../../images/customerDetailIcon.png'
import { get } from '../../utils/request'
import './index.less'

export default class Index extends Component {

  constructor(props) {
    super(props)

    this.state = {
      mainjson:'',
      housejson:'',
      conjson:''
    }
  }
  componentWillMount () { 
	this.getData()
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getData() {
    let that = this
    let id = JSON.parse(localStorage.getItem('tmsg')).data.id
    get('/admin-api/builder/data/reis_house/'+id, {
      token: JSON.parse(localStorage.getItem('userInfo')).data.token
    }).then(res => {
	//console.log('house::::',res.data)
	that.setState({ mainjson: res.data})
    })

    get('/admin-api/builder/data/list/reis_rent_unit?house_id.eq='+id, {
      token: JSON.parse(localStorage.getItem('userInfo')).data.token
    }).then(res => {
	//console.log('rent_unit::::',res.data)
	that.setState({ housejson: res.data})
    })

    get('/admin-api/builder/data/list/reis_contract?status_code=02&house_id.eq='+id, {
      token: JSON.parse(localStorage.getItem('userInfo')).data.token
    }).then(res => {
	//console.log('contract::::',res.data)
	that.setState({ conjson: res.data})
    })
  }


  render () {
  const { mainjson , housejson ,conjson} = this.state

    return (
      <View className='propertyDetailPage'>
        <View className='spaceLine'></View>
        <View className='detailHeader'>
          <View className='propertyInfo'>
            <View className='name'>地址：{mainjson.address}</View>
            <View className='info'>编号：{mainjson.house_code}</View>
            <View className='info'>面积：{mainjson.acreage}平方米</View>
          </View>
          <Image src={propertyDetailIcon} className='propertyDetailIcon'></Image>
        </View>
        <View className='spaceLine'></View>
        <View className='propertyDetail'>
          <View className='propertyDetailView'>
	          <View className='propertyDetailHeader'>房屋单元</View>
            {
              housejson.length > 0 && housejson.map((item, index) => {
                return(
                  <View className='propertyInfo' key={index}>
                    <View className='name' style="border:0;margin-left:0.2rem;">位置：{item.address}</View>
                    <View className='info'>编号：{item.house_code}</View>
                    <View className='info'>面积：{item.acreage}平方米</View>
                    {
                      index + 1 !== housejson.length &&
                      <View className="splitLine"></View>
                    }
                  </View>
                )
              })
            }
          </View>
	  </View>
	  <View className='propertyDetail'>
          <View className='propertyDetailView'>
            <View className='propertyDetailHeader'>租赁合同</View>
	          {
            conjson.length > 0 && conjson.map((item, index) => {
              return(
                <View className='propertyInfo' key={index}>
                  <View className='propertyInfo' key={index}>
                    <View className='name' style="border:0;margin-left:0.2rem;">编号：{item.contract_code}</View>
                    <View className='info'>客户：{item.customer_name}</View>
                    <View className='info'>地址：{item.address}</View>
                    <View className='info'>面积：{item.acreage}平方米</View>
                    <View className='info'>年租金：{item.annual_rent}元</View>
                    <View className='info'>开始：{item.start_date}</View>
                    <View className='info'>结束：{item.end_date}</View>
                    {
                      index + 1 !== conjson.length &&
                      <View className="splitLine"></View>
                    }
                  </View>
                </View>
              )
            })
          }
        </View>
	</View>
      </View>
    )
  }
}
