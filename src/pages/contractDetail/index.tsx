import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import contractDetailIcon from '../../images/customerDetailIcon.png'
import './index.less'

export default class Index extends Component {

  componentWillMount () { 
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
  const conjson = {
    "code":0,
    "msg":"success",
    "data":{
        "id":"1280749967744557057",
        "contract_code":"lhzc-2020-017",
        "customer_id":"1215063524229779745",
        "customer_name":"廖舒情",
        "rent_unit_id":"1215065885564211532",
        "rent_unit_code":"3716",
        "address":"杨浦公园",
        "acreage":275,
        "start_date":"2020-05-01",
        "end_date":"2022-04-30",
        "register_date":"2020-07-08",
        "stop_date":"2022-04-30",
        "fee_start":null,
        "fee_end":null,
        "the_days":null,
        "fee_round":null,
        "payment_cycle":"3",
        "rent_type":"N",
        "annual_rent":100400,
        "date_rent":null,
        "current_rent":null,
        "conprice":1,
        "deposit":10000,
        "contract_period":24,
        "amount_arrears":null,
        "company_code":"1209313268526237710",
        "management_projects":null,
        "other_fee":null,
        "contract_type_code":"01",
        "status_code":"02",
        "sub_tenant":"N",
        "remark":null,
        "creator":"1214748552520204289",
        "create_date":"2020-07-08 14:26:02",
        "updater":"1214748552520204289",
        "update_date":"2020-07-08",
        "dept_id":"1209313262926237701",
        "proc_status":"2",
        "safety_agreement":"Y",
        "old_id":null,
        "contract_properties":"02",
        "pricing_information":"杨浦公园于2020年03月31日定价，最低价是1.00元/㎡/天",
        "credit_report":null,
        "report_date":null,
        "report_file":null,
        "file_date":null,
        "customer_cusrating":null,
        "cusrating_date":null,
        "rent_free":null,
        "attachments":[
            {
                "label":"（廖舒情-碰碰车）场地使用合同（无产证）.doc",
                "value":"http://180.168.137.3:8081//upload/20200708/8230888277f046a6ad2b3076e0534bad.doc"
            }
        ],
        "BPM_TITLE":"lhzc-2020-017-廖舒情-杨浦公园",
        "house_id":"1215924727332249693",
        "_process_title":"廖舒情@杨浦公园",
        "contract_unit":[

        ],
        "rentifems":[

        ]
    }
}
const planjson = {
    "code":0,
    "msg":"success",
    "data":[
        {
            "id":"1282866966553550849",
            "code":"lhzc-2020-017-20200501YJ",
            "contract_id":"1280749967744557057",
            "contract_code":"lhzc-2020-017",
            "address":"杨浦公园",
            "customer_id":"1215063524229779745",
            "customer_name":"廖舒情",
            "contract_fee":10000,
            "company":"1209313268526237710",
            "start_date":"2020-05-01",
            "end_date":"2020-05-01",
            "recetype":"03",
            "ajust_fee":0,
            "fee":10000,
            "sumfee":null,
            "status":"03",
            "arrears_sf":null,
            "arrears_times":"52",
            "ffibillnumber":null,
            "ffiremark":null,
            "state":"0",
            "remark":null,
            "creator":"1214748552520204289",
            "create_date":"2020-07-14 10:38:14",
            "updater":"1214748552520204289",
            "update_date":"2020-07-14",
            "dept_id":"1209313262926237701",
            "attachments":null,
            "invoice":null,
            "old_id":null,
            "proc_status":"0",
            "invoice_status":""
        },
        {
            "id":"1282866966918455298",
            "code":"lhzc-2020-017-20200501",
            "contract_id":"1280749967744557057",
            "contract_code":"lhzc-2020-017",
            "address":"杨浦公园",
            "customer_id":"1215063524229779745",
            "customer_name":"廖舒情",
            "contract_fee":25099.99,
            "company":"1209313268526237710",
            "start_date":"2020-05-01",
            "end_date":"2020-07-31",
            "recetype":"01",
            "ajust_fee":0,
            "fee":25099.99,
            "sumfee":null,
            "status":"03",
            "arrears_sf":null,
            "arrears_times":"52",
            "ffibillnumber":null,
            "ffiremark":null,
            "state":"0",
            "remark":null,
            "creator":"1214748552520204289",
            "create_date":"2020-07-14 10:38:14",
            "updater":"1214748552520204289",
            "update_date":"2020-07-14",
            "dept_id":"1209313262926237701",
            "attachments":null,
            "invoice":null,
            "old_id":null,
            "proc_status":"0",
            "invoice_status":""
        },
        {
            "id":"1282866967274971138",
            "code":"lhzc-2020-017-20200801",
            "contract_id":"1280749967744557057",
            "contract_code":"lhzc-2020-017",
            "address":"杨浦公园",
            "customer_id":"1215063524229779745",
            "customer_name":"廖舒情",
            "contract_fee":25100,
            "company":"1209313268526237710",
            "start_date":"2020-08-01",
            "end_date":"2020-10-31",
            "recetype":"01",
            "ajust_fee":0,
            "fee":25100,
            "sumfee":null,
            "status":"01",
            "arrears_sf":null,
            "arrears_times":null,
            "ffibillnumber":null,
            "ffiremark":null,
            "state":"0",
            "remark":null,
            "creator":"1214748552520204289",
            "create_date":"2020-07-14 10:38:14",
            "updater":"1214748552520204289",
            "update_date":"2020-07-14",
            "dept_id":"1209313262926237701",
            "attachments":null,
            "invoice":null,
            "old_id":null,
            "proc_status":"0",
            "invoice_status":""
        },
        {
            "id":"1282866967618904066",
            "code":"lhzc-2020-017-20201101",
            "contract_id":"1280749967744557057",
            "contract_code":"lhzc-2020-017",
            "address":"杨浦公园",
            "customer_id":"1215063524229779745",
            "customer_name":"廖舒情",
            "contract_fee":25100,
            "company":"1209313268526237710",
            "start_date":"2020-11-01",
            "end_date":"2021-01-31",
            "recetype":"01",
            "ajust_fee":0,
            "fee":25100,
            "sumfee":null,
            "status":"00",
            "arrears_sf":null,
            "arrears_times":null,
            "ffibillnumber":null,
            "ffiremark":null,
            "state":"0",
            "remark":null,
            "creator":"1214748552520204289",
            "create_date":"2020-07-14 10:38:14",
            "updater":"1214748552520204289",
            "update_date":"2020-07-14",
            "dept_id":"1209313262926237701",
            "attachments":null,
            "invoice":null,
            "old_id":null,
            "proc_status":"0",
            "invoice_status":""
        },
        {
            "id":"1282866967958642690",
            "code":"lhzc-2020-017-20210201",
            "contract_id":"1280749967744557057",
            "contract_code":"lhzc-2020-017",
            "address":"杨浦公园",
            "customer_id":"1215063524229779745",
            "customer_name":"廖舒情",
            "contract_fee":25100,
            "company":"1209313268526237710",
            "start_date":"2021-02-01",
            "end_date":"2021-04-30",
            "recetype":"01",
            "ajust_fee":0,
            "fee":25100,
            "sumfee":null,
            "status":"00",
            "arrears_sf":null,
            "arrears_times":null,
            "ffibillnumber":null,
            "ffiremark":null,
            "state":"0",
            "remark":null,
            "creator":"1214748552520204289",
            "create_date":"2020-07-14 10:38:14",
            "updater":"1214748552520204289",
            "update_date":"2020-07-14",
            "dept_id":"1209313262926237701",
            "attachments":null,
            "invoice":null,
            "old_id":null,
            "proc_status":"0",
            "invoice_status":""
        },
        {
            "id":"1282866968298381313",
            "code":"lhzc-2020-017-20210501",
            "contract_id":"1280749967744557057",
            "contract_code":"lhzc-2020-017",
            "address":"杨浦公园",
            "customer_id":"1215063524229779745",
            "customer_name":"廖舒情",
            "contract_fee":25100,
            "company":"1209313268526237710",
            "start_date":"2021-05-01",
            "end_date":"2021-07-31",
            "recetype":"01",
            "ajust_fee":0,
            "fee":25100,
            "sumfee":null,
            "status":"00",
            "arrears_sf":null,
            "arrears_times":null,
            "ffibillnumber":null,
            "ffiremark":null,
            "state":"0",
            "remark":null,
            "creator":"1214748552520204289",
            "create_date":"2020-07-14 10:38:14",
            "updater":"1214748552520204289",
            "update_date":"2020-07-14",
            "dept_id":"1209313262926237701",
            "attachments":null,
            "invoice":null,
            "old_id":null,
            "proc_status":"0",
            "invoice_status":""
        },
        {
            "id":"1282866968638119937",
            "code":"lhzc-2020-017-20210801",
            "contract_id":"1280749967744557057",
            "contract_code":"lhzc-2020-017",
            "address":"杨浦公园",
            "customer_id":"1215063524229779745",
            "customer_name":"廖舒情",
            "contract_fee":25100,
            "company":"1209313268526237710",
            "start_date":"2021-08-01",
            "end_date":"2021-10-31",
            "recetype":"01",
            "ajust_fee":0,
            "fee":25100,
            "sumfee":null,
            "status":"00",
            "arrears_sf":null,
            "arrears_times":null,
            "ffibillnumber":null,
            "ffiremark":null,
            "state":"0",
            "remark":null,
            "creator":"1214748552520204289",
            "create_date":"2020-07-14 10:38:14",
            "updater":"1214748552520204289",
            "update_date":"2020-07-14",
            "dept_id":"1209313262926237701",
            "attachments":null,
            "invoice":null,
            "old_id":null,
            "proc_status":"0",
            "invoice_status":""
        },
        {
            "id":"1282866968977858561",
            "code":"lhzc-2020-017-20211101",
            "contract_id":"1280749967744557057",
            "contract_code":"lhzc-2020-017",
            "address":"杨浦公园",
            "customer_id":"1215063524229779745",
            "customer_name":"廖舒情",
            "contract_fee":25100,
            "company":"1209313268526237710",
            "start_date":"2021-11-01",
            "end_date":"2022-01-31",
            "recetype":"01",
            "ajust_fee":0,
            "fee":25100,
            "sumfee":null,
            "status":"00",
            "arrears_sf":null,
            "arrears_times":null,
            "ffibillnumber":null,
            "ffiremark":null,
            "state":"0",
            "remark":null,
            "creator":"1214748552520204289",
            "create_date":"2020-07-14 10:38:15",
            "updater":"1214748552520204289",
            "update_date":"2020-07-14",
            "dept_id":"1209313262926237701",
            "attachments":null,
            "invoice":null,
            "old_id":null,
            "proc_status":"0",
            "invoice_status":""
        },
        {
            "id":"1282866969317597186",
            "code":"lhzc-2020-017-20220201",
            "contract_id":"1280749967744557057",
            "contract_code":"lhzc-2020-017",
            "address":"杨浦公园",
            "customer_id":"1215063524229779745",
            "customer_name":"廖舒情",
            "contract_fee":25100,
            "company":"1209313268526237710",
            "start_date":"2022-02-01",
            "end_date":"2022-04-30",
            "recetype":"01",
            "ajust_fee":0,
            "fee":25100,
            "sumfee":null,
            "status":"00",
            "arrears_sf":null,
            "arrears_times":null,
            "ffibillnumber":null,
            "ffiremark":null,
            "state":"0",
            "remark":null,
            "creator":"1214748552520204289",
            "create_date":"2020-07-14 10:38:15",
            "updater":"1214748552520204289",
            "update_date":"2020-07-14",
            "dept_id":"1209313262926237701",
            "attachments":null,
            "invoice":null,
            "old_id":null,
            "proc_status":"0",
            "invoice_status":""
        }
    ]
}
    return (
      <View className='contractDetailPage'>
        <View className='spaceLine'></View>
        <View className='detailHeader'>
          <View className='contractInfo'>
            <View className='name'>编号：{conjson.data.contract_code}</View>
            <View className='info'>客户：{conjson.data.customer_name}</View>
            <View className='info'>地址：{conjson.data.address}</View>
	    <View className='info'>面积：{conjson.data.acreage}平方米</View>
	    <View className='info'>年租金：{conjson.data.annual_rent}元</View>
	    <View className='info'>单价：{conjson.data.conprice}</View>
	    <View className='info'>期限：{conjson.data.contract_period}</View>
	    <View className='info'>开始：{conjson.data.start_date}</View>
	    <View className='info'>结束：{conjson.data.end_date}</View>
          </View>
          <Image src={contractDetailIcon} className='contractDetailIcon'></Image>
        </View>
        <View className='spaceLine'></View>
        <View className='contractDetail'>
          <View className='contractDetailView'>
	          <View className='contractDetailHeader'>收费计划</View>
            {
              planjson.data.length > 0 && planjson.data.map((item, index) => {
                return(
                  <View className='contractInfo' key={index}>
                    <View className='name' style="border:0;margin-left:0.2rem;">{item.start_date} -- {item.end_date}</View>
                    <View className='info'>金额：{item.fee}</View>
                    <View className='info'>类型：{item.recetype=="03"?"押金":"租金"}</View>
		    <View className='info'>状态：{item.status=="03"?"已欠费":(item.status=="01"?"收费中":"待执行")}</View>
                    {
                      index + 1 !== planjson.data.length &&
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
