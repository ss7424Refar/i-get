<template>
    <div class="home">

        <b-row>
            <b-alert show variant="warning">欢迎进入<i>mini v1.0</i>样机管理系统</b-alert>
            <div id="chart" style="width:100%; height:500px"></div>
        </b-row>
        <hr>
        <comment></comment>
    </div>

</template>

<script>
    import Comment from '@/components/home/Comment'

      var echarts = require('echarts')
      export default {
        name: 'home',
        mounted() {
          // 基于准备好的dom，初始化echarts实例
          var myChart = echarts.init(document.getElementById('chart'));
          // 绘制图表
          myChart.setOption({
            title: { text: '例年机型数量统计' },
            tooltip: {},
            xAxis: {
              data: ["2013","2014","2015","2016","2017","2018","2019"]
            },
            yAxis: {},
            series: [{
              name: '总量',
              type: 'bar',
              data: [500, 203, 362, 105, 688, 210, 450]
            }]
          });
        },
        components: {
            Comment
        }
  }
</script>
