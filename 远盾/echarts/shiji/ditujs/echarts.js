// var itemStyles = {
//     normal: {
//         barBorderRadius: 20,
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
//             [{offset: 0, color: '#d8ed4d'}, {offset: 1, color: '#fd6f2d'}])},
// }
// var itemStylese = {
//     normal: {
//             barBorderRadius: 20,
//             color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
//             [{offset: 0, color: '#3026fa'}, {offset: 1, color: '#fd6cf9'}])},
// }
var itemStylessd = {
    normal: {
            barBorderRadius: 20,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
            [{offset: 0, color: '#fe6a22'}, {offset: 1, color: '#ea8554'}])},
}


var options = {
    title:{
        text:'年度任务完成情况(B2b)',
        x:'center',
        textStyle:{
            color:'#fff',
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {

            type: 'cross',
            label:{
                // show:false,
                color:'#fff',
                backgroundColor:'red',
                shadowBlur:5,
            },
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data: ['远东公估-交易额', '远盾网络-交易额','四季车服-交易额'],
        top:30,
        textStyle:{
        color:'#fff'
        },
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
        }

    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['1月', '2月', '3月', '4月', '5月','6月', '7月', '8月', '9月', '10月','11月', '12月'],
            axisLine:{
                lineStyle:{
                    color:'#fff',
                }
            }, 
            axisLabel: {
                interval:0 ,
                 textStyle:{
                    color:'#fff',
                }
            },
             axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'category',
            data: [100, 200, 300, 400, 500],
            axisLine:{
                lineStyle:{
                    color:'#fff',
                }
            }, 
            axisLabel:{
                // rotate:50,
                formatter: '{value} .000万元',
                textStyle:{
                    color:'#fff',
                }
            },
        },
        {
            type: 'value',
            min: 0,
            max: 10,
            interval: 2,
            axisLine:{
                lineStyle:{
                    color:'#fff',
                }
            }, 
            axisLabel: {
                formatter: '{value} .000',
                 textStyle:{
                    color:'#fff',
                }
            }
        }
    ],
    series: [
        // {
        //     name: '远东公估-交易额',
        //     type: 'bar',
        //     barGap: 0,
        //     data: [3, 6, 1, 10, 15,4, 8],
        //     barGap:'15%',
        //     yAxisIndex: 1,
        //     barMaxWidth:'20%',
        //     itemStyle: itemStyles,
        // },
        // {
        //     name: '远盾网络-交易额',
        //     type: 'bar',
        //     data: [4, 9, 3, 4, 9,20, 17],
        //     barGap:'15%',
        //     yAxisIndex: 1,
        //     barMaxWidth:'20%',
        //     itemStyle: itemStylese,
        // },
        {
            name: '四季车服-交易额',
            type: 'bar',
            data: [3, 4, 5,7, 5, 5.5, 6.2,6.5,7,6.8,7,7.5, ],
            barGap:'15%',
            yAxisIndex: 1,
            barMaxWidth:'20%',
            itemStyle: itemStylessd,
        }
    ],

};
    

