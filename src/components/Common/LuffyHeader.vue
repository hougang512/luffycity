<template>
    <div class="LuffyHeader">
        <el-container>
            <el-header height='80px'>
                <div class="header">
                    <div class="nav-left">
                        <router-link :to="{name:'home'}">
                            <img src="https://hcdn1.luffycity.com/static/frontend/activity/head-logo_1564141048.3435316.svg" alt="" >
                        </router-link>

                    </div>
                    <div class="nav-center">
                        <ul>
                            <li v-for='(list,index) in headerList' :key='list.id'>
                                <router-link :to='{name:list.name}'>
                                    {{list.title}}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-header>
        </el-container>

    </div>


</template>

<script>

    export default {
        name: 'LuffyHeader',
        data: function () {
            return {
                headerList: [
                    {id: '1', name: 'courses', title: '免费课'},
                    {id: '2', name: 'lightCourse', title: '轻课'},
                    {id: '3', name: 'micro', title: '学位课'},
                    {id: '4', name: 'personalTest', title: '题库'},
                    {id: '5', name: 'students', title: '学员成果'},
                ],
            }
        },
        components: {},
        methods:{
            jumpHome:function () {
                window.location.href='http://localhost:8080/'
            }
        }
    }
</script>
<style scoped>
    .el-header {
        border-bottom: #c9c9c9;
        box-shadow: 0 0.5px 0.5px 0 #c9c9c9;
    }

    .header {
        width: 1200px;
        height: 80px;
        line-height: 80px;
        margin: 0 auto;
    }

    .nav-left {
        float: left;
        margin-top: 10px;
    }

    .nav-center {
        float: left;
        margin-left: 100px;
        width:
    }

    .nav-center ul {
        overflow: hidden;
    }

    .nav-center ul li {
        float: left;
        margin: 0 5px;
        /*width: 100px;*/
        padding: 0 20px;
        height: 80px;
        line-height: 80px;
        text-align: center;
    }

    .nav-center ul li a {
        color: #4a4a4a;
        width: 100%;
        height: 60px;
        display: inline-block;

    }

    .nav-center ul li a:hover {
        color: #B3B3B3;
    }

    .nav-center ul li a.is-active {
        color: #4a4a4a;
        border-bottom: 4px solid #ffc210;
    }

    .nav-right {
        float: right;
        position: relative;
        z-index: 100;

    }

    .nav-right span {
        cursor: pointer;
    }

    .nav-right .user {
        margin-left: 15px;
    }

    .nav-right img {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        margin-left: 15px;
    }

    .nav-right ul {
        position: absolute;
        width: 221px;
        z-index: 100;
        font-size: 12px;
        top: 80px;
        background: #fff;
        border-top: 2px solid #d0d0d0;
        box-shadow: 0 2px 4px 0 #e8e8e8;
    }

    .nav-right ul li {
        height: 40px;
        color: #4a4a4a;
        padding-left: 30px;
        padding-right: 20px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        transition: all .2s linear;
    }

    .nav-right ul li span.msg {
        margin-left: -80px;
        color: red;
    }

    .nav-right ul li span.count {
        margin-left: -100px;
        color: red;
    }

</style>
