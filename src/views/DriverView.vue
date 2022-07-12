<template>
  <div>
      <v-form ref="form" lazy-validation>
    <v-card
    max-width="2000"
  >
    <v-card-title>Add Driver</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-container>
        <v-card-subtitle><h3>Driver Detail Info</h3></v-card-subtitle>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="First Name"
              placeholder="First Name"
              v-model="vehicle.vehicleName"
              :rules="[(v) => !!v || 'Firstname is required']"
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="Last Name"
              placeholder="Last Name"
              v-model="vehicle.vehicleModel"
              :rules="[(v) => !!v || 'Last Name is required']"
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="Mobile Number"
              placeholder="Mobile Number"
              v-model="vehicle.chassisNumber"
              :rules="[(v) => !!v || 'Mobile Number is required']"
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="City"
              placeholder="City"
              v-model="vehicle.chassisNumber"
              :rules="[(v) => !!v || 'City is required']"
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="Address"
              placeholder="Address"
              :rules="[(v) => !!v || 'Address is required']"
              outlined
            ></v-text-field>
          </v-col>
          <v-col
          cols="12"
          sm="6"
          md="3"
          >
          <v-select
            :items="driverType"
            label="Driver Type"
            :rules="[(v) => !!v || 'Driver Type is required']"
            outlined
          ></v-select>
          </v-col>
          <v-col
          cols="12"
          sm="6"
          md="3"
          >
          <v-select
            :items="driverStatus"
            label="Driver Status"
            :rules="[(v) => !!v || 'Driver Status is required']"
            outlined
          ></v-select>
          </v-col>

        </v-row>
        <v-divider></v-divider>
        <v-card-subtitle><h3>Payment Details</h3></v-card-subtitle>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="Driver Account No"
              placeholder="Driver Account Number"
              v-model="vehicle.vehicleName"
              :rules="[(v) => !!v || 'Driver Account No is required']"
              outlined
            ></v-text-field>
          </v-col>
          <v-col
          cols="12"
          sm="6"
          md="3"
          >
          <v-select
            :items="paymentType"
            label="Payment Type"
            :rules="[(v) => !!v || 'Payment Type is required']"
            outlined
          ></v-select>
          </v-col>

        </v-row>
        <v-divider></v-divider>
        <v-card-subtitle><h3>License & Other Details</h3></v-card-subtitle>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="License Number"
              placeholder="License Number"
              v-model="vehicle.vehicleColor"
              :rules="[(v) => !!v || 'License Number is required']"
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="Issued By"
              placeholder="Issued By"
              
              :rules="[(v) => !!v || 'Issued By is required']"
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="License Exp Date"
              placeholder="License Exp Date"
              v-model="vehicle.fuleConsumption"
              :rules="[(v) => !!v || 'License Exp Date is required']"
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="Contract Start Date"
              placeholder="Contract Start Date"
              v-model="vehicle.fuleConsumption"
              :rules="[(v) => !!v || 'Contract Start Date is required']"
              outlined
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="Contract End Date"
              placeholder="Contract End Date"
              v-model="vehicle.fuleConsumption"
              :rules="[(v) => !!v || 'Contract End Date is required']"
              outlined
            ></v-text-field>
          </v-col>

        </v-row>
        <v-divider></v-divider>
        
    <v-btn
      color="primary"
      class="mr-4"
      @click="saveVehicle"
    >
      Add Driver
    </v-btn>
    <v-btn >
      clear
    </v-btn>
      </v-container>
    
    
  
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

   
  </v-card>
  </v-form>
  
  </div>
</template>

<script>
import DataService from "../services/DataService ";
  export default {
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
        
    },
    mounted() {
          this.retrieveVehicles();
        },
  }
</script>