import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import customerDetailIcon from '../../images/customerDetailIcon.png'
import { get } from '../../utils/request'
import './index.less'

export default class Index extends Component {

  constructor(props) {
    super(props)

    this.state = {
      customerjson:'',
      conlist:''
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
    get('/admin-api/builder/data/reis_customer/'+id, {
      token: JSON.parse(localStorage.getItem('userInfo')).data.token
    }).then(res => {
	that.setState({ customerjson: res.data})
    })

    get('/admin-api/builder/data/list/reis_contract?status_code=02&customer_id.eq='+id, {
      token: JSON.parse(localStorage.getItem('userInfo')).data.token
    }).then(res => {
	that.setState({ conlist: res.data})
    })

  }

  render () {

  const { customerjson , conlist} = this.state

    return (
      <View className='customerDetailPage'>
        <View className='spaceLine'></View>
        <View className='detailHeader'>
          <View className='customerInfo'>
            <View className='name'>名称：{customerjson.customer_name}</View>
            <View className='info'>编号：{customerjson.customer_code}</View>
            <View className='info'>证件号码：{customerjson.certificate_number}</View>
            <View className='info'>评级：{customerjson.star}</View>
          </View>
          <Image src={customerDetailIcon} className='customerDetailIcon'></Image>
        </View>
        <View className='spaceLine'></View>
        <View className='customerDetail'>
          <View className='customerDetailView'>
            <View className='customerDetailHeader'>租赁合同</View>
	    {
              conlist.length > 0 && conlist.map((item, index) => {
                return(
                  <View className='customerInfo' key={index}>
                  <View className='name' style="border:0;padding-left:0">编号：{item.contract_code}</View>
              　　<View className='info'>客户：{item.customer_name}</View>
              　　<View className='info'>面积：{item.acreage}平方米</View>
              　　<View className='info'>年租金：{item.annual_rent}元</View>
              　　<View className='info'>开始时间：{item.start_date}</View>
              　　<View className='info'>结束时间：{item.end_date}</View>
                    {
                      index + 1 !== conlist.length &&
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
