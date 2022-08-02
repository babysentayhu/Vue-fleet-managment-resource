import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex"
Vue.use(VueRouter);

function guardMyroute(to, from, next)
{
 var isAuthenticated= router.app.$store.state.isAuthenticated;

// if(localStorage.getItem('LoggedUser'))
//   isAuthenticated = true;
//  else
  // isAuthenticated= false;
 if(isAuthenticated) 
 {
  console.log(`authenticated user status is ${isAuthenticated}`);
  next(); // allow to enter route
 } 
 else
 {
  next('/'); // go to '/login';
 }
}

const routes = [
  {
    path: "/",
    name: "login",
    component: () =>
      import("../components/Login/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/Dashboard/DashboardView.vue"),
  },
  {
    path: "/vehicle",
    name: "Vehicle",
    beforeEnter : guardMyroute,
    component: () =>
      import("../views/Vehicle/VehicleView.vue"),
  },
  {
    path: "/manageVehicle",
    name: "Manage Vehicle",
    beforeEnter : guardMyroute,
    component: () =>
      import("../views/Vehicle/ManageVehicle.vue"),
  },
  {
    path: "/vehicle/:id",
    name: "vehicle-details",
    beforeEnter : guardMyroute,
    component: () => import("../components/Vehicle/VehicleEdit.vue")
  },
  {
    path: "/driver",
    name: "Driver",
    beforeEnter : guardMyroute,
    component: () =>
      import("../views/Driver/DriverView.vue"),
  },
  {
    path: "/manageDriver",
    name: "Manage Driver",
    beforeEnter : guardMyroute,
    component: () =>
      import(/* webpackChunkName: "manageDriver" */ "../components/Driver/ManageDriver.vue"),
  },
  {
    path: "/booking",
    name: "Add Dispatch",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/Dispatch/AddBooking.vue"),
  },
  {
    path: "/manageBooking",
    name: "Manage Dispatch",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/Dispatch/ManageBooking.vue"),
  },
  {
    path: "/bookingDetail/:id",
    name: "booking-details",
    beforeEnter : guardMyroute,
    component: () => import("../components/Dispatch/BookingEdit.vue")
  },
  {
    path: "/fule",
    name: "Add Fuel",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/Fule/AddFule.vue"),
  },
 
  {
    path: "/manageFule",
    name: "Manage Fuel",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/Fule/ManageFule.vue"),
  },
  {
    path: "/customer",
    name: "Customer",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/Customer/AddCustomer.vue"),
  },
  {
    path: "/manageCustomer",
    name: "Manage Customer",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/Customer/ManageCustomer.vue"),
  },
  {
    path: "/incomeExpenses",
    name: "Manage Income",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/IncomeExpenses/AddIncomeExpenses.vue"),
  },
  {
    path: "/manageIncomeExpenses",
    name: "Manage Expense",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/IncomeExpenses/ManageIncomeExpenses.vue"),
  },
  {
    path: "/incomeExpenseReport",
    name: "Income & Expense Report",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/Report/IncomeExpenseReport.vue"),
  },
  {
    path: "/incomeReport",
    name: "incomeReport",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/Report/IncomeReport.vue"),
  },
  {
    path: "/expenseReport",
    name: "expenseReport",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/Report/ExpenseReport.vue"),
  },
  {
    path: "/user",
    name: "Add User",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/User/AddUser.vue"),
  },
  {
    path: "/manageUser",
    name: "Manage User",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/User/ManageUser.vue"),
  },
  {
    path: "/routeConfig",
    name: "Route Configuration",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/Config/RouteConfig.vue"),
  },
  {
    path: "/fuelConfig",
    name: "Fuel Configuration",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/Config/FuelConfig.vue"),
  },
  {
    path: "/vehicleTypeConfig",
    name: "Vehicle Type Configuration",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/Config/VehicleTypeConfig.vue"),
  },
  {
    path: "/changePassword",
    name: "Change Password",
    beforeEnter : guardMyroute,
    component: () =>
      import("../components/User/ChangePassword.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
