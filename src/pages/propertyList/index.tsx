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

  componentDidShow () {
	
  }

  componentDidHide () { }

  goToDetail (obj) {
    tmsg.id = obj
    //Taro.navigateTo({ url: `/pages/propertyDetail/index?id=`+obj })
    Taro.navigateTo({ url: `/pages/propertyDetail/index`})
  }

  getData() {
    get('/admin-api/builder/data/page/reis_house', {
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
                "id":"1245218949231042562",
                "house_code":"ZDZC-2019-006",
                "acreage":351.22,
                "rent_acreage":0,
                "land_area":351.22,
                "address":"国定东路77-83号",
                "company":"1209313268526237709",
                "ownership_type_code":"01",
                "mortgage":"N",
                "building_status_code":"00",
                "structure_code":"05",
                "district_code":"01",
                "ownership_group_code":"01",
                "usage_code":"02",
                "planning_code":"00",
                "posting":"Y",
                "posting_project":"01",
                "posting_worth":6433654.54,
                "data_status_code":"01",
                "coordinates":"",
                "original_value":null,
                "total_net_value":null,
                "attachments":[

                ],
                "remark":null,
                "creator":"1214750834397741058",
                "create_date":"2020-04-01 13:18:27",
                "updater":"1214750834397741058",
                "update_date":"2020-04-01",
                "dept_id":"1209313262926237700",
                "showMap":null,
                "old_id":null,
                "longitude":0,
                "latitude":0,
                "disctrict_name":"五角场街道",
                "company_name":"杨浦置地"
            },
            {
                "id":"1215924727332249720",
                "house_code":"C01050301040025",
                "acreage":457.99,
                "rent_acreage":298.28,
                "land_area":0,
                "address":"凤城六村3-30号",
                "company":"1209313268526237708",
                "ownership_type_code":"01",
                "mortgage":"N",
                "building_status_code":"00",
                "structure_code":"05",
                "district_code":"04",
                "ownership_group_code":"01",
                "usage_code":"05",
                "planning_code":"00",
                "posting":"N",
                "posting_project":"06",
                "posting_worth":0,
                "data_status_code":"01",
                "coordinates":"121.524213, 31.289702",
                "original_value":null,
                "total_net_value":null,
                "attachments":null,
                "remark":"6号502室、15号403室、11号101室、14号101室、14号102室、14号103室、",
                "creator":"1214750280141438977",
                "create_date":"2016-07-11 00:00:00",
                "updater":"1214750280141438977",
                "update_date":"2019-06-19",
                "dept_id":"1209313262926237699",
                "showMap":null,
                "old_id":"402894e455b592390155d8c51e9100c7",
                "longitude":121.524213,
                "latitude":31.289702,
                "disctrict_name":"控江路街道",
                "company_name":"桥升商贸"
            },
            {
                "id":"1215924727332249616",
                "house_code":"hx1701",
                "acreage":476,
                "rent_acreage":476,
                "land_area":476,
                "address":"园内游乐天地",
                "company":"1209313268526237710",
                "ownership_type_code":"00",
                "mortgage":null,
                "building_status_code":"00",
                "structure_code":"00",
                "district_code":"00",
                "ownership_group_code":null,
                "usage_code":"00",
                "planning_code":"00",
                "posting":null,
                "posting_project":"01",
                "posting_worth":null,
                "data_status_code":"01",
                "coordinates":"1",
                "original_value":null,
                "total_net_value":null,
                "attachments":null,
                "remark":null,
                "creator":null,
                "create_date":"2018-07-10 00:00:00",
                "updater":null,
                "update_date":"2018-08-31",
                "dept_id":"1209313262926237701",
                "showMap":null,
                "old_id":"40288a206387c4b80164830f394f0281",
                "longitude":1,
                "latitude":1,
                "disctrict_name":"其他",
                "company_name":"杨浦绿化"
            },
            {
                "id":"1215924727332249617",
                "house_code":"hx1702",
                "acreage":216,
                "rent_acreage":null,
                "land_area":216,
                "address":"园内游乐天地",
                "company":"1209313268526237710",
                "ownership_type_code":"00",
                "mortgage":null,
                "building_status_code":"00",
                "structure_code":"00",
                "district_code":"00",
                "ownership_group_code":null,
                "usage_code":"00",
                "planning_code":"00",
                "posting":null,
                "posting_project":"01",
                "posting_worth":null,
                "data_status_code":"01",
                "coordinates":"2",
                "original_value":null,
                "total_net_value":null,
                "attachments":null,
                "remark":null,
                "creator":null,
                "create_date":"2018-07-10 00:00:00",
                "updater":null,
                "update_date":"2018-08-31",
                "dept_id":"1209313262926237701",
                "showMap":null,
                "old_id":"40288a206387c4b80164830ffe180282",
                "longitude":2,
                "latitude":2,
                "disctrict_name":"其他",
                "company_name":"杨浦绿化"
            },
            {
                "id":"1215924727332249618",
                "house_code":"hx1703",
                "acreage":113,
                "rent_acreage":null,
                "land_area":113,
                "address":"园内游乐天地",
                "company":"1209313268526237710",
                "ownership_type_code":"00",
                "mortgage":null,
                "building_status_code":"00",
                "structure_code":"00",
                "district_code":"00",
                "ownership_group_code":null,
                "usage_code":"00",
                "planning_code":"00",
                "posting":null,
                "posting_project":"01",
                "posting_worth":null,
                "data_status_code":"01",
                "coordinates":"3",
                "original_value":null,
                "total_net_value":null,
                "attachments":null,
                "remark":null,
                "creator":null,
                "create_date":"2018-07-10 00:00:00",
                "updater":null,
                "update_date":"2018-08-31",
                "dept_id":"1209313262926237701",
                "showMap":null,
                "old_id":"40288a206387c4b8016483109b740283",
                "longitude":3,
                "latitude":3,
                "disctrict_name":"其他",
                "company_name":"杨浦绿化"
            },
            {
                "id":"1215924727332249619",
                "house_code":"hx1704",
                "acreage":192,
                "rent_acreage":null,
                "land_area":192,
                "address":"园内游乐天地",
                "company":"1209313268526237710",
                "ownership_type_code":"00",
                "mortgage":null,
                "building_status_code":"00",
                "structure_code":"00",
                "district_code":"00",
                "ownership_group_code":null,
                "usage_code":"00",
                "planning_code":"00",
                "posting":null,
                "posting_project":"01",
                "posting_worth":null,
                "data_status_code":"01",
                "coordinates":"4",
                "original_value":null,
                "total_net_value":null,
                "attachments":null,
                "remark":null,
                "creator":null,
                "create_date":"2018-07-10 00:00:00",
                "updater":null,
                "update_date":"2018-08-31",
                "dept_id":"1209313262926237701",
                "showMap":null,
                "old_id":"40288a206387c4b801648311480a0284",
                "longitude":4,
                "latitude":4,
                "disctrict_name":"其他",
                "company_name":"杨浦绿化"
            },
            {
                "id":"1215924727332249620",
                "house_code":"hx1705",
                "acreage":176,
                "rent_acreage":null,
                "land_area":176,
                "address":"园内游乐天地",
                "company":"1209313268526237710",
                "ownership_type_code":"00",
                "mortgage":null,
                "building_status_code":"00",
                "structure_code":"00",
                "district_code":"00",
                "ownership_group_code":null,
                "usage_code":"00",
                "planning_code":"00",
                "posting":null,
                "posting_project":"01",
                "posting_worth":null,
                "data_status_code":"01",
                "coordinates":"5",
                "original_value":null,
                "total_net_value":null,
                "attachments":null,
                "remark":null,
                "creator":null,
                "create_date":"2018-07-10 00:00:00",
                "updater":null,
                "update_date":"2018-08-31",
                "dept_id":"1209313262926237701",
                "showMap":null,
                "old_id":"40288a206387c4b801648311ccf00285",
                "longitude":5,
                "latitude":5,
                "disctrict_name":"其他",
                "company_name":"杨浦绿化"
            },
            {
                "id":"1215924727332249621",
                "house_code":"hx1706",
                "acreage":226,
                "rent_acreage":null,
                "land_area":226,
                "address":"园内游乐天地",
                "company":"1209313268526237710",
                "ownership_type_code":"00",
                "mortgage":null,
                "building_status_code":"00",
                "structure_code":"00",
                "district_code":"00",
                "ownership_group_code":null,
                "usage_code":"00",
                "planning_code":"00",
                "posting":null,
                "posting_project":"01",
                "posting_worth":null,
                "data_status_code":"01",
                "coordinates":"6",
                "original_value":null,
                "total_net_value":null,
                "attachments":null,
                "remark":null,
                "creator":null,
                "create_date":"2018-07-10 00:00:00",
                "updater":null,
                "update_date":"2018-08-31",
                "dept_id":"1209313262926237701",
                "showMap":null,
                "old_id":"40288a206387c4b801648312540a0286",
                "longitude":6,
                "latitude":6,
                "disctrict_name":"其他",
                "company_name":"杨浦绿化"
            }
    ]
    return (
      <View className='propertyListPage'>
        <View className='searchView'>
          <View className='searchInput'>
            <Input placeholder='请输入资产名称' className='searchInputControl' placeholder-class="place-holder"></Input>
            <Image src={search} className='searchImg'></Image>
          </View>
        </View>
        <View className='listView'>
          {
            dataJson.length > 0 && dataJson.map((item, index) => {
              return (
                <View className='itemView' key={index}>
                  <View className='itemLeft'>
                    <Text className='title'>地址：{item.address}</Text>
                    <Text className='text'>编号：{item.house_code}</Text>
                    <Text className='text'>面积：{item.acreage}</Text>
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
      </View>
    )
  }
}
