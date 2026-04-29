<template>
    <div>
        <div id="float" class="fixed flex column">
            <ul class="flst fs17 fwt500 fcf" :class="{ 'on': isFloatOpen }">
                <li class="lst">
                    <a href="#" class="flex alc">
                        <img src="/img/ic_float_1.svg" alt="" />
                        시설현황
                    </a>
                </li>
                <li class="lst">
                    <a href="#" class="flex alc">
                        <img src="/img/ic_float_2.svg" alt="" />
                        예약확인
                    </a>
                </li>
                <li class="lst">
                    <a href="#" class="flex alc">
                        <img src="/img/ic_float_3.svg" alt="" />
                        예약하기
                    </a>
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
                            <a href="#">조리원 소개</a>
                        </li>
                        <li>
                            <a href="#">오시는 길</a>
                        </li>
                        <li>
                            <a href="#">온라인 예약</a>
                        </li>
                        <li>
                            <a href="#">이용약관</a>
                        </li>
                        <li>
                            <a href="#">개인정보처리방침</a>
                        </li>
                    </ul>
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
</script>