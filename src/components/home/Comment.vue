<template>
    <div id="comment">
        <b-row>
            <b-col md="11">
                <b-alert show variant="primary">
                    <h4 class="alert-heading"></h4>
                    <p>
                        <kbd>Q</kbd> : 不是有个样机管理系统了吗? 为什么还有个迷你版的样机管理系统?
                    </p>
                    <hr>
                    <p>
                        <kbd>A</kbd> : 其实如果你用到了样机系统，你会发现这个系统很卡. 每次查询的时候会一般会花费15s的时间返回数据给前端.
                        查询体验感极差加上无聊，我觉得很有必要重写这部分功能.
                    </p>
                </b-alert>
                <b-alert show variant="primary">
                    <h4 class="alert-heading"></h4>
                    <p>
                        <kbd>Q</kbd> : 那你知道是什么原因导致样机管理系统这么卡的吗?
                    </p>
                    <hr>
                    <p>
                        <kbd>A</kbd> :
                    </p>
                </b-alert>
                <b-alert show variant="primary">
                    <h4 class="alert-heading"></h4>
                    <p>
                        <kbd>Q</kbd> : 首页中的图表是真实数据吗?
                    </p>
                    <hr>
                    <p>
                        <kbd>A</kbd> : 当然是假的，因为作者比较懒, 后台懒得写了.
                    </p>
                </b-alert>
                <b-alert show variant="primary">
                    <h4 class="alert-heading"></h4>
                    <p>
                        <kbd>Q</kbd> : 恩好的，你TM就不能把界面做的好看一点么?
                    </p>
                    <hr>
                    <p>
                        <kbd>A</kbd> : 不是很想，没什么动力. 因为懒,我蔡做了部分功能. 因为懒,蔡不做界面优化. 别问，问就是尽力了.
                    </p>
                </b-alert>
                <b-alert show variant="primary">
                    <h4 class="alert-heading"></h4>
                    <p>
                        <kbd>Q</kbd> : 这个有那些功能呢?
                    </p>
                    <hr>
                    <p>
                        <kbd>A</kbd> : 1). 按条件查询机器.  2). 按条件将结果导成excel.  3). 点击表格行可以看到具体信息
                    </p>
                </b-alert>
                <b-alert show variant="primary">
                    <h4 class="alert-heading"></h4>
                    <p>
                        <kbd>Q</kbd> : 工作机中的IE7-11能打开吗?
                    </p>
                    <hr>
                    <p>
                        <kbd>A</kbd> : 没测过，随缘. 如果打不开只能说缘分不够. 请门口右转拥抱chrome
                    </p>
                </b-alert>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'Comment'
    }
</script>

<style scoped>

</style>
