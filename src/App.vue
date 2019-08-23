<template>
    <div id="app">
        <LuffyHeader></LuffyHeader>
        <router-view></router-view>
    </div>
</template>

<script>
    // @ is an alias to /src
    import LuffyHeader from '@/components/Common/LuffyHeader'


    export default {
        name: 'App',
        components: {
            LuffyHeader
        }
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    body {
        font-size: 14px;
        color: #4a4a4a;
        font-family: PingFangSC-Light;
    }

    ul {
        list-style: none;
    }

    .container {
        width: 1200px;
        margin: 0 auto;
    }

    a {
        text-decoration: none;
    }


</style>
