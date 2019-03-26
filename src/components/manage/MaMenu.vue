<template>
    <nav>
        <ul class="nav_menu nav-pills">
            <li class="nav-item">
                <router-link class="nav-link router" :class="{linkActive: mmActiveName==='weather'}" :to="{name: 'weather'}">
                    <div class="acti" @click="mmActive('weather')">天气</div>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link router" :class="{linkActive: mmActiveName==='news'}" :to="{name: 'news'}">
                    <div class="acti" @click="mmActive('news')">今日头条</div>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link router" :class="{linkActive: mmActiveName==='notepad'}" :to="{name: 'notepad'}">
                    <div class="acti" @click="mmActive('notepad')">记事本</div>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data: function () {
        return {
            mmActiveName: 'weather'
        }
    },
    methods: {
        mmActive: function(name) {
            this.mmActiveName = name
        }
    },
    created: function() {
        let url = window.location.href;
        let bool = url.indexOf('notepad');
        if(bool!==-1){
            this.mmActiveName = 'notepad'
        }
    }
}
</script>

<style>
.mamenu {
    width: 12%;
    height: 100%;
    background-color: #e6e6e6;
    color: #fff;
    position: fixed;
}
.nav_menu {
    display: -ms-flexbox;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
.nav-item .acti{
    padding: .8rem 1rem;
}
.nav-item .router{
    padding:0
}
.nav-item .linkActive {
    background-color: #ca6c6c;
    color: #fff;
}
</style>

