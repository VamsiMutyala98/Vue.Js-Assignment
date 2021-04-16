<template>
    <div>
        <div v-if="products.length===0" class="registerData">
            <h1>Register Data is Empty</h1><br>
            <p>Note:Go to side-menu for register</p>
        </div>
        <div v-else >
            <template>
                <v-data-table
                    :headers="headers"
                    :items="products"
                    class="elevation-1"
                ></v-data-table>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    name: 'userDetails',
    data() {
        return {
             headers: [

          { text: 'Name', value: 'name' ,},
          { text: 'Email', value: 'email' },
          { text: 'PhoneNumber', value: 'phoneNumber' },
          { text: 'Date', value: 'Date' },
        ],
        }
    },
    computed:{
        products() {
            return this.$store.state.registerData
        }
    },
}
</script>
<style scoped>
.registerData{
    text-align: center;
    padding-left: 200px;
    padding-top: 10px;
    font-size: 40px;
}
</style>
