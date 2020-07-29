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
      taskjson:'',
      infojson:'',
      loglist:''
    }
  }
  componentWillMount () { 
        console.log('params',tmsg)
	this.getData()
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

 getData() {
    let that = this
    let taskId = tmsg.taskId
    let processInstanceId = tmsg.processInstanceId
    get('/admin-api/builder/process/task/'+taskId, {
      token: JSON.parse(localStorage.getItem('userInfo')).data.token
    }).then(res => {
	that.setState({ taskjson: res.data})
    })

    get('/admin-api/builder/process/processInstance/'+processInstanceId, {
      token: JSON.parse(localStorage.getItem('userInfo')).data.token
    }).then(res => {
	that.setState({ infojson: res.data})
    })

    get('/admin-api/act/his/getTaskHandleDetailInfo?&processInstanceId='+processInstanceId, {
      token: JSON.parse(localStorage.getItem('userInfo')).data.token
    }).then(res => {
	that.setState({ loglist: res.data})
    })
  }

  render () {
    const { taskjson , infojson ,loglist} = this.state
    console.log('taskjson::::',taskjson)
    console.log('loglist::::',loglist)
    return (
       <View className='todoDetailPage'>
        <View className='spaceLine'></View>
        <View className='todoDetail'>
          <View className='todoDetailView'>
            <View className='todoDetailHeader'>流程表单</View>             
	   {
	      infojson.variables != null &&
		    <View className='todoInfo' >
                    <View className='name' style="border:0;margin-left:0.2rem;">类型：{infojson.processDefinitionName}</View>
                    <View className='info'>客户：{infojson.variables.customer_name}</View>
		    <View className='info'>地址：{infojson.variables.address}</View>
                    <View className='info'>面积：{infojson.variables.acreage}平方米</View>
                    <View className='info'>年租金：{infojson.variables.annual_rent}元</View>
		    <View className='info'>单价：{infojson.variables.conprice}元</View>
		    <View className='info'>期限：{infojson.variables.contract_period}个月</View>
                    <View className='info'>开始时间：{infojson.variables.start_date}</View>
                    <View className='info'>结束时间：{infojson.variables.stop_date}</View>
		    </View>
	   }
	  </View>
	</View>

	<View className='todoDetail'>
          <View className='todoDetailView'>
                  <View className='todoInfo' >
                    <View className='taskname' style="border:0;margin-left:0.2rem;">当前步骤：{taskjson.taskName}</View>
                    <View className='taskname' style="border:0;margin-left:0.2rem;">审核意见：</View>
                </View>
	  </View>
	</View>
	<View className='todoDetailView'>
      {
            loglist.length > 0 && loglist.map((item, index) => {
              return(
                <View className='logInfo' key={index}>
                    <View className='name' style="border:0;margin-left:0.2rem;">步骤：{item.activityName}</View>
                    <View className='info'>处理人：{item.assignee}</View>
                    <View className='info'>完成时间：{item.endTime}</View>
                    <View className='info'>意见：{item.comment}</View>
                    <View className="splitLine"></View>
                </View>
              )
            })
      }
      </View>
      </View>
      
    )
  }
}
