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
        <v-toolbar-title></v-toolbar-title>
        <v-spacer></v-spacer>

       <v-btn icon :to="{name: 'login'}">
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
          action: 'mdi-car-estate',
          items: [{ title: 'Add Vehicle', to: '/vehicle' },{ title: 'Manage Vehicle', to: '/manageVehicle' }],
          title: 'Vehicle',
        },
        {
          action: 'mdi-account-hard-hat',
          active: true,
          items: [
            { title: 'Add Driver',to: '/driver' },
            { title: 'Manage Driver', to: '/manageDriver' },
          ],
          title: 'Driver',
        },
        {
          action: 'mdi-clipboard-text',
          active: true,
          items: [
            { title: 'Add Dispatch',to: '/booking' },
            { title: 'Manage Dispatch', to: '/manageBooking' },
          ],
          title: 'Dispatch',
        },
        {
          action: 'mdi-currency-usd',
          active: true,
          items: [
            { title: 'Income Status',to: '/incomeExpenses' },
            { title: 'Expenses Status', to: '/manageIncomeExpenses' },
          ],
          title: 'Transactions',
        },
        {
          action: 'mdi-gas-station',
          active: true,
          items: [
            { title: 'Add Fuel',to: '/fule' },
            { title: 'Fuel Management', to: '/manageFule' },
          ],
          title: 'Fuel',
        },
         {
          action: 'mdi-account-cash',
          active: true,
          items: [
            { title: 'Add Customer', to: '/customer' },
            { title: 'Cusotmer Management', to: '/manageCustomer' },
          ],
          title: 'Customer',
        },
        
        {
          action: 'mdi-account',
          active: true,
          items: [
            { title: 'Add User',to: '/user' },
            { title: 'User Managment', to: '/manageUser' },
          ],
          title: 'Users',
        },
      ],
      }
    },
  }
</script>
<style scoped>
.v-list .v-list-item--active {
    color: whitesmoke;
}
</style>