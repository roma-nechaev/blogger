<template>
  <b-modal id="signUp-blogger" size="xl" hide-footer>
    <b-row>
      <b-col lg="2" class="text-center">
        <div class="form-group">
          <b-avatar
            badge="+"
            badge-variant="dark"
            variant="white"
            src="img/user2.png"
            size="6.5rem"
            alt="Profile image"
          ></b-avatar>
        </div>
        <router-link to="/facebook" class="social social-youtube">
          <font-awesome-icon :icon="['fab', 'youtube']" />
          <span class="sr-only">Youtube</span>
        </router-link>
        <router-link to="/facebook" class="social social-facebook">
          <font-awesome-icon :icon="['fab', 'facebook-square']" />
          <span class="sr-only">Facebook</span>
        </router-link>
        <router-link to="/facebook" class="social social-instagram">
          <font-awesome-icon :icon="['fab', 'instagram']" />
          <span class="sr-only">Instagram</span>
        </router-link>
      </b-col>
      <b-col lg="8">
        <b-form @submit.prevent="onSubmit">
          <b-row>
            <b-col lg="6">
              <b-form-group>
                <b-form-input v-model="name" type="text" placeholder="Name*"></b-form-input>
              </b-form-group>
              <b-form-group class="male-radio">
                <b-form-radio v-model="male" value="male" class="custom-control-inline">
                  <img src="@/assets/male.png" alt="male" /> I - he
                </b-form-radio>
                <b-form-radio v-model="male" value="female" class="custom-control-inline">
                  <img src="@/assets/female.png" alt="male" />I - she
                </b-form-radio>
              </b-form-group>
              <b-form-group>
                <b-form-input v-model="email" type="text" placeholder="Mail*"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input v-model="password" type="text" placeholder="Password*"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-dropdown text="Blogging language *" variant="white">
                  <b-dropdown-item>Russian</b-dropdown-item>
                  <b-dropdown-item>English</b-dropdown-item>
                </b-dropdown>
              </b-form-group>
            </b-col>
            <b-col lg="6">
              <b-form-group>
                <b-form-input v-model="surname" type="text" placeholder="Surname*"></b-form-input>
              </b-form-group>
              <b-form-group label="date of your birth *" label-size="sm">
                <b-row no-gutters>
                  <b-col cols="3">
                    <b-form-input v-model="mounth" type="text" placeholder="02"></b-form-input>
                  </b-col>
                  <b-col cols="3">
                    <b-form-input v-model="day" type="text" placeholder="26"></b-form-input>
                  </b-col>
                  <b-col cols="6">
                    <b-form-input v-model="year" type="text" placeholder="1999"></b-form-input>
                  </b-col>
                </b-row>
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
            </b-col>
            <b-col lg="12">
              <b-form-tags v-model="value" add-on-change no-outer-focus>
                <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                  <b-form-select
                    v-bind="inputAttrs"
                    v-on="inputHandlers"
                    :disabled="disabled || availableOptions.length === 0"
                    :options="availableOptions"
                  >
                    <template #first>
                      <option disabled value="">Specialization*</option>
                    </template>
                  </b-form-select>
                  <p class="text-right col-form-label-sm mt-2">
                    choose up to 3 of your specializations
                  </p>
                  <ul v-if="tags.length > 0" class="list-inline d-inline-block mt-2">
                    <li v-for="tag in tags" :key="tag" class="list-inline-item">
                      <b-form-tag
                        @remove="removeTag(tag)"
                        :title="tag"
                        :disabled="disabled"
                        variant="primary"
                        >{{ tag }}</b-form-tag
                      >
                    </li>
                  </ul>
                </template>
              </b-form-tags>
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
      surname: '',
      male: 'male',
      day: '',
      mounth: '',
      year: '',
      email: '',
      phone: '',
      password: '',
      repeatPassword: '',
      language: null,

      city: '',

      accept: false,

      options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
      value: []
    };
  },
  computed: {
    availableOptions() {
      return this.options.filter(opt => this.value.indexOf(opt) === -1);
    }
  }
};
</script>

<style lang="scss">
.b-form-tags {
  background-color: transparent;
  box-shadow: none;
  padding: 0;
}
.b-form-tag {
  padding: 0.5em 0.7em;
  font-size: 0.7rem;
}
.dropdown.btn-group {
  display: block;
}
.btn-group.show .dropdown-toggle {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
}
.dropdown-toggle::after {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
}
.btn-white {
  z-index: 1100 !important;
  display: block;
  width: 100%;
  text-align: left;
  height: calc(1.5em + 2rem + 2px);
  padding: 0.75rem 1.25rem;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  color: #8898aa;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid transparent;
  border-radius: 1.25rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
}
.btn-white:focus {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
}
.dropdown-menu {
  margin-top: -20px;
}
#signUp-blogger {
  .social {
    font-size: 30px;
    margin-bottom: 0.75rem;
    display: block;
    &.social-youtube {
      color: #ff0000;
    }
    &.social-facebook {
      color: #3c5a9a;
    }
    &.social-instagram {
      color: #e4405f;
    }
  }
  .male-radio {
    padding: 1.6rem 15px;
    .custom-control {
      padding: 0;

      img {
        margin-right: 1.25rem;
      }
    }
    .custom-control-label::before,
    .custom-control-label::after {
      display: none;
    }
    .custom-control-label {
      color: #b4b4b4;
      font-size: 0.75rem;
    }
    .custom-control-label:hover {
      cursor: pointer;
      color: #fe5196;
    }
    .custom-control .custom-control-input:checked + .custom-control-label {
      color: #fe5196;
    }
  }
  .no-gutters {
    margin-right: -5px;
    margin-left: -5px;
    > .col,
    > [class*='col-'] {
      padding-right: 5px;
      padding-left: 5px;
    }
  }
}
</style>
