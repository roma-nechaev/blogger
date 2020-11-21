<template>
  <b-modal id="signUp-business" size="xl" hide-footer>
    <b-row>
      <b-col lg="3"></b-col>
      <b-col lg="6">
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
                <b-form-input v-model="name" type="text" placeholder="Company name*"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input v-model="name" type="text" placeholder="Name*"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input v-model="name" type="text" placeholder="Name*"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input v-model="name" type="text" placeholder="Name*"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input v-model="name" type="text" placeholder="Name*"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
      <b-col lg="3"></b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {};
</script>

<style></style>
