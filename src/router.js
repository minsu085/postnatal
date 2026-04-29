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
            
            // 온라인 예약
            {path: 'reserv-list', name: 'reservList', component: () => import('@/views/reserv/ReservList.vue'), meta: { title: '예약하기' }},
            {path: 'reserv-view', name: 'reservView', component: () => import('@/views/reserv/ReservView.vue'), meta: { title: '예약 상세보기' }},
            {path: 'reserv-form', name: 'reservForm', component: () => import('@/views/reserv/ReservForm.vue'), meta: { title: '온라인 예약 신청' }},
            {path: 'reserv-check', name: 'reservCheck', component: () => import('@/views/reserv/ReservCheck.vue'), meta: { title: '예약 확인' }},
            {path: 'reserv-result', name: 'reservResult', component: () => import('@/views/reserv/ReservResult.vue'), meta: { title: '예약 결과' }},
            {path: 'reserv-detail', name: 'reservDetail', component: () => import('@/views/reserv/ReservDetail.vue'), meta: { title: '예약 상세 내역' }},
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
