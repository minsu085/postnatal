import { createRouter, createWebHistory } from "vue-router";

// prettier-ignore
const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('@/layout/Layout.vue'),
        children: [
            // 메인 페이지
            {path: '', name: 'main', component: () => import('@/views/Dashboard.vue'), meta: { title: '메인페이지' }},

            // 산후조리원 소개
            {path: 'intro', name: 'intro', component: () => import('@/views/intro/Intro.vue'), meta: { title: '조리원 소개' }},
            {path: 'facility', name: 'facility', component: () => import('@/views/intro/Facility.vue'), meta: { title: '시설현황' }},
            {path: 'direction', name: 'direction', component: () => import('@/views/intro/Direction.vue'), meta: { title: '오시는길' }},

            // 시설안내
            {path: 'maternity', name: 'maternity', component: () => import('@/views/place/Maternity.vue'), meta: { title: '산모실' }},
            {path: 'nursery', name: 'nursery', component: () => import('@/views/place/Nursery.vue'), meta: { title: '신생아실' }},
            {path: 'lactation', name: 'lactation', component: () => import('@/views/place/Lactation.vue'), meta: { title: '모유수유실' }},
            {path: 'wellness', name: 'wellness', component: () => import('@/views/place/Wellness.vue'), meta: { title: '헬스케어실' }},
            {path: 'facilities', name: 'facilities', component: () => import('@/views/place/Facilities.vue'), meta: { title: '부대시설' }},

            // 이용안내
            {path: 'price', name: 'price', component: () => import('@/views/info/Price.vue'), meta: { title: '비용 안내' }},
            {path: 'reservation', name: 'reservation', component: () => import('@/views/info/Reservation.vue'), meta: { title: '예약방법' }},
            {path: 'preparation', name: 'preparation', component: () => import('@/views/info/Preparation.vue'), meta: { title: '준비사항' }},
            
            // 온라인 예약
            {path: 'reserv-list', name: 'reservList', component: () => import('@/views/reserv/ReservList.vue'), meta: { title: '예약하기' }},
            {path: 'reserv-view', name: 'reservView', component: () => import('@/views/reserv/ReservView.vue'), meta: { title: '예약 상세보기' }},
            {path: 'reserv-form', name: 'reservForm', component: () => import('@/views/reserv/ReservForm.vue'), meta: { title: '온라인 예약 신청' }},
            {path: 'reserv-check', name: 'reservCheck', component: () => import('@/views/reserv/ReservCheck.vue'), meta: { title: '예약 확인' }},
            {path: 'reserv-result', name: 'reservResult', component: () => import('@/views/reserv/ReservResult.vue'), meta: { title: '예약 결과' }},
            {path: 'reserv-detail', name: 'reservDetail', component: () => import('@/views/reserv/ReservDetail.vue'), meta: { title: '예약 상세 내역' }},

            // 커뮤니티
            {path: 'notice', name: 'notice', component: () => import('@/views/commu/notice.vue'), meta: { title: '공지사항' }},
            {path: 'review', name: 'review', component: () => import('@/views/commu/review.vue'), meta: { title: '이용후기' }},
            {path: 'inquiry', name: 'inquiry', component: () => import('@/views/commu/inquiry.vue'), meta: { title: '문의하기' }},
            {path: 'board-view', name: 'boardView', component: () => import('@/views/commu/boardView.vue'), meta: { title: '게시판상세' }},
            {path: 'board-write', name: 'boardWrite', component: () => import('@/views/commu/boardWrite.vue'), meta: { title: '게시판글쓰기' }},
        ],
    },

    // 잘못된 URL은 전부 /메인 으로
    {path: '/:pathMatch(.*)*', redirect: '/' },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            top: 0,
            behavior: "auto",
        };
    },
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export default router;
