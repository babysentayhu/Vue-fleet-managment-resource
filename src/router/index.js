import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function guardMyroute(to, from, next)
{
// var isAuthenticated= false;

// if(localStorage.getItem('LoggedUser'))
//   isAuthenticated = true;
//  else
  // isAuthenticated= false;
 if(true) 
 {
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
    name: "dashboard",
    // beforeEnter : guardMyroute,
    component: () =>
      import("../components/Dashboard/DashboardView.vue"),
  },
  {
    path: "/vehicle",
    name: "vehicle",
    // beforeEnter : guardMyroute,
    component: () =>
      import("../views/Vehicle/VehicleView.vue"),
  },
  {
    path: "/manageVehicle",
    name: "manageVehicle",
    // beforeEnter : guardMyroute,
    component: () =>
      import("../views/Vehicle/ManageVehicle.vue"),
  },
  {
    path: "/vehicle/:id",
    name: "vehicle-details",
    // beforeEnter : guardMyroute,
    component: () => import("../components/Vehicle/VehicleEdit.vue")
  },
  {
    path: "/driver",
    name: "driver",
    // beforeEnter : guardMyroute,
    component: () =>
      import("../views/Driver/DriverView.vue"),
  },
  {
    path: "/manageDriver",
    name: "manageDriver",
    // beforeEnter : guardMyroute,
    component: () =>
      import(/* webpackChunkName: "manageDriver" */ "../components/Driver/ManageDriver.vue"),
  },
  {
    path: "/booking",
    name: "booking",
    // beforeEnter : guardMyroute,
    component: () =>
      import(/* webpackChunkName: "booking" */ "../components/Booking/AddBooking.vue"),
  },
  {
    path: "/manageBooking",
    name: "manageBooking",
    // beforeEnter : guardMyroute,
    component: () =>
      import(/* webpackChunkName: "manageBooking" */ "../components/Booking/ManageBooking.vue"),
  },
  {
    path: "/bookingDetail/:id",
    name: "booking-details",
    // beforeEnter : guardMyroute,
    component: () => import("../components/Booking/BookingEdit.vue")
  },
  {
    path: "/fule",
    name: "fule",
    // beforeEnter : guardMyroute,
    component: () =>
      import(/* webpackChunkName: "fule" */ "../components/Fule/AddFule.vue"),
  },
 
  {
    path: "/manageFule",
    name: "manageFule",
    // beforeEnter : guardMyroute,
    component: () =>
      import(/* webpackChunkName: "manageFule" */ "../components/Fule/ManageFule.vue"),
  },
  {
    path: "/customer",
    name: "customer",
    // beforeEnter : guardMyroute,
    component: () =>
      import(/* webpackChunkName: "customer" */ "../components/Customer/AddCustomer.vue"),
  },
  {
    path: "/manageCustomer",
    name: "manageCustomer",
    // beforeEnter : guardMyroute,
    component: () =>
      import(/* webpackChunkName: "manageCustomer" */ "../components/Customer/ManageCustomer.vue"),
  },
  {
    path: "/incomeExpenses",
    name: "incomeExpenses",
    // beforeEnter : guardMyroute,
    component: () =>
      import(/* webpackChunkName: "incomeExpenses" */ "../components/IncomeExpenses/AddIncomeExpenses.vue"),
  },
  {
    path: "/manageIncomeExpenses",
    name: "manageIncomeExpenses",
    // beforeEnter : guardMyroute,
    component: () =>
      import(/* webpackChunkName: "manageIncomeExpenses" */ "../components/IncomeExpenses/ManageIncomeExpenses.vue"),
  },
  {
    path: "/user",
    name: "user",
    // beforeEnter : guardMyroute,
    component: () =>
      import(/* webpackChunkName: "user" */ "../components/User/AddUser.vue"),
  },
  {
    path: "/manageUser",
    name: "manageUser",
    // beforeEnter : guardMyroute,
    component: () =>
      import(/* webpackChunkName: "manageUser" */ "../components/User/ManageUser.vue"),
  },
  {
    path: "/changePassword",
    name: "changePassword",
    // beforeEnter : guardMyroute,
    component: () =>
      import(/* webpackChunkName: "changePassword" */ "../components/User/ChangePassword.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
