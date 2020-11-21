<template>
  <b-container fluid class="home" :class="bgClass(tabIndex)">
    <b-row>
      <b-tabs content-class="mt-3" fill v-model="tabIndex">
        <b-tab title="I have a blog" active :title-item-class="titleItemClass(0)">
          <b-container>
            <b-row align-v="center">
              <b-col lg="6">
                <b-carousel fade :interval="4000">
                  <b-carousel-slide
                    caption="Выбирай только интересные предложения"
                    img-src="/img/wizard.png"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    caption="Выбирай только интересные предложения"
                    img-src="/img/fluencer.png"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    caption="Выбирай только интересные предложения"
                    img-src="/img/fluencer.png"
                  ></b-carousel-slide>
                  <b-carousel-slide img-src="/img/facebook.png"></b-carousel-slide>
                </b-carousel>
              </b-col>
              <b-col lg="2"></b-col>
              <b-col lg="4" class="text-center">
                <b-form @submit.prevent="onSubmit">
                  <b-form-group>
                    <b-form-input
                      v-model="email"
                      type="text"
                      placeholder="Phone number or mail"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input
                      v-model="password"
                      type="password"
                      placeholder="Password"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-button type="submit" block variant="primary">Sign in</b-button>
                  </b-form-group>
                  <b-form-text class="form-group">
                    <router-link to="/forgot-password" class="text-muted">
                      Forgot your password?
                    </router-link>
                  </b-form-text>
                  <b-form-group>
                    <b-button block variant="outline-primary" v-b-modal.signUp-blogger
                      >Sign up</b-button
                    >
                  </b-form-group>
                  <b-form-text class="form-group text-muted">
                    or login with
                  </b-form-text>
                  <router-link to="/facebook" class="social">
                    <font-awesome-icon :icon="['fab', 'facebook-square']" />
                    <span class="sr-only">Facebook</span>
                  </router-link>
                  <router-link to="/google" class="social">
                    <font-awesome-icon :icon="['fab', 'google']" />
                    <span class="sr-only">Google</span>
                  </router-link>
                </b-form>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>
        <b-tab title="I have a business" :title-item-class="titleItemClass(1)">
          <b-container>
            <b-row align-v="center">
              <b-col lg="4" class="text-center">
                <b-form @submit.prevent="onSubmit">
                  <b-form-group>
                    <b-form-input
                      v-model="email"
                      type="text"
                      placeholder="Phone number or mail"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input
                      v-model="password"
                      type="password"
                      placeholder="Password"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-button type="submit" block variant="primary">Sign in</b-button>
                  </b-form-group>
                  <b-form-text class="form-group">
                    <router-link to="/forgot-password" class="text-muted">
                      Forgot your password?
                    </router-link>
                  </b-form-text>
                  <b-form-group>
                    <b-button block variant="outline-primary" v-b-modal.signUp-business
                      >Sign up</b-button
                    >
                  </b-form-group>
                  <b-form-text class="form-group text-muted">
                    or login with
                  </b-form-text>
                  <router-link to="/facebook" class="social">
                    <font-awesome-icon :icon="['fab', 'facebook-square']" />
                    <span class="sr-only">Facebook</span>
                  </router-link>
                  <router-link to="/google" class="social">
                    <font-awesome-icon :icon="['fab', 'google']" />
                    <span class="sr-only">Google</span>
                  </router-link>
                </b-form>
              </b-col>
              <b-col lg="2"></b-col>
              <b-col lg="6">
                <b-carousel fade :interval="4000">
                  <b-carousel-slide
                    caption="Выбирай только интересные предложения"
                    img-src="/img/revenue.png"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    caption="Выбирай только интересные предложения"
                    img-src="/img/business.png"
                  ></b-carousel-slide>
                  <b-carousel-slide
                    caption="Выбирай только интересные предложения"
                    img-src="/img/goal.png"
                  ></b-carousel-slide>
                </b-carousel>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>
      </b-tabs>
    </b-row>
    <sign-up-business />
    <sign-up-blogger />
  </b-container>
</template>
<script>
import SignUpBusiness from '@/components/SignUpBusiness.vue';
import SignUpBlogger from '@/components/SignUpBlogger.vue';
export default {
  components: {
    SignUpBusiness,
    SignUpBlogger
  },
  data() {
    return {
      tabIndex: 0,

      email: '',
      password: ''
    };
  },
  methods: {
    bgClass(tabIndex) {
      if (tabIndex === 0) {
        return ['bg-left'];
      } else {
        return ['bg-right'];
      }
    },
    titleItemClass(idx) {
      if (this.tabIndex === idx) {
        if (idx === 0) {
          return ['active-left'];
        } else {
          return ['active-right'];
        }
      } else {
        return ['bg-white'];
      }
    },
    onSubmit() {}
  }
};
</script>
<style lang="scss">
.home {
  height: 100%;

  backdrop-filter: blur(40px);
  border-radius: 1.25rem 1.25rem 0 0;
  &.bg-left {
    background: linear-gradient(90deg, #a6c0fe 0%, #f68084 100%);
  }
  &.bg-right {
    background: linear-gradient(90deg, #314755 0%, #26a0da 100%);
  }
  .tabs {
    width: 100%;
    .nav-tabs {
      font-family: Montserrat;
      font-size: 1.25rem;
      .nav-item {
        padding: 30px 0;
        background-color: transparent;
        &:nth-child(1) {
          border-radius: 0 0 1.25rem 0;
        }
        &:nth-child(2) {
          border-radius: 0 0 0 1.25rem;
        }
        &.active-left {
          border-radius: 1.25rem 0 0 0;
        }
        &.active-right {
          border-radius: 0 0 0 1.25rem;
        }
        .nav-link {
          display: inline-block;
          border-radius: 1.25rem;
          padding: 0.9rem 70px;
          opacity: 0.8;
          color: #5a5a5a;
          background: transparent;
          border: 1px solid #5a5a5a;

          filter: drop-shadow(4px 4px 20px rgba(0, 0, 0, 0.05));
          backdrop-filter: blur(40px);
          &.active {
            color: #fff;
            background: linear-gradient(90deg, #f093fb 0%, #f5576c 100%);
            border-color: transparent;
          }
        }
      }
    }
  }
  .btn-outline-primary {
    color: #fff;
    border-color: #fff;
    &:hover {
      border-color: #fe5196;
    }
  }
  .carousel-item {
    padding-top: 110px;
    height: 650px;
    .carousel-caption {
      font-family: 'Brusnika';
      font-weight: 500;
      width: 305px;
      font-size: 2.5rem;
      color: #fff;
      transform: rotate(-13.43deg);
      position: absolute;
      left: auto;
      right: 0;
      bottom: 0;
    }
  }

  .social {
    font-size: 24px;
    line-height: 28px;
    color: #fff;
    padding: 0 0.75rem;
  }
}
</style>
