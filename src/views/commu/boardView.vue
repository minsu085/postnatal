<template>

    <SubVisual />

    <div id="contents" class="inner1620 m_center">

        <div id="boardView">
            <div class="topArea">
                <div class="title fs26 fwtbold">예시 게시글입니다.</div>
                <ul class="info flex fs16 fc33">
                    <li><span>조회수</span> 100</li>
                    <li><span>등록일</span> 2026-01-01</li>
                </ul>
            </div>

            <div class="contArea">
                공지사항 게시글 예시입니다.
                <img src="/img/sub/view_temp_pc.jpg" alt="" class="temp pc">
                <img src="/img/sub/view_temp_mo.jpg" alt="" class="temp mo">
            </div>

            <ul class="fileArea fs18">
                <li class="fileLst flex alc">
                    <span class="opt">첨부파일</span>
                    <img src="/img/sub/ic_file.svg" alt="">
                    <a href="#" class="file fc54" download>첨부파일.pdf (53.5KB)</a>
                </li>
            </ul>

            <div class="answArea">
                <div class="titArea flex alc justy_btw">
                    <div class="tit fs18">담당자 답변</div>
                    <div class="date fs16 fc55">2025.01.01</div>
                </div>
                <div class="anArea fs18 fc33">
                    문의사항에 답변드립니다.
                </div>
            </div>

            <ul class="naviArea fs18">
                <li class="naviLst flex alc">
                    <span class="opt">이전글</span>
                    <a href="#" class="link">이전글 제목입니다.</a>
                    <span class="date fc55 fs16">2026-01-01</span>
                </li>
                <li class="naviLst flex alc">
                    <span class="opt">다음글</span>
                    <a href="#" class="link">다음글 제목입니다.</a>
                    <span class="date fc55 fs16">2026-01-01</span>
                </li>
            </ul>

            <div class="botBtns flex justy_cnt">
                <div class="mngBtns flex">
                    <button type="button" class="btn btnA" @click="openModal">수정</button>
                    <button type="button" class="btn btnA" @click="openModal">삭제</button>
                </div>
                <button type="button" class="btn btnB" @click="$router.push('/notice')">목록으로</button>
            </div>

        </div>

        <div class="passModal fixed w100 h100 left0 top0" v-if="isModalOpen">
            <div class="modalBg h100"></div>
            <div class="modalBox abs w_center flex column alc">
                <div class="tit fs22 fwtbold">글 작성시<br class="mo"> 입력한 비밀번호를 입력해주세요.</div>
                <input type="text" class="ipt">
                <div class="btns flex justy_cnt fs16">
                    <button class="cancel btn btnA" @click="closeModal">취소</button>
                    <button class="confirm btn btnB">확인</button>
                </div>
            </div>
        </div>
       
    </div>

</template>

<script setup>
import SubVisual from '@/components/SubVisual.vue'; 

import { ref, onUnmounted } from 'vue';

const isModalOpen = ref(false);

const openModal = () => {
    isModalOpen.value = true;
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    isModalOpen.value = false;
    document.body.style.overflow = ''; 
};

// 모달이 열린 상태에서 뒤로가기 등으로 페이지를 벗어날 경우 스크롤 잠금 해제
onUnmounted(() => {
    document.body.style.overflow = '';
});
</script>