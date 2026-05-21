<template>
    <div class="modal fixed w100 h100 top0 bottom0">
        <div class="modalBg h100" @click="$emit('close')"></div>
        <div class="modalBox abs w_center">
            <div class="title fs28 fwtbold">개인정보처리방침</div>
            <div class="content">
                개인정보처리방침 내용
            </div>
            <button class="closeBtn img abs" @click="$emit('close')">
                <img src="/img/ic_close.svg" alt="닫기">
            </button>
        </div>
    </div>
</template>


<script setup>
defineEmits(['close']);
</script>