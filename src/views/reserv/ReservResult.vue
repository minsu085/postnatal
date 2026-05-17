<template>

    <div id="subVisual">
        <div class="bgImg">
            <div class="img pc"><img src="/img/sub/sub_visual_04.jpg" alt=""></div>
            <div class="img mo"><img src="/img/sub/sub_visual_04_mo.jpg" alt=""></div>
        </div>
        <div class="txtArea abs w100 inner1620 x_center fcf">
            <div class="tit fs38 fwtbold">온라인 예약</div>
            <div class="wrt fs20">
                엄마와 아기의 소중한 시간을 위한<br class="mo"> 공공산후조리원 온라인 예약 서비스
            </div>
        </div>
        <div class="menuArea abs w100 inner1620 x_center flex fs18 menu2">
            <div class="menu">
                <router-link to="/reserv-list">예약하기</router-link>
            </div>
            <div class="menu on">
                <router-link to="/reserv-check">예약확인</router-link>
            </div>
        </div>
    </div>

    <div id="contents" class="inner1620 m_center">

        <div class="subTitle flex alc justy_btw">
            <div class="title fs36 fwtbold lh160">예약하기</div>
            <div class="menu flex alc fs16 lh160 fc33">
                <span>온라인 예약</span>
                <img src="/img/sub/ic_subtit_arr.svg" alt="">
                <span>예약확인</span>
            </div>
        </div>

        <div id="reserv">
            <div class="reservTableWrap">
                <table class="reservTable fs18">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>접수기간</th>
                            <th>추첨일</th>
                            <th>상태</th>
                            <th>상세보기</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in resultList" :key="item.id">
                            <td class="num">{{ item.id }}</td>
                            <td class="subj">{{ item.title }}</td>
                            <td class="period">{{ item.period }}</td>
                            <td class="date">{{ item.drawDate }}</td>
                            <td class="state">
                                <span :class="item.statusClass">{{ item.status }}</span>
                            </td>
                            <td class="view">
                                <router-link to="/reserv-detail">상세보기</router-link>
                            </td>
                        </tr>
                        <tr v-if="resultList.length === 0">
                            <td colspan="6" style="padding: 5rem 0; text-align: center;">예약 내역이 없습니다.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="botBtns flex justy_cnt">
                <button type="button" class="btn btnB" @click="goBack">뒤로가기</button>
            </div>
        </div>

    </div>
   
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const resultList = ref([
    {
        id: 10,
        title: '2026년 5월 출산 예정자를 모집합니다. (2기 / 16일~말일)',
        period: '2026.04.01  ~ 2026.04.15',
        drawDate: '2026.02.27',
        status: '접수 완료',
        statusClass: 'st02'
    },
    {
        id: 10,
        title: '2026년 5월 출산 예정자를 모집합니다. (2기 / 16일~말일)',
        period: '2026.04.01  ~ 2026.04.15',
        drawDate: '2026.02.27',
        status: '신청 반려',
        statusClass: 'st01'
    },
    {
        id: 10,
        title: '2026년 5월 출산 예정자를 모집합니다. (2기 / 16일~말일)',
        period: '2026.04.01  ~ 2026.04.15',
        drawDate: '2026.02.27',
        status: '예약 취소',
        statusClass: 'st01'
    }
]);

const goBack = () => {
    router.back();
};
</script>

<style scoped>
</style>