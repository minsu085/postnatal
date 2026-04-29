<template>
    <div class="wrap">
        <Header />

        <main id="container">
            <RouterView />
        </main>

        <Footer />
    </div>
</template>

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>