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
                <b-form-select v-model="language" :options="bloggingLanguage"></b-form-select>
              </b-form-group>
            </b-col>
            <b-col lg="6">
              <b-form-group>
                <b-form-input v-model="surname" type="text" placeholder="Surname*"></b-form-input>
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
                <b-form-input
                  v-model="city"
                  type="text"
                  placeholder="Country city**"
                ></b-form-input>
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
                  <p class="text-right mt-2">
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
      email: '',
      phone: '',
      password: '',
      repeatPassword: '',
      language: null,
      bloggingLanguage: [
        { value: null, text: 'Blogging language *' },
        { value: 'ru', text: 'Russian' },
        { value: 'en', text: 'English' }
      ],
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

<style>
.b-form-tags {
  background-color: transparent;
  box-shadow: none;
  padding: 0;
}
.b-form-tag {
  padding: 0.5em 0.7em;
  font-size: 0.7rem;
}
</style>
