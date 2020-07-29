import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import contractDetailIcon from '../../images/customerDetailIcon.png'
import { get } from '../../utils/request'
import './index.less'

export default class Index extends Component {

  constructor(props) {
    super(props)

    this.state = {
      conjson:'',
      feelist:''
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
    let id = tmsg.id
    get('/admin-api/builder/data/reis_contract/'+id, {
      token: JSON.parse(localStorage.getItem('userInfo')).data.token
    }).then(res => {
	that.setState({ conjson: res.data})
    })

    get('/admin-api/builder/data/list/reis_fee_plan?contract_id.eq='+id, {
      token: JSON.parse(localStorage.getItem('userInfo')).data.token
    }).then(res => {
	that.setState({ feelist: res.data})
    })

  }
  render () {

  const { conjson , feelist} = this.state
    return (
      <View className='contractDetailPage'>
        <View className='spaceLine'></View>
        <View className='detailHeader'>
          <View className='contractInfo'>
            <View className='name'>编号：{conjson.contract_code}</View>
            <View className='info'>客户：{conjson.customer_name}</View>
            <View className='info'>地址：{conjson.address}</View>
	    <View className='info'>面积：{conjson.acreage}平方米</View>
	    <View className='info'>年租金：{conjson.annual_rent}元</View>
	    <View className='info'>单价：{conjson.conprice}</View>
	    <View className='info'>期限：{conjson.contract_period}</View>
	    <View className='info'>开始：{conjson.start_date}</View>
	    <View className='info'>结束：{conjson.end_date}</View>
          </View>
          <Image src={contractDetailIcon} className='contractDetailIcon'></Image>
        </View>
        <View className='spaceLine'></View>
        <View className='contractDetail'>
          <View className='contractDetailView'>
	          <View className='contractDetailHeader'>收费计划</View>
            {
              feelist.length > 0 && feelist.map((item, index) => {
                return(
                  <View className='contractInfo' key={index}>
                    <View className='name' style="border:0;margin-left:0.2rem;">{item.start_date} -- {item.end_date}</View>
                    <View className='info'>金额：{item.fee}</View>
                    <View className='info'>类型：{item.recetype=="03"?"押金":"租金"}</View>
		    <View className='info'>状态：{item.status=="03"?"已欠费":(item.status=="01"?"收费中":"待执行")}</View>
                    {
                      index + 1 !== feelist.length &&
                      <View className="splitLine"></View>
                    }
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
