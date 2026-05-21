<template>
    <div>
        <div id="float" class="fixed flex column">
            <ul class="flst fs17 fwt500 fcf" :class="{ 'on': isFloatOpen }">
                <li class="lst">
                    <router-link :to="{ name: 'facility' }" class="flex alc">
                        <img src="/img/ic_float_1.svg" alt="" />
                        시설현황
                    </router-link>
                </li>
                <li class="lst">
                    <router-link :to="{ name: 'reservCheck' }" class="flex alc">
                        <img src="/img/ic_float_2.svg" alt="" />
                        예약확인
                    </router-link>
                </li>
                <li class="lst">
                    <router-link :to="{ name: 'reservList' }" class="flex alc">
                        <img src="/img/ic_float_3.svg" alt="" />
                        예약하기
                    </router-link>
                </li>
            </ul>
            <button type="button" class="fBtn g_center" :class="{ 'on': isFloatOpen }" @click="toggleFloatMenu">
                <img src="/img/ic_float_menu.svg" alt="" />
            </button>
            <a href="#" class="ftop g_center" @click.prevent="scrollToTop">
                <img src="/img/ic_float_top.svg" alt="" />
            </a>
        </div>

        <footer id="footer">
            <div class="inner inner1620 m_center fcf">
                <div class="menuArea flex alc justy_btw">
                    <ul class="menu flex fs17 fwt500">
                        <li>
                            <router-link :to="{ name: 'intro' }">조리원 소개</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'direction' }">오시는 길</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'reservList' }">온라인 예약</router-link>
                        </li>
                        <li>
                            <a href="#" @click.prevent="isTermsOpen = true">이용약관</a>
                        </li>
                        <li>
                            <a href="#" @click.prevent="isPrivacyOpen = true">개인정보처리방침</a>
                        </li>
                    </ul>

                    <Teleport to="body">
                        <TermsModal v-if="isTermsOpen" @close="isTermsOpen = false" />
                        <PrivacyModal v-if="isPrivacyOpen" @close="isPrivacyOpen = false" />
                    </Teleport>

                    <div class="link fs18">
                        <a href="https://www.ycg.kr/open.content/ko/" target="_blank" class="flex alc">
                            예천군청 홈페이지 <img src="/img/ic_footer_link.svg" alt="" />
                        </a>
                    </div>
                </div>

                <div class="infoArea">
                    <h2 class="ftlogo img">
                        <img src="/img/logo.svg" alt="" />
                    </h2>
                    <div class="infoA abs right0 bottom0">
                        <div class="tit fs16">상담 및 문의 전화</div>
                        <div class="num fs28 fwtbold">054-650-0000</div>
                        <div class="prg fs16">운영시간 : 09:00-18:00 (주말 및 공휴일 제외)</div>
                    </div>
                    <div class="infoB">
                        <ul class="lst flex fs16">
                            <li>주소 : 경상북도 예천군 예천읍 상설시장1길 38-10</li>
                            <li>대표전화 : 054-650-0000</li>
                            <li>팩스 : 054-650-0000</li>
                        </ul>
                        <div class="copy fs16">
                            COPYRIGHTⓒ 2026 예천군 공공산후조리원. ALL RIGHT RESERVED
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isFloatOpen = ref(false);

const toggleFloatMenu = () => {
    isFloatOpen.value = !isFloatOpen.value;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

import PrivacyModal from '@/components/PrivacyModal.vue';
import TermsModal from '@/components/TermsModal.vue'; 

const isPrivacyOpen = ref(false);
const isTermsOpen = ref(false);
</script>