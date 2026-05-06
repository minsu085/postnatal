<template>
    <div id="main">
        <div class="s1">
            <swiper :modules="[SwiperAutoplay, SwiperEffectFade]" :autoplay="{ delay: 4000 }" :loop="true" effect="fade"
                class="s1Swiper">
                <swiper-slide>
                    <div class="img pc"><img src="/img/main/s1_img_1.jpg" alt="" /></div>
                    <div class="img mo"><img src="/img/main/s1_img_1_mo.jpg" alt="" /></div>
                </swiper-slide>
                <swiper-slide>
                    <div class="img pc"><img src="/img/main/s1_img_2.jpg" alt="" /></div>
                    <div class="img mo"><img src="/img/main/s1_img_2_mo.jpg" alt="" /></div>
                </swiper-slide>
            </swiper>
            <div class="txtArea abs w100 flex column alc t_center">
                <div class="subt fc1 nn fs22 fwtbold">YECHEON-GUN PUBLIC POSTPARTUM CARE CENTER</div>
                <div class="tit fs50 fwtbold fcf lh160">
                    산모의 회복과 아기의<br class="mo" /> 첫 시간을 함께하는<br />
                    공공산후조리 서비스를 제공합니다.
                </div>
                <a href="#" class="link flex alc justy_cnt fs20 fcf">
                    view more <img src="/img/main/s1_ic_plus.svg" alt="" />
                </a>
            </div>
        </div>

        <div class="s2">
            <div class="line">
                <div class="inn"></div>
            </div>
            <div class="txtArea fs30 t_center fc45">
                산모와 아기가 <b class="fc2">건강하게 회복할 수 있도록<br class="mo" /> 지원</b>하며<br class="pc" />
                공정한 예약 시스템으로 <b class="fc2">누구나 편리<br class="mo" />하게 이용</b>할 수 있는 공공산후조리원입니다.
            </div>
            <div class="imgArea">
                <div class="img pc"><img src="/img/main/s2_img.png" alt="" /></div>
                <div class="img mo"><img src="/img/main/s2_img_mo.png" alt="" /></div>
            </div>
            <div class="flowTxt fs120 fwt800 nn">
                <div class="flowWrap">
                    <p>YECHEON-GUN PUBLIC POSTPARTUM CARE CENTER</p>
                    <p>YECHEON-GUN PUBLIC POSTPARTUM CARE CENTER</p>
                </div>
            </div>
        </div>

        <div class="s3">
            <div class="inner m_center inner1620">
                <div class="topArea flex alc justy_btw">
                    <div class="titArea">
                        <div class="subt nn fs20 fwtbold fc2">Facility</div>
                        <div class="tit fs42 fwtbold">산모와 아기를 위한 시설 안내</div>
                        <div class="wrt fs18 fc45">편안한 휴식과 안전한 회복을 위해 마련된 공간을 확인해보세요.</div>
                    </div>
                    <div class="tabArea flex alc">
                        <ul class="tabLst flex alc fs20">
                            <li v-for="(tab, index) in s3SlideData" :key="index"
                                :class="{ 'on': s3ActiveIndex === index }" @click="handleS3TabClick(index)">
                                {{ tab.name }}
                            </li>
                        </ul>
                        <a href="#" class="link"><img src="/img/main/s3_ic_plus.svg" alt="" /></a>
                    </div>
                </div>

                <div class="contArea">
                    <swiper :modules="[SwiperAutoplay, SwiperNavigation]"
                        :autoplay="{ delay: 4000, disableOnInteraction: false }" :loop="true" :navigation="{
                            nextEl: '.s3next',
                            prevEl: '.s3prev',
                        }" @swiper="onS3Swiper" @slideChange="onS3SlideChange" class="s3Swiper">
                        <swiper-slide v-for="(slide, index) in 5" :key="index">
                            <div class="img pc"><img :src="`/img/main/s3_img_${index + 1}.jpg`" alt="" /></div>
                            <div class="img mo"><img :src="`/img/main/s3_img_${index + 1}_mo.jpg`" alt="" /></div>
                        </swiper-slide>
                    </swiper>

                    <div class="slideTxt fcf">
                        <div class="tit fs26 fwtbold">{{ s3SlideData[s3ActiveIndex].tit }}</div>
                        <div class="wrt fs18" v-html="s3SlideData[s3ActiveIndex].wrt"></div>
                        <div class="nav flex abs right0 bottom0">
                            <div class="s3prev img"><img src="/img/main/s3_prev.png" alt="" /></div>
                            <div class="s3next img"><img src="/img/main/s3_next.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="s4">
            <div class="inner m_center inner1620">
                <div class="titArea abs">
                    <div class="subt nn fs20 fwtbold fc2">
                        Care Service
                    </div>
                    <div class="tit fs42 fwtbold">
                        따뜻한 돌봄, <br>
                        세심한 케어 서비스
                    </div>
                    <div class="wrt fs18 fc45">
                        건강 회복부터 편안한 휴식까지, 세심하게 챙기는 케어 서비스입니다.
                    </div>
                </div>
                <ul class="lstArea flex">
                    <li class="lst lstA">
                        <div class="bgImg">
                            <div class="img pc"><img src="img/main/s4_img_1.jpg" alt=""></div>
                            <div class="img mo"><img src="img/main/s4_img_1_mo.jpg" alt=""></div>
                            <div class="txt abs w100 t_center fs20 fwt500 fcf">
                                피부전문관리 및<br class="mo"> 체형관리 프로그램
                            </div>
                        </div>
                        <div class="hvImg abs w100 h100 w_center flex column alc t_center fcf justy_cnt">
                            <img src="img/main/s4_ic_1.svg" alt="" class="ico">
                            <div class="tit fs20 fwtbold">
                                피부전문관리 및<br class="mo"> 체형관리 프로그램
                            </div>
                            <div class="wrt fs18">
                                산후 회복을 돕는 피부 전문 관리와<br>
                                체형 관리 프로그램을 제공합니다.
                            </div>
                        </div>
                    </li>

                    <li class="lst lstB">
                        <div class="bgImg">
                            <div class="img pc"><img src="img/main/s4_img_2.jpg" alt=""></div>
                            <div class="img mo"><img src="img/main/s4_img_2_mo.jpg" alt=""></div>
                            <div class="txt abs w100 t_center fs20 fwt500 fcf">
                                목욕 및<br class="mo"> 모유수유 교육
                            </div>
                        </div>
                        <div class="hvImg abs w100 h100 w_center flex column alc t_center fcf justy_cnt">
                            <img src="img/main/s4_ic_2.svg" alt="" class="ico">
                            <div class="tit fs20 fwtbold">
                                목욕 및 모유수유 교육
                            </div>
                            <div class="wrt fs18">
                                신생아 목욕과 모유수유에 대한<br class="mo"> 체계적인<br class="pc">
                                교육 및 실습<br class="mo"> 중심 지도로 초보 부모도<br>
                                자신 있게 돌볼 수 있도록 돕습니다.
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="lstArea flex">
                    <li class="lst lstB">
                        <div class="bgImg">
                            <div class="img pc"><img src="img/main/s4_img_3.jpg" alt=""></div>
                            <div class="img mo"><img src="img/main/s4_img_3_mo.jpg" alt=""></div>
                            <div class="txt abs w100 t_center fs20 fwt500 fcf">
                                소아과 전문의 회진 및<br class="mo"> 상시 대기
                            </div>
                        </div>
                        <div class="hvImg abs w100 h100 w_center flex column alc t_center fcf justy_cnt">
                            <img src="img/main/s4_ic_3.svg" alt="" class="ico">
                            <div class="tit fs20 fwtbold">
                                소아과 전문의<br class="mo"> 회진 및 상시 대기
                            </div>
                            <div class="wrt fs18">
                                주 1회 소아과 전문의가 회진하여<br class="mo"> 신생아의 건강<br class="pc">
                                상태를 꼼꼼히<br class="mo"> 확인하며, 상시 콜 대기를 통해<br>
                                필요 시 신속한 의료 상담과<br class="mo"> 지원을 제공합니다.
                            </div>
                        </div>
                    </li>

                    <li class="lst lstA">
                        <div class="bgImg">
                            <div class="img pc"><img src="img/main/s4_img_4.jpg" alt=""></div>
                            <div class="img mo"><img src="img/main/s4_img_4_mo.jpg" alt=""></div>
                            <div class="txt abs w100 t_center fs20 fwt500 fcf">
                                신생아 관리 및 전문케어
                            </div>
                        </div>
                        <div class="hvImg abs w100 h100 w_center flex column alc t_center fcf justy_cnt">
                            <img src="img/main/s4_ic_4.svg" alt="" class="ico">
                            <div class="tit fs20 fwtbold">
                                신생아 관리 및 전문케어
                            </div>
                            <div class="wrt fs18">
                                신생아 목욕과 베이비 마사지 등<br>
                                전문적인 케어를 통해 아기의 위생과<br>
                                정서적 안정을 함께 지원합니다.
                            </div>
                        </div>
                    </li>

                    <li class="lst lstB">
                        <div class="bgImg">
                            <div class="img pc"><img src="img/main/s4_img_5.jpg" alt=""></div>
                            <div class="img mo"><img src="img/main/s4_img_5_mo.jpg" alt=""></div>
                            <div class="txt abs w100 t_center fs20 fwt500 fcf">
                                요가 프로그램
                            </div>
                        </div>
                        <div class="hvImg abs w100 h100 w_center flex column alc t_center fcf justy_cnt">
                            <img src="img/main/s4_ic_5.svg" alt="" class="ico">
                            <div class="tit fs20 fwtbold">
                                요가 프로그램
                            </div>
                            <div class="wrt fs18">
                                산후 회복을 돕는 요가 프로그램을<br class="mo"> 운영합니다.<br class="pc">
                                부드러운 동작으로<br class="mo"> 몸의 균형을 회복하고,<br class="pc">
                                심신의<br class="mo"> 안정과 스트레스 완화를 지원합니다.
                            </div>
                        </div>
                    </li>

                    <li class="lst lstA">
                        <div class="bgImg">
                            <div class="img pc"><img src="img/main/s4_img_6.jpg" alt=""></div>
                            <div class="img mo"><img src="img/main/s4_img_6_mo.jpg" alt=""></div>
                            <div class="txt abs w100 t_center fs20 fwt500 fcf">
                                셀프 케어
                            </div>
                        </div>
                        <div class="hvImg abs w100 h100 w_center flex column alc t_center fcf justy_cnt">
                            <img src="img/main/s4_ic_6.svg" alt="" class="ico">
                            <div class="tit fs20 fwtbold">
                                셀프 케어
                            </div>
                            <div class="wrt fs18">
                                세라믹 침대, 골반 교정, 족욕,<br class="mo"> 적외선·파라핀 치료<br class="pc">
                                등 다양한<br class="mo"> 셀프 케어 프로그램을 제공하며<br>
                                휴식과 회복의 시간을 가질 수 있습니다.
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="s5">
            <div class="inner m_center inner1620">
                <ul class="lstArea flex">
                    <li class="lst lstA fcf">
                        <router-link to="/cost-info">
                            <div class="tit fs26 fwtbold">비용안내</div>
                            <div class="wrt fs18">예천군 공공산후조리원 이용 요금과<br class="mo" /> 세부 내용을 안내합니다.</div>
                            <div class="link flex alcf fs18">view more <img src="/img/main/s5_ic_plus.svg" alt="" />
                            </div>
                            <div class="ico abs y_center img"><img src="/img/main/s5_ic_1.png" alt="" /></div>
                        </router-link>
                    </li>
                    <li class="lst lstB fcf">
                        <router-link to="/reserv-guide">
                            <div class="tit fs26 fwtbold">예약방법</div>
                            <div class="wrt fs18">예약 절차 및 방법을<br class="mo" /> 한눈에 확인할 수 있습니다.</div>
                            <div class="link flex alcf fs18">view more <img src="/img/main/s5_ic_plus.svg" alt="" />
                            </div>
                            <div class="ico abs y_center img"><img src="/img/main/s5_ic_2.png" alt="" /></div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay as SwiperAutoplay, EffectFade as SwiperEffectFade, Navigation as SwiperNavigation } from 'swiper/modules';

// Swiper 스타일 (필요시 main.js에서 import 해도 됨)
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// s3 데이터 세팅
const s3ActiveIndex = ref(0);
const s3SwiperInstance = ref(null);

const s3SlideData = [
    { name: "산모실", tit: "산모실", wrt: "쾌적하고 위생적인 환경 속에서 산모가 편안하게 휴식하며 <br class='pc'>몸과 마음을 회복할 수 있는 공간입니다." },
    { name: "신생아실", tit: "신생아실", wrt: "신생아실은 전문 인력이 24시간 체계적으로 돌보며, 위생적이고 안전한 환경을 유지합니다.<br class='pc'> 아기의 상태를 세심하게 관찰하고 맞춤형 케어를 제공하여 건강한 성장과 안정을 지원합니다." },
    { name: "모유 수유실", tit: "모유 수유실", wrt: "안락한 의자와 위생적인 환경을 갖추어 편안하고 안전하게 이용하실 수 있습니다.<br class='pc'>아기와 자연스럽게 교감할 수 있는 공간으로, 수유를 통해 건강한 성장과 정서적 안정을 돕습니다." },
    { name: "헬스케어실", tit: "헬스케어실", wrt: "체계적인 건강 체크를 위한 장비와 편안한 휴식을 고려해 설계된 헬스케어 공간입니다.<br class='pc'>산모가 안정적으로 회복에 집중할 수 있도록 쾌적하고 안락한 환경을 제공합니다." },
    { name: "부대시설", tit: "부대시설", wrt: "부대시설은 휴식과 편의를 동시에 고려하여 마련되었으며, <br class='pc'>산모와 가족이 함께 머무르는 동안 불편함 없이 시간을 보낼 수 있도록 다양한 서비스를 제공합니다." }
];

// s3 Swiper 초기화 및 변경 감지
const onS3Swiper = (swiper) => {
    s3SwiperInstance.value = swiper;
};

const onS3SlideChange = (swiper) => {
    s3ActiveIndex.value = swiper.realIndex;
};

const handleS3TabClick = (index) => {
    if (s3SwiperInstance.value) {
        s3SwiperInstance.value.slideToLoop(index);
    }
};
</script>