<template>
  <v-app id="inspire" >
    <div v-if="$route.name==='login'"></div>
    <div v-else>
      <v-navigation-drawer
        v-model="drawer"
        app
        dark
      >
      <Layout :items="items" :dash="dash" :password="password" /> 
      </v-navigation-drawer>
      <v-app-bar app  color="primary">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{$route.name}}</v-toolbar-title>
        <v-spacer></v-spacer>

       <v-btn icon @click="logout">
            <v-icon>  mdi-logout </v-icon>
        </v-btn>
        
      </v-app-bar>
    </div>
    <v-main>
      <v-container fluid>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Layout from "./layout/Layout.vue";
  export default {
    components:{
      Layout
    },
    data () {
      return {
        drawer:null,
        right: null,
        dash: [{ title: 'Dashboard', icon: 'mdi-monitor-dashboard', to: '/dashboard' }],
        password: [{ title: 'Change Password', icon: 'mdi-lock', to: '/changePassword' }],
        items: [
        {
          action: 'mdi-rv-truck',
          items: [{ title: 'Add Vehicle', to: '/vehicle' },{ title: 'Manage Vehicle', to: '/manageVehicle' }],
          title: 'Vehicle',
        },
        {
          action: 'mdi-account-hard-hat',
          items: [
            { title: 'Add Driver',to: '/driver' },
            { title: 'Manage Driver', to: '/manageDriver' },
          ],
          title: 'Driver',
        },
        {
          action: 'mdi-clipboard-text',
          items: [
            { title: 'Add Dispatch',to: '/booking' },
            { title: 'Manage Dispatch', to: '/manageBooking' },
          ],
          title: 'Dispatch',
        },
        {
          action: 'mdi-currency-usd',
          items: [
            { title: 'Income Status',to: '/incomeExpenses' },
            { title: 'Expenses Status', to: '/manageIncomeExpenses' },
          ],
          title: 'Transactions',
        },
        {
          action: 'mdi-gas-station',
          items: [
            { title: 'Add Fuel',to: '/fule' },
            { title: 'Fuel Management', to: '/manageFule' },
          ],
          title: 'Fuel',
        },
        {
          action: 'mdi-account-cash',
          items: [
            { title: 'Add Customer', to: '/customer' },
            { title: 'Cusotmer Management', to: '/manageCustomer' },
          ],
          title: 'Customer',
        },
        {
          action: 'mdi-file-document-multiple',
          items: [
            { title: 'Income & Expense Report', to: '/incomeExpenseReport' },
            // { title: 'Income Report', to: '/incomeReport' },
            // { title: 'Expense Report', to: '/expenseReport' },
          ],
          title: 'Report',
        },
        
        {
          action: 'mdi-account',
          items: [
            { title: 'Add User',to: '/user' },
            { title: 'User Managment', to: '/manageUser' },
          ],
          title: 'Users',
        },
        {
          action: 'mdi-cog-outline',
          items: [
            { title: 'Route Configuration',to: '/routeConfig' },
            { title: 'Fuel Configuration', to: '/fuelConfig' },
            { title: 'Vehicle Type Configuration', to: '/vehicleTypeConfig' },
          ],
          title: 'Configuration',
        },
      ],
      }
    },
    methods:{
      logout(){
        this.$store.dispatch('setAuthentication',false)
        this.$router.push('/');
      }
    }
  }
</script>
<style scoped>
.v-list .v-list-item--active {
    color: whitesmoke;
}
</style>