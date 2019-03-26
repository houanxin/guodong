<template>
    <div id="app">
        <page-header></page-header>
        <main-page></main-page>
        <page-footer></page-footer>
    </div>
</template>

<script>
import PageHeader from '@/components/home/PageHeader.vue'
import PageFooter from '@/components/home/PageFooter.vue'
import MainPage from '@/components/home/MainPage.vue'

export default {
    components: {
        PageHeader,
        PageFooter,
        MainPage
    }
}
</script>

<style>

</style>
