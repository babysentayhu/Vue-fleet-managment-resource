<template>
  <div>
    <!-- <h1>Add Vehicle</h1> -->
    <v-card
    max-width="2000"
  >
    <v-card-title>Add Customer Info</v-card-title>
<v-divider></v-divider>
    <v-card-text>

  <v-form ref="form" lazy-validation>
    <v-container>
      <v-row>

       
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Customer First Name"
            placeholder="Customer First Name"
            v-model="vehicle.vehicleModel"
            :rules="[(v) => !!v || 'Customer First Name is required']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Customer Last Name"
            placeholder="Customer Last Name"
            v-model="vehicle.chassisNumber"
            :rules="[(v) => !!v || 'Customer Last Name is required']"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Phone Number"
            placeholder="Phone Number"
            v-model="vehicle.vehicleColor"
            :rules="[(v) => !!v || 'Phone Number is required']"
            outlined
          ></v-text-field>
        </v-col>
         <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Email"
            placeholder="Email Price"
            v-model="vehicle.vehicleColor"
            
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12"
          sm="6"
          md="3">
             <v-textarea
          outlined
          name="input-7-4"
          label="Address"
          value=""
        ></v-textarea>
        </v-col>
        
      </v-row>
    <v-btn
      color="primary"
      class="mr-4"
      @click="saveVehicle"
    >
      Add Customer
    </v-btn>
    <v-btn >
      clear
    </v-btn>
    
    </v-container>
  </v-form>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

   
  </v-card>
  
  </div>
</template>

<script>
  export default {
    data () {
      return {
        vehicle:{
          vehicleName:'',
          vehicleModel:'',
          chassisNumber:'',
          vehicleColor:'',
          fuleConsumption:'',
          fuleType:'',
          vehicleType:''
        },
        fule: ['Gasoline', 'Diesel'],
        items: ['ISUZU', 'HILUX', 'MINI-BUS', '5L'],
      }
    }
  }
</script>