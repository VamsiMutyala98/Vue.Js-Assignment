<template>
  <v-form ref="form" class="mx-auto" v-model="valid" >
    <v-text-field class="red--text" v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
    <v-text-field class="red--text" v-model="phoneNumber" :counter="10" :rules="phoneNumberRules" label="PhoneNumber" required></v-text-field>
    <v-text-field v-model="end" :rules="endRules" type="date" label="Date"></v-text-field><br>
    <router-link to="/userDetails"><button :disabled="!valid" @click="storing">Register</button></router-link>
    <button class="rf" @click="reset">Reset Form</button>
  </v-form>
</template>
<script>
  export default {
    
    data: () => ({
      valid: true,
      name: '',
      arr: [],
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      phoneNumber:'',
      phoneNumberRules:[
          v => !!v || 'Phone Number is required',
          v => (v && v.length == 10 ) || 'Phone Number must contain 10 Numbers'
      ],
      end:'',
      endRules:[
          v => !!v || 'Date is required'
      ],
    }),
    computed:{
        products() {
            return this.$store.state.registerData
        }
    },
    methods: {
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      storing() {
          var obj={
              name:this.name,
              email:this.email,
              phoneNumber:this.phoneNumber,
              Date:this.end,
          }
          this.products.push(obj);
      }
    },
  }
</script>

<style scoped>
button{
    color: rgb(44, 41, 41);
    background-color:lightgreen;
    padding: 10px 30px 10px 30px;
    border-radius: 5px;
    font-weight: bold;
    font-family: sans-serif;
    margin-right: 30px;
}
.rf{
    color: rgb(44, 41, 41);
    background-color:rgb(204, 49, 49);
    padding: 10px 20px 10px 20px;
    border-radius: 5px;
    /* font-weight: bold; */
    font-family: sans-serif;
}
button:disabled{
    background-color: gray;
}
</style>
