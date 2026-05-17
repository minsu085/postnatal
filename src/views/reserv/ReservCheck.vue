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
            <div class="title fs36 fwtbold lh160">예약확인</div>
            <div class="menu flex alc fs16 lh160 fc33">
                <span>온라인 예약</span>
                <img src="/img/sub/ic_subtit_arr.svg" alt="">
                <span>예약확인</span>
            </div>
        </div>

        <div id="reserv">
            <div class="reservGrid flex fxwrap fs18">
                <div class="gridLine w100">
                    <div class="opt">산모성함</div>
                    <div class="con">
                        <div class="iptLine">
                            <input type="text" class="ipt" v-model="form.motherName" placeholder="산모 성함을 입력해주세요.">
                        </div>
                    </div>
                </div>
                <div class="gridLine w100">
                    <div class="opt">산모 휴대전화</div>
                    <div class="con">
                        <div class="iptLine phoneLine">
                            <select class="slc" v-model="form.phone1">
                                <option value="010">010</option>
                                <option value="011">011</option>
                                <option value="016">016</option>
                            </select>
                            <span class="dash">-</span>
                            <input type="text" class="ipt" maxlength="4" v-model="form.phone2"
                                @input="allowOnlyNumbers('phone2', $event)">
                            <span class="dash">-</span>
                            <input type="text" class="ipt" maxlength="4" v-model="form.phone3"
                                @input="allowOnlyNumbers('phone3', $event)">
                        </div>
                    </div>
                </div>
                <div class="gridLine w100">
                    <div class="opt">비밀번호</div>
                    <div class="con">
                        <div class="iptLine">
                            <input type="password" class="ipt" maxlength="4" placeholder="숫자 4자리를 입력해주세요."
                                v-model="form.password" @input="allowOnlyNumbers('password', $event)">
                        </div>
                    </div>
                </div>
            </div>

            <div class="botBtns flex justy_cnt">
                <button type="button" class="btn btnB" @click="checkReservation">예약 확인하기</button>
            </div>
        </div>

    </div>

</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = reactive({
    motherName: '',
    phone1: '010',
    phone2: '',
    phone3: '',
    password: ''
});

const allowOnlyNumbers = (fieldKey, event) => {
    let numericValue = event.target.value.replace(/[^0-9]/g, '');
    form[fieldKey] = numericValue;
    event.target.value = numericValue;
};

const checkReservation = () => {
    if (!form.motherName) {
        alert('산모 성함을 입력해주세요.');
        return;
    }
    if (!form.phone2 || !form.phone3) {
        alert('휴대전화 번호를 정확히 입력해주세요.');
        return;
    }
    if (!form.password || form.password.length < 4) {
        alert('비밀번호 4자리를 입력해주세요.');
        return;
    }

    console.log('서버로 조회할 데이터:', form);
    router.push('/reserv-result');
};
</script>
