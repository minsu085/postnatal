<template>

    <div id="subVisual">
        <div class="bgImg">
            <div class="img pc"><img src="/img/sub/sub_visual_05.jpg" alt=""></div>
            <div class="img mo"><img src="/img/sub/sub_visual_05_mo.jpg" alt=""></div>
        </div>
        <div class="txtArea abs w100 inner1620 x_center fcf">
            <div class="tit fs38 fwtbold">커뮤니티</div>
            <div class="wrt fs20">
                함께 나누는 이야기 속, 공감과 소통이 흐르는 공간
            </div>
        </div>
        <div class="menuArea abs w100 inner1620 x_center flex fs18 menu2">
            <div class="menu">
                <router-link to="/notice">공지사항</router-link>
            </div>
            <div class="menu on">
                <router-link to="/review">이용후기</router-link>
            </div>
            <div class="menu">
                <router-link to="/inquiry">문의하기</router-link>
            </div>
        </div>
    </div>

    <div id="contents" class="inner1620 m_center">
        <div class="subTitle flex alc justy_btw">
            <div class="title fs36 fwtbold lh160">이용후기</div>
            <div class="menu flex alc fs16 lh160 fc33">
                <span>커뮤니티</span>
                <img src="/img/sub/ic_subtit_arr.svg" alt="">
                <span>이용후기</span>
            </div>
        </div>

        <div id="baord">

            <div class="utilBar flex alc justy_btw fs16">
                <div class="count">총 <b class="fc2">10</b>개의 게시물이 있습니다.</div>
                <div class="search">
                    <input type="text" class="ipt">
                    <button class="btn">검색</button>
                </div>
            </div>

            <ul class="boardGall flex fxwrap">
                <li class="gallLst" v-for="item in reviewList" :key="item.id">
                    <router-link to="/board-view">
                        <div class="thumb img">
                            <img :src="item.imgSrc" :alt="item.title">
                        </div>
                        <div class="subj fs20 fwtbold fc33">{{ item.title }}</div>
                        <div class="date fs16 fc55">{{ item.date }}</div>
                    </router-link>
                </li>
            </ul>
            
            <div class="btnArea">
                <button class="wrtBtn fs16 fc33">글쓰기</button>
            </div>

            <div class="paging flex justy_cnt fs18 fc33">
                <a href="#" class="pg prev">이전</a>
                <a href="#" class="pg current">1</a>
                <a href="#" class="pg">2</a>
                <a href="#" class="pg">3</a>
                <a href="#" class="pg">4</a>
                <a href="#" class="pg">5</a>
                <a href="#" class="pg next">다음</a>
            </div>

        </div>
    </div>


</template>

<script setup>
import { ref } from 'vue';

const totalCount = ref(12);

const sampleTitles = [
    '시설이 너무 깨끗하고 원장님이 친절하셔요!시설이 너무 깨끗하고 원장님이 친절하셔요!시설이 너무 깨끗하고 원장님이 친절하셔요!',
    '식사가 정말 맛있게 잘 나옵니다. 강력 추천해요.',
    '마사지 프로그램 덕분에 부기가 많이 빠졌어요.',
    '둘째 낳으면 꼭 다시 오고 싶은 산후조리원입니다.',
    '남편과 함께 쾌적하게 잘 쉬다 갑니다.',
    '신생아실 선생님들께서 아이를 정말 잘 케어해주세요.'
];

const reviewList = ref(
    Array.from({ length: 12 }, (_, index) => ({
        id: 12 - index,
        
        imgSrc: `/img/sub/review_thumb_${index + 1}.jpg`, 

        title: sampleTitles[index % sampleTitles.length],

        date: `2026-05-${String(18 - index).padStart(2, '0')}`
    }))
);
</script>