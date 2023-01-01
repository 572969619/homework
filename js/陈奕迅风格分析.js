(function () {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        title: {
            text: '歌手陈奕迅',
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
                center: ['70%', '55%'],
                data: [
                     { name: '影视原声', value: 2 },
                    { name: '伤感', value: 28 },
                    { name: '怀旧', value: 34 },
                    { name: '欧美', value: 4 },
                    { name: '治愈', value: 12 },
                    { name: '旅行', value: 3 },
                    { name: '流行', value: 167 },
                    { name: '另类/独立', value: 2 },
                    { name: 'Bossa Nova', value: 2 },
                    { name: '舞曲', value: 1 },
                    { name: '浪漫', value: 9 },
                    { name: '翻唱', value: 6 },
                    { name: '运动', value: 2 },
                    { name: 'KTV', value: 47 },
                    { name: '说唱', value: 1 },
                    { name: '地铁', value: 7 },
                    { name: '器乐', value: 1 },
                    { name: '工作', value: 1 },
                    { name: '综艺', value: 3 },
                    { name: '校园', value: 8 },
                    { name: '电子', value: 1 },
                    { name: '思念', value: 22 },
                    { name: '吉他', value: 11 },
                    { name: '性感', value: 1 },
                    { name: '经典', value: 50 },
                    { name: '清晨', value: 3 },
                    { name: '感动', value: 25 },
                    { name: '粤语', value: 210 },
                    { name: '00后', value: 18 },
                    { name: '轻音乐', value: 2 },
                    { name: '安静', value: 9 },
                    { name: 'ACG', value: 3 },
                    { name: '夜晚', value: 21 },
                    { name: '小语种', value: 2 },
                    { name: '孤独', value: 20 },
                    { name: '80后', value: 3 },
                    { name: '驾车', value: 2 },
                    { name: '学习', value: 2 },
                    { name: '90后', value: 29 },
                    { name: '民谣', value: 9 },
                    { name: '世界音乐', value: 5 },
                    { name: '榜单', value: 50 },
                    { name: '古典', value: 2 },
                    { name: '快乐', value: 8 },
                    { name: '酒吧', value: 2 },
                    { name: '古风', value: 1 },
                    { name: '散步', value: 14 },
                    { name: '摇滚', value: 7 },
                    { name: '网络歌曲', value: 3 },
                    { name: '华语', value: 171 },
                    { name: 'R&B/Soul', value: 2 },
                    { name: '兴奋', value: 12 },
                    { name: '放松', value: 17 },
                    { name: '金属', value: 1 },
                    { name: '清新', value: 4 },
                    { name: '蓝调', value: 2 },
                    { name: '英伦', value: 1 },
                    { name: '拉丁', value: 1 },
                    { name: 'New Age', value: 2 },
                    { name: '儿童', value: 7 },
                    { name: '70后', value: 1 },
                    { name: '钢琴', value: 7 }
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