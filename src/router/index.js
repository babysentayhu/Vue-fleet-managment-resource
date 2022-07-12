import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/VehicleView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../components/Dashboard/DashboardView.vue"),
  },
  {
    path: "/vehicle",
    name: "vehicle",
    component: () =>
      import(/* webpackChunkName: "vehicle" */ "../views/VehicleView.vue"),
  },
  {
    path: "/manageVehicle",
    name: "manageVehicle",
   
    component: () =>
      import(/* webpackChunkName: "manageVehicle" */ "../components/ManageVehicle.vue"),
  },
  {
    path: "/vehicle/:id",
    name: "vehicle-details",
    component: () => import("../components/VehicleEdit.vue")
  },
  {
    path: "/driver",
    name: "driver",
   
    component: () =>
      import(/* webpackChunkName: "driver" */ "../views/DriverView.vue"),
  },
  {
    path: "/manageDriver",
    name: "manageDriver",
    
    component: () =>
      import(/* webpackChunkName: "manageDriver" */ "../components/ManageDriver.vue"),
  },
  {
    path: "/booking",
    name: "booking",
   
    component: () =>
      import(/* webpackChunkName: "booking" */ "../components/Booking/AddBooking.vue"),
  },
  {
    path: "/manageBooking",
    name: "manageBooking",
    
    component: () =>
      import(/* webpackChunkName: "manageBooking" */ "../components/Booking/ManageBooking.vue"),
  },
  {
    path: "/bookingDetail/:id",
    name: "booking-details",
    component: () => import("../components/Booking/BookingEdit.vue")
  },
  {
    path: "/fule",
    name: "fule",
   
    component: () =>
      import(/* webpackChunkName: "fule" */ "../components/Fule/AddFule.vue"),
  },
 
  {
    path: "/manageFule",
    name: "manageFule",
    
    component: () =>
      import(/* webpackChunkName: "manageFule" */ "../components/Fule/ManageFule.vue"),
  },
  {
    path: "/customer",
    name: "customer",
   
    component: () =>
      import(/* webpackChunkName: "customer" */ "../components/Customer/AddCustomer.vue"),
  },
  {
    path: "/manageCustomer",
    name: "manageCustomer",
   
    component: () =>
      import(/* webpackChunkName: "manageCustomer" */ "../components/Customer/ManageCustomer.vue"),
  },
  {
    path: "/incomeExpenses",
    name: "incomeExpenses",
   
    component: () =>
      import(/* webpackChunkName: "incomeExpenses" */ "../components/IncomeExpenses/AddIncomeExpenses.vue"),
  },
  {
    path: "/manageIncomeExpenses",
    name: "manageIncomeExpenses",
    
    component: () =>
      import(/* webpackChunkName: "manageIncomeExpenses" */ "../components/IncomeExpenses/ManageIncomeExpenses.vue"),
  },
  {
    path: "/user",
    name: "user",
    
    component: () =>
      import(/* webpackChunkName: "user" */ "../components/User/AddUser.vue"),
  },
  {
    path: "/manageUser",
    name: "manageUser",
    
    component: () =>
      import(/* webpackChunkName: "manageUser" */ "../components/User/ManageUser.vue"),
  },
  {
    path: "/changePassword",
    name: "changePassword",
    
    component: () =>
      import(/* webpackChunkName: "changePassword" */ "../components/User/ChangePassword.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
