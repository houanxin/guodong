<template>
<div >
    <div class="container title">
        <img src="../../assets/cuihua/ch_title.jpg">
        <span>CUIHUA</span>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #5d5a08">
        <div class="container">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class='nav-link' :class="{active: mmActiveName === 'detail'}" :to="{path: '/detail'}">
                            <span class="bold" @click="mmActive('detail')">首页</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class='nav-link' :class="{active: mmActiveName === 'lunch'}" :to="{path: '/lunch'}">
                            <span class="bold" @click="mmActive('lunch')">翠花是sb</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div>
        <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            mmActiveName: 'detail'
        }
    },
    methods: {
        mmActive: function(name) {
            this.mmActiveName = name
        }
    }
}
</script>

<style>
.title {
    height:100px;
    margin-bottom: 20px
}
.title img {
    height:100%
}
.title span{
    font-weight: bold;
    font-family: fantasy;
    font-size: xx-large;
    padding-left: 20px
}
span.bold {
    font-weight: bold;
}
</style>
