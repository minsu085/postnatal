<template>
    <div>
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
                <div class="menu on">
                    <router-link to="/reserv-list">예약하기</router-link>
                </div>
                <div class="menu">
                    <router-link to="/reserv-check">예약확인</router-link>
                </div>
            </div>
        </div>

        <div id="contents" class="inner1620 m_center">

            <div class="subTitle flex alc justy_btw">
                <div class="title fs36 fwtbold lh160">예약확인</div>
                <div class="menu flex alc fs16 lh160 fc33">
                    <span>온라인 예약</span>
                    <img src="/img/sub/ic_subtit_arr.svg" alt="">
                    <span>예약확인</span>
                </div>
            </div>

            <div id="reserv">
                <div class="rsvTit fs28 fwtbold">
                    2026년 4월 출산 예정자를 모집합니다. (1기 / 1일~15일)
                </div>

                <div class="reservGrid flex fxwrap fs18">
                    <div class="gridLine w100">
                        <div class="opt opt170">예약기간</div>
                        <div class="con">2026.04.01 ~ 2026.04.15</div>
                    </div>
                    <div class="gridLine w100">
                        <div class="opt opt170">접수기간</div>
                        <div class="con">2026.01.01 14:00 ~ 2026.01.11 14:00</div>
                    </div>
                    <div class="gridLine w100">
                        <div class="opt opt170">추첨일</div>
                        <div class="con">2026.01.12</div>
                    </div>
                    <div class="gridLine w50">
                        <div class="opt opt170">모집인원</div>
                        <div class="con">
                            장애인 산모실 1명<br>
                            다둥이 산모실 1명<br>
                            일반 산모실 10명
                        </div>
                    </div>
                    <div class="gridLine w50">
                        <div class="opt opt170">신청현황</div>
                        <div class="con">
                            장애인 산모실 (1명 / 당첨확률 100%) <br>
                            다둥이 산모실 (2명 / 당첨확률 50%)<br>
                            일반 산모실(20명 / 당첨확률 50%)
                        </div>
                    </div>
                    <div class="gridLine w50">
                        <div class="opt opt170">상태</div>
                        <div class="con">접수중</div>
                    </div>
                    <div class="gridLine w50">
                        <div class="opt opt170">추첨결과</div>
                        <div class="con">
                            <div class="txtBtnGroup">
                                <a href="#" class="txtBtn" @click.prevent="openModal('장애인 산모실')">
                                    장애인 산모실 추첨 결과 확인하기 <img src="/img/sub/ic_reserv_more.svg" alt="">
                                </a>
                                <a href="#" class="txtBtn" @click.prevent="openModal('다둥이 산모실')">
                                    다둥이 산모실 추첨 결과 확인하기 <img src="/img/sub/ic_reserv_more.svg" alt="">
                                </a>
                                <a href="#" class="txtBtn" @click.prevent="openModal('일반 산모실')">
                                    일반 산모실 추첨 결과 확인하기 <img src="/img/sub/ic_reserv_more.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="botBtns flex justy_cnt">
                    <button type="button" class="btn btnA" @click="goToList">목록으로</button>
                    <button type="button" class="btn btnB" @click="router.push('/reserv-form')">예약하기</button>
                </div>

                <div class="resultModal fixed w100 h100 w_center" v-show="isModalOpen">
                    <div class="modalBg h100" @click="closeModal"></div>
                    <div class="modalBox abs w_center w100 t_center">
                        <div class="tit fs28 fwtbold">
                            {{ modalTitle }} 추첨 결과
                        </div>
                        <div class="wrt fs16">
                            추첨결과에 따라 <b class="fc2">관리자가 유선을 통해 확인 후<br class="mo"> 최종 예약확정</b>이 됩니다.
                        </div>
                        <div class="current fs16">
                            신청현황 : {{ modalTitle }}(20명 / 당첨확률 50%)
                        </div>
                        <div class="lstBox fs16">
                            <table>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>산모 성함</th>
                                        <th>산모 휴대전화</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(person, index) in applicantList" :key="index">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ person.name }}</td>
                                        <td>{{ person.phone }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button type="button" class="closeBtn fs18 fcf fwt500" @click="closeModal">
                            확인
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// --- 모달 관련 상태 관리 ---
const isModalOpen = ref(false);
const modalTitle = ref('');

// 모달 안의 당첨자 리스트 (테스트용 가짜 데이터 5개만 넣었습니다)
const applicantList = ref([
    { name: '김O미', phone: '010-****-3080' },
    { name: '이O영', phone: '010-****-1234' },
    { name: '박O진', phone: '010-****-5678' },
    { name: '최O은', phone: '010-****-9012' },
    { name: '정O아', phone: '010-****-3456' },
    { name: '정O아', phone: '010-****-3456' },
    { name: '정O아', phone: '010-****-3456' },
    { name: '정O아', phone: '010-****-3456' },
    { name: '정O아', phone: '010-****-3456' },
    { name: '정O아', phone: '010-****-3456' },
    { name: '정O아', phone: '010-****-3456' },
    { name: '정O아', phone: '010-****-3456' },
    { name: '정O아', phone: '010-****-3456' },
    { name: '정O아', phone: '010-****-3456' },
    { name: '정O아', phone: '010-****-3456' },
]);

// 모달 열기 함수 
const openModal = (roomType) => {
    modalTitle.value = roomType;
    isModalOpen.value = true;
    document.body.style.overflow = 'hidden';
};

// 모달 닫기 함수
const closeModal = () => {
    isModalOpen.value = false;
    document.body.style.overflow = '';
};

// 목록으로 돌아가기 함수
const goToList = () => {
    router.push('/reserv-list');
};
</script>
