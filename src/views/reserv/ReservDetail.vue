<template>

    <SubVisual />

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
            <div class="reservGrid flex fxwrap fs18">
                <div class="gridLine w50">
                    <div class="opt">예약기간</div>
                    <div class="con">2026.04.01  ~ 2026.04.15</div>
                </div>
                <div class="gridLine w50">
                    <div class="opt">신청일자</div>
                    <div class="con">2026.01.08</div>
                </div>
                <div class="gridLine w50">
                    <div class="opt">산모 성함</div>
                    <div class="con">홍길동</div>
                </div>
                <div class="gridLine w50">
                    <div class="opt">산모 생년월일</div>
                    <div class="con">20000101</div>
                </div>
                <div class="gridLine w50">
                    <div class="opt">산모 휴대전화</div>
                    <div class="con">010-1234-5678</div>
                </div>
                <div class="gridLine w50">
                    <div class="opt">산모 수첩번호</div>
                    <div class="con">2026-000123</div>
                </div>
                <div class="gridLine w50">
                    <div class="opt">보호자 성함</div>
                    <div class="con">김유니</div>
                </div>
                <div class="gridLine w50">
                    <div class="opt">보호자 휴대전화</div>
                    <div class="con">010-8765-4321</div>
                </div>
                <div class="gridLine w50">
                    <div class="opt">주소</div>
                    <div class="con">경북 예천군 예천읍 동본리 457-1</div>
                </div>
                <div class="gridLine w50">
                    <div class="opt">상태</div>
                    <div class="con">
                        <div class="stateGroup">
                            <div class="line">
                                <span class="state typeA">접수 완료</span>
                                <router-link to="/reserv-view" class="txtBtn">
                                    추첨결과 확인하러 가기 <img src="/img/sub/ic_reserv_more.svg" alt="">
                                </router-link>
                            </div>
                            <div class="prg fs14">
                                * 추첨결과에 따라 관리자가 유선을 통해 확인 후 최종<br class="mo"> 예약확정이 됩니다.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gridLine w50">
                    <div class="opt">상태</div>
                    <div class="con">
                        <div class="stateGroup">
                            <div class="line">
                                <span class="state typeB">신청 반려</span>
                                <a href="#" class="txtBtn rejectBtn" @click.prevent="showModal = true">
                                    반려 사유 확인하기 <img src="/img/sub/ic_reserv_more.svg" alt="">
                                </a>
                            </div>
                            <div class="prg fs14">
                                * 추첨결과에 따라 관리자가 유선을 통해 확인 후 최종<br class="mo"> 예약확정이 됩니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="reservGrid flex fxwrap fs18">
                <div class="gridLine w50">
                    <div class="opt">구분 <i>*</i></div>
                    <div class="con">일반 산모실</div>
                </div>
                <div class="gridLine w50">
                    <div class="opt">초산/경산 <i>*</i></div>
                    <div class="con">초산</div>
                </div>
                <div class="gridLine w50">
                    <div class="opt">분만예정일 <i>*</i></div>
                    <div class="con">2026.03.30</div>
                </div>
                <div class="gridLine w50">
                    <div class="opt">출산예정병원 <i>*</i></div>
                    <div class="con">유니 여성병원</div>
                </div>
                <div class="gridLine w50">
                    <div class="opt">감면대상자 <i>*</i></div>
                    <div class="con">예천군민 (예천군 6개월 이상 거주)</div>
                </div>
                <div class="gridLine w50">
                    <div class="opt">감면대상자<br class="mo"> 증빙서류</div>
                    <div class="con"><a href="#" class="downBtn" download>증빙서류.hwpx</a></div>
                </div>
            </div>

            <div class="botBtns flex justy_cnt">
                <button type="button" class="btn btnB" @click="goToList">목록으로</button>
            </div>

            <div class="rejectModal fixed w100 h100 w_center" v-if="showModal">
                <div class="modalBg h100" @click="showModal = false"></div>
                <div class="modalBox abs w_center w100 t_center">
                    <div class="tit fs22 fwtbold t_center">신청 반려 사유</div>
                    <div class="box fs18">중복신청 내역이 있어, 신청이 반려되었습니다.</div>
                    <div class="btns flex justy_cnt fwt500">
                        <button type="button" class="btn cancelBtn" @click="showModal = false">취소</button>
                        <button type="button" class="btn closeBtn" @click="showModal = false">확인</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import SubVisual from '@/components/SubVisual.vue'; 

import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showModal = ref(false);

const goToList = () => {
    router.push('/reserv-result');
};

watch(showModal, (val) => {
    document.body.style.overflow = val ? 'hidden' : '';
});
</script>
