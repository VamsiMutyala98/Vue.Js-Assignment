<template>
    <div>
        <h1>Welcome to <span style="color:green;font-size:12vh">Q</span>products</h1>
        <img src="https://image.shutterstock.com/image-vector/initial-letter-qp-logotype-company-260nw-713438758.jpg" height="300px">
    </div>
</template>
<script>

export default {
  name: 'Home',
};
</script>

<style scoped>
    h1{
        padding-top: 50px;
        font-size: 10vh;
    }
    h1::first-letter{
        color: green;
        font-size: 12vh;
    }
    div{
        text-align: center;
        padding-left: 100px;
    }
</style>