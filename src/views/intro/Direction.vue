<template>
    <SubVisual />

    <div id="contents" class="inner1620 m_center">
        <div class="subTitle flex alc justy_btw">
            <div class="title fs36 fwtbold lh160">오시는길</div>
            <div class="menu flex alc fs16 lh160 fc33">
                <span>산후조리원 소개</span>
                <img src="/img/sub/ic_subtit_arr.svg" alt="">
                <span>오시는길</span>
            </div>
        </div>

        <div id="direc"> 
            <div class="inn flex alc">
                <div class="leftArea">
                    <div class="mapArea">
                        <iframe
                            :srcdoc="mapHtml"
                            class="kakaoIframe"
                            width="100%"
                            frameborder="0"
                            scrolling="no"
                        ></iframe>                    
                    </div>
                    <ul class="snsArea flex fs16">
                        <li class="lst naver">
                            <a href="" target="_blank" class="flex alc justy_btw">
                                <span>네이버 지도 <i>바로가기</i></span> <img src="/img/main/s6_ic_naver.svg" alt="">
                            </a>
                        </li>
                        <li class="lst kakao">
                            <a href="" target="_blank" class="flex alc justy_btw">
                                <span>카카오 지도 <i>바로가기</i></span> <img src="/img/main/s6_ic_kakao.svg" alt="">
                            </a>
                        </li>
                        <li class="lst google">
                            <a href="" target="_blank" class="flex alc justy_btw">
                                <span>구글 지도 <i>바로가기</i></span> <img src="/img/main/s6_ic_google.svg" alt="">
                            </a>
                        </li>
                    </ul>
                </div>

                <ul class="rightArea">
                    <li class="infoLst">
                        <div class="tit fs30 nn fwt800 fc2">Address</div>
                        <div class="wrt fs22">경상북도 예천군 예천읍 상설시장1길 38-10</div>
                    </li>
                    <li class="infoLst">
                        <div class="tit fs30 nn fwt800 fc2">Tel</div>
                        <div class="wrt fs22">054-650-0000</div>
                        <div class="prg fs18 fc55">운영시간 : 09:00-18:00 (주말 및 공휴일 제외)</div>
                    </li>
                </ul>
            </div>

            <img src="/img/sub/direc_bg.png" alt="" class="direcBg">
        </div>
    </div>
</template>

<script setup>
import SubVisual from '@/components/SubVisual.vue'; 
import { ref } from 'vue';

const mapHtml = ref(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <style>
            body { margin: 0; padding: 0; overflow: hidden; }
            .root_daum_roughmap { width: 100% !important; }
        </style>
    </head>
    <body>
        <div id="daumRoughmapContainer1779287592252" class="root_daum_roughmap root_daum_roughmap_landing"></div>
        
        <script charset="UTF-8" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"><\/script>
        
        <script charset="UTF-8">
            setTimeout(function() {
                new daum.roughmap.Lander({
                    "timestamp" : "1779287592252",
                    "key" : "o52paxacmzi",
                    "mapHeight" : "460"
                }).render();
            }, 100);
        <\/script>
    </body>
    </html>
`);
</script>

<style scoped>
.kakaoIframe {height: 46rem; border: none;}

@media all and (max-width: 880px) {
    .kakaoIframe {height: 40rem !important;}
}
</style>