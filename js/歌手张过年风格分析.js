// 饼形图1
(function () {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        title: {
            text: '歌手张过年',
            subtext: '风格总览',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            textStyle: { //图例文字的样式
                color: 'skyblue',
                fontSize: 16
            },
            top : 100,
            left: 100,
            bottom : 20
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                data: [
                    { name: '华语', value: 17 },
                    { name: '流行', value: 5 },
                    { name: '地铁', value: 1 },
                    { name: '摇滚', value: 1 },
                    { name: '粤语', value: 3 },
                    { name: '说唱', value: 1 },
                    { name: '怀旧', value: 2 },
                    { name: '经典', value: 1 },
                    { name: '民谣', value: 20 },
                    { name: '安静', value: 4 },
                    { name: '放松', value: 1 },
                    { name: '孤独', value: 3 },
                    { name: '轻音乐', value: 3 },
                    { name: '夜晚', value: 9 },
                    { name: '钢琴', value: 1 },
                    { name: 'ACG', value: 1 },
                    { name: '日语', value: 2 },
                    { name: '校园', value: 2 },
                    { name: '小语种', value: 1 },
                    { name: '金属', value: 1 },
                    { name: '游戏', value: 1 },
                    { name: '学习', value: 1 },
                    { name: '清晨', value: 1 },
                    { name: '吉他', value: 2 },
                    { name: '治愈', value: 4 },
                    { name: '伤感', value: 1 },
                    { name: '雷鬼', value: 1 },
                    { name: '思念', value: 2 },
                    { name: '快乐', value: 1 }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
  
    myChart.setOption(option);
    window.addEventListener('resize', function () {
      myChart.resize();
    })
  })();
  