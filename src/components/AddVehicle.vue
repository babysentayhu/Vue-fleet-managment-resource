<template>
  <div>
    <!-- <h1>Add Vehicle</h1> -->
    <v-card
    max-width="2000"
  >
    <v-card-title>Add Vehicle</v-card-title>
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
            label="Vehcile Name"
            placeholder="Vehcile Name"
            v-model="vehicle.vehicleName"
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
            v-model="vehicle.vehicleModel"
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
            v-model="vehicle.chassisNumber"
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
            label="Model Year"
            placeholder="Model Year"
           
            :rules="[(v) => !!v || 'Model Year is required']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Make"
            placeholder="Make"
            :rules="[(v) => !!v || 'Make is required']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Palte No"
            placeholder="Plate No"
            :rules="[(v) => !!v || 'Plate No is required']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Company Code"
            placeholder="Company Code"
            :rules="[(v) => !!v || 'Company Code is required']"
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Engine No"
            placeholder="Engine No"
           
            :rules="[(v) => !!v || 'Engine No is required']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Fule Tank Capacity"
            placeholder="Fule Tank Capacity"
            :rules="[(v) => !!v || 'Fule Tank Capacity is required']"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Fule Usage Standard"
            placeholder="Fule Usage Standard"
            v-model="vehicle.fuleConsumption"
            :rules="[(v) => !!v || 'Fule Usage Standard is required']"
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
        <v-select
          :items="items"
          label="Vehcile Type"
          v-model="vehicle.vehicleType"
          :rules="[(v) => !!v || 'Vehcile Type is required']"
          outlined
        ></v-select>
      </v-col>
      <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-menu
              ref="insuranceExpMenu"
              v-model="insuranceExpMenu"
              :close-on-content-click="false"
              :return-value.sync="insuranceExpDate"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="insuranceExpDate"
                  label="Insurance Expire Date"
                
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="insuranceExpDate"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="insuranceExpMenu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.insuranceExpMenu.save(insuranceExpDate)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
      </v-col>

      <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Vehicle Registration Expire Date"
                  
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="menu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
      </v-col>
      </v-row>
    <v-btn
      color="primary"
      class="mr-4"
      @click="saveVehicle"
    >
      Add Vehicle
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
import DataService from "../services/DataService ";
  export default {
    data () {
      return {
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        insuranceExpDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        insuranceExpMenu: false,
        modal: false,
        menu2: false,
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
    },
    methods:{
      saveVehicle(){
        var data = {
          vehicleName:this.vehicle.vehicleName,
          vehicleModel:this.vehicle.vehicleModel,
          chassisNumber:this.vehicle.chassisNumber,
          vehicleColor:this.vehicle.vehicleColor,
          fuleType:this.vehicle.fuleType,
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
        }
    }
  }
</script>