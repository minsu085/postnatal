<template>

    <SubVisual />

    <div id="contents" class="inner1620 m_center">
        <div class="subTitle flex alc justy_btw">
            <div class="title fs36 fwtbold lh160">이용후기</div>
            <div class="menu flex alc fs16 lh160 fc33">
                <span>커뮤니티</span>
                <img src="/img/sub/ic_subtit_arr.svg" alt="">
                <span>이용후기</span>
            </div>
        </div>

        <div id="boardWrite">

            <ul class="infoLst">
                <li class="lst flex">
                    <div class="opt fs18">
                        <span>제목 <i>*</i></span>
                    </div>
                    <div class="con fs16">
                        <input type="text" placeholder="게시글 제목을 입력해주세요.">
                    </div>
                </li>
                <li class="lst flex">
                    <div class="opt fs18">
                        <span>작성자 <i>*</i></span>
                    </div>
                    <div class="con fs16">
                        <input type="text" placeholder="작성자 성함을 입력해주세요.">
                    </div>
                </li>
                <li class="lst flex">
                    <div class="opt fs18">
                        <span>비밀번호 <i>*</i></span>
                    </div>
                    <div class="con fs16">
                        <input type="text" placeholder="게시글 비밀번호를 입력해주세요.">
                    </div>
                </li>
                <li class="lst flex">
                    <div class="opt fs18">
                        <span>첨부파일</span>
                    </div>
                    <div class="con fileCon fs16">
                        <input type="file" id="fileUpload" class="hidden-file" ref="fileInput"
                            @change="handleFileChange">
                        <label for="fileUpload" class="btn-file">파일 선택</label>
                        <span class="fsubj">{{ fileName || '선택된 파일이 없습니다.' }}</span>
                        <button type="button" class="btn-del" v-show="fileName" @click="removeFile">삭제</button>
                    </div>
                </li>
            </ul>

            <div class="txtArea">
                <QuillEditor v-model:content="boardContent" contentType="html" theme="snow" toolbar="full"
                    placeholder="내용을 작성해 주세요." />
            </div>

            <div class="botBtns flex justy_cnt">
                <div class="mngBtns flex">
                    <button type="button" class="btn btnA">취소</button>
                </div>
                <button type="button" class="btn btnB">완료</button>
            </div>

        </div>
    </div>

</template>

<style scoped>
:deep(.ql-container) {min-height: 57rem;}
:deep(.ql-editor) {min-height: 57rem; font-size: 1.6rem; line-height: 1.5; }
:deep(.ql-toolbar) {background-color: #f8f9fa;}
</style>

<script setup>
import SubVisual from '@/components/SubVisual.vue'; 

import { ref } from 'vue';

const fileInput = ref(null);
const fileName = ref('');

const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
        fileName.value = file.name;
    } else {
        fileName.value = '';
    }
};

const removeFile = () => {
    fileName.value = '';

    if (fileInput.value) {
        fileInput.value.value = '';
    }
};

import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css'; 

// 사용자가 에디터에 작성한 내용이 HTML 형태로 담길 변수
const boardContent = ref('');
</script>