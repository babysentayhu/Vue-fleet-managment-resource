<template>
  <div>
    <DriverForm 
        :paymentType="paymentType" 
        :driverType="driverType"
        :driverStatus="driverStatus"
        :vehicle="vehicle" 
        v-on:add-driver-info="addDriver" 
    />
  </div>
</template>

<script>
import DataService from "../../services/DataService ";
import DriverForm from "./DriverForm.vue";
  export default {
    components: {
        DriverForm
    },
    data () {
      return {
        vehicleNameList: [],
        paymentType: ['Salary' , 'Per Miles'],
        driverType:['Contract', 'Permanent'],
        driverStatus:['Active', 'In Active'],
        vehicle:{
          vehicleName:'',
          vehicleModel:'',
          chassisNumber:'',
          vehicleColor:'',
          fuleConsumption:'',
          vehicleType:''
        },
        items: ['ISUZU-1','ISUZU-2'],
      }
    },
    methods:{
      retrieveVehicles() {
        DataService.getAll()
          .then((response) => {
            this.vehicleNameList = response.data;
            console.log("data");
            console.log(this.vehicleNameList);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    saveVehicle(){
        var data = {
          vehicleName:this.vehicle.vehicleName,
          vehicleModel:this.vehicle.vehicleModel,
          chassisNumber:this.vehicle.chassisNumber,
          vehicleColor:this.vehicle.vehicleColor,
          fuleConsumption:this.vehicle.fuleConsumption,
          vehicleType:this.vehicle.vehicleType
        }
          DataService.create(data)
            .then((response) => {
              this.tutorial.id = response.data.id;
              console.log(response.data);
            
            })
            .catch((e) => {
              console.log(e);
            });
             this.$router.push('manageVehicle');
        },
    addDriver(driverInfo){
        console.log(driverInfo)
    }
        
    },
    mounted() {
          this.retrieveVehicles();
        },
  }
</script>