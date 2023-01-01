(function () {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        baseOption: {
          timeline: {
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 3000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
              {
                value: '中国市场',
                tooltip: {
                  formatter: '{b} &耐听的华语好歌, \n歌荒，不存在的事'
                },
                symbol: 'diamond',
                symbolSize: 16
              },
              {
                value: '欧美市场',
                tooltip: {
                  formatter: '{b} &每天和喜欢的欧美音乐不期而遇'
                },
                symbol: 'diamond',
                symbolSize: 16
              },
              {
                value: '日本市场',
                tooltip: {
                  formatter: '{b} &都市夜行, 霓虹氤氲, 浪漫不止昭和'
                },
                symbol: 'diamond',
                symbolSize: 16
              },
              {
                value: '韩国市场',
                tooltip: {
                  formatter: function (params) {
                    return params.name + '&打开通向K-pop世界的大门';
                  }
                },
                symbol: 'diamond',
                symbolSize: 18
              }
            ],
          },
          title: {
            subtext: '数据来自网易云用户',
            left: 'center'
          },
          tooltip: {},
          calculable: true,
          grid: {
            top: 120,
            bottom: 100,
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow',
                label: {
                  show: true,
                  formatter: function (params) {
                    return params.value.replace('\n', '');
                  }
                }
              }
            }
          },
          yAxis: [
            {
              type: 'value',
              name: '(略)歌曲tag标签数 (个)'
            }
          ]
        },
        options: [
        {
            title: { text: '中国受欢迎歌手曲风tag略览'},
            xAxis: [
            {
              type: 'category',
              axisLabel: { interval: 0 },
              data: ['薛之谦', '陈奕迅', '王菲', '周杰伦', '陈粒', '张惠妹'],
              splitLine: { show: false }
            }],
            legend: {
              left: 'center',
              top: 60,
              data: ['华语', '粤语', '流行', '伤感', '怀旧', '经典', '民谣'],
            },
            series: [
              {  name: '华语', type: 'bar', data: [56, 171, 67, 57, 32, 35] },
              {  name: '粤语', type: 'bar', data: [2, 210, 41, 1, 0, 1] },
              {  name: '流行', type: 'bar', data: [55, 167, 57, 44, 16, 31] },
              {  name: '伤感', type: 'bar', data: [13, 28, 6, 13, 2, 8] },
              {  name: '怀旧', type: 'bar', data: [0, 34, 36, 10, 6, 7] },
              {  name: '经典', type: 'bar', data: [6, 50, 40, 5, 2, 5] },
              {  name: '民谣', type: 'bar', data: [6, 9, 6, 4, 20, 1] },
              {
                name: '网友喜爱中国歌曲tag略览',
                type: 'pie',
                center: ['75%', '35%'],
                radius: '28%',
                z: 100,
                data: [
                  {  name: '华语', value: 418 },
                  {  name: '粤语', value: 255 },
                  {  name: '流行', value: 370 },
                  {  name: '伤感', value: 70 },
                  {  name: '怀旧', value: 93 },
                  {  name: '经典', value: 108 },
                  {  name: '民谣', value: 46 }
                ]
              }
            ]
          },
       {
            title: { text: '欧美受欢迎歌手曲风tag略览' },
            xAxis: [
            {
              type: 'category',
              axisLabel: { interval: 0 },
              data: ['Justin Bieber', 'Taylor Swift', 'Westlife', 'Billie Eilish', 'Lady Gaga', 'Selena Gomez'],
              splitLine: { show: false }
            }],
            legend: {
              left: 'center',
              data: ['欧美', '流行', '90后', '乡村', '怀旧', '00后'],
            },
            series: [
              {  name: '欧美', type: 'bar', data: [94, 232, 55, 26, 41, 21] },
              {  name: '流行', type: 'bar', data: [56, 149, 39, 10, 39, 14] },
              {  name: '90后', type: 'bar', data: [16, 2, 10, 0, 0, 0] },
              {  name: '乡村', type: 'bar', data: [1, 136, 2, 0, 2, 1] },
              {  name: '怀旧', type: 'bar', data: [6, 5, 11, 0, 2, 0] },
              {  name: '00后', type: 'bar', data: [6, 21, 2, 12, 4, 1] },
                      {
                name: '网友喜爱欧美歌曲tag略览',
                type: 'pie',
                center: ['75%', '35%'],
                radius: '28%',
                z: 100,
                data: [
                  { name: '欧美', value: 469 },
                  { name: '流行', value: 232 },
                  { name: '90后', value: 55 },
                  { name: '乡村', value: 26 },
                  { name: '怀旧', value: 41 },
                  { name: '00后', value: 21 }
                ]
              }
            ]
          },
          {
            title: { text: '日本受欢迎歌手曲风tag略览' },
             xAxis: [
            {
              type: 'category',
              axisLabel: { interval: 0 },
              data: ['中島美嘉', '米津玄師', '花澤香菜', '玉置浩二', '美空ひばり', '谷村新司'],
              splitLine: { show: false }
            }],
            legend: {
              left: 'center',
              data: ['日语', '流行', '治愈', 'ACG', '下午茶', '经典'],
            },
            series: [
              {  name: '日语', type: 'bar', data: [16, 30, 2, 29, 5,8] },
              {  name: '流行', type: 'bar', data: [7, 7, 2, 16, 1, 3] },
              {  name: '治愈', type: 'bar', data: [5, 5, 8, 5, 0, 0] },
              {  name: 'ACG', type: 'bar', data: [3, 10, 17, 0, 1, 0] },
              {  name: '下午茶', type: 'bar', data: [0, 0, 0, 0, 6, 0] },
              {  name: '经典', type: 'bar', data: [1, 1, 0, 3, 0, 2] },
              {
                name: '网友喜爱欧美歌曲tag略览',
                type: 'pie',
                center: ['75%', '35%'],
                radius: '28%',
                z: 100,
                data: [
                  { name: '日语', value: 100 },
                  { name: '流行', value: 36 },
                  { name: '治愈', value: 23 },
                  { name: 'ACG', value: 30 },
                  { name: '下午茶', value: 6 },
                  { name: '经典', value: 7 }
                ]
              }
            ]
          },
          {
            title: { text: '韩国受欢迎歌手曲风tag略览', left: 'center' },
             xAxis: [
            {
              type: 'category',
              axisLabel: { interval: 0 },
              data: ['EXO', 'IU', 'G-DRAGON', 'BLACKPINK', '宣美', '(G)I-DLE'],
              splitLine: { show: false }
            }],
            legend: {
              left: 'center',
              data: ['韩语', '流行', '校园', '治愈', '说唱', '欧美', '兴奋'],
            },
            series: [
              {  name: '韩语', type: 'bar', data: [62, 103, 24, 21, 10, 20] },
              {  name: '流行', type: 'bar', data: [60, 44, 11, 19, 10, 18] },
              {  name: '校园', type: 'bar', data: [11, 1, 0, 5, 0, 1] },
              {  name: '治愈', type: 'bar', data: [12, 27, 1, 1, 0, 3] },
              {  name: '说唱', type: 'bar', data: [1, 4, 8, 5, 2, 2] },
              {  name: '欧美', type: 'bar', data: [13, 4, 6, 6, 2, 1] },
              {  name: '兴奋', type: 'bar', data: [7, 1, 1, 2, 0, 4] },
              {
                name: '网友喜爱欧美歌曲tag略览',
                type: 'pie',
                center: ['75%', '35%'],
                radius: '28%',
                z: 100,
                data: [
                  { name: '韩语', value: 240 },
                  { name: '流行', value: 162 },
                  { name: '校园', value: 18 },
                  { name: '治愈', value: 44 },
                  { name: '说唱', value: 22 },
                  { name: '欧美', value: 32 },
                  { name: '兴奋', value: 15 }
                ]
              }
            ]
          }
        ]
      };
  
    myChart.setOption(option);
    window.addEventListener('resize', function () {
      myChart.resize();
    })
  })();