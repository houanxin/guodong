<template>
    <div>
        <div class="header" >
            <div class="logo">
                <picture>
                    <img src='../../assets/images/titlelogo.png' class="img-fluid img-thumbnail">
                </picture>
                <span>
                    CUIHUA
                </span>
            </div>
        </div>
        <div id="indexCarousel">
            <img src="../../assets/images/homeIndex.jpg">
        </div>
    </div>
</template>

<style> 
.logo {
    font-weight: 400;
    font-family: Segoe UI Light;
    font-size: 28px;
    margin-left: 200px;
    margin-top: 20px;
    color: white;
}
.header {
    margin-right: auto;
    margin-left: auto;
    z-index: 30;
    position: absolute;
}
#indexCarousel {
    width: 100%;
    height: 100%;
    top: 0;
}
#indexCarousel img {
    width: 100%;
    height: 500px;
}
</style>

