
<template>
<div>
  <v-card>
    <v-card-title>
      Manage Dispatch
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
      :items="bookings"
      :search="search"
    >
      <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        medium
        class="mr-2"
        @click="editItem(item.id)"
      >
        mdi-eye
      </v-icon>  
      <v-icon
        medium
        class="mr-2"
        @click="editItem(item.id)"
      >
        mdi-printer
      </v-icon>
      <v-icon
        medium
        class="mr-2"
        @click="editItem(item.id)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        medium
        @click="deleteItem(item.id)"
      >
        mdi-delete
      </v-icon>
      <v-menu offset-x>
          <template v-slot:activator="{ on }">
            <v-btn  
            elevation="16"
            x-small 
            color="primary" 
            dark 
            v-on="on"
            >Update Trip Status</v-btn>
          </template>
          <v-list>
            <v-list-item link>
              <v-list-item-title >Yet to start</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item link>
              <v-list-item-title>Running</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item link>
              <v-list-item-title>Delivered</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
          { text: 'የጭነት ማዘዣ ቁጥር', align: 'start', sortable: true, value: 'id' },
          { text: 'የሹፌር ስም', align: 'start', sortable: true, value: 'driverName' },
          { text: 'ሰሌዳ ቁጥር', value: 'plateNumber' },
          { text: 'መነሻ ቦታ', value: 'tripStartLocation' },
          { text: 'መነሻ ቀን', value: 'tripStartDate' },
          { text: 'መድረሻ ቦታ', value: 'tripEndLocation' },
          { text: 'መድረሻ ቀን', value: 'tripEndDate' },
          { text: 'የጉዞ ሁኔታ', value: 'tripStatus' },
          { text: 'የክፍያ ሁኔታ', value: 'status' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        bookings: [
          {
      
      driverName: "Gebeyw",
      vehicleName: "Sino",
      plateNumber: "45654",
      tripStartLocation: "Muger",
      tripStartDate: "23/5/2015",
      tripEndLocation: "Gorgora",
      tripEndDate: "2/6/2015",
      loadOrderNumber: "12",
      incomeDocument: "yes",
      distanceByLoad: "200",
      tripStatus: "Running",
      customer: "Kesadael",
      loadType: "Cement",
      loadSize: "345",
      tariff: "5000",
      tripCode: "34324",
      incomeCash: "345678",
      status: "Partially Paid",
      remainingPayment: "1000",
      fule: "565656",
      allowance: "450",
      loadingUnloading: "456",
      maintenance: "345",
      vehicleGurd: "2344",
      dealer: "676",
      laviyajo: "567",
      balanceKota: "3243",
      workflow: "5645",
      totalOperationalCost: "23434",
      prepaid: "454",
      month: "June",
      cpv: "5",
      document: "yes",
      remark: "done",
      id: 1
    },
    {
      driverName: "Web Egzer",
      tripStatus: "Yet To Start",
      status: "Full Paid",
      fule: "4588",
      allowance: "450",
      plateNumber: "45654",
      tripStartLocation: "Dangote",
      tripStartDate: "23/5/2015",
      tripEndLocation: "Addis Ababa",
      tripEndDate: "2/6/2015",
      customer: "Ayele",
      id: 2
    },
    {
      driverName: "Leuel",
      plateNumber: "45654",
      status: "Un Paid",
      fule: "600",
      allowance: "150",
      tripStatus: "Deliverd",
      tripStartLocation: "Gondor",
      tripStartDate: "23/5/2015",
      tripEndLocation: "Bahir Dar",
      tripEndDate: "2/6/2015",
      customer: "Adolam",
      id: 3
    }
        ],
      }
    },
    methods:{
    retrieveBooking() {
        DataService.getAllBooking()
          .then((response) => {
            this.bookings = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    refreshList() {
      this.retrieveBooking();
    },
    editItem(id) {
      this.$router.push({ name: "booking-details", params: { id: id } });
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
      // this.retrieveBooking();
    },
  }
</script>