<template>
    <header id="header" class="fixed w100 top0">
        <div class="pcHeader pc" :class="{ 'on': isPcMenuOpen }">
            <div class="head inner1720 m_center flex alc">
                <h1 class="logo">
                    <router-link to="/" class="img">
                        <img src="/img/logo.svg" alt="공공산후조리원 로고" />
                    </router-link>
                </h1>

                <ul class="gnb fs20 fcf flex">
                    <li class="gnbLst" v-for="(menu, index) in menuData" :key="index" @mouseenter="openPcSubMenu(index)"
                        @mouseleave="closePcSubMenu(index)">
                        <a href="#" class="gnbLink" @click.prevent>{{ menu.title }}</a>
                        <ul class="lnb fs17 abs x_center" :class="{ 'on': activePcMenuIndex === index }">
                            <li class="lnbLst" v-for="(sub, subIndex) in menu.subMenus" :key="subIndex">
                                <router-link v-if="sub.path" :to="sub.path">{{ sub.name }}</router-link>
                                <a v-else href="#" @click.prevent>{{ sub.name }}</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <button type="button" class="menuBtn img" @click="togglePcMenu">
                    <img :src="isPcMenuOpen ? '/img/ic_head_close.svg' : '/img/ic_head_menu.svg'" alt="메뉴 버튼" />
                </button>
            </div>

            <div class="entire fixed w100 bottom0 left0" v-show="isPcMenuOpen">
                <div class="inn h100 flex column justy_cnt">
                    <ul class="gnb flex fcf">
                        <li class="gnbLst" :class="{ 'on': pcEntireMenuDelayOn }" v-for="(menu, index) in menuData"
                            :key="index" :style="{ transitionDelay: `${index * 150}ms` }">
                            <span class="tit fs26 fwtbold">{{ menu.title }}</span>
                            <ul class="lnb fs20">
                                <li v-for="(sub, subIndex) in menu.subMenus" :key="subIndex">
                                    <router-link v-if="sub.path" :to="sub.path" @click="togglePcMenu">{{ sub.name }}</router-link>
                                    <a v-else href="#" @click.prevent>{{ sub.name }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="moHeader mo" :class="{ 'on': isMoMenuOpen }">
            <div class="head inner m_center alc justy_btw flex alc">
                <h1 class="logo">
                    <router-link to="/" class="img">
                        <img src="/img/logo.svg" alt="공공산후조리원 로고" />
                    </router-link>
                </h1>
                <button type="button" class="menuBtn img" @click="toggleMoMenu">
                    <img :src="isMoMenuOpen ? '/img/ic_head_close.svg' : '/img/ic_head_menu.svg'" alt="모바일 메뉴 버튼" />
                </button>
            </div>

            <div class="menuBox fixed w100" v-show="isMoMenuOpen">
                <ul class="gnb">
                    <li class="gnbLst" v-for="(menu, index) in menuData" :key="index"
                        :class="[{ 'act': moMenuDelayAct }, { 'on': activeMoMenuIndex === index }]"
                        :style="{ transitionDelay: `${index * 100}ms` }">
                        <div class="tit fs30 fwtbold" @click="toggleMoSubMenu(index)">{{ menu.title }}</div>
                        <div class="lnb-wrap" :class="{ 'on': activeMoMenuIndex === index }">
                            <ul class="lnb fs26 fc33">
                                <li class="lnbLst" v-for="(sub, subIndex) in menu.subMenus" :key="subIndex">
                                    <router-link v-if="sub.path" :to="sub.path" @click="toggleMoMenu">{{ sub.name }}</router-link>
                                    <a v-else href="#" @click.prevent>{{ sub.name }}</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const menuData = [
    {
        title: '산후조리원 소개',
        subMenus: [
            { name: '조리원 소개', path: '/intro' }, 
            { name: '시설현황', path: '/facility' }, 
            { name: '오시는길', path: '/direction' }
        ]
    },
    {
        title: '시설안내',
        subMenus: [
            { name: '산모실', path: '/maternity' }, 
            { name: '신생아실', path: '/nursery' }, 
            { name: '모유수유실', path: '/lactation' }, 
            { name: '헬스케어실', path: '/wellness' }, 
            { name: '부대시설', path: '/facilities' }
        ]
    },
    {
        title: '이용안내',
        subMenus: [
            { name: '비용 안내', path: '/price' }, 
            { name: '예약방법', path: '/reservation' }, 
            { name: '준비사항', path: '/preparation' }
        ]
    },
    {
        title: '온라인 예약',
        subMenus: [
            { name: '예약하기', path: '/reserv-list' }, 
            { name: '예약확인', path: '/reserv-check' }
        ]
    },
    {
        title: '커뮤니티',
        subMenus: [
            { name: '공지사항', path: '/notice' }, 
            { name: '이용후기', path: '/review' }, 
            { name: '문의하기', path: '/inquiry' }
        ]
    }
];

const isPcMenuOpen = ref(false);
const activePcMenuIndex = ref(null);
const pcEntireMenuDelayOn = ref(false);

const openPcSubMenu = (index) => {
    activePcMenuIndex.value = index;
};
const closePcSubMenu = () => {
    activePcMenuIndex.value = null;
};

const togglePcMenu = () => {
    isPcMenuOpen.value = !isPcMenuOpen.value;

    if (isPcMenuOpen.value) {
        document.body.style.overflow = 'hidden';
        setTimeout(() => { pcEntireMenuDelayOn.value = true; }, 50);
    } else {
        document.body.style.overflow = '';
        pcEntireMenuDelayOn.value = false;
    }
};

const isMoMenuOpen = ref(false);
const activeMoMenuIndex = ref(null);
const moMenuDelayAct = ref(false);

const toggleMoMenu = () => {
    isMoMenuOpen.value = !isMoMenuOpen.value;

    if (isMoMenuOpen.value) {
        document.body.style.overflow = 'hidden';
        setTimeout(() => { moMenuDelayAct.value = true; }, 50);
    } else {
        document.body.style.overflow = '';
        moMenuDelayAct.value = false;
        activeMoMenuIndex.value = null;
    }
};

const toggleMoSubMenu = (index) => {
    activeMoMenuIndex.value = activeMoMenuIndex.value === index ? null : index;
};
</script>