<template>
    <SubVisual />

    <div id="contents" class="inner1620 m_center">
        <div class="subTitle flex alc justy_btw">
            <div class="title fs36 fwtbold lh160">비용 안내</div>
            <div class="menu flex alc fs16 lh160 fc33">
                <span>이용안내</span>
                <img src="/img/sub/ic_subtit_arr.svg" alt="">
                <span>비용 안내</span>
            </div>
        </div>

        <div id="info" class="reserv">
            <div class="s1">
                <div class="infoTit fs28 fwtbold">예약안내</div>
                <ul class="lstArea fs18">
                    <li class="lst">
                        산모(본인)이 직접 예약해야하며, <b class="fc2">대리 예약은 불가</b>합니다.
                    </li>
                    <li class="lst">
                        중복예약 또는 신청 내용이 사실과 다를 경우 예약이 반려될 수 있습니다.
                    </li>
                    <li class="lst">
                        출산예정일 <b class="fc2">3개월 전</b> 예약이 오픈됩니다.
                    </li>
                    <li class="lst">
                        예약 접수 기간 동안만 접수를 받습니다.
                    </li>
                    <li class="lst">
                        예약 접수 후 <b class="fc2">무작위 추첨</b>을 통해 선발됩니다. 
                    </li>
                    <li class="lst">
                        무작위 추첨 후 <b class="fc2">관리자가 유선을 통해 확인 후 최종 예약확정</b>이 됩니다.
                    </li>
                </ul>
            </div>

            <div class="s2">
                <div class="infoTit fs28 fwtbold">호실 별 모집 인원 안내</div>
                <ul class="lstArea flex">
                    <li class="lst flex column alc fwtbold">
                        <img src="/img/sub/info_ico_1.png" alt="">
                        <div class="tit fs20">장애인 산모실</div>
                        <div class="num fs22 fc2">1명</div>
                    </li>
                    <li class="lst flex column alc fwtbold">
                        <img src="/img/sub/info_ico_2.png" alt="">
                        <div class="tit fs20">다둥이 산모실</div>
                        <div class="num fs22 fc2">1명</div>
                    </li>
                    <li class="lst flex column alc fwtbold">
                        <img src="/img/sub/info_ico_3.png" alt="">
                        <div class="tit fs20">일반 산모실</div>
                        <div class="num fs22 fc2">10명</div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script setup>
import SubVisual from '@/components/SubVisual.vue'; 
</script>