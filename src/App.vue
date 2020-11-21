<template>
  <div class="app">
    <app-header />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue';
export default {
  components: {
    AppHeader
  }
};
</script>
<style lang="scss">
@font-face {
  font-family: 'Brusnika';
  src: url('~@/assets/Brusnika.otf');
  font-style: normal;
  font-weight: normal;
}
html,
body {
  height: 100%;
}
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1 0 auto;
  }
}
button:focus {
  outline: none;
}
</style>
