<template>
     <div class="div">
            <h1>Qproducts</h1>
            <label><b>UserName: </b></label><br>
            <input type="text" placeholder="UserName" id="userName"><br>
            <label><b>Password: </b></label><br>
            <input type="password" placeholder="password"><br>
            <router-link to="/Home" id="SignIn"><button @click="onLogin">Sign In</button></router-link>
        </div>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return {
            name:''
        }
    },
    computed:{
        userName() {
            return this.$store.state.userName
        }
    },
    methods: {
        onLogin() {
            var a=document.getElementById('userName').value;
            this.userName.push(a)
        }
    }
}
</script>

<style scoped>
            .div{
                border: 2px solid gray;
                margin: 150px 20px 20px 43%;
                width:30%;
                border-radius: 5px;
                text-align: left;
            }
            label{
                font-size: 20px;
                font-family: sans-serif;
                margin: 10px 0px 0px 20px;
            }
            input{
                width: 90%;
                border: 2px solid gray;
                padding: 10px;
                margin: 5px 0px 10px 20px;
                border-radius: 5px;
            }
            button{
                width:90%;
                border: 2px solid gray;
                padding: 10px;
                margin: 20px 0px 30px 20px;
                border-radius: 5px;
                font-size: 15px;
                font-weight: bold;
                background-color: rgb(94, 94, 138);
                color: white;
            }
            h1{
                margin:10px 0px 10px 15px;
            }
            h1::first-letter{
                color: green;
                font-size: 40px;
            }
            #SignIn{
                text-decoration: none;
                color: black;
            }
</style>
