import React, { Component } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import propertyDetailIcon from '../../images/customerDetailIcon.png'
import './index.less'

export default class Index extends Component {

  componentWillMount () { 
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
  const json = {
    "code":0,
    "msg":"success",
    "data":{
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
        "company_name":"桥升商贸",
        "house_units":[
            {
                "id":"1215065885564211618",
                "rent_unit_code":"Q1802",
                "address":"凤城六村15号403室",
                "house_id":"1215924727332249720",
                "acreage":46.29,
                "parts":"15号403室",
                "use_people":"朱玲妹",
                "room_type_code":"00",
                "usage_type":"01",
                "usage_type_code":"01",
                "usage_code":"00",
                "data_status_code":"01",
                "min_price":0,
                "max_price":0,
                "creator":"402894e45576de420155773930a5002d",
                "create_date":"2016-07-11 00:00:00",
                "updater":"402894e45576de420155773930a5002d",
                "update_date":"2019-06-19",
                "dept_id":"1209313262926237699",
                "old_id":"402894e455b592390155d8c6bacf00c9",
                "house_old":null,
                "house_address":"凤城六村3-30号",
                "house_code":"C01050301040025"
            },
            {
                "id":"1215065885564211619",
                "rent_unit_code":"Q1803",
                "address":"凤城六村11号101室",
                "house_id":"1215924727332249720",
                "acreage":50.83,
                "parts":"11号101室",
                "use_people":"唐秀珍",
                "room_type_code":"00",
                "usage_type":"01",
                "usage_type_code":"01",
                "usage_code":"00",
                "data_status_code":"01",
                "min_price":0,
                "max_price":0,
                "creator":"402894e45576de420155773930a5002d",
                "create_date":"2016-07-11 00:00:00",
                "updater":"402894e45576de420155773930a5002d",
                "update_date":"2019-06-19",
                "dept_id":"1209313262926237699",
                "old_id":"402894e455b592390155d8c788a600ca",
                "house_old":null,
                "house_address":"凤城六村3-30号",
                "house_code":"C01050301040025"
            },
            {
                "id":"1215065885564211345",
                "rent_unit_code":"Q1804",
                "address":"长岭路158号（南侧）",
                "house_id":"1215924727332249720",
                "acreage":114.35,
                "parts":null,
                "use_people":"唐秀珍",
                "room_type_code":"00",
                "usage_type":"01",
                "usage_type_code":"01",
                "usage_code":"00",
                "data_status_code":"01",
                "min_price":0,
                "max_price":0,
                "creator":"402894e45576de420155773930a5002d",
                "create_date":"2019-06-19 00:00:00",
                "updater":"402894e45576de420155773930a5002d",
                "update_date":"2019-06-19",
                "dept_id":"1209313262926237699",
                "old_id":"40288a206b2879cf016b6d7d15a60087",
                "house_old":null,
                "house_address":"凤城六村3-30号",
                "house_code":"C01050301040025"
            },
            {
                "id":"1215065885564211617",
                "rent_unit_code":"Q1801",
                "address":"凤城六村6号502室",
                "house_id":"1215924727332249720",
                "acreage":54.56,
                "parts":"6号502室",
                "use_people":"张栩峰",
                "room_type_code":"00",
                "usage_type":"01",
                "usage_type_code":"01",
                "usage_code":"00",
                "data_status_code":"01",
                "min_price":0,
                "max_price":0,
                "creator":"402894e45576de420155773930a5002d",
                "create_date":"2016-07-11 00:00:00",
                "updater":"402894e45576de420155773930a5002d",
                "update_date":"2019-06-19",
                "dept_id":"1209313262926237699",
                "old_id":"402894e455b592390155d8c60c9f00c8",
                "house_old":null,
                "house_address":"凤城六村3-30号",
                "house_code":"C01050301040025"
            },
            {
                "id":"1215065885564211346",
                "rent_unit_code":"Q1805",
                "address":"长岭路158号（北侧）",
                "house_id":"1215924727332249720",
                "acreage":32.25,
                "parts":null,
                "use_people":"翟庆台",
                "room_type_code":"00",
                "usage_type":"01",
                "usage_type_code":"01",
                "usage_code":"00",
                "data_status_code":"01",
                "min_price":0,
                "max_price":0,
                "creator":"402894e45576de420155773930a5002d",
                "create_date":"2019-06-19 00:00:00",
                "updater":null,
                "update_date":null,
                "dept_id":"1209313262926237699",
                "old_id":"40288a206b2879cf016b6dbc5ad3009a",
                "house_old":null,
                "house_address":"凤城六村3-30号",
                "house_code":"C01050301040025"
            }
        ]
    }
}
    return (
      <View className='propertyDetailPage'>
        <View className='spaceLine'></View>
        <View className='detailHeader'>
          <View className='propertyInfo'>
            <View className='name'>地址：{json.data.address}</View>
            <View className='info'>编号：{json.data.house_code}</View>
            <View className='info'>面积：{json.data.acreage}</View>
          </View>
          <Image src={propertyDetailIcon} className='propertyDetailIcon'></Image>
        </View>
        <View className='spaceLine'></View>
        <View className='propertyDetail'>
          <View className='propertyDetailView'>
	          <View className='propertyDetailHeader'>房屋单元</View>
            {
              json.data.house_units.length > 0 && json.data.house_units.map((item, index) => {
                return(
                  <View className='propertyInfo' key={index}>
                    <View className='name' style="border:0;margin-left:0.2rem;">位置：{item.address}</View>
                    <View className='info'>编号：{item.house_code}</View>
                    <View className='info'>面积：{item.acreage}平方米</View>
                    {
                      index + 1 !== json.data.house_units.length &&
                      <View className="splitLine"></View>
                    }
                  </View>
                )
              })
            }
          </View>
          <View className='propertyDetailView'>
            <View className='propertyDetailHeader'>租赁合同</View>
	          {
            json.data.house_units.length > 0 && json.data.house_units.map((item, index) => {
              return(
                <View className='propertyInfo' key={index}>
                  <View className='propertyInfo' key={index}>
                    <View className='name' style="border:0;margin-left:0.2rem;">编号：{item.rent_unit_code}</View>
                    <View className='info'>客户：{item.use_people}</View>
                    <View className='info'>地址：{item.address}</View>
                    <View className='info'>面积：{item.acreage}平方米</View>
                    <View className='info'>年租金：{item.room_type_code}元</View>
                    <View className='info'>开始：{item.min_price}</View>
                    <View className='info'>结束：{item.max_price}</View>
                    {
                      index + 1 !== json.data.house_units.length &&
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
