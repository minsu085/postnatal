<template>

    <div id="subVisual">
        <div class="bgImg">
            <div class="img pc"><img src="/img/sub/sub_visual_05.jpg" alt=""></div>
            <div class="img mo"><img src="/img/sub/sub_visual_05_mo.jpg" alt=""></div>
        </div>
        <div class="txtArea abs w100 inner1620 x_center fcf">
            <div class="tit fs38 fwtbold">커뮤니티</div>
            <div class="wrt fs20">
                함께 나누는 이야기 속, 공감과 소통이 흐르는 공간
            </div>
        </div>
        <div class="menuArea abs w100 inner1620 x_center flex fs18 menu2">
            <div class="menu">
                <router-link to="/notice">공지사항</router-link>
            </div>
            <div class="menu on">
                <router-link to="/review">이용후기</router-link>
            </div>
            <div class="menu">
                <router-link to="/inquiry">문의하기</router-link>
            </div>
        </div>
    </div>

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

            <div class="txtArea"></div>

            <div class="botBtns flex justy_cnt">
                <div class="mngBtns flex">
                    <button type="button" class="btn btnA">취소</button>
                </div>
                <button type="button" class="btn btnB" @click="$router.push('/notice')">목록으로</button>
            </div>

        </div>
    </div>

</template>

<script setup>
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
</script>