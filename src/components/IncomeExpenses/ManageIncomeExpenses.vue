
<template>
<div>
  <v-card>
    <v-card-title>
      Manage Drivers Expences
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
    <template v-slot:[`item.actions`]="{  }">
      
    <v-dialog
            v-model="dialog1"
            persistent
            max-width="600px"
        >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          elevation="16"
          x-small
        >
          View Planed Expences
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
        <span class="text-h5">Planed Expences</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Customer Name"
                  v-model="detail2.customerName"
                  
                  
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Driver Name"
                  v-model="detail2.driverName"
                  
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Vehicle"
                  v-model="detail2.vehicleName"
                  
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Trip Start Location"
                  v-model="detail2.tripStartLocation"
                  
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Trip Start Date"
                  v-model="detail2.tripStartDate"
                  
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Trip End Location"
                  v-model="detail2.tripEndLocation"
                  
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Fule Cost"
                  v-model="detail2.fule"
                  
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Allowance Cost"
                  v-model="detail2.allowance"
                  
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Loading Unloading Cost"
                  v-model="detail2.loadingUnloading"
                  
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Maintenace Cost"
                  v-model="detail2.maintenance"
                  
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Vehicle Gurd Cost"
                  v-model="detail2.vehicleGurd"
                  
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Dealer Cost"
                  v-model="detail2.dealer"
                  
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Car Wash Cost"
                  v-model="detail2.laviyajo"
                  
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Balance and Kota Cost"
                  v-model="detail2.balanceKota"
                  
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Workflow Cost"
                  v-model="detail2.workflow"
                  
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Total Operational Cost"
                  v-model="detail2.totalOperationalCost"
                  disabled
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog1 = false"
          >
            Close
          </v-btn>
          <!-- <v-btn
            color="blue darken-1"
            text
            @click="dialog1 = false"
          >
            Update
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
            v-model="dialog2"
            persistent
            max-width="600px"
        >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="dark"
          dark
          v-bind="attrs"
          v-on="on"
          elevation="16"
          x-small
        >
          Request Expences
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
        <span class="text-h5">Request Expences</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Customer Name"
                  v-model="detail2.customerName"
                  disabled
                  
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Driver Name"
                  v-model="detail2.driverName"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Vehicle"
                  v-model="detail2.vehicleName"
                  disabled
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Trip Start Location"
                  v-model="detail2.tripStartLocation"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Trip Start Date"
                  v-model="detail2.tripStartDate"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Trip End Location"
                  v-model="detail2.tripEndLocation"
                  disabled
                ></v-text-field>
              </v-col>

             
            </v-row>
             <br/>
             <v-divider></v-divider>
             <br/>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Fule Cost"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Allowance Cost"
                  outlined
                  ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Loading Unloading Cost"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Maintenace Cost"
                  outlined
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Vehicle Gurd Cost"
                  outlined
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Dealer Cost"
                  outlined
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Car Wash Cost"
                  outlined
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Balance and Kota Cost"
                  outlined
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Other Workflow Cost"
                  outlined
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Total Cost"
                  value="6000"
                  disabled
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Planed Cost"
                  value="4566"
                  disabled
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Requested Expense"
                  value="2566"
                  disabled
                ></v-text-field>
              </v-col>
             
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog2 = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog2 = false"
          >
            Request
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
     
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
        dialog1: false,
        dialog2: false,
        headers: [
          { text: 'የሹፌር ስም', align: 'start', sortable: false, value: 'driverName' },
          { text: 'ሰሌዳ ቁጥር', value: 'plateNumber' },
          { text: 'መነሻ ቦታ', value: 'tripStartLocation' },
          { text: 'መነሻ ቀን', value: 'tripStartDate' },
          { text: 'መድረሻ ቦታ', value: 'tripEndLocation' },
          { text: 'መድረሻ ቀን', value: 'tripEndDate' },
          { text: 'የታቀደ ወጪ', value: 'totalOperationalCost' },
          { text: 'የተጠየቀ ወጪ', value: 'requestedExpense' },
          { text: 'ልዩነት', value: 'difference' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        bookings: [
          {
      
      "driverName": "Gebeyw",
      "vehicleName": "Sino",
      "plateNumber": "45654",
      "tripStartLocation": "Muger",
      "tripStartDate": "23/5/2015",
      "tripEndLocation": "Gorgora",
      "tripEndDate": "2/6/2015",
      "loadOrderNumber": "12",
      "incomeDocument": "yes",
      "distanceByLoad": "200",
      "tripStatus": "Running",
      "customer": "Kesadael",
      "loadType": "Cement",
      "loadSize": "345",
      "tariff": "5000",
      "tripCode": "34324",
      "incomeCash": "345678",
      "status": "Partially Paid",
      "remainingPayment": "1000",
      "fule": "565656",
      "allowance": "450",
      "loadingUnloading": "456",
      "maintenance": "345",
      "vehicleGurd": "2344",
      "dealer": "676",
      "laviyajo": "567",
      "balanceKota": "3243",
      "workflow": "5645",
      "totalOperationalCost": "5800",
      requestedExpense:9800,
      difference: '4000',
      "prepaid": "454",
      "month": "June",
      "cpv": "5",
      "document": "yes",
      "remark": "done",
      "id": 1
    },
    {
      "driverName": "Web Egzer",
      "tripStatus": "Yet To Start",
      "status": "Full Paid",
      "fule": "4588",
      "allowance": "450",
      "plateNumber": "45654",
      "tripStartLocation": "Dangote",
      "tripStartDate": "23/5/2015",
      "tripEndLocation": "Addis Ababa",
      "tripEndDate": "2/6/2015",
      "customer": "Ayele",
      "totalOperationalCost": "3000",
      requestedExpense: '4500',
      difference: '1500',
      "id": 2
    },
    {
      "driverName": "Leuel",
      "plateNumber": "45654",
      "status": "Un Paid",
      "fule": "600",
      "allowance": "150",
      "tripStatus": "Deliverd",
      "tripStartLocation": "Gondor",
      "tripStartDate": "23/5/2015",
      "tripEndLocation": "Bahir Dar",
      "tripEndDate": "2/6/2015",
      "customer": "Adolam",
      "totalOperationalCost": "5000",
      requestedExpense:'7700',
      difference: '2700',
      "id": 3
    }
        ],
        detail2:
            {
                customerName:"Abebe",
                vehicleName: "Sino",
                driverName: "Ayele",
                tripStartLocation: "Addis Ababa",
                tripStartDate: "23/4/14",
                tripEndLocation: "Gondor",
                tripEndDate: "2/5/14",
                fule: "565",
                allowance: "455",
                loadingUnloading: "400",
                maintenance: "700",
                vehicleGurd: "100",
                dealer: "800",
                laviyajo: "700",
                balanceKota: "2700",
                workflow: "300",
                totalOperationalCost: "9800",
                prepaid: "1700",
                palnedExpense: 9000,
                requestedExpense:9800,
                paymentStatus: "Not Fully Paid"
            }
        ,
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