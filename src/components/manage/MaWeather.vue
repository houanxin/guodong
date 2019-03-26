<template>
    <div>
        <div>
            <span>地区：</span>
            <span>{{weather.city}}</span>
        </div>
        <div>
            <span>编码：</span>
            <span>{{weather.cityid}}</span>
        </div>
        <div>
            <span>时间：</span>
            <span>{{weather.update_time}}</span>
        </div>
        <div class="newlist" v-for="weekWeather in weekWeathers">
            <span>{{weekWeather.day}}：</span>
            <span>{{weekWeather}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            weather: {},
            weekWeathers: []
        }
    },
    created: function() {
        var that = this;
        axios.get(
            '/weather?cityid=101190101'
        ).then(function (response) {
                var data = response.data;
                that.weather = data;
                that.weekWeathers = data.data;
            }).catch(function (error) {
                alert(error)
            });
    },
    methods: {
        aa: function() {
            alert(1)
        }
    }
}
</script>
<style>
.newlist{
    border: 1px solid #eee;
    padding: 10px;
    margin-top: 10px;
}
.newlist:hover {
    background-color: #eee;
}
</style>