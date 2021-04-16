<template>
    <div class="div" style="width:100%">
        <div class="fun" id="closer" >
        <div style="padding-top:20px;font-size:20px"><a href="javascript:void(0)"  class="closebtn" @click="closeNav()">&times;</a></div>
        <li><router-link class="same" to="/Home">Home</router-link></li>
        <li><router-link class="same" to="/Dashboard">Dashboard</router-link></li>
        <li><router-link class="same" to="/Register">register</router-link></li>
        <li><router-link class="same" to="/userDetails">User-details</router-link></li>
        </div>
        <div class="fun icon"><v-icon @click="openNav" >mdi-menu</v-icon></div>
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
    display: block;
    height: 754px;
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
.icon{
    padding-left: 10px;
    padding-top: 18px;
}
</style>