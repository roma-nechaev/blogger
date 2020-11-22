<template>
  <b-modal id="signUp-business" size="xl" hide-footer>
    <b-row>
      <b-col lg="2" class="text-center">
        <div class="form-group">
          <b-avatar
            badge="+"
            badge-variant="dark"
            variant="dark"
            src="img/user.png"
            size="6.5rem"
            alt="Profile image"
          ></b-avatar>
        </div>
      </b-col>
      <b-col lg="8">
        <b-form @submit.prevent="onSubmit">
          <b-row>
            <b-col lg="6">
              <b-form-group>
                <b-form-input v-model="name" type="text" placeholder="Name*"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input v-model="email" type="text" placeholder="Mail*"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input v-model="password" type="text" placeholder="Password*"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input
                  v-model="website"
                  type="text"
                  placeholder="Your website*"
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input
                  v-model="instagram"
                  type="text"
                  placeholder="Instagram*"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col lg="6">
              <b-form-group>
                <b-form-input
                  v-model="companyName"
                  type="text"
                  placeholder="Company name*"
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input v-model="phone" type="text" placeholder="Phone*"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input
                  v-model="repeatPassword"
                  type="text"
                  placeholder="Repeat the password*"
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input v-model="city" type="text" placeholder="Country city*"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input v-model="facebook" type="text" placeholder="facebook*"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col lg="12">
              <p class="text-small">
                please pay attention to write your instagram or facebook page correctly, so bloggers
                are able to find you.
              </p>
            </b-col>
            <b-col lg="12">
              <b-form-checkbox v-model="accept">
                I accept the <router-link to="/terms">terms of the user agreement</router-link>
              </b-form-checkbox>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
      <b-col lg="2" class="text-center">
        <img src="@/assets/logo.svg" alt="Blogger" class="logo" />
      </b-col>
      <b-col lg="12" class="text-right">
        <b-button type="submit" variant="primary">Sign up</b-button>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      website: '',
      instagram: '',
      companyName: '',
      phone: '',
      repeatPassword: '',
      city: '',
      facebook: '',
      accept: false
    };
  }
};
</script>

<style lang="scss">
.b-avatar-badge {
  font-size: calc(1.12rem) !important;
  color: #fff;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.15);
}

#signUp-business,
#signUp-blogger {
  .logo {
    margin-top: 100px;
  }
  .text-small {
    letter-spacing: 0.02em;
    color: #8a8a8a;
    font-size: 10px;
  }
  .modal-body {
    padding-left: 110px;
    padding-right: 110px;
  }
  .btn-primary {
    padding: 0.75rem 100px;
  }

  a {
    color: #18a0fb;
    text-decoration: underline;
  }
}
</style>
