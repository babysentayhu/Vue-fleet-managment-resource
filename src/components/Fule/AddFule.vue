<template>
  <div>
    <!-- <h1>Add Vehicle</h1> -->
    <v-card
    max-width="2000"
  >
    <v-card-title>Add Fule</v-card-title>
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
        <v-select
          :items="items"
          label="Vehicle"
          :rules="[(v) => !!v || 'Vehicle is Required']"
          outlined
          
        ></v-select>
        </v-col>
        <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-select
          :items="fule"
          label="Fule Type"
          v-model="vehicle.fuleType"
          :rules="[(v) => !!v || 'Fule Type is required']"
          outlined
        ></v-select>
      </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Fule Quantity in Litter"
            placeholder="Fule Quantity in Litter"
            v-model="vehicle.vehicleModel"
            :rules="[(v) => !!v || 'Fule Quantity in Litter is required']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Odo Meter Reading"
            placeholder="Odo Meter Reading"
            v-model="vehicle.chassisNumber"
            :rules="[(v) => !!v || 'Odo Meter Reading is required']"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-select
            :items="['Addis to Mekelle ', 'Gondor to Addis']"
            label="Trip"
            v-model="vehicle.fuleType"
            :rules="[(v) => !!v || 'Trip is required']"
            outlined
          ></v-select>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Fule Price per Litter"
            placeholder="Fule Price per Litter"
            v-model="vehicle.vehicleColor"
            :rules="[(v) => !!v || 'Fule Price per Litter is required']"
            disabled
            outlined
          ></v-text-field>
        </v-col>
         <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Total Price"
            placeholder="Total Price"
            v-model="vehicle.vehicleColor"
            disabled
            outlined
          ></v-text-field>
        </v-col>
        
      </v-row>
    <v-btn
      color="primary"
      class="mr-4"
      @click="saveVehicle"
    >
      Add Fule
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