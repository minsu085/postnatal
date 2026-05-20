<template>
    <SubVisual />

    <div id="contents" class="inner1620 m_center">
        <div class="subTitle flex alc justy_btw">
            <div class="title fs36 fwtbold lh160">모유수유실</div>
            <div class="menu flex alc fs16 lh160 fc33">
                <span>시설안내</span>
                <img src="/img/sub/ic_subtit_arr.svg" alt="">
                <span>모유수유실</span>
            </div>
        </div>

        <div id="place">
            <div class="titArea t_center">
                <div class="subt fs18 fc2 nn">Lactation room</div>
                <div class="tit fs38 fwtbold">모유수유실</div>
                <div class="wrt fs20">
                    안락한 의자와 위생적인 환경을 갖추어<br class="mo"> 편안하고 안전하게 이용하실 수 있습니다.<br>
                    아기와 자연스럽게 교감할 수 있는 공간으로,<br class="mo"> 수유를 통해 건강한 성장과 정서적 안정을 돕습니다.
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
    '/img/sub/place_temp_3.jpg',
    '/img/sub/place_temp_3.jpg',
    '/img/sub/place_temp_3.jpg',
    '/img/sub/place_temp_3.jpg',
    '/img/sub/place_temp_3.jpg',
    '/img/sub/place_temp_3.jpg',
]);
</script>
