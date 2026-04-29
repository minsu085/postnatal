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
                <div class="title fs36 fwtbold lh160">예약하기</div>
                <div class="menu flex alc fs16 lh160 fc33">
                    <span>온라인 예약</span>
                    <img src="/img/sub/ic_subtit_arr.svg" alt="">
                    <span>예약하기</span>
                </div>
            </div>

            <div id="reserv">
                <div class="guidePanel">
                    <div class="guideBox">
                        <div class="tit fs28 fwtbold">예약안내</div>
                        <div class="txts">
                            <ul class="lst lh160 fs18">
                                <li>산모(본인)이 직접 예약해야하며, <b class="fc2">대리 예약은 불가</b>합니다.</li>
                                <li>중복예약 또는 신청 내용이 사실과 다를 경우 예약이 반려될 수 있습니다.</li>
                                <li>출산예정일 <b class="fc2">3개월 전</b> 예약이 오픈됩니다.</li>
                                <li>예약 접수 기간 동안만 접수를 받습니다.</li>
                                <li>예약 접수 후 <b class="fc2">무작위 추첨</b>을 통해 선발됩니다.</li>
                                <li>무작위 추첨 후 <b class="fc2">관리자가 유선을 통해 확인 후 최종 예약확정</b>이 됩니다.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="guideBox">
                        <div class="tit fs28 fwtbold">개인정보수집안내</div>
                        <div class="txts">
                            <div class="prg fs18 fwt500 lh160">
                                예천군 공공산후조리원을 이용하는 개인을 대상으로 아래와 같이 개인정보를 수집하고 있습니다.
                            </div>
                            <div class="wrt fs18">
                                ① 수집 개인정보 항목: 성함, 생년월일, 휴대전화 번호, 산모 수첩번호, 주소<br>
                                ② 개인정보의 수집 및 이용목적: 신청에 대한 확인 및 신속하고 정확한 상담(오류해결 등), 고객불만 발생시 해결<br>
                                ③ 개인정보의 이용기간: 수집된 정보는 서비스 이용기간 동안 보관하며, 이 외의 다른 목적으로 사용되지 않습니다.<br>
                                ④ 그 밖의 사항은 개인정보취급방침을 준수합니다.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="searchBar flex alc">
                    <div class="filterArea flex">
                        <div class="filtOpt flex alc">
                            <div class="tit fs18">예약기간</div>
                            <div class="area area1 flex">
                                <select class="slc" v-model="searchYear">
                                    <option value="">년</option>
                                    <option value="2026">2026</option>
                                    <option value="2025">2025</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                </select>
                                <select class="slc" v-model="searchMonth">
                                    <option value="">월</option>
                                    <option value="12">12월</option>
                                    <option value="11">11월</option>
                                    <option value="10">10월</option>
                                    <option value="09">09월</option>
                                </select>
                            </div>
                        </div>
                        <div class="filtOpt flex alc">
                            <div class="tit fs18">상태</div>
                            <div class="area area2 flex">
                                <select class="slc" v-model="searchStatus">
                                    <option value="">상태를 선택해주세요.</option>
                                    <option value="대기">대기</option>
                                    <option value="접수중">접수중</option>
                                    <option value="마감">마감</option>
                                </select>
                            </div>
                        </div>
                        <div class="filtOpt flex alc">
                            <div class="tit fs18">제목</div>
                            <div class="area area2 flex">
                                <input type="text" class="ipt" placeholder="제목을 입력해주세요." v-model="searchKeyword">
                            </div>
                        </div>
                    </div>
                    <div class="btnArea fs16 flex">
                        <button type="button" class="btn flex alc fcf btnA" @click="handleSearch">
                            <img src="/img/sub/ic_search.svg" alt="">검색
                        </button>
                        <button type="button" class="btn flex alc fcf btnB" @click="handleReset">
                            <img src="/img/sub/ic_reset.svg" alt="">초기화
                        </button>
                    </div>
                </div>

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
                            <tr v-for="(item, index) in reservList" :key="index">
                                <td class="num">{{ item.id }}</td>
                                <td class="subj">{{ item.title }}</td>
                                <td class="period">{{ item.period }}</td>
                                <td class="date">{{ item.drawDate }}</td>
                                <td class="state">
                                    <span :class="item.statusClass">{{ item.status }}</span>
                                </td>
                                <td class="view">
                                    <router-link to="/reserv-view">상세보기</router-link>
                                </td>
                            </tr>

                            <tr v-if="reservList.length === 0">
                                <td colspan="6" style="padding: 5rem 0; text-align: center;">등록된 예약 목록이 없습니다.</td>
                            </tr>
                        </tbody>
                    </table>
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
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 검색 필터 변수들
const searchYear = ref('');
const searchMonth = ref('');
const searchStatus = ref('');
const searchKeyword = ref('');

// 예약 리스트 가짜(Mock) 데이터 배열
const reservList = ref([
    {
        id: 10,
        title: '2026년 5월 출산 예정자를 모집합니다. (2기 / 16일~말일)',
        period: '2026.02.16 14:00  ~ 2026.02.26 14:00',
        drawDate: '2026.02.27',
        status: '대기',
        statusClass: 'st01'
    },
    {
        id: 10,
        title: '2026년 5월 출산 예정자를 모집합니다. (2기 / 16일~말일)',
        period: '2026.02.16 14:00  ~ 2026.02.26 14:00',
        drawDate: '2026.02.27',
        status: '접수중',
        statusClass: 'st02'
    },
    {
        id: 10,
        title: '2026년 5월 출산 예정자를 모집합니다. (2기 / 16일~말일)',
        period: '2026.02.16 14:00  ~ 2026.02.26 14:00',
        drawDate: '2026.02.27',
        status: '마감',
        statusClass: 'st03'
    }
]);

// 검색 버튼 클릭 시 작동할 함수
const handleSearch = () => {
    console.log(`검색 실행: ${searchYear.value}년 ${searchMonth.value}월 / 상태: ${searchStatus.value} / 키워드: ${searchKeyword.value}`);
};

// 초기화 버튼 클릭 시 검색 값들을 비워주는 함수
const handleReset = () => {
    searchYear.value = '';
    searchMonth.value = '';
    searchStatus.value = '';
    searchKeyword.value = '';
};
</script>