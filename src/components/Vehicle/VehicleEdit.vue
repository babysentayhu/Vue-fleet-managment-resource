<template>
  <div>
    <!-- <h1>Add Vehicle</h1> -->
    <v-card
    max-width="2000"
  >
    <v-card-title>Edit Vehicle</v-card-title>

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
            label="Vehcile Name"
            placeholder="Vehcile Name"
            v-model="currentVehicle.vehicleName"
            :rules="[(v) => !!v || 'Vehcile Name is required']"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Vehicle Model"
            placeholder="Vehicle Model"
            v-model="currentVehicle.vehicleModel"
            :rules="[(v) => !!v || 'Vehcile Model is required']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Chassis Number"
            placeholder="Chassis Number"
            v-model="currentVehicle.chassisNumber"
            :rules="[(v) => !!v || 'Chassis Number is required']"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Vehicle Color"
            placeholder="Vehicle Color"
            v-model="currentVehicle.vehicleColor"
            :rules="[(v) => !!v || 'Vehcile Color is required']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Fule Consumption"
            placeholder="Fule Consumption in litter"
            v-model="currentVehicle.fuleConsumption"
            :rules="[(v) => !!v || 'Fule Consumption is required']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-select
          :items="fule"
          label="Fule Type"
          v-model="currentVehicle.fuleType"
          :rules="[(v) => !!v || 'Fule Type is required']"
          outlined
        ></v-select>
      </v-col>

        <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-select
          :items="items"
          label="Vehcile Type"
          v-model="currentVehicle.vehicleType"
          :rules="[(v) => !!v || 'Vehcile Type is required']"
          outlined
        ></v-select>
      </v-col>
      
      </v-row>
    <v-btn
      color="primary"
      class="mr-4"
      @click="updateVehicle"
    >
      Update
    </v-btn>
    
    </v-container>
  </v-form>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

   
  </v-card>
  
  </div>
</template>
<script>
// import DataService from "../../services/DataService ";
  export default {
    data () {
      return {
        currentVehicle:{
          vehicleName: "ISUZU",
          vehicleModel: "Model 1232",
          chassisNumber: "23455-123",
          vehicleColor: "White",
          fuleConsumption: "7 liter per KM",
          fuleType: "Diesel",
          vehicleType: "MINI-BUS",
        },
        fule: ['Gasoline', 'Diesel'],
        items: ['ISUZU', 'HILUX', 'MINI-BUS', '5L'],
      }
    },
    methods:{
    getVehicle(id) {
        DataService.get(id)
            .then((response) => {
            this.currentVehicle = response.data;
            console.log(response.data);
            })
            .catch((e) => {
            console.log(e);
            });
        },
    updateVehicle(){
        DataService.update(this.currentVehicle.id, this.currentVehicle)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
        this.$router.push({ path: '/manageVehicle'});
    }
    },
    mounted() {
        // this.getVehicle(this.$route.params.id);
  },
  }
</script>