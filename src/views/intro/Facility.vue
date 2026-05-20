<template>
    <SubVisual />

    <div id="contents" class="inner1620 m_center">
        <div class="subTitle flex alc justy_btw">
            <div class="title fs36 fwtbold lh160">시설현황</div>
            <div class="menu flex alc fs16 lh160 fc33">
                <span>산후조리원 소개</span>
                <img src="/img/sub/ic_subtit_arr.svg" alt="">
                <span>시설현황</span>
            </div>
        </div>

        <div id="facility">
            <ul class="tab flex fs20 fc33">
                <li v-for="(tab, index) in tabList" :key="index" :class="{ on: activeTab === index }"
                    @click="changeTab(index)">
                    {{ tab.name }}
                </li>
            </ul>

            <div class="slideArea flex">
                <swiper 
                    @swiper="setMainSwiper"
                    :spaceBetween="10" 
                    :navigation="{ nextEl: '.facNext', prevEl: '.facPrev' }" 
                    :thumbs="{ swiper: thumbsSwiper }" 
                    :modules="modules" 
                    :observer="true"
                    :observeParents="true"
                    :autoplay="{
                        delay: 3500,
                        disableOnInteraction: false,
                        // pauseOnMouseEnter: true
                    }"
                    class="facSwiper"
                >
                    <swiper-slide v-for="(img, idx) in tabList[activeTab].images" :key="'main-' + activeTab + '-' + idx" class="slide img">
                        <img :src="img" alt="">
                    </swiper-slide>
                    
                    <div class="facNav facPrev"></div>
                    <div class="facNav facNext"></div>
                </swiper>

                <swiper 
                    @swiper="setThumbsSwiper" 
                    :freeMode="true" 
                    :watchSlidesProgress="true" 
                    :modules="modules" 
                    :observer="true"
                    :observeParents="true"
                    :breakpoints="{
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
                    }"
                    class="facThumb"
                >
                    <swiper-slide v-for="(img, idx) in tabList[activeTab].images" :key="'thumb-' + activeTab + '-' + idx" class="slide img">
                        <img :src="img" alt="썸네일">
                    </swiper-slide>
                </swiper>
            </div>

            <div class="txtArea fs20 fcf">
                <span class="tit fwtbold">{{ tabList[activeTab].title }}</span>
                <span class="wrt">{{ tabList[activeTab].desc }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import SubVisual from '@/components/SubVisual.vue';

import { ref, nextTick } from 'vue';
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

// --- 탭 및 데이터 설정 ---
const activeTab = ref(0); 

const changeTab = (index) => {
    activeTab.value = index;

    setTimeout(() => {
        if (mainSwiper.value) {
            mainSwiper.value.slideTo(0, 0);
            mainSwiper.value.update(); 
            
            if (mainSwiper.value.autoplay) {
                mainSwiper.value.autoplay.stop();
                mainSwiper.value.autoplay.start();
            }

            if(mainSwiper.value.thumbs && mainSwiper.value.thumbs.swiper) {
                mainSwiper.value.thumbs.swiper.update();
            }
        }
        if (thumbsSwiper.value) {
            thumbsSwiper.value.slideTo(0, 0);
        }
    }, 0);
};

const tabList = ref([
    {
        name: '전경',
        title: '전경', 
        desc: '전경, 산책로 등',
        images: [
            '/img/sub/fac_temp_1.jpg',
            '/img/sub/fac_temp_2.jpg',
            '/img/sub/fac_temp_3.jpg',
            '/img/sub/fac_temp_4.jpg',
            '/img/sub/fac_temp_1.jpg',
            '/img/sub/fac_temp_2.jpg',
        ]
    },
    {
        name: '1층',
        title: '1층',
        desc: '가족쉼터, 식당, 프로그램실, 마사지실, 헬스케어실, 반신욕실, 세미나실, 세탁실',
        images: [
            '/img/sub/fac_temp_3.jpg',
            '/img/sub/fac_temp_4.jpg',
            '/img/sub/fac_temp_1.jpg',
            '/img/sub/fac_temp_2.jpg',
            '/img/sub/fac_temp_3.jpg'
        ]
    },
    {
        name: '2층',
        title: '2층',
        desc: '산모실, 신생아실, 모유수유실, 휴게실',
        images: [
            '/img/sub/fac_temp_2.jpg',
            '/img/sub/fac_temp_1.jpg',
            '/img/sub/fac_temp_4.jpg',
            '/img/sub/fac_temp_3.jpg',
            '/img/sub/fac_temp_2.jpg'
        ]
    }
]);
</script>