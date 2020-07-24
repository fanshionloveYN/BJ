import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';

export default class Simple extends Component {
    getOption = () => {
        return {
        tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['五角场街道', '五角场镇', '大桥街道', '市内外区', '延吉新村街道', '控江路街道', '殷行街道', '江浦路街道', '定海路街道','平凉路街道','长白新村街道']
    },
    grid: {
        left: '3%',
        top: '20%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['城投集团', '桥升商贸', '杨浦置地', '杨浦绿化', '杨浦市政']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '五角场街道',
            type: 'bar',
            stack: '总量',
            barWidth : 20,
            data: [320, 302, 301, 334, 390]
        },
        {
            name: '五角场镇',
            type: 'bar',
            stack: '总量',
            data: [120, 132, 101, 134, 90]
        },
        {
            name: '大桥街道',
            type: 'bar',
            stack: '总量',
            data: [220, 182, 191, 234, 290]
        },
        {
            name: '市内外区',
            type: 'bar',
            stack: '总量',
            data: [150, 212, 201, 154, 190]
        },
        {
            name: '延吉新村街道',
            type: 'bar',
            stack: '总量',
            data: [820, 832, 901, 934, 1290]
        },
        {
            name: '控江路街道',
            type: 'bar',
            stack: '总量',
            data: [820, 832, 901, 934, 1290]
        },
        {
            name: '殷行街道',
            type: 'bar',
            stack: '总量',
            data: [820, 832, 901, 934, 1290]
        },
        {
            name: '江浦路街道',
            type: 'bar',
            stack: '总量',
            data: [820, 832, 901, 934, 1290]
        },
        {
            name: '定海路街道',
            type: 'bar',
            stack: '总量',
            data: [820, 832, 901, 934, 1290]
        },
        {
            name: '平凉路街道',
            type: 'bar',
            stack: '总量',
            data: [820, 832, 901, 934, 1290]
        },
        {
            name: '长白新村街道',
            type: 'bar',
            stack: '总量',
            data: [820, 832, 901, 934, 1290]
        }
    ]
        };
      };

    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }
  
    render () {
      return (
        <ReactEcharts
            option={this.getOption()}
            style={{height: '26rem', width: '100%'}}
            className='react_for_echarts' />
      )
    }
  }
  