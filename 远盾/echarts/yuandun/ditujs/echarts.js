// var itemStyles = {
//     normal: {
//         barBorderRadius: 20,
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
//             [{offset: 0, color: '#d8ed4d'}, {offset: 1, color: '#fd6f2d'}])},
// }
var itemStylese = {
    normal: {
            barBorderRadius: 20,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
            [{offset: 0, color: '#3026fa'}, {offset: 1, color: '#fd6cf9'}])},
}
// var itemStylessd = {
//     normal: {
//             barBorderRadius: 20,
//             color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
//             [{offset: 0, color: '#fe6a22'}, {offset: 1, color: '#ea8554'}])},
// }


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
        // trigger: 'item',
        //  formatter: function (params) {
        //     var color = params.color;//图例颜色
        //     var htmlStr ='<div>';
        //     htmlStr += params.name + '<br/>';//x轴的名称
        //     //为了保证和原来的效果一样，这里自己实现了一个点的效果
        //     htmlStr += '<span ></span>';
            
        //     //添加一个汉字，这里你可以格式你的数字或者自定义文本内容
        //     htmlStr += params.seriesName + '：'+params.value + '亿元';
            
        //     htmlStr += '</div>';
            
        //     return htmlStr;
        // }
       
    },
    legend: {
        data: ['远盾网络-交易额'],
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
            data: [1, 2, 3, 4, 5],
            axisLine:{
                lineStyle:{
                    color:'#fff',
                }
            }, 
            axisLabel:{
                // rotate:50,
                formatter: '{value}亿元',
                textStyle:{
                    color:'#fff',
                }
            },
        },
        {
            type: 'value',
            min: 0,
            max: 5,
            interval: 1,
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
        {
            name: '远盾网络-交易额',
            type: 'bar',
            data: [1.5, 2,2.3,2.6,2.5,2.8,2,2.2,3,2.1,1.9,1, ],
            barGap:'15%',
            yAxisIndex: 1,
            barMaxWidth:'20%',
            itemStyle: itemStylese,
        },
    ],

};
    

