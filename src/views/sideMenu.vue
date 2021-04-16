<template>
    <div class="div" style="width:100%">
        <div class="fun" id="closer" >
        <div style="padding-top:20px;font-size:20px"><a href="javascript:void(0)"  class="closebtn" @click="closeNav()">&times;</a></div>
        <li><router-link class="same" to="/">Home</router-link></li>
        <li><router-link class="same" to="/dashboard">Dashboard</router-link></li>
        <li><router-link class="same" to="/register">register</router-link></li>
        <li><router-link class="same" to="/userDetails">User-details</router-link></li>
        </div>
        <div class="fun"><v-btn @click="openNav"><v-icon>mdi-menu</v-icon></v-btn></div>
    </div>
</template>
<script>
export default {
    name: 'sideMenu',
    methods:{
        closeNav() {
            document.getElementById('closer').style.width="0px";
            document.getElementById('closer').style.display='none'
            console.log("success")
        },
        openNav() {
            document.getElementById('closer').style.width="200px";
            document.getElementById('closer').style.display='block';
        }
    }
}
</script>
<style scoped>
.fun{
    float: left;
}
#closer{
    width: 200px;
    background: black;
    display: none;
    height: 800px;
}
li{
    list-style: none;
    padding-top: 20px;
}
.same{
    color: white;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    padding-left: 20px;
}
.closebtn{
    padding-left: 170px;
    text-decoration: none;
    color: white;
}
</style>