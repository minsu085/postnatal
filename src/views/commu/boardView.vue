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
            <div class="menu on">
                <router-link to="/notice">공지사항</router-link>
            </div>
            <div class="menu">
                <router-link to="/review">이용후기</router-link>
            </div>
            <div class="menu">
                <router-link to="/inquiry">문의하기</router-link>
            </div>
        </div>
    </div>

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
                <button type="button" class="btn btnB" >목록으로</button>
            </div>

        </div>
       
    </div>

</template>

<script setup>

</script>