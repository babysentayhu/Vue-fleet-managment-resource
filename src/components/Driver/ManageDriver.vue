
<template>
<div>
  <v-card>
    <v-card-title>
      Manage Driver
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="driver"
      :search="search"
    >
      <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="edit(item.id)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="delete(item.id)"
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
import DataService from "../../services/DataService ";
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'First Name',
            align: 'start',
            sortable: false,
            value: 'driverFirstName',
          },
          { text: 'Last Name', value: 'driverLastName' },
          { text: 'Mobile Number', value: 'mobileNumber' },
          { text: 'License Number', value: 'licenseNumber' },
          { text: 'License Exp Date', value: 'licenseExpDate' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        driver: [
           {
      "driverFirstName": "Abebe",
      "driverLastName": "Kebede",
      "mobileNumber": "0945632589",
      "licenseNumber": "15482567",
      "licenseExpDate": "23/5/2015",
      "id": 1
    },
    {
      "driverFirstName": "Zelalem",
      "driverLastName": "Aelmu",
      "mobileNumber": "0945632589",
      "licenseNumber": "565645656",
      "licenseExpDate": "23/5/2015",
      "id": 2
    },
    {
      "driverFirstName": "Bereket",
      "driverLastName": "Belay",
      "mobileNumber": "0945632589",
      "licenseNumber": "565645656",
      "licenseExpDate": "23/5/2015",
      "id": 3
    }
        ],
      }
    },
    methods:{
    retrieveVehicles() {
        DataService.getAllDriver()
          .then((response) => {
            this.driver = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    refreshList() {
      this.retrieveVehicles();
    },
    editItem(id) {
      this.$router.push({ name: "vehicle-details", params: { id: id } });
    },
    deleteItem(id) {
      DataService.delete(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    }
    },
    mounted() {
      // this.retrieveVehicles();
    },
  }
</script>