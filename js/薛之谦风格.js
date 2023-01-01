(function () {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        title: {
            text: '歌手薛之谦',
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
                    { name: '影视原声', value: 1 },
                    { name: '伤感', value: 13 },
                    { name: '欧美', value: 1 },
                    { name: '治愈', value: 5 },
                    { name: '流行', value: 55 },
                    { name: '浪漫', value: 2 },
                    { name: '翻唱', value: 7 },
                    { name: 'KTV', value: 7 },
                    { name: '说唱', value: 2 },
                    { name: '综艺', value: 1 },
                    { name: '校园', value: 5 },
                    { name: '思念', value: 7 },
                    { name: '吉他', value: 8 },
                    { name: '经典', value: 6 },
                    { name: '清晨', value: 1 },
                    { name: '感动', value: 2 },
                    { name: '粤语', value: 2 },
                    { name: '00后', value: 15 },
                    { name: '安静', value: 5 },
                    { name: '夜晚', value: 7 },
                    { name: '孤独', value: 7 },
                    { name: '学习', value: 2 },
                    { name: '90后', value: 11 },
                    { name: '民谣', value: 6 },
                    { name: '榜单', value: 24 },
                    { name: '散步', value: 2 },
                    { name: '摇滚', value: 1 },
                    { name: '华语', value: 56 },
                    { name: '放松', value: 7 }
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