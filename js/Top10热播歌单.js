(function () {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    const colors = ['#5470C6', '#91CC75', '#E4B359', '#EE6666'];
var option = {
  title: {
    text: '网易云热播top10',
    left: 'center'
  },
  color: colors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    right: '20%'
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['收藏量', '评论数', '转发量', '播放量'],
    top: 25
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        interval: 0,
        formatter: function(value)
          {
            return value.split("").join("");
          }
      },
      // prettier-ignore
      data: ['[华语私人订制]\n最懂你的\n华语推荐\n每日更新35首',
             '[华语速爆新歌]\n在初冬\n跟李荣浩一起\n回味夏天结尾的\n青涩味道', '[一周新歌推荐]\n李荣浩新单\n满怀少年意气，\n生来桀骜\n依然勇越山川',
             '【旋律控】\n超级好听的\n欧美良曲', '神仙翻唱：\n超好听的翻唱', '[欧美私人订制]\n最懂你的\n欧美推荐\n每日更新35首',
             '好听到单曲循环', '【节奏控】\n那些超带感的音乐', '200首\n好听的翻唱', '『好听的翻唱Cover集』']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '收藏量',
      position: 'right',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[0]
        }
      },
      axisLabel: {
        formatter: '{value} 万'
      }
    },
    {
      type: 'value',
      name: '评论数',
      position: 'right',
      alignTicks: true,
      offset: 60,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[1]
        }
      },
      axisLabel: {
        formatter: '{value} 万'
      }
    },
    {
      type: 'value',
      name: '转发量',
      position: 'right',
      alignTicks: true,
      offset: 120,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[2]
        }
      },
      axisLabel: {
        formatter: '{value} 万'
      }
    },
    {
      type: 'value',
      name: '播放量',
      position: 'left',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[3]
        }
      },
      axisLabel: {
        formatter: '{value} 万'
      }
    }
  ],
  series: [
    {
      name: '收藏量',
      type: 'bar',
      data: [653.0, 374.0, 159.0, 730.0, 361.0, 344.0, 235.0, 477.0, 207.0, 210.0]
    },
    {
      name: '评论数',
      type: 'bar',
      yAxisIndex: 1,
      data: [7.05, 6.05, 3.11, 2.12, 0.35, 3.37, 0.38, 2.05, 0.25, 0.21]
    },
    {
      name: '转发量',
      type: 'bar',
      yAxisIndex: 2,
      data: [9.7, 2.8, 1.4, 8.0, 2.7, 4.5, 1.8, 6.0, 1.8, 1.7]
    },
    {
      name: '播放量',
      type: 'line',
      yAxisIndex: 3,
      data: [148909, 107459, 48324, 48035, 43928, 41686, 30497, 29252, 25211, 23303]
    }
  ]
};
  
    myChart.setOption(option);
    window.addEventListener('resize', function () {
      myChart.resize();
    })
  })();