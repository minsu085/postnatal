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

                <div class="reservGrid flex fxwrap fs18">
                    <div class="gridLine w50">
                        <div class="opt">예약기간</div>
                        <div class="con">2026.04.01 ~ 2026.04.15</div>
                    </div>
                    <div class="gridLine w50">
                        <div class="opt">신청일자</div>
                        <div class="con">2026.01.08</div>
                    </div>
                    <div class="gridLine w50">
                        <div class="opt">산모 성함 <i>*</i></div>
                        <div class="con">
                            <div class="iptLine">
                                <input type="text" class="ipt" placeholder="산모 성함을 입력해주세요." v-model="form.motherName">
                            </div>
                        </div>
                    </div>
                    <div class="gridLine w50">
                        <div class="opt">산모 생년월일 <i>*</i></div>
                        <div class="con">
                            <div class="iptLine">
                                <input type="text" class="ipt birthIpt" maxlength="8" placeholder="숫자 8자리 입력"
                                    v-model="form.motherBirth" @input="allowOnlyNumbers('motherBirth', $event)">
                            </div>
                        </div>
                    </div>
                    <div class="gridLine w150">
                        <div class="opt">산모 휴대전화 <i>*</i></div>
                        <div class="con">
                            <div class="iptLine phoneLine">
                                <select class="slc" v-model="form.motherPhone1">
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                </select>
                                <span class="dash">-</span>
                                <input type="text" class="ipt phoneIpt" maxlength="4" v-model="form.motherPhone2"
                                    @input="allowOnlyNumbers('motherPhone2', $event)">
                                <span class="dash">-</span>
                                <input type="text" class="ipt phoneIpt" maxlength="4" v-model="form.motherPhone3"
                                    @input="allowOnlyNumbers('motherPhone3', $event)">
                            </div>
                        </div>
                    </div>
                    <div class="gridLine w50">
                        <div class="opt">산모 수첩번호 <i>*</i></div>
                        <div class="con">
                            <div class="iptLine">
                                <input type="text" class="ipt" placeholder="산모 수첩번호를 입력해주세요." v-model="form.notebookNo">
                            </div>
                        </div>
                    </div>
                    <div class="gridLine w50">
                        <div class="opt">보호자 성함 <i>*</i></div>
                        <div class="con">
                            <div class="iptLine">
                                <input type="text" class="ipt" placeholder="보호자 성함을 입력해주세요." v-model="form.guardName">
                            </div>
                        </div>
                    </div>
                    <div class="gridLine w150">
                        <div class="opt">보호자 휴대전화 <i>*</i></div>
                        <div class="con">
                            <div class="iptLine phoneLine">
                                <select class="slc" v-model="form.guardPhone1">
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                </select>
                                <span class="dash">-</span>
                                <input type="text" class="ipt phoneIpt" maxlength="4" v-model="form.guardPhone2"
                                    @input="allowOnlyNumbers('guardPhone2', $event)">
                                <span class="dash">-</span>
                                <input type="text" class="ipt phoneIpt" maxlength="4" v-model="form.guardPhone3"
                                    @input="allowOnlyNumbers('guardPhone3', $event)">
                            </div>
                        </div>
                    </div>
                    <div class="gridLine w100">
                        <div class="opt">주소 <i>*</i></div>
                        <div class="con">
                            <div class="iptLine adrsLine">
                                <div class="line">
                                    <input type="text" class="ipt" v-model="form.zipcode" placeholder="우편번호" readonly>
                                    <button type="button" class="adrsBtn">주소검색</button>
                                </div>
                                <div class="line">
                                    <input type="text" class="ipt" v-model="form.address1" placeholder="기본주소" readonly>
                                    <input type="text" class="ipt" v-model="form.address2" placeholder="상세주소">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="reservGrid flex fxwrap fs18">
                    <div class="gridLine w50">
                        <div class="opt">구분 <i>*</i></div>
                        <div class="con">
                            <div class="radLine line3">
                                <div class="rad">
                                    <input type="radio" name="radA" id="radA-1" value="장애인" v-model="form.roomType">
                                    <label for="radA-1">장애인 산모실</label>
                                </div>
                                <div class="rad">
                                    <input type="radio" name="radA" id="radA-2" value="다둥이" v-model="form.roomType">
                                    <label for="radA-2">다둥이 산모실</label>
                                </div>
                                <div class="rad">
                                    <input type="radio" name="radA" id="radA-3" value="일반" v-model="form.roomType">
                                    <label for="radA-3">일반 산모실</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="gridLine w50">
                        <div class="opt">초산/경산 <i>*</i></div>
                        <div class="con">
                            <div class="radLine">
                                <div class="rad">
                                    <input type="radio" name="radB" id="radB-1" value="초산" v-model="form.birthType">
                                    <label for="radB-1">초산</label>
                                </div>
                                <div class="rad">
                                    <input type="radio" name="radB" id="radB-2" value="경산" v-model="form.birthType">
                                    <label for="radB-2">경산</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="gridLine w50">
                        <div class="opt">분만예정일 <i>*</i></div>
                        <div class="con">
                            <div class="iptLine dateLine">
                                <input type="date" class="ipt dateIpt" v-model="form.expectedDate">
                                <div class="prg fs14 fc33">* 산모 수첩 기준으로 작성해주세요.</div>
                            </div>
                        </div>
                    </div>
                    <div class="gridLine w50">
                        <div class="opt">출산예정병원 <i>*</i></div>
                        <div class="con">
                            <div class="iptLine">
                                <input type="text" class="ipt" v-model="form.hospital">
                            </div>
                        </div>
                    </div>
                    <div class="gridLine w50">
                        <div class="opt">감면대상자 <i>*</i></div>
                        <div class="con">
                            <div class="iptLine">
                                <select class="slc" v-model="form.discountType">
                                    <option value="해당없음">해당없음</option>
                                    <option value="경북도민 (경상북도 6개월 이상 거주)">경북도민 (경상북도 6개월 이상 거주)</option>
                                    <option value="예천군민 (예천군 6개월 이상 거주)">예천군민 (예천군 6개월 이상 거주)</option>
                                    <option value="「국민기초생활 보장법」에 따른 수급자 및 차상위계층">「국민기초생활 보장법」에 따른 수급자 및 차상위계층</option>
                                    <option value="「장애인복지법」에 따른 장애인 또는 그 배우자">「장애인복지법」에 따른 장애인 또는 그 배우자</option>
                                    <option value="「국가유공자 등 예우 및 지원에 관한 법률」에 따른 국가유공자, 그 유족 또는 가족">
                                        「국가유공자 등 예우 및 지원에 관한법률」에 따른 국가유공자, 그 유족 또는 가족
                                    </option>
                                    <option value="「다문화가족 지원법」에 따른 다문화가족의 산모">「다문화가족 지원법」에 따른 다문화가족의 산모</option>
                                    <option value="「한부모가족지원법」에 따른 한부모가족의 산모">「한부모가족지원법」에 따른 한부모가족의 산모</option>
                                    <option value="「북한이탈주민의 보호 및 정착지원에 관한 법률」에 따른 보호대상자 또는 그 배우자">
                                        「북한이탈주민의 보호 및 정착지원에 관한 법률」에 따른 보호대상자 또는 그 배우자
                                    </option>
                                    <option value="「5.18 민주 유공자 예우에 관한 법률」에 따른 5.18 민주 유공자, 그 유족 또는 가족">
                                        「5.18 민주 유공자 예우에 관한 법률」에 따른 5.18 민주 유공자, 그 유족 또는 가족
                                    </option>
                                    <option value="「의료급여법 시행령」에 따라 보건복지부 장관이 정하여 고시하는 희귀 난치성질환을 앓고 있는 산모">
                                        「의료급여법 시행령」에 따라 보건복지부 장관이 정하여 고시하는 희귀 난치성질환을 앓고 있는 산모
                                    </option>
                                    <option value="다태아 또는 셋째 자녀 이상을 출산한 산모장애인 또는 그 배우자">
                                        다태아 또는 셋째 자녀 이상을 출산한 산모장애인 또는 그 배우자
                                    </option>
                                    <option value="청소년 산모">청소년 산모</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="gridLine w50">
                        <div class="opt">감면대상자<br class="mo"> 증빙서류</div>
                        <div class="con">
                            <div class="iptLine fileLine">
                                <input type="text" class="ipt fileNameIpt" placeholder="선택된 파일 없음" readonly
                                    :value="fileName">
                                <input type="file" ref="fileInput" style="display:none;" @change="handleFileChange">
                                <button type="button" class="fileBtn" @click="triggerFileUpload">파일첨부</button>
                            </div>
                        </div>
                    </div>
                    <div class="gridLine w100">
                        <div class="opt">비밀번호 <i>*</i></div>
                        <div class="con">
                            <div class="iptLine">
                                <input type="password" class="ipt pwIpt" maxlength="4" placeholder="숫자 4자리를 입력해주세요."
                                    v-model="form.password" @input="allowOnlyNumbers('password', $event)">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="agreeGroup">
                    <div class="agreeBox">
                        <div class="titArea flex alc fs18">
                            <div class="tit">
                                <img src="/img/sub/ic_notc.svg" alt="">
                                중복예약 또는 신청내용이 사실과 다를 경우, 예약이 취소될 수 있습니다.
                            </div>
                            <div class="check">
                                <input type="checkbox" id="chkA" v-model="form.agreeA">
                                <label for="chkA">동의합니다.</label>
                            </div>
                        </div>
                    </div>
                    <div class="agreeBox">
                        <div class="titArea flex alc fs18">
                            <div class="tit">
                                <img src="/img/sub/ic_notc.svg" alt="">
                                예약 안내 사항을 꼭 확인하여주세요. 입력 실수 등에 따른 불이익은 책임지지 않습니다.
                            </div>
                            <div class="check">
                                <input type="checkbox" id="chkB" v-model="form.agreeB">
                                <label for="chkB">동의합니다.</label>
                            </div>
                        </div>
                    </div>
                    <div class="agreeBox">
                        <div class="titArea flex alc fs18 typeB">
                            <div class="tit fwt500">
                                개인정보 수집 및 이용동의
                            </div>
                            <div class="check">
                                <input type="checkbox" id="chkC" v-model="form.agreeC">
                                <label for="chkC">동의합니다.</label>
                            </div>
                        </div>
                        <div class="contArea">
                            <textarea rows="8" cols="80" placeholder="개인정보 수집 및 이용에 대한 약관 내용" readonly></textarea>
                        </div>
                    </div>
                </div>

                <div class="botBtns flex justy_cnt">
                    <button type="button" class="btn btnA" @click="goBack">뒤로가기</button>
                    <button type="button" class="btn btnB" @click="submitForm">신청하기</button>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 폼 데이터를 담는 반응형 객체
const form = reactive({
    motherName: '',
    motherBirth: '',
    motherPhone1: '010',
    motherPhone2: '',
    motherPhone3: '',
    notebookNo: '',
    guardName: '',
    guardPhone1: '010',
    guardPhone2: '',
    guardPhone3: '',
    zipcode: '',
    address1: '',
    address2: '',
    roomType: '',
    birthType: '',
    expectedDate: '',
    hospital: '',
    discountType: '해당없음',
    password: '',
    agreeA: false,
    agreeB: false,
    agreeC: false
});

// 1. 숫자만 입력되도록 처리하는 함수
const allowOnlyNumbers = (fieldKey, event) => {
    let numericValue = event.target.value.replace(/[^0-9]/g, '');
    form[fieldKey] = numericValue;
    event.target.value = numericValue;
};

// 2. 파일 첨부 관련 처리
const fileInput = ref(null);
const fileName = ref('');

const triggerFileUpload = () => {
    fileInput.value.click();
};

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        fileName.value = file.name;
    } else {
        fileName.value = '';
    }
};

// 3. 하단 버튼 네비게이션
const goBack = () => {
    router.back();
};

// 4. 데이터전송
const submitForm = () => {
    if (!form.agreeA || !form.agreeB || !form.agreeC) {
        alert("모든 약관에 동의해주세요.");
        return;
    }

    console.log('서버로 전송될 폼 데이터:', form);

    alert("예약 신청이 완료되었습니다.");
};
</script>
