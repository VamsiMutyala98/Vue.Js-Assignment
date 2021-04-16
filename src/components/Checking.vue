<template>
    <div>
        <div v-if="products.length==0">No Tasks</div>
        <!-- <div v-else-if="products.length>0">{{products}}</div> -->
        <div v-else>
            <div v-for="(product,i) of products" :key="i">
                <h1>{{product.username}}</h1>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Checking',
    computed:{
        products() {
            return this.$store.state.posts
        }
    },
    mounted() {
    this.$store.dispatch("getData");
  }
}
</script>

<style scoped>

</style>