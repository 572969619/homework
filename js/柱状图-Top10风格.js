(function () {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    let dataAxis = ['放松', '欧美', '摇滚', '电子', '怀旧', '轻音乐', '流行', '华语', '治愈', '夜晚'];

    let data = [4192, 10656, 4376, 4778, 3263, 5138, 13232, 11034, 4501, 4382];
    let yMax = 14000;
    let dataShadow = [];
    for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
    }
    var option = {
        title: {
            text: '网易云数量top10歌单',
            subtext: '数量分布',
            left: 'center'
        },
        tooltip: {},
        legend: {
            data:['number']
        },
        xAxis: {
            data: dataAxis,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#999'
            }
        },
        dataZoom: [
           {
                type: 'inside'
           }
        ],
        series: [
            {
                name: 'Number',
                type: 'bar',
                showBackground: true,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#83bff6' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#188df0' }
                    ])
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#2378f7' },
                            { offset: 0.7, color: '#2378f7' },
                            { offset: 1, color: '#83bff6' }
                        ])
                    }
                },
                data: data
            }
        ]
    };

    const zoomSize = 6;
    myChart.on('click', function (params) {
        console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
        myChart.dispatchAction({
            type: 'dataZoom',
            startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
            endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        });
    });
  
    myChart.setOption(option);
    window.addEventListener('resize', function () {
      myChart.resize();
    })
  })();
  