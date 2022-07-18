
<template>
<div>
  <v-card>
    <v-card-title>
      
      
     
      <v-row>
        <v-col cols="6">
          <v-select
          :items="customerPaymentStatusList"
          v-model="search"
          label="Search by Payment Status"
        ></v-select>
        </v-col>
        <v-col cols="6">
           <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-title>
    
    <v-divider></v-divider>
    <v-data-table
      :headers="headers"
      :items="detail"
      :search="search"
    >
    
      <template v-slot:[`item.actions`]="{  }"> 
        <v-dialog
          v-model="dialog1"
          width="1000px"
        >
      
      <template v-slot:activator="{ on, attrs }">
      
      <v-icon
        medium
        class="mr-2"
        v-bind="attrs"
        v-on="on"
      >
        mdi-eye
      </v-icon>
      </template>
       
      <v-card>
        <v-card-title>
          <span class="text-h5">Customer Payment History Detail</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-row>
                <v-col cols="4">

                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Customer Name</v-list-item-title>
                        <v-list-item-subtitle>Abebe</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                
                </v-col>
                <v-col cols="4">
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Vehicle</v-list-item-title>
                        <v-list-item-subtitle>Sino</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-col>
                <v-col cols="4">
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Palte Number</v-list-item-title>
                        <v-list-item-subtitle>123123</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">

                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Trip Start Location</v-list-item-title>
                        <v-list-item-subtitle>Addis Ababa</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                
                </v-col>
                <v-col cols="4">
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Trip Start Date</v-list-item-title>
                        <v-list-item-subtitle>23/4/14</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-col>
                <v-col cols="4">
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Dropoff Location</v-list-item-title>
                        <v-list-item-subtitle>Gondor</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-col>
                <v-col cols="4">
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Dropoff Date</v-list-item-title>
                        <v-list-item-subtitle>2/5/14</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-col>
                <v-col cols="4">
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Total Payment </v-list-item-title>
                        <v-list-item-subtitle>45000</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-col>
                <v-col cols="4">
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Payment Status</v-list-item-title>
                        <v-list-item-subtitle>Partialy Paid</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-simple-table
              fixed-header
              height="300px"
            >
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Paid Amount
                    </th>
                    <th class="text-left">
                      Remaining Payment
                    </th>
                    <th class="text-left">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in history"
                    :key="item.id"
                  >
                    <td>{{ item.paidAmount }}</td>
                    <td>{{ item.remainingPayment }}</td>
                    <td>{{ item.dateUpdate }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          
        </v-card-actions>
      </v-card>
      </v-dialog>
      
        <v-dialog
            v-model="dialog"
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
          Truck Income Status
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Cutomer Payment Status</span>
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
                  label="Total Payment"
                  v-model="detail2.totalPayment"
                  disabled
                  
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Paid Amount"
                  v-model="detail2.paidAmount"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Remaining Payment"
                  v-model="detail2.remainingPayment"
                  disabled
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                 <v-text-field
                  label="Amount To Pay"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-select
                  :items="['Paid', 'Not Fully Paid', 'Not Paid']"
                  label="Payment Status"
                  v-model="detail2.paymentStatus"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-autocomplete
                  :items="['Yet to start', 'Running', 'Delivered']"
                  label="Trip Status"
                  v-model="detail2.tripStatus"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
        </v-dialog>
      </template>
   <IncomeHistory/>
    <template v-slot:no-data>
      <v-btn
        color="primary"
      >
        Reset
      </v-btn>
    </template>
    </v-data-table>
    <v-divider></v-divider>
    
    <v-card max-width="374">
        <v-card-title>Sum Report</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
        <v-list dense>
        <v-list-item-group color="primary">
            <v-row>
                <v-col col="6">ጠቅላላ ክፍያ ድምር: </v-col>
                <v-col col="6"> $ 135000</v-col>
            </v-row>
            <v-row>
                <v-col col="6">የተከፈለ መጠን ድምር: </v-col>
                <v-col col="6"> $ 80000</v-col>
            </v-row>
            <v-row>
                <v-col col="6"> ቀሪ ክፍያ ድምር:: </v-col>
                <v-col col="6"> $ 55000</v-col>
            </v-row>
            
           
        </v-list-item-group>
        </v-list>
        </v-card-text>
    </v-card>
  </v-card>
</div>
</template>
<script>
import IncomeHistory from "../IncomeExpenses/IncomeHistory.vue";
  export default {
  components: {
    IncomeHistory,
  },
    data () {
      return {
        search: '',
        customerPaymentStatusList:['Full Paid','Partially Paid','Un Paid'],
        customerPaymentStatusValue: '',
        dialog: false,
        dialog1: false,
        selectedItem: 1,
        history: [
          {
            id: 1,
            paidAmount: '1000',
            remainingPayment: '30000',
            dateUpdate: '2/7/14'
          },
          {
            id: 2,
            paidAmount: '5000',
            remainingPayment: '25000',
            dateUpdate: '12/7/14'
          },
          {
            id: 3,
            paidAmount: '1000',
            remainingPayment: '15000',
            dateUpdate: '23/8/14'
          },
          {
            id: 3,
            paidAmount: '1000',
            remainingPayment: '15000',
            dateUpdate: '23/8/14'
          },
          {
            id: 3,
            paidAmount: '1000',
            remainingPayment: '15000',
            dateUpdate: '23/8/14'
          },
          {
            id: 3,
            paidAmount: '1000',
            remainingPayment: '15000',
            dateUpdate: '23/8/14'
          },
          {
            id: 3,
            paidAmount: '1000',
            remainingPayment: '15000',
            dateUpdate: '23/8/14'
          },
          {
            id: 3,
            paidAmount: '1000',
            remainingPayment: '15000',
            dateUpdate: '23/8/14'
          },
          {
            id: 3,
            paidAmount: '1000',
            remainingPayment: '15000',
            dateUpdate: '23/8/14'
          },
          {
            id: 3,
            paidAmount: '1000',
            remainingPayment: '15000',
            dateUpdate: '23/8/14'
          },

        ],
        detail:[
            {
                customerName:"Abebe",
                vehicleName: "Sino",
                driverName: "Ayele",
                tripStartLocation: "Addis Ababa",
                tripStartDate: "23/4/14",
                tripEndLocation: "Gondor",
                tripEndDate: "2/5/14",
                tripStatus: "Running",
                totalPayment: "45000",
                paidAmount: "35000",
                remainingPayment: "10000",
                paymentStatus: "Partially Paid"
            },
            {
                customerName:"Solomon",
                vehicleName: "Sino",
                driverName: "Kebede",
                tripStartLocation: "Addis Ababa",
                tripStartDate: "23/4/14",
                tripEndLocation: "Gondor",
                tripEndDate: "2/5/14",
                tripStatus: "Running",
                totalPayment: "45000",
                 paidAmount: "45000",
                remainingPayment: "0",
                paymentStatus: "Full Paid"
            },
            {
                customerName:"Ayele",
                vehicleName: "Sino",
                driverName: "Zelalem",
                tripStartLocation: "Addis Ababa",
                tripStartDate: "23/4/14",
                tripEndLocation: "Gondor",
                tripEndDate: "2/5/14",
                tripStatus: "Running",
                totalPayment: "45000",
                paidAmount: "0",
                remainingPayment: "45000",
                paymentStatus: "Un Paid"
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
                tripStatus: "Running",
                totalPayment: "45000",
                paidAmount: "35000",
                remainingPayment: "10000",
                paymentStatus: "Not Fully Paid"
            }
        ,
        headers: [
          { text: 'የደንበኛ ስም', sortable: true, value: 'customerName' },
          { text: 'የተሽከርካሪ ስም', value: 'vehicleName' },
          { text: 'መነሻ ቦታ', value: 'tripStartLocation' },
          { text: 'መነሻ ቀን', value: 'tripStartDate' },
          { text: 'መድረሻ ቦታ', value: 'tripEndLocation' },
          { text: 'መድረሻ ቀን', value: 'tripEndDate' },
          { text: 'ጠቅላላ ክፍያ', value: 'totalPayment' },
          { text: 'የተከፈለ መጠን', value: 'paidAmount' },
          { text: 'ቀሪ ክፍያ', value: 'remainingPayment' },
          { text: 'የክፍያ ሁኔታ', value: 'paymentStatus' },
         
         
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        bookings: [],
      }
    },
   

  }
</script>