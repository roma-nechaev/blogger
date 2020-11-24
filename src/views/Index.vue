<template>
  <div class="index">
    <b-container>
      <b-row align-v="center">
        <b-col lg="6" class="text-center">
          <router-link to="/">
            <b-img src="/img/designet.png" fluid alt="" />
          </router-link>
          <b-button type="submit" variant="outline-primary" to="/">I have a blog</b-button>
        </b-col>
        <b-col lg="6" class="text-center">
          <router-link to="/">
            <b-img src="/img/buisness-index.png" fluid alt="" />
          </router-link>
          <b-button type="submit" variant="outline-primary" to="/">I have a business</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>
<style lang="scss">
.index {
  height: 100%;
  .container,
  .row {
    height: 100%;
  }
  img {
    margin: 0 50px;
    height: 0;
    transition: all 0.7s;
  }
  .btn-outline-primary {
    font-weight: 400;
    margin-top: 40px;
    border-color: #5a5a5a;
    color: #5a5a5a;
    padding: 0.9rem 70px;
    &:hover {
      border-color: transparent;
      background: linear-gradient(90deg, #f093fb 0%, #f5576c 100%);
      color: #fff;
    }
  }
  .text-center:hover img {
    height: 100%;
    transition: all 0.7s;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-move {
  transition: transform 1s;
}
</style>
