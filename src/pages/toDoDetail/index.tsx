import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtTextarea } from 'taro-ui'
import search from '../../images/search.png'
import toDetail from '../../images/toDetail.png'
import { get, post2 } from '../../utils/request'
import './index.less'

export default class Index extends Component {

  constructor(props) {
    super(props)

    this.state = {
      taskjson:'',
      infojson:'',
      loglist:'',
      tcontent:'',
      tc:false,
      tlength:100
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
    let taskId = JSON.parse(localStorage.getItem('tmsg')).data.taskId
    let processInstanceId = JSON.parse(localStorage.getItem('tmsg')).data.processInstanceId

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
setContentValue(){
	let that = this
	let inputs = document.getElementsByName('items');
	for (var i = 0; i < inputs .length; i++) {
	if (inputs [i].checked) {
		that.setState({ tcontent: inputs[i].value})
	}
	}
}

syncContentValue(e){
	this.setState({ tcontent: e})
}

pass(){
	let that = this
	if(that.state.tcontent == '' || that.state.tcontent.length < 1){
		alert('请填写意见')
	}else{
	    let taskId = JSON.parse(localStorage.getItem('tmsg')).data.taskId
	    post2('/admin-api/act/task/complete?&token='+JSON.parse(localStorage.getItem('userInfo')).data.token, {
	      taskId: taskId,
	      comment: that.state.tcontent
	    },).then(res => {
	      console.log(res)
	      if(res.msg=='success'){
		Taro.navigateTo({ url: `/pages/toDoList/index` })
	      }
	    })
	}
	
}
undo(){
	let that = this
	if(that.state.tcontent == '' || that.state.tcontent.length < 1){
		alert('请填写意见')
	}else{
	    let taskId = JSON.parse(localStorage.getItem('tmsg')).data.taskId
	    post2('/admin-api/act/task/backPreviousTask?&token='+JSON.parse(localStorage.getItem('userInfo')).data.token, {
	      taskId: taskId,
	      comment: that.state.tcontent
	    },).then(res => {
	      console.log(res)
	      if(res.msg=='success'){
		Taro.navigateTo({ url: `/pages/toDoList/index` })
	      }else{
		alert(res.msg)
	      }
	    })
	}
}
over(){
	let that = this
	if(that.state.tcontent == '' || that.state.tcontent.length < 1){
		alert('请填写意见')
	}else{
	    let taskId = JSON.parse(localStorage.getItem('tmsg')).data.taskId
	    post2('/admin-api/act/task/endProcess?&token='+JSON.parse(localStorage.getItem('userInfo')).data.token, {
	      taskId: taskId,
	      comment: that.state.tcontent
	    },).then(res => {
	      console.log(res)
	      if(res.msg=='success'){
		//Taro.navigateBack({
		//  delta: 1 // 返回上一级页面。
	        //});
		Taro.navigateTo({ url: `/pages/toDoList/index` })
	      }
	    })
	}
}
  render () {
    const { taskjson , infojson ,loglist} = this.state

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
	<View className='todoDetail2'>
	<View className='tdtitle'>任务办理</View>
          <View className='todoDetailView'>
                  <View className='todoInfo' >
                    <View className='taskname'>当前步骤：{taskjson.taskName}</View>
                    <View className='taskname'>
		                  审核意见：
		                  <input type="radio" name="items" value="同意" className="radiobtn" onClick={() => this.setContentValue()} />同意
                      <input type="radio" name="items" value="不同意" className="radiobtn" onClick={() => this.setContentValue()} />不同意
		    </View>
		    <View className='texta'>
		    <AtTextarea  height={50} count={false} placeholder='补充意见说明' value={this.state.tcontent} onChange={(e) => this.syncContentValue(e)} />
		    </View>
                </View>
	  </View>
	  <View className='bt_pass' onClick={() => this.pass()} >通过</View>
	  <View className='bt_undo' onClick={() => this.undo()} >回退</View>
	  <View className='bt_over' onClick={() => this.over()} >终止</View>
	</View>
	<View className='spaceLine'></View>
	<View className='todoDetail2'>
	<View className='tdtitle'>流转详情</View>
	{ loglist.length > 0 &&
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
      }
      </View>
      </View>
    )
  }
}
