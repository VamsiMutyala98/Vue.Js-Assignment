<template>
    <div>
      <div class="sun"><sideMenu /></div>
      <div class="sun">
      <div class="header">
        <Header />
      </div>
      <div class="route"><router-view /></div>
      </div>
      <div >
        <Footer />
      </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import sideMenu from './components/sideMenu.vue'
import Footer from './components/Footer.vue'

export default {

  name: 'App',
  components: {
    Header,
    sideMenu,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.header{
  position: sticky;
}
.body{
  margin-left: 20px;
}
.sun{
  float: left;
}
.route{
  margin-top: 100px;
}

</style>
