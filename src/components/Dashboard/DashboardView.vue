<template>
<div>
     <v-breadcrumbs>
   </v-breadcrumbs>
    <v-card
    elevation="17"
    >
        <v-row>
            <v-col cols="3">
            <v-card
                max-width="344"
               
                outlined
                >
                <v-list-item three-line>
                    <v-list-item-avatar
                        color="primary"
                        size="80"
                        > <v-icon dark large>
                        mdi-car-estate
                        </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                    <div class="text-overline mb-4">
                        <v-list-item-title class="text-h6 mb-1">
                        Vehicles {{$store.state.isAuthenticated}}
                        </v-list-item-title>
                    </div>
                    <v-list-item-title class="text-h3 mb-1">
                        11
                    </v-list-item-title>
                    <!-- <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
                    </v-list-item-content>

                    
                </v-list-item>

                <v-card-actions>
                    <v-btn
                    outlined
                    rounded
                    text
                    :to="{path: '/manageVehicle'}"
                    >
                    View
                    </v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="3">
            <v-card
                max-width="344"
                outlined
                >
        <v-list-item three-line>
            <v-list-item-avatar
            color="primary"
            size="80"
            > <v-icon dark x-large>
            mdi-account-hard-hat
            </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
            <div class="text-overline mb-4">
                <v-list-item-title class="text-h6 mb-1">
                 Driver
            </v-list-item-title>
            </div>
            <v-list-item-title class="text-h3 mb-1">
                23
            </v-list-item-title>
            <!-- <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
            </v-list-item-content>

            
        </v-list-item>

        <v-card-actions>
            <v-btn
            outlined
            rounded
            text
            :to="{path: '/manageDriver'}"
            >
            View
            </v-btn>
        </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card
                max-width="344"
                outlined
                >
            <v-list-item three-line>
            <v-list-item-avatar
            color="primary"
            size="80"
            > <v-icon dark x-large>
            mdi-account-cash
            </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
            <div class="text-overline mb-4">
                <v-list-item-title class="text-h6 mb-1">
                Customer
            </v-list-item-title>
            </div>
            <v-list-item-title class="text-h3 mb-1">
                40
            </v-list-item-title>
            <!-- <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
            </v-list-item-content>

            
        </v-list-item>

        <v-card-actions>
            <v-btn
            outlined
            rounded
            text
            :to="{path: '/manageCustomer'}"
            >
            View
            </v-btn>
        </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="3">
            <v-card
            max-width="344"
            outlined
            >
            <v-list-item three-line>
            <v-list-item-avatar
            color="primary"
            size="80"
            > <v-icon dark x-large>
            mdi-cash
            </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
            <div class="text-overline mb-4">
                <v-list-item-title class="text-h6 mb-1">
                Monthly Income
            </v-list-item-title>
            </div>
            <v-list-item-title class="text-h4 mb-1">
               23560 ETB
            </v-list-item-title>
            <!-- <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
            </v-list-item-content>

           
        </v-list-item>

        <v-card-actions>
            <v-btn
            outlined
            rounded
            text
            :to="{path: '/incomeExpenseReport'}"
            >
            View
            </v-btn>
        </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
    <br/><br/><br/><br/>
    <MonthlyIncomeGraphVue />
        <v-row>
            <v-col cols="6">
                <v-card>
                    <v-card-title>Driver License Near to Expire</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-simple-table>
                        <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left">
                                Driver Name
                            </th>
                            <th class="text-left">
                                Mobile No
                            </th>
                            <th class="text-left">
                                License Exp Date
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="item in driverLicneseExpDate"
                            :key="item.name"
                            >
                            <td>{{ item.name }}</td>
                            <td>{{ item.mobileNo }}</td>
                            <td>{{ item.expDate }}</td>
                            </tr>
                        </tbody>
                        </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card>
                    <v-card-title>Vehicle Insurance Near to Expire</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-simple-table>
                        <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left">
                                Vehicle
                            </th>
                            <th class="text-left">
                                Plate NO
                            </th>
                            <th class="text-left">
                                Expire Date
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="item in vehicleInsuranceExpDate"
                            :key="item.name"
                            >
                            <td>{{ item.name }}</td>
                            <td>{{ item.plateNo }}</td>
                            <td>{{ item.expDate }}</td>
                            </tr>
                        </tbody>
                        </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import MonthlyIncomeGraphVue from './MonthlyIncomeGraph.vue'
  export default {
    components:{
        MonthlyIncomeGraphVue,
    },
    data () {
      return {
        driverLicneseExpDate: [
          {
            name: 'Abebe Kebede',
            mobileNo:'0911234567',
            expDate: '2/7/2022',
          },
          {
            name: 'Zelalem Mola',
            mobileNo:'0956234567',
            expDate: '12/10/2022',
          },
          {
            name: 'Solomon Terfe',
            mobileNo:'0916234567',
            expDate: '11/12/2022',
          },
        ],
        vehicleInsuranceExpDate: [
          {
            name: 'ISUZU',
            plateNo:'AA-A12345',
            expDate: '2/7/2022',
          },
          {
            name: 'SINO',
            plateNo:'OR-A45578',
            expDate: '12/10/2022',
          },
          {
            name: 'FSR',
            plateNo:'SP-A23679',
            expDate: '11/12/2022',
          },
        ],
      }
    },
  }
</script>