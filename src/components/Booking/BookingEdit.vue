<template>
  <div>
    <!-- <h1>Add Vehicle</h1> -->
    <v-card
    max-width="2000"
    >
    <v-card-title>Dipatch Details</v-card-title>
     <v-divider></v-divider>
    <v-card-text>
    <v-row>
        <v-col
          cols="12"
          sm="6"
         
        >
       
        <v-card>
            <v-card-title>ጠቅላላ የተሽከርካሪ የአሽከርካሪ አና የጉዞ መረጃ!</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
            <v-row>
                <v-col cols="4">

                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Driver Name</v-list-item-title>
                        <v-list-item-subtitle>{{ currentBooking.driverName }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                
                </v-col>
                <v-col cols="4">
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Vehicle</v-list-item-title>
                        <v-list-item-subtitle>{{ currentBooking.vehicleName }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-col>
                <v-col cols="4">
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Palte Number</v-list-item-title>
                        <v-list-item-subtitle>{{ currentBooking.plateNumber }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-col>
            </v-row>
            <v-divider></v-divider>    
            <v-row>
                <v-col cols="4">
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Trip Start Location</v-list-item-title>
                        <v-list-item-subtitle>{{ currentBooking.tripStartLocation }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-col>
               
                <v-col cols="4">
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Trip Start Date</v-list-item-title>
                        <v-list-item-subtitle>{{ currentBooking.tripStartDate }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-col>
                <v-col cols="4">
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Load Order Number</v-list-item-title>
                        <v-list-item-subtitle>{{ currentBooking.loadOrderNumber }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="4">
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Trip End Location</v-list-item-title>
                        <v-list-item-subtitle>{{ currentBooking.tripEndLocation }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-col>
                <v-col cols="4">
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Trip End Data</v-list-item-title>
                        <v-list-item-subtitle>{{ currentBooking.tripEndDate }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-col>
                                <v-col cols="4">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Distance By load</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.distanceByLoad }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="4">
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Trip Status</v-list-item-title>
                        <v-list-item-subtitle>{{ currentBooking.tripStatus }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-col>              
                <v-col cols="4">
                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Income Document</v-list-item-title>
                        <v-list-item-subtitle>{{ currentBooking.incomeDocument }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            </v-card-text>
        </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
       
            <v-card>
            <v-card-title>የስራው አይነት ፣ ስራው የተሰራለት እና የክፍያ ሁኔታ!</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
            <v-row>
                <v-col col="3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Customer</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.customer }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col col="3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Load Type</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.loadType }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>              
                <v-col col="3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Load Size</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.loadSize }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col col="3">
                     <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Load Size</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.tariff }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </v-row>
            <v-divider></v-divider>
             <v-row>
                <v-col col="3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Trip Code</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.tripCode }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col col="3">
                     <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Income Cash</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.incomeCash }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col col="3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Status</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.status }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col col="3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Remaining Payment</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.remainingPayment }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                
            </v-row>
            <v-divider></v-divider>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            </v-card>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col
        cols="7"
        >
            <v-card>
            <v-card-title>የኦፕሬሽን የወጪ ዝርዝር!</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
            <v-container>
            <v-row>
                <v-col col="3">
                     <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Fule</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.fule }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col col="3">
                     <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Allowance</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.allowance }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col col="3">
                     <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Loading / Unloading </v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.loadingUnloading }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col col="3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Maintenance </v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.maintenance }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </v-row>
            <v-divider></v-divider>
             <v-row>
                <v-col col="3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Vehicle Gurd </v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.vehicleGurd }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col col="3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Dealer</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.dealer }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col col="3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Laviyajo</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.laviyajo }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col col="3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Balance Kota</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.balanceKota }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </v-row>
            <v-divider></v-divider>
             <v-row>
                <v-col col="3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Workflow</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.workflow }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col col="3">
                     <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Total Operational Cost</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.totalOperationalCost }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col col="3"></v-col>
                <v-col col="3"></v-col>
            </v-row>
            <v-divider></v-divider>
            </v-container>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            </v-card>
        </v-col>
        <v-col
        cols="5"
        >
            <v-card>
            <v-card-title>ተጨማሪ መረጃ!</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
            <v-container>
            <v-row>
                <v-col col="3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Pre Paid Sent by Driver</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.prepaid }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col col="3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Month</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.month }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col col="3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>CPV</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.cpv }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col col="3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Document</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.document }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col col="3">
                    <v-list-item two-line>
                        <v-list-item-content>
                            <v-list-item-title>Remark</v-list-item-title>
                            <v-list-item-subtitle>{{ currentBooking.remark }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </v-row>
            
            </v-container>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            </v-card>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
  </v-card>
  
  </div>
</template>
<script>
import DataService from "../../services/DataService ";
  export default {
    data () {
      return {
        currentBooking:{
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
        items: ['ISUZU', 'HILUX', 'MINI-BUS', '5L'],
      }
    },
    methods:{
    getBooking(id) {
        DataService.getSigleBooking(id)
            .then((response) => {
            this.currentBooking = response.data;
            console.log(response.data);
            })
            .catch((e) => {
            console.log(e);
            });
        },
    // updateVehicle(){
    //     DataService.update(this.currentVehicle.id, this.currentVehicle)
    //     .then((response) => {
    //       console.log(response.data);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    //     this.$router.push({ path: '/manageVehicle'});
    // }
    },
    mounted() {
        // this.getBooking(this.$route.params.id);
  },
  }
</script>