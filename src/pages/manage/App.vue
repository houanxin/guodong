<template>
    <div id="app">
        <ma-header></ma-header>
        <div class="appContent">
            <div class="float menuNav">
                <ma-menu></ma-menu>
            </div>
            <div class="float menuContent" >
                <router-view></router-view>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
import MaHeader from '@/components/manage/MaHeader.vue'
import MaMenu from '@/components/manage/MaMenu.vue'

export default {
    components: {
        MaHeader,
        MaMenu
    }
}
</script>

<style>
.float {
    float: left;
}
.clear {
    clear: both;
}

.appContent {
    top: 80px;
    position: absolute;
    width: 100%;
}
.menuNav {
    width: 12%;
    height: 100%;
    background-color: #e6e6e6;
    color: #fff;
    position: fixed;
}
.menuContent {
    margin-left: 12.5%;
    width: 87.5%;
}
</style>
