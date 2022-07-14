
<template>
<div>
  <v-card>
    <v-card-title>
      Manage Vehicle
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-divider></v-divider>
    <v-data-table
      :headers="headers"
      :items="vehicles"
      :search="search"
    >
      <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item.id)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item.id)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
      >
        Reset
      </v-btn>
    </template>
    </v-data-table>
  </v-card>
</div>
</template>
<script>
// import DataService from "../../services/DataService ";
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Vehcile Name',
            align: 'start',
            sortable: true,
            value: 'vehicleName',
          },
          { text: 'Vehicle Model', value: 'vehicleModel' },
          { text: 'Chassis Number', value: 'chassisNumber' },
          { text: 'Vehicle Color', value: 'vehicleColor' },
          { text: 'Fule Consumption (Lit)', value: 'fuleConsumption' },
          { text: 'Fule Type', value: 'fuleType' },
          { text: 'Vehcile Type', value: 'vehicleType' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        vehicles: [
        {
          vehicleName: "ISUZU",
          vehicleModel: "Model 1232",
          chassisNumber: "23455-123",
          vehicleColor: "White",
          fuleConsumption: "7 liter per KM",
          fuleType: "Diesel",
          vehicleType: "MINI-BUS",
          id: 1
        },
        {
          vehicleName: "FSR",
          vehicleModel: "Model-4567",
          chassisNumber: "234324-123-1232sd",
          vehicleColor: "Gray",
          fuleConsumption: "6 Lit per KM",
          fuleType: "Diesel",
          vehicleType: "ISUZU",
          id: 2
        },
        {
          vehicleName: "Sino",
          vehicleModel: "Model-232",
          chassisNumber: "2343-234",
          vehicleColor: "Red",
          fuleType: "Gasoline",
          fuleConsumption: "50 Liter",
          vehicleType: "ISUZU",
          id: 4
        }
        ],
      }
    },
    methods:{
    // retrieveVehicles() {
    //     DataService.getAll()
    //       .then((response) => {
    //         this.vehicles = response.data;
    //         console.log(response.data);
    //       })
    //       .catch((e) => {
    //         console.log(e);
    //       });
    // },
    // refreshList() {
    //   this.retrieveVehicles();
    // },
    // editItem(id) {
    //   this.$router.push({ name: "vehicle-details", params: { id: id } });
    // },
    // deleteItem(id) {
    //   DataService.delete(id)
    //     .then(() => {
    //       this.refreshList();
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // }
    },
    mounted() {
      // this.retrieveVehicles();
    },
  }
</script>