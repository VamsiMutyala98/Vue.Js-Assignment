<template>
    <div>
        <div class="equal"><h1 class="x">Qproducts</h1></div>
        <div class="equal">
            <input class="fun" type="text" placeholder="Search Anything You Want..." name="box">
            <v-icon class="icon">mdi-search-web</v-icon>
            <button ><div v-if="userName.length==0" ><router-link class="login" to="/login">Login</router-link></div><div v-else class="msg"><v-icon>mdi-account-circle</v-icon>Hello, {{userName[userName.length-1]}}</div></button>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Header',
    computed:{
        userName() {
            return this.$store.state.userName
        }
    },
}
</script>
<style scoped>
h1::first-letter{
    color: green;
    font-size: 40px;
}
h1{
    font-family: sans-serif;
    padding-top: 5px;
}
.equal{
    float: left;
}
.fun{
    margin-top: 15px;
    margin-left: 400px;
    border: 3px solid black;
    border-radius: 5px;
    padding: 5px 100px 5px 10px;
}
.icon{
    margin-left: -30px;
}
.login{
    margin-left: 300px;
    border: 2px solid black;
    padding:5px 15px 5px 15px;
    border-radius: 5px;
    font-family: sans-serif;
    background-color: lightgray;
    text-decoration: none;
    color: black;
    font-weight: bold;
}
.msg{
    padding-left: 250px;
    font-family: sans-serif;
    font-weight: bold;
}
</style>
