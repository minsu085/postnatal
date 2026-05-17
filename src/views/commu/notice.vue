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
        <div class="subTitle flex alc justy_btw">
            <div class="title fs36 fwtbold lh160">공지사항</div>
            <div class="menu flex alc fs16 lh160 fc33">
                <span>커뮤니티</span>
                <img src="/img/sub/ic_subtit_arr.svg" alt="">
                <span>공지사항</span>
            </div>
        </div>

        <div id="baord">

            <div class="utilBar flex alc justy_btw fs16">
                <div class="count">총 <b class="fc2">10</b>개의 게시물이 있습니다.</div>
                <div class="search">
                    <input type="text" class="ipt">
                    <button class="btn">검색</button>
                </div>
            </div>

            <div class="boardTable fs18">
                <table>
                    <thead>
                        <th>번호</th>
                        <th>제목</th>
                        <th>첨부파일</th>
                        <th>조회수</th>
                        <th>등록일</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="num"><span class="notc">공지</span></td>
                            <td class="subj"><router-link to="/board-view">예시 게시글입니다.</router-link></td>
                            <td class="file"><img src="/img/sub/ic_file.svg" alt=""></td>
                            <td class="hits">100</td>
                            <td class="date">2026-01-01</td>
                        </tr>
                        <tr>
                            <td class="num">14</td>
                            <td class="subj"><router-link to="/board-view">예시 게시글입니다.</router-link></td>
                            <td class="file"><img src="/img/sub/ic_file.svg" alt=""></td>
                            <td class="hits">100</td>
                            <td class="date">2026-01-01</td>
                        </tr>
                        <tr>
                            <td class="num">13</td>
                            <td class="subj"><router-link to="/board-view">예시 게시글입니다.</router-link></td>
                            <td class="file"><img src="/img/sub/ic_file.svg" alt=""></td>
                            <td class="hits">100</td>
                            <td class="date">2026-01-01</td>
                        </tr>
                        <tr>
                            <td class="num">12</td>
                            <td class="subj"><router-link to="/board-view">예시 게시글입니다.</router-link></td>
                            <td class="file"><img src="/img/sub/ic_file.svg" alt=""></td>
                            <td class="hits">100</td>
                            <td class="date">2026-01-01</td>
                        </tr>
                        <tr>
                            <td class="num">11</td>
                            <td class="subj"><router-link to="/board-view">예시 게시글입니다.</router-link></td>
                            <td class="file"><img src="/img/sub/ic_file.svg" alt=""></td>
                            <td class="hits">100</td>
                            <td class="date">2026-01-01</td>
                        </tr>
                        <tr>
                            <td class="num">10</td>
                            <td class="subj"><router-link to="/board-view">예시 게시글입니다.</router-link></td>
                            <td class="file"><img src="/img/sub/ic_file.svg" alt=""></td>
                            <td class="hits">100</td>
                            <td class="date">2026-01-01</td>
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

</template>

<script setup>

</script>