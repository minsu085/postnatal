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

        <div id="info" class="price">
            <div class="s1">
                <div class="infoTit fs28 fwtbold">이용료 안내</div>
                <ul class="lstArea flex">
                    <li class="lst flex alc justy_btw">
                        <div class="tit flex alc fs22">
                            <img src="/img/sub/ic_price_1.svg" alt="">
                            이용 기간
                        </div>
                        <div class="con fs28 fwtbold fc2 flex alend">
                            2주 <span class="fs20 fc33 fwt400">(14일)</span>
                        </div>
                    </li>
                    <li class="lst flex alc justy_btw">
                        <div class="tit flex alc fs22">
                            <img src="/img/sub/ic_price_2.svg" alt="">
                            이용 요금
                        </div>
                        <div class="con fs28 fwtbold fc2 flex alend">
                            1,800,000 <span class="fs20 fc33 fwt400">원</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="s2">
                <div class="infoTit fs28 fwtbold">감면 대상자 안내</div>
                <table class="fs18 t_center">
                    <thead>
                        <tr>
                            <th class="per">감면율</th>
                            <th class="targ">감면 대상</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10% 할인</td>
                            <td>경북도민(경상북도 6개월 이상 거주)</td>
                        </tr>
                        <tr>
                            <td>40% 할인</td>
                            <td>예천군민(예천군 6개월 이상 거주)</td>
                        </tr>

                        <tr>
                            <td rowspan="9">50% 할인</td>
                            <td>「국민기초생활 보장법」에 따른 수급자 및 차상위계층</td>
                        </tr>
                        <tr>
                            <td>「장애인복지법」에 따른 장애인 또는 그 배우자</td>
                        </tr>
                        <tr>
                            <td>「국가유공자 등 예우 및 지원에 관한 법률」에 따른 국가유공자, 그 유족 또는 가족</td>
                        </tr>
                        <tr>
                            <td>「다문화가족 지원법」에 따른 다문화가족의 산모</td>
                        </tr>
                        <tr>
                            <td>「한부모가족지원법」에 따른 한부모가족의 산모</td>
                        </tr>
                        <tr>
                            <td>「북한이탈주민의 보호 및 정착지원에 관한 법률」에 따른 보호대상자 또는 그 배우자</td>
                        </tr>
                        <tr>
                            <td>「5.18 민주 유공자 예우에 관한 법률」에 따른 5.18 민주 유공자, 그 유족 또는 가족</td>
                        </tr>
                        <tr>
                            <td>「의료급여법 시행령」에 따라 보건복지부 장관이 정하여 고시하는 희귀 난치성질환을 앓고 있는 산모</td>
                        </tr>
                        <tr>
                            <td>다태아 또는 셋째 자녀 이상을 출산한 산모</td>
                        </tr>

                        <tr>
                            <td>100% 할인</td>
                            <td>청소년 산모</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<script setup>
import SubVisual from '@/components/SubVisual.vue'; 
</script>