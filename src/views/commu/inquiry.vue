<template>

    <SubVisual />

    <div id="contents" class="inner1620 m_center">
        <div class="subTitle flex alc justy_btw">
            <div class="title fs36 fwtbold lh160">문의하기</div>
            <div class="menu flex alc fs16 lh160 fc33">
                <span>커뮤니티</span>
                <img src="/img/sub/ic_subtit_arr.svg" alt="">
                <span>문의하기</span>
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

            <div class="boardTable boardTableB fs18">
                <table>
                    <thead>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>등록일</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="num">15</td>
                            <td class="subj">
                                <router-link to="/board-view" class="link">
                                    <img src="/img/sub/ic_lock.svg" alt="">시설 이용에 대해 문의드립니다.
                                </router-link>
                            </td>
                            <td class="user">최수정</td>
                            <td class="date">2026-01-01</td>
                        </tr>      
                        <tr>
                            <td class="num">14</td>
                            <td class="subj">
                                <router-link to="/board-view" class="link">
                                    <img src="/img/sub/ic_lock.svg" alt="">시설 이용에 대해 문의드립니다.
                                </router-link>
                            </td>
                            <td class="user">이하은</td>
                            <td class="date">2026-01-01</td>
                        </tr>      
                        <tr>
                            <td class="num">13</td>
                            <td class="subj">
                                <router-link to="/board-view" class="link">
                                    <img src="/img/sub/ic_lock.svg" alt="">시설 이용에 대해 문의드립니다.
                                </router-link>
                            </td>
                            <td class="user">박지홍</td>
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
import SubVisual from '@/components/SubVisual.vue'; 

</script>