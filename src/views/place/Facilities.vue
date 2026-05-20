<template>
    <SubVisual />

    <div id="contents" class="inner1620 m_center">
        <div class="subTitle flex alc justy_btw">
            <div class="title fs36 fwtbold lh160">부대시설</div>
            <div class="menu flex alc fs16 lh160 fc33">
                <span>시설안내</span>
                <img src="/img/sub/ic_subtit_arr.svg" alt="">
                <span>부대시설</span>
            </div>
        </div>

        <div id="place">
            <div class="titArea t_center">
                <div class="subt fs18 fc2 nn">Facilities</div>
                <div class="tit fs38 fwtbold">부대시설</div>
                <div class="wrt fs20">                
                    부대시설은 휴식과 편의를 동시에 고려하여 마련되었으며,<br>
                    산모와 가족이 함께 머무르는 동안 불편함 없이<br class="mo"> 시간을 보낼 수 있도록 다양한 서비스를 제공합니다.                    
                </div>
            </div>

            <div class="slideArea flex">
                <swiper @swiper="setMainSwiper" :spaceBetween="10"
                    :navigation="{ nextEl: '.facNext', prevEl: '.facPrev' }" :thumbs="{ swiper: thumbsSwiper }"
                    :modules="modules" :observer="true" :observeParents="true" :autoplay="{
                        delay: 3500,
                        disableOnInteraction: false,
                    }" class="facSwiper">
                    <swiper-slide v-for="(img, idx) in slideImages" :key="'main-' + idx" class="slide img">
                        <img :src="img" alt="산모실 이미지">
                    </swiper-slide>

                    <div class="facNav facPrev"></div>
                    <div class="facNav facNext"></div>
                </swiper>

                <swiper @swiper="setThumbsSwiper" :freeMode="true" :watchSlidesProgress="true" :modules="modules"
                    :observer="true" :observeParents="true" :breakpoints="{
                        0: {
                            direction: 'horizontal',
                            slidesPerView: 3.8,
                            spaceBetween: 5
                        },
                        881: {
                            direction: 'vertical',
                            slidesPerView: 5,
                            spaceBetween: 10
                        }
                    }" class="facThumb">
                    <swiper-slide v-for="(img, idx) in slideImages" :key="'thumb-' + idx" class="slide img">
                        <img :src="img" alt="산모실 썸네일">
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script setup>
import SubVisual from '@/components/SubVisual.vue';

import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// --- Swiper 설정 ---
const modules = [FreeMode, Navigation, Thumbs, Autoplay];
const thumbsSwiper = ref(null);
const mainSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
const setMainSwiper = (swiper) => {
    mainSwiper.value = swiper;
};

// --- 산모실 이미지 데이터 (탭이 없으므로 단일 배열로 심플하게 관리) ---
const slideImages = ref([
    '/img/sub/place_temp_5.jpg',
    '/img/sub/place_temp_5.jpg',
    '/img/sub/place_temp_5.jpg',
    '/img/sub/place_temp_5.jpg',
    '/img/sub/place_temp_5.jpg',
    '/img/sub/place_temp_5.jpg',
]);
</script>
