<template>
    <div id="subVisual" v-if="currentVisual">
        <div class="bgImg">
            <div class="img pc"><img :src="currentVisual.bgPc" :alt="currentVisual.title"></div>
            <div class="img mo"><img :src="currentVisual.bgMo" :alt="currentVisual.title"></div>
        </div>
        
        <div class="txtArea abs w100 inner1620 x_center fcf">
            <div class="tit fs38 fwtbold">{{ currentVisual.title }}</div>
            <div class="wrt fs20">{{ currentVisual.desc }}</div>
        </div>
        
        <div class="menuArea abs w100 inner1620 x_center flex fs18 menu2">
            <div 
                class="menu" 
                v-for="(menu, idx) in currentVisual.menus" 
                :key="idx" 
                :class="{ on: isMenuActive(menu) }"
            >
                <router-link :to="menu.path">
                    {{ menu.name }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// --- 1. 서브 비주얼 통합 데이터 ---
const visualData = [
    {
        group: 'intro',
        title: '산후조리원 소개',
        desc: '따뜻함과 편안함을 담은 공간, 예천군 공공산후조리원',
        bgPc: '/img/sub/sub_visual_01.jpg',
        bgMo: '/img/sub/sub_visual_01_mo.jpg',
        menus: [
            { name: '조리원 소개', path: '/intro' },
            { name: '시설현황', path: '/facility' },
            { name: '오시는길', path: '/direction' }
        ],
        includePaths: []
    },
    {
        group: 'place',
        title: '시설안내',
        desc: '작은 순간까지 배려한 공간, 편안함과 안전을 담은 시설',
        bgPc: '/img/sub/sub_visual_02.jpg',
        bgMo: '/img/sub/sub_visual_02_mo.jpg',
        menus: [
            { name: '산모실', path: '/maternity' },
            { name: '신생아실', path: '/nursery' },
            { name: '모유수유실', path: '/lactation' },
            { name: '헬스케어실', path: '/wellness' },
            { name: '부대시설', path: '/facilities' }
        ],
        includePaths: []
    },
    {
        group: 'info',
        title: '이용안내',
        desc: '예천군 공공산후조리원에 머무는 시간을 위한 이용 안내',
        bgPc: '/img/sub/sub_visual_03.jpg',
        bgMo: '/img/sub/sub_visual_03_mo.jpg',
        menus: [
            { name: '비용 안내', path: '/price' },
            { name: '예약방법', path: '/reservation' },
            { name: '준비사항', path: '/preparation' }
        ],
        includePaths: []
    },
    {
        group: 'reserve',
        title: '온라인 예약',
        desc: '엄마와 아기의 소중한 시간을 위한 공공산후조리원 온라인 예약 서비스',
        bgPc: '/img/sub/sub_visual_04.jpg',
        bgMo: '/img/sub/sub_visual_04_mo.jpg',
        menus: [
            { 
                name: '예약하기', 
                path: '/reserv-list',
                activePaths: ['/reserv-list', '/reserv-view', '/reserv-form'] 
            },
            { 
                name: '예약확인', 
                path: '/reserv-check',
                activePaths: ['/reserv-check', '/reserv-result', '/reserv-detail']
            }
        ],
        includePaths: ['/reserv-view', '/reserv-form', '/reserv-result', '/reserv-detail'] 
    },
    {
        group: 'community',
        title: '커뮤니티',
        desc: '함께 나누는 이야기 속, 공감과 소통이 흐르는 공간',
        bgPc: '/img/sub/sub_visual_05.jpg',
        bgMo: '/img/sub/sub_visual_05_mo.jpg',
        menus: [
            { name: '공지사항', path: '/notice', boardType: 'notice' },
            { name: '이용후기', path: '/review', boardType: 'review' },
            { name: '문의하기', path: '/inquiry', boardType: 'inquiry' }
        ],
        includePaths: ['/board-view', '/board-write']
    }
];

// --- 2. 현재 URL을 바탕으로 어떤 데이터를 보여줄지 계산 ---
const currentVisual = computed(() => {
    const matchedGroup = visualData.find(group => {
        const isMenuMatch = group.menus.some(menu => menu.path === route.path);
        const isIncludeMatch = group.includePaths && group.includePaths.includes(route.path);
        
        return isMenuMatch || isIncludeMatch;
    });
    
    return matchedGroup || visualData[0]; 
});

// --- 3. 메뉴 활성화 체크 함수(isMenuActive) 업데이트 ---
const isMenuActive = (menu) => {
    // 1. 온라인 예약처럼 activePaths가 배열로 지정된 경우
    if (menu.activePaths && menu.activePaths.includes(route.path)) {
        return true;
    }
    
    // 2. 공통 게시판 페이지(/board-view, /board-write)에 진입한 경우
    const commonBoardPaths = ['/board-view', '/board-write'];
    if (commonBoardPaths.includes(route.path) && menu.boardType) {
        // 주소창의 ?type= 값과 메뉴에 지정해둔 boardType이 같으면 on!
        return route.query.type === menu.boardType;
    }
    
    // 3. 그 외 기본 페이지들 (현재 주소 == 메뉴 주소)
    return route.path === menu.path;
};
</script>

<style scoped>

</style>