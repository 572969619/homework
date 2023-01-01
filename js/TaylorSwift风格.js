(function () {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        title: {
            text: '歌手Taylor Swift',
            subtext: '风格总览',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            top : 100,
            left: 150,
            bottom : 20
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '70%',
                center: ['70%', '50%'],
                data: [
                    { name: '影视原声', value: 2 },
                    { name: '伤感', value: 3 },
                    { name: '怀旧', value: 5 },
                    { name: '欧美', value: 232 },
                    { name: '治愈', value: 24 },
                    { name: '流行', value: 149 },
                    { name: '另类/独立', value: 13 },
                    { name: '浪漫', value: 18 },
                    { name: '翻唱', value: 5 },
                    { name: 'KTV', value: 6 },
                    { name: '说唱', value: 4 },
                    { name: '地铁', value: 6 },
                    { name: '电子', value: 6 },
                    { name: '思念', value: 5 },
                    { name: '吉他', value: 11 },
                    { name: '00后', value: 21 },
                    { name: '轻音乐', value: 13 },
                    { name: '安静', value: 6 },
                    { name: '夜晚', value: 18 },
                    { name: '驾车', value: 5 },
                    { name: '学习', value: 10 },
                    { name: '民谣', value: 27 },
                    { name: '世界音乐', value: 4 },
                    { name: '乡村', value: 136 },
                    { name: '榜单', value: 49 },
                    { name: '快乐', value: 9 },
                    { name: '酒吧', value: 1 },
                    { name: '散步', value: 9 },
                    { name: '兴奋', value: 19 },
                    { name: '放松', value: 11 },
                    { name: '清新', value: 4 },
                    { name: '雷鬼', value: 2 },
                    { name: 'New Age', value: 2 },
                    { name: '钢琴', value: 6 },
                    { name: '日语', value: 2 }
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