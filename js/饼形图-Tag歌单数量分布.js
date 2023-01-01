// 饼形图1
(function () {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        title: {
            text: '网易云歌单',
            subtext: '数量分布',
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
            top : 120,
            left: 60,
            bottom : 20
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '70%',
                center: ['70%', '60%'],
                data: [
                    { value: 2249, name: '影视原声' },
                    { value: 2869, name: '伤感' },
                    { value: 3263, name: '怀旧' },
                    { value: 10656, name: '欧美' },
                    { value: 4501, name: '治愈' },
                    { value: 1642, name: '旅行' },
                    { value: 13232, name: '流行' },
                    { value: 1718, name: '另类/独立' },
                    { value: 849, name: 'Bossa Nova' },
                    { value: 1503, name: '后摇' },
                    { value: 1937, name: '舞曲' },
                    { value: 3053, name: '浪漫' },
                    { value: 1488, name: '翻唱' },
                    { value: 2018, name: '运动' },
                    { value: 1118, name: 'KTV' },
                    { value: 3228, name: '说唱' },
                    { value: 1417, name: '地铁' },
                    { value: 1761, name: '器乐' },
                    { value: 860, name: '工作' },
                    { value: 740, name: '综艺' },
                    { value: 1219, name: '校园' },
                    { value: 4778, name: '电子' },
                    { value: 1852, name: '思念' },
                    { value: 1464, name: '吉他' },
                    { value: 247, name: '午休' },
                    { value: 458, name: '性感' },
                    { value: 1737, name: '韩语' },
                    { value: 2788, name: '经典' },
                    { value: 1531, name: '清晨' },
                    { value: 1717, name: '感动' },
                    { value: 2323, name: '爵士' },
                    { value: 1879, name: '粤语' },
                    { value: 1635, name: '00后' },
                    { value: 5138, name: '轻音乐' },
                    { value: 2951, name: '安静' },
                    { value: 2300, name: 'ACG' },
                    { value: 4382, name: '夜晚' },
                    { value: 1293, name: '小语种' },
                    { value: 2313, name: '孤独' },
                    { value: 576, name: '下午茶' },
                    { value: 517, name: '80后' },
                    { value: 1992, name: '驾车' },
                    { value: 2984, name: '学习' },
                    { value: 1702, name: '民族' },
                    { value: 1564, name: '游戏' },
                    { value: 1532, name: '90后' },
                    { value: 2947, name: '民谣' },
                    { value: 1772, name: '世界音乐' },
                    { value: 1448, name: '乡村' },
                    { value: 1443, name: '榜单' },
                    { value: 2585, name: '古典' },
                    { value: 2162, name: '快乐' },
                    { value: 1799, name: '酒吧' },
                    { value: 2395, name: '古风' },
                    { value: 1576, name: '散步' },
                    { value: 4376, name: '摇滚' },
                    { value: 1537, name: '网络歌曲' },
                    { value: 11034, name: '华语' },
                    { value: 1404, name: 'R&B/Soul' },
                    { value: 2653, name: '兴奋' },
                    { value: 4192, name: '放松' },
                    { value: 1719, name: '金属' },
                    { value: 2094, name: '清新' },
                    { value: 947, name: '雷鬼' },
                    { value: 1546, name: '蓝调' },
                    { value: 1457, name: '英伦' },
                    { value: 1484, name: '朋克' },
                    { value: 601, name: '拉丁' },
                    { value: 1541, name: 'New Age' },
                    { value: 1443, name: '儿童' },
                    { value: 95, name: '70后' },
                    { value: 51, name: '音乐剧' },
                    { value: 1580, name: '钢琴' },
                    { value: 2838, name: '日语' }
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
  