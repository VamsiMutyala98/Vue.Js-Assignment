<template>
    <div>
        <div v-if="products.length===0" class="userData"><h1>No User Data in that Link</h1> </div>
        <div v-else >
            <h1 class="header">UserData</h1>
            <table>
                <thead>
                    <tr class="row1">
                        <th>Id</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Phone</th>
                        <th>website</th>
                        <th>Company Name</th>
                    </tr>
                </thead>
                <tbody v-for="(product,i) of products" :key="i">
                    <tr>
                        <td>{{product.id}}</td>
                        <td>{{product.name}}</td>
                        <td>{{product.username}}</td>
                        <td>{{product.email}}</td>
                        <td>{{product.address.city}}</td>
                        <td>{{product.phone}}</td>
                        <td>{{product.website}}</td>
                        <td>{{product.company.name}}</td>
                    </tr>
                </tbody>
            </table>
            <!-- <template>
                <v-data-table
                    :headers="headers"
                    :items="products"
                    class="elevation-1"
                ></v-data-table>
            </template> -->
        </div>
    </div>
</template>
<script>

export default {
    name: 'Home',
    data() {
        return {
            loading: true,
            todos: [],
            no: 10,
        };
    },
    computed:{
        products() {
            return this.$store.state.posts
        }
    },
    mounted() {
    this.$store.dispatch("getData");
  },
}
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
th{
    background-color: rgb(37, 37, 75);
    color: white;
    border: 1px solid #dddddd;
    text-align: left;
    padding: 16px;
}
td {
  border: 1px solid black;
  text-align: left;
  padding: 8px;
}

td:nth-child(even) {
  background-color: #dddddd;
}
.header{
    text-align: right;
    font-size: 40px;
    padding-bottom: 20px;
    padding-left: 200px;
    font-family: sans-serif;
}
.userData{
    text-align: center;
    padding-left: 200px;
}
</style>
