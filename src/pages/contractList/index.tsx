import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
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
      total:0
    }
  }

  componentWillMount () { 
    this.getData()
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goToDetail () {
    Taro.navigateTo({ url: `/pages/contractDetail/index` })
  }

  getData() {
    get('/admin-api/builder/data/page/reis_contract?status_code=02&address.like=', {
      page:1,
      limit:20,
      token: JSON.parse(localStorage.getItem('userInfo')).data.token
    }).then(res => {
	console.log(res.data.list)
	this.setState({ dataJson: res.data.list,total:res.data.total})
    })
  }

  render () {
    const { dataJson , total} = this.state
    //console.log('ja::::',dataJson.length)
    const json = [
            {
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
                "_process_title":"廖舒情@杨浦公园"
            },
            {
                "id":"1280748964194410498",
                "contract_code":"lhzc-2020-016",
                "customer_id":"1215063524229779745",
                "customer_name":"廖舒情",
                "rent_unit_id":"1215065885564211531",
                "rent_unit_code":"3715",
                "address":"杨浦公园",
                "acreage":181,
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
                "annual_rent":60000,
                "date_rent":null,
                "current_rent":null,
                "conprice":0.91,
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
                "create_date":"2020-07-08 14:22:03",
                "updater":"1214748552520204289",
                "update_date":"2020-07-08",
                "dept_id":"1209313262926237701",
                "proc_status":"2",
                "safety_agreement":"Y",
                "old_id":null,
                "contract_properties":"02",
                "pricing_information":"杨浦公园于2020年03月31日定价，最低价是0.90元/㎡/天",
                "credit_report":null,
                "report_date":null,
                "report_file":null,
                "file_date":null,
                "customer_cusrating":null,
                "cusrating_date":null,
                "rent_free":null,
                "attachments":[
                    {
                        "label":"（廖舒情-豪华波浪）场地使用合同（无产证）.doc",
                        "value":"http://180.168.137.3:8081//upload/20200708/72f895a22a53449194e0e2f104a8cb3a.doc"
                    }
                ],
                "BPM_TITLE":"lhzc-2020-016-廖舒情-杨浦公园",
                "house_id":"1215924727332249693",
                "_process_title":"廖舒情@杨浦公园"
            },
            {
                "id":"1280747347017588738",
                "contract_code":"lhzc",
                "customer_id":"1215063524229779745",
                "customer_name":"廖舒情",
                "rent_unit_id":"1215065885564211530",
                "rent_unit_code":"3714",
                "address":"杨浦公园",
                "acreage":193,
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
                "annual_rent":90200,
                "date_rent":null,
                "current_rent":null,
                "conprice":1.28,
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
                "create_date":"2020-07-08 14:15:37",
                "updater":"1214748552520204289",
                "update_date":"2020-07-08",
                "dept_id":"1209313262926237701",
                "proc_status":"2",
                "safety_agreement":"Y",
                "old_id":null,
                "contract_properties":"02",
                "pricing_information":"杨浦公园于2020年03月31日定价，最低价是1.27元/㎡/天",
                "credit_report":null,
                "report_date":null,
                "report_file":null,
                "file_date":null,
                "customer_cusrating":null,
                "cusrating_date":null,
                "rent_free":null,
                "attachments":[
                    {
                        "label":"（廖舒情-迷你飞车、快乐飞船）场地使用合同（无产证）.doc",
                        "value":"http://180.168.137.3:8081//upload/20200708/78b38cd0552041ea8f095a9272148dcd.doc"
                    }
                ],
                "BPM_TITLE":"lhzc-廖舒情-杨浦公园",
                "house_id":"1215924727332249693",
                "_process_title":"廖舒情@杨浦公园"
            },
            {
                "id":"1280746143793405954",
                "contract_code":"lhzc-2020-014",
                "customer_id":"1215063524229779741",
                "customer_name":"陈庆生    ",
                "rent_unit_id":"1215065885564211529",
                "rent_unit_code":"3713",
                "address":"杨浦公园",
                "acreage":113,
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
                "annual_rent":90700,
                "date_rent":null,
                "current_rent":null,
                "conprice":2.2,
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
                "create_date":"2020-07-08 14:10:50",
                "updater":"1214748552520204289",
                "update_date":"2020-07-08",
                "dept_id":"1209313262926237701",
                "proc_status":"2",
                "safety_agreement":"Y",
                "old_id":null,
                "contract_properties":"02",
                "pricing_information":"杨浦公园于2020年03月31日定价，最低价是2.19元/㎡/天",
                "credit_report":null,
                "report_date":null,
                "report_file":null,
                "file_date":null,
                "customer_cusrating":null,
                "cusrating_date":null,
                "rent_free":null,
                "attachments":[
                    {
                        "label":"（陈庆生-狂车飞舞、托马斯）场地合同.doc",
                        "value":"http://180.168.137.3:8081//upload/20200708/2f59fbff4d9e45898061e8ceb5ff5993.doc"
                    }
                ],
                "BPM_TITLE":"lhzc-2020-014-陈庆生    -杨浦公园",
                "house_id":"1215924727332249693",
                "_process_title":"陈庆生    @杨浦公园"
            },
            {
                "id":"1280745003567669250",
                "contract_code":"lhzc-2020-013",
                "customer_id":"1215063524229779744",
                "customer_name":"张月萍",
                "rent_unit_id":"1215065885564211528",
                "rent_unit_code":"3712",
                "address":"杨浦公园",
                "acreage":128,
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
                "annual_rent":90200,
                "date_rent":null,
                "current_rent":null,
                "conprice":1.93,
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
                "create_date":"2020-07-08 14:06:19",
                "updater":"1214748552520204289",
                "update_date":"2020-07-08",
                "dept_id":"1209313262926237701",
                "proc_status":"2",
                "safety_agreement":"Y",
                "old_id":null,
                "contract_properties":"02",
                "pricing_information":"杨浦公园于2020年03月31日定价，最低价是1.87元/㎡/天",
                "credit_report":null,
                "report_date":null,
                "report_file":null,
                "file_date":null,
                "customer_cusrating":null,
                "cusrating_date":null,
                "rent_free":null,
                "attachments":[
                    {
                        "label":"（张月萍-迷你穿梭）场地使用合同（无产证）.doc",
                        "value":"http://180.168.137.3:8081//upload/20200708/991a844c511940ec8673223be1a9b925.doc"
                    }
                ],
                "BPM_TITLE":"lhzc-2020-013-张月萍-杨浦公园",
                "house_id":"1215924727332249693",
                "_process_title":"张月萍@杨浦公园"
            }
	]
    return (
      <View className='propertyListPage'>
        <View className='searchView'>
          <View className='searchInput'>
            <Input placeholder='请输入合同名称' className='searchInputControl' placeholder-class="place-holder"></Input>
            <Image src={search} className='searchImg'></Image>
          </View>
        </View>
        <View className='listView'>
          {
            dataJson.length > 0 && dataJson.map((item, index) => {
              return (
                <View className='itemView' key={index}>
                  <View className='itemLeft'>
                    <Text className='title'>编号：{item.contract_code}</Text>
                    <Text className='text'>客户：{item.customer_name}</Text>
                    <Text className='text'>地址：{item.address}</Text>
		    <Text className='text'>面积：{item.acreage}平方米</Text>
		    <Text className='text'>年租金：{item.annual_rent}元</Text>
		    <Text className='text'>开始：{item.start_date}</Text>
		    <Text className='text'>结束：{item.end_date}</Text>
                  </View>
                  <View className='itemRight'>
                    <Image src={toDetail} className='toDetail' onClick={()=> this.goToDetail()}></Image>
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
