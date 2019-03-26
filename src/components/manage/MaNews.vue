<template>
    <div>
        <div class="newsTitle">
            <!-- top(头条，默认),shehui(社会),guonei(国内),guoji(国际),yule(娱乐),tiyu(体育)junshi(军事),keji(科技),caijing(财经),shishang(时尚) -->
            <a href="#" class="newsnav" @click="bindType('top')">头条</a>
            <a href="#" class="newsnav" @click="bindType('shehui')">社会</a>
            <a href="#" class="newsnav" @click="bindType('guonei')">国际</a>
            <a href="#" class="newsnav" @click="bindType('yule')">娱乐</a>
            <a href="#" class="newsnav" @click="bindType('tiyu')">体育</a>
            <a href="#" class="newsnav" @click="bindType('junshi')">军事</a>
            <a href="#" class="newsnav" @click="bindType('keji')">科技</a>
            <a href="#" class="newsnav" @click="bindType('caijing')">财经</a>
            <a href="#" class="newsnav" @click="bindType('shishang')">时尚</a>
        </div>
        <div class="newlist" v-for="news in toutiao">
        <!-- <div class="newlist"> -->
            <h5>
                <a v-bind:href="news.url" target="_blank">{{news.title}}</a>
            </h5>
            <span class="newAuthor">{{news.author_name}}</span>
            <span class="newDate">{{news.date}}</span>
            <div>
                <div class="newList">
                    <img v-bind:src="news.thumbnail_pic_s">
                    <img v-bind:src="news.thumbnail_pic_s02">
                    <img v-bind:src="news.thumbnail_pic_s03">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            newsType: 'top',
            toutiao: {}
            // news: {
            //     "uniquekey": "8f1dcb15a6066d01c7ca05c585124042",
            //     "title": "已致44人死亡，32人危重！江苏盐城化工厂爆炸最新通报：周边学校停课",
            //     "date": "2019-03-22 09:59",
            //     "category": "头条",
            //     "author_name": "北京青年报",
            //     "url": "http://mini.eastday.com/mobile/190322095933384.html",
            //     "thumbnail_pic_s": "http://04imgmini.eastday.com/mobile/20190322/20190322095933_00ca2976a08bc249e9be652a5e3c586b_5_mwpm_03200403.jpg",
            //     "thumbnail_pic_s02": "http://04imgmini.eastday.com/mobile/20190322/20190322095933_00ca2976a08bc249e9be652a5e3c586b_6_mwpm_03200403.jpg",
            //     "thumbnail_pic_s03": "http://04imgmini.eastday.com/mobile/20190322/20190322095933_00ca2976a08bc249e9be652a5e3c586b_3_mwpm_03200403.jpg" 
            // }
        }
    },
    methods: {
        getNews: function(type) {
            /*
            使用的 聚合数据API 每天限制100条，可能会失效
            类型：top(头条，默认),shehui(社会),guonei(国内),guoji(国际),yule(娱乐),tiyu(体育)junshi(军事),keji(科技),caijing(财经),shishang(时尚)
            */
            var that = this
            var url = "/tuotiao/index?type=" + type + "&key=3dc86b09a2ee2477a5baa80ee70fcdf5"
            axios.get(
                url
            ).then(function (response) {
                    if(response.data.result.stat === '1') {
                        that.toutiao = response.data.result.data;
                    }
                }).catch(function (error) {
                    alert(error)
                });
        },
        bindType: function(newsType) {
            this.newsType = newsType;
            this.getNews(this.newsType);
        }
    },
    created: function() {
        this.getNews(this.newsType);
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
.newlist a {
    color: red
}
.newlist a:hover {
    color: red
}
.newAuthor {
    font-size: 14px;
    color: gray;
}
.newDate {
    font-size: 14px;
    color: gray;
    margin-left: 20px;
}
.newList {
    margin-right: 10px;
    margin-top: 10px;
}
.newList img{
    height: 110px;
    margin-right: 10px;
}
.newsTitle {
    margin-top: 7px;
    padding: 5px 10px 5px 10px;
    background-color: #eee;
}
.newsnav {
    padding-left: 22px;
    color: #360e0e;
}
</style>